'use client';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { useState, useRef, useEffect } from 'react';
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
// const flipSoundSrc = '/sounds/flip.mp3';
const flipSoundSrc = '/sounds/';
const clickSoundSrc = '/sounds/click.mp3';

export default function FlipCard({ title, link, image }) {
  const Icon = iconMap[title] || FaFileAlt;
  const bgImage = image || fallbackImage;
  const [flipped, setFlipped] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const cardRef = useRef();
  const flipSound = useRef();
  const clickSound = useRef();

  // 🧠 Preload sounds and warm up cache
  useEffect(() => {
    flipSound.current = new Audio(flipSoundSrc);
    flipSound.current.preload = 'auto';
    flipSound.current.volume = 0.15;

    clickSound.current = new Audio(clickSoundSrc);
    clickSound.current.preload = 'auto';
    clickSound.current.volume = 0.25;

    // Warm up silently to avoid delay on first play
    [flipSound.current, clickSound.current].forEach((audio) => {
      audio.play().then(() => audio.pause()).catch(() => {});
    });
  }, []);

  const playSound = (audioRef) => {
    const audio = audioRef?.current;
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    }
  };

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 25;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -25;
    setTilt({ x, y });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  const handleFlip = () => {
    playSound(clickSound);
    setFlipped((prev) => !prev);
  };

  const handleHoverEnter = () => playSound(flipSound);
  const handleHoverLeave = () => {
    playSound(flipSound);
    resetTilt();
  };

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Head>
        <title>{`${title} | Evolve IT Hub Nepal`}</title>
        <meta
          name="description"
          content={`Explore ${title} — a client-friendly, user-friendly, and latest technology-based interactive experience by Evolve IT Hub Nepal.`}
        />
        <meta
          name="keywords"
          content="client friendly, user friendly, latest technology, Evolve IT Hub Nepal, interactive UI, modern web design"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <div
        className="flip-card w-full h-full cursor-pointer group relative sparkle-hover outline-none focus-visible:ring-4 focus-visible:ring-pink-400 focus-visible:ring-offset-2"
        tabIndex={0}
        role="button"
        aria-label={`${title} card, press enter or space to flip`}
        aria-pressed={flipped}
        ref={cardRef}
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}
        onClick={handleFlip}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleFlip();
          }
        }}
        onMouseMove={handleMouseMove}
        style={{
          transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        <div
          className={`flip-card-inner relative w-full h-full rounded-2xl transition-transform duration-700 transform-style-preserve-3d ${
            flipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* FRONT */}
          <div className="flip-card-front sparkle-layer rounded-2xl absolute inset-0 overflow-hidden text-white flex items-center justify-center font-bold text-2xl md:text-3xl tracking-wider font-sans select-none">
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
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100/30 via-blue-100/20 to-indigo-100/20 dark:from-gray-800/40 dark:via-gray-900/30 dark:to-black/20 mix-blend-multiply"></div>
            <div className="relative z-10 bg-white/80 dark:bg-black/60 text-black dark:text-white px-6 py-3 rounded-xl shadow">
              {title}
            </div>
          </div>

          {/* BACK */}
          <div
            className="flip-card-back sparkle-layer rounded-2xl absolute inset-0 flex items-center justify-center text-center px-6 overflow-hidden text-white"
            style={{ transform: 'rotateY(180deg)' }}
          >
            {link ? (
              <Link href={link}>
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
                <div className="relative z-10 flex flex-col items-center justify-center gap-4 text-xl font-medium transition bg-white/90 dark:bg-black/70 px-6 py-4 rounded-xl shadow-lg animate-bounce-in">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-200/20 via-pink-100/10 to-yellow-100/10 mix-blend-multiply" />
                  <Icon size={34} className="animate-bounce-icon text-blue-800 dark:text-yellow-300" />
                  <span className="text-2xl text-gray-800 dark:text-gray-100">{`Go to ${title}`}</span>
                </div>
              </Link>
            ) : (
              <button
                disabled
                className="relative z-10 flex flex-col items-center justify-center gap-4 text-xl font-medium bg-gray-300/80 dark:bg-gray-800/70 px-6 py-4 rounded-xl shadow-lg cursor-not-allowed opacity-80"
              >
                <Icon size={34} className="text-gray-600 dark:text-gray-300" />
                <span>{title}</span>
              </button>
            )}
          </div>
        </div>

        {/* Sparkle Overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden">
          <div className="absolute animate-sparkle w-full h-full bg-[url('/sparkles.gif')] bg-cover opacity-5" />
        </div>

        <style jsx>{`
          .flip-card {
            perspective: 1200px;
          }
          .flip-card-inner {
            transform-style: preserve-3d;
            position: relative;
            width: 100%;
            height: 100%;
          }
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
          .flip-card-front,
          .flip-card-back {
            backface-visibility: hidden;
          }
          @keyframes bounce-in {
            0% {
              transform: scale(0.8) translateY(30px);
              opacity: 0;
            }
            60% {
              transform: scale(1.05) translateY(-8px);
              opacity: 1;
            }
            80% {
              transform: scale(0.98) translateY(4px);
            }
            100% {
              transform: scale(1) translateY(0);
            }
          }
          @keyframes bounce-icon {
            0% {
              transform: scale(0.5) translateY(-20px);
              opacity: 0;
            }
            50% {
              transform: scale(1.2) translateY(5px);
              opacity: 1;
            }
            100% {
              transform: scale(1) translateY(0);
            }
          }
          .animate-bounce-in {
            animation: bounce-in 0.7s ease both;
          }
          .animate-bounce-icon {
            animation: bounce-icon 0.9s ease both;
          }
          .animate-sparkle {
            animation: shimmer 5s linear infinite;
          }
          @keyframes shimmer {
            0% {
              background-position: 0% 0%;
            }
            100% {
              background-position: 100% 100%;
            }
          }
        `}</style>
      </div>
    </>
  );
}
