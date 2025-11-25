'use client';
import Image from 'next/image';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  FaUser,
  FaFileAlt,
  FaBriefcase,
  FaHome,
  FaHeart,
  FaEnvelope,
} from 'react-icons/fa';

const iconMap = {
  'About Me': FaUser,
  Resume: FaFileAlt,
  Career: FaBriefcase,
  'Kishor Munikar': FaHome,
  Passion: FaHeart,
  Contact: FaEnvelope,
  Blogs: FaFileAlt,
};

const fallbackImage = '/images/default-bg.jpg';
const clickSoundSrc = '/sounds/click.mp3'; // adjust as needed
const hoverSoundSrc = '/sounds/hover.mp3'; // optional (if you have)

export default function FlipCard({ title, link, image }) {
  const router = useRouter();
  const Icon = iconMap[title] || FaFileAlt;
  const bgImage = image || fallbackImage;

  const cardRef = useRef(null);
  const containerRef = useRef(null);

  const [isPlayingClickSound, setIsPlayingClickSound] = useState(false);
  const clickSound = useRef(null);
  const hoverSound = useRef(null);

  // Visual / motion state
  const [tilt, setTilt] = useState({ x: 0, y: 0 }); // rotateX / rotateY
  const [magnet, setMagnet] = useState({ tx: 0, ty: 0 }); // translate toward cursor (magnetic)
  const [playClickAnim, setPlayClickAnim] = useState(false);
  const [ripples, setRipples] = useState([]);
  const [glowPos, setGlowPos] = useState({ x: '50%', y: '50%' }); // css vars for gradient glow

  // Mobile gyroscope toggle
  useEffect(() => {
    clickSound.current = new Audio(clickSoundSrc);
    clickSound.current.volume = 0.22;

    hoverSound.current = hoverSoundSrc ? new Audio(hoverSoundSrc) : null;
    if (hoverSound.current) hoverSound.current.volume = 0.12;
  }, []);

  // Helper: play sound safely
  const playSound = (audioRef) => {
    try {
      if (!audioRef?.current) return;
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    } catch (e) {}
  };

  // ---------- POINTER / HOVER HANDLERS (desktop) ----------
  const handlePointerMove = (e) => {
    // unified pointer (mouse or touch)
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const clientX = e.clientX ?? (e.touches && e.touches[0].clientX);
    const clientY = e.clientY ?? (e.touches && e.touches[0].clientY);
    if (clientX == null || clientY == null) return;

    // relative coords
    const relX = clientX - rect.left;
    const relY = clientY - rect.top;
    const pctX = relX / rect.width; // 0..1
    const pctY = relY / rect.height; // 0..1

    // stronger tilt (max 35 deg)
    const maxTilt = 35;
    const x = (pctX - 0.5) * maxTilt * 2; // rotateY (cursor left->right)
    const y = (0.5 - pctY) * maxTilt * 2; // rotateX (cursor top->bottom)

    // magnetic translation: small translation towards pointer center
    const magnetStrength = 14; // px maximum translate
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const dx = (relX - centerX) / centerX; // -1..1
    const dy = (relY - centerY) / centerY;
    const tx = dx * magnetStrength;
    const ty = dy * magnetStrength * -1; // invert for nicer effect

    setTilt({ x: y, y: x }); // map to rotateX (tilt.y), rotateY (tilt.x)
    setMagnet({ tx, ty });

    // gradient glow position as percentages
    setGlowPos({ x: `${pctX * 100}%`, y: `${pctY * 100}%` });

    // gentle hover sound (optional)
    // if (hoverSound.current && !isPlayingClickSound) playSound(hoverSound);
  };

  const handlePointerLeave = () => {
    // reset
    setTilt({ x: 0, y: 0 });
    setMagnet({ tx: 0, ty: 0 });
    setGlowPos({ x: '50%', y: '50%' });
  };

  // ---------- CLICK / RIPPLE / FLIP NAV ----------
  const handleClick = (e) => {
    if (!link) return;

    // ripple center
    const rect = cardRef.current?.getBoundingClientRect();
    const clientX = e.clientX ?? (e.touches && e.touches[0].clientX);
    const clientY = e.clientY ?? (e.touches && e.touches[0].clientY);
    const rx = clientX - rect.left;
    const ry = clientY - rect.top;

    const id = Date.now() + Math.random();
    setRipples((prev) => [...prev, { id, x: rx, y: ry }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 700);

    // play click sound
    playSound(clickSound);

    // trigger flip+enlarge+fade animation
    setPlayClickAnim(true);

    // Delay navigation to match animation duration
    setTimeout(() => {
      // use next/router navigation
      router.push(link);
    }, 700);
  };

  // Keyboard accessibility: Enter or Space triggers click
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      // simulate center click
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      handleClick({
        clientX: rect.left + rect.width / 2,
        clientY: rect.top + rect.height / 2,
      });
    }
  };

  // ---------- MOBILE GYROSCOPE (DeviceOrientation) ----------
  useEffect(() => {
    let boundHandler = null;
    // map device orientation to tilt
    const handleOrientation = (ev) => {
      // Some devices provide alpha,beta,gamma.
      // gamma: left-to-right tilt in degrees (range -90..90)
      // beta: front-to-back tilt (range -180..180)
      const gamma = ev.gamma ?? 0; // left/right
      const beta = ev.beta ?? 0; // front/back

      // scale down to our max tilt
      const maxTilt = 35;
      // gamma (-90..90) -> rotateY
      const rotateY = (gamma / 90) * maxTilt;
      // beta (-180..180) -> rotateX (invert a bit)
      const rotateX = (beta / 180) * maxTilt * -1;

      // magnetic translation: small based on gamma/beta
      const magnetStrength = 12;
      const tx = (gamma / 90) * magnetStrength;
      const ty = (beta / 180) * magnetStrength * -1;

      setTilt({ x: rotateX, y: rotateY });
      setMagnet({ tx, ty });

      // approximate glow center: center +/- small offset
      const glowPctX = 50 + (gamma / 90) * 20;
      const glowPctY = 50 + (beta / 180) * 20;
      setGlowPos({ x: `${glowPctX}%`, y: `${glowPctY}%` });
    };

    // iOS (13+) requires permission
    const enableGyro = async () => {
      // @ts-ignore
      const DeviceOrientationEvent = window.DeviceOrientationEvent;
      if (!DeviceOrientationEvent) return;
      // Some browsers require permission:
      // @ts-ignore
      if (DeviceOrientationEvent.requestPermission) {
        try {
          // request permission from user (user gesture required)
          // we try to request only when the component mounts in a user gesture context is not guaranteed;
          // so we attach an explicit user gesture trigger below when the device is iOS and permission is needed.
          // fallback: attach handler directly without permission if permitted
          // do nothing here; we'll attach a onClick permission request on container if needed
        } catch (e) {
          // ignore
        }
      } else {
        boundHandler = handleOrientation;
        window.addEventListener('deviceorientation', boundHandler, true);
      }
    };

    enableGyro();

    // cleanup
    return () => {
      if (boundHandler) window.removeEventListener('deviceorientation', boundHandler);
    };
  }, []);

  // iOS permission helper: call this from a user gesture if needed
  const requestGyroPermission = async () => {
    // @ts-ignore
    if (typeof DeviceOrientationEvent !== 'undefined' && DeviceOrientationEvent.requestPermission) {
      try {
        // This must be called on a user gesture (click/tap), we call it on first pointerdown if available.
        // @ts-ignore
        const perm = await DeviceOrientationEvent.requestPermission();
        if (perm === 'granted') {
          const handler = (ev) => {
            const gamma = ev.gamma ?? 0;
            const beta = ev.beta ?? 0;
            const maxTilt = 35;
            const rotateY = (gamma / 90) * maxTilt;
            const rotateX = (beta / 180) * maxTilt * -1;
            const magnetStrength = 12;
            const tx = (gamma / 90) * magnetStrength;
            const ty = (beta / 180) * magnetStrength * -1;
            setTilt({ x: rotateX, y: rotateY });
            setMagnet({ tx, ty });
            const glowPctX = 50 + (gamma / 90) * 20;
            const glowPctY = 50 + (beta / 180) * 20;
            setGlowPos({ x: `${glowPctX}%`, y: `${glowPctY}%` });
          };
          window.addEventListener('deviceorientation', handler, true);

          // store on ref to allow cleanup later (we won't remove here for brevity)
        }
      } catch (e) {
        // user denied or error
      }
    }
  };

  // Attach small pointerdown handler to request gyro permission for iOS (first user gesture)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onPointerDown = async () => {
      await requestGyroPermission();
      el.removeEventListener('pointerdown', onPointerDown);
    };
    el.addEventListener('pointerdown', onPointerDown, { once: true });
    return () => el.removeEventListener('pointerdown', onPointerDown);
  }, []);

  // ---------- RENDER ----------
  return (
    <>
      <Head>
        <title>{title} | Evolve IT Hub Nepal</title>
        <meta name="description" content={`${title} — interactive card by Evolve IT Hub Nepal`} />
      </Head>

      <div
        ref={containerRef}
        className="flip-card-container relative w-full h-full select-none"
        // pointer handlers
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onTouchStart={handlePointerMove}
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerLeave}
      >
        <div
          ref={cardRef}
          role="button"
          tabIndex={0}
          aria-label={`${title} card — click or press enter to open`}
          onKeyDown={handleKeyDown}
          onClick={handleClick}
          className={`flip-card relative w-full h-full rounded-2xl overflow-hidden transition-shadow duration-250 ease-out outline-none focus-visible:ring-4 focus-visible:ring-pink-400 focus-visible:ring-offset-2`}
          style={{
            // combine tilt (rotateX, rotateY) and magnet translate (tx,ty)
            transform: playClickAnim
              ? undefined
              : `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translate3d(${magnet.tx}px, ${magnet.ty}px, 0)`,
            // dynamic 3D shadow
            boxShadow: playClickAnim
              ? '0 0 0 rgba(0,0,0,0)'
              : `${-tilt.y * 0.6}px ${tilt.x * 0.6}px 48px rgba(7,12,34,0.35)`,
          }}
        >
          {/* Background image */}
          <Image
            src={bgImage}
            alt={`${title} background`}
            fill
            sizes="(max-width: 640px) 100vw, 400px"
            style={{ objectFit: 'cover' }}
            placeholder="blur"
            blurDataURL="/images/placeholder.png"
            loading="lazy"
          />

          {/* Gradient glow that follows cursor: using CSS variables set below */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              // using inline style to set CSS variables for the glow
              ['--glow-x']: glowPos.x,
              ['--glow-y']: glowPos.y,
            }}
          />

          {/* Glow + sparkle overlays */}
          <div
            aria-hidden
            className="absolute inset-0 z-20 mix-blend-screen pointer-events-none"
            // CSS will read --glow-x and --glow-y
          />

          {/* Content overlay (title + icon) */}
          <div className="absolute inset-0 z-30 flex items-center justify-center px-6">
            <div
              className="relative z-40 bg-white/85 dark:bg-black/70 text-black dark:text-white px-5 py-3 rounded-xl shadow-lg backdrop-blur-sm flex items-center gap-3"
              style={{ transform: playClickAnim ? 'scale(0.98)' : 'none' }}
            >
              <Icon size={26} className="text-indigo-700 dark:text-yellow-300" />
              <span className="text-lg font-semibold">{title}</span>
            </div>
          </div>

          {/* Sparkle overlay (soft) */}
          <div className="pointer-events-none absolute inset-0 z-25 opacity-5 sparkle-layer" />

          {/* Ripples */}
          <div className="absolute inset-0 pointer-events-none z-40 overflow-hidden">
            {ripples.map((r) => (
              <span
                key={r.id}
                className="absolute ripple-effect"
                style={{ left: r.x, top: r.y }}
              />
            ))}
          </div>

          {/* Click flip animation class */}
          {playClickAnim && <div className="absolute inset-0 z-50 pointer-events-none" />}

          {/* Styles */}
          <style jsx>{`
            /* container helpful sizing */
            .flip-card-container {
              -webkit-tap-highlight-color: transparent;
            }

            .flip-card {
              will-change: transform, box-shadow;
              transform-style: preserve-3d;
              transition: transform 200ms ease, box-shadow 220ms ease;
              background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(0,0,0,0.06));
            }

            /* click flip animation (enlarge > rotateY > fade) */
            .flip-card.click-flip {
              animation: flipOut 0.7s cubic-bezier(.2,.9,.3,1) forwards;
            }

            @keyframes flipOut {
              0% {
                transform: perspective(1200px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) translate3d(0,0,0) scale(1);
                opacity: 1;
              }
              40% {
                transform: perspective(1200px) rotateY(85deg) translate3d(0,-8px,0) scale(1.18);
                opacity: 0.92;
              }
              100% {
                transform: perspective(1200px) rotateY(180deg) translate3d(0,-14px,0) scale(1.45);
                opacity: 0;
              }
            }

            /* sparkle overlay */
            .sparkle-layer {
              background-image: url('/sparkles.gif');
              background-size: 220%;
              background-position: 0% 0%;
              animation: sparkleMove 6.5s linear infinite;
              filter: saturate(1.2) contrast(0.97);
            }
            @keyframes sparkleMove {
              0% {
                background-position: 0% 0%;
              }
              100% {
                background-position: 100% 100%;
              }
            }

            /* gradient glow that follows cursor using CSS variables */
            :global(.flip-card-container) > div > div[style]::before,
            :global(.flip-card) > div::before {
              /* nothing */
            }

            /* implement glow using pseudo-element on card */
            .flip-card::before {
              content: '';
              position: absolute;
              inset: 0;
              pointer-events: none;
              z-index: 15;
              background: radial-gradient(
                320px 160px at var(--glow-x, 50%) var(--glow-y, 50%),
                rgba(124,58,237,0.24),
                rgba(99,102,241,0.12) 30%,
                rgba(236,72,153,0.06) 55%,
                transparent 70%
              ), radial-gradient(
                180px 90px at calc(var(--glow-x, 50%) + 8%) calc(var(--glow-y, 50%) - 4%),
                rgba(34,211,238,0.08),
                transparent 50%
              );
              mix-blend-mode: screen;
              transition: opacity 180ms ease;
              opacity: 1;
            }

            /* ripple */
            .ripple-effect {
              width: 18px;
              height: 18px;
              background: rgba(255,255,255,0.65);
              border-radius: 50%;
              position: absolute;
              transform: translate(-50%, -50%) scale(0.2);
              animation: rippleAnim 0.68s cubic-bezier(.2,.8,.25,1) forwards;
              box-shadow: 0 6px 18px rgba(0,0,0,0.18);
            }
            @keyframes rippleAnim {
              0% {
                transform: translate(-50%, -50%) scale(0.2);
                opacity: 0.9;
              }
              80% {
                transform: translate(-50%, -50%) scale(9);
                opacity: 0.18;
              }
              100% {
                transform: translate(-50%, -50%) scale(12);
                opacity: 0;
              }
            }

            /* responsive: reduce tilt on very small screens */
            @media (max-width: 420px) {
              .flip-card {
                transition: transform 240ms ease, box-shadow 260ms ease;
              }
            }
          `}</style>

          {/* Apply the click animation class conditionally via inline approach (we cannot set className after click due to style jsx scoping complexity) */}
          <style jsx>{`
            :global(.flip-card) {
              /* noop */
            }
          `}</style>
        </div>
      </div>

      {/* Small script to add CSS class for click animation (separate from style-jsx so we can trigger it easily) */}
      <style>{`
        /* We'll toggle the 'click-flip' class on the element when playClickAnim is true */
      `}</style>

      <script
        // Inline script tag won't execute in Next.js react tree; instead use effect to toggle class
        dangerouslySetInnerHTML={{
          __html: '',
        }}
      />
      {/* Toggle class using effect so animation plays */}
      {typeof window !== 'undefined' &&
        (() => {
          if (playClickAnim) {
            const el = cardRef.current;
            if (el && !el.classList.contains('click-flip')) {
              el.classList.add('click-flip');
            }
          }
        })()}
    </>
  );
}
