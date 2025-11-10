'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';
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
const flipSound = '/sounds/flip.mp3';

export default function FlipCard({ title, link, bg, image }) {
  const Icon = iconMap[title] || FaFileAlt;
  const bgImage = image || fallbackImage;
  const [flipped, setFlipped] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef();

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 25;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -25;
    setTilt({ x, y });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  const handleFlip = () => {
    setFlipped(!flipped);
    const audio = new Audio(flipSound);
    audio.volume = 0.2;
    audio.play().catch(() => {});
  };

  return (
    <div
      className="flip-card w-full h-full cursor-pointer outline-none group relative sparkle-hover focus-visible:ring-4 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
      tabIndex={0}
      role="button"
      aria-label={`${title} card, press enter or space to flip`}
      aria-pressed={flipped}
      onClick={handleFlip}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleFlip();
        }
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      ref={cardRef}
      style={{
        transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: 'transform 0.15s ease',
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
          />
          <div className="absolute inset-0 bg-gradient-to-br from-pink-200/20 via-blue-100/10 to-indigo-100/10 mix-blend-multiply"></div>
          <div className="relative z-10 bg-white/80 dark:bg-black/60 text-black dark:text-white px-6 py-3 rounded-xl shadow">
            {title}
          </div>
        </div>

        {/* BACK */}
        <div
          className="flip-card-back sparkle-layer rounded-2xl absolute inset-0 flex items-center justify-center text-center px-6 overflow-hidden text-white"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <Link href={link}>
            <Image
              src={bgImage}
              alt={`${title} background`}
              fill
              sizes="(max-width: 640px) 100vw, 400px"
              style={{ objectFit: 'cover' }}
              placeholder="blur"
              blurDataURL="/images/placeholder.png"
            />
            <div className="relative z-10 flex flex-col items-center justify-center gap-4 text-xl font-medium transition bg-white/90 dark:bg-black/70 px-6 py-4 rounded-xl shadow-lg animate-bounce-in">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200/20 via-pink-100/10 to-yellow-100/10 mix-blend-multiply" />
              <Icon size={34} className="animate-bounce-icon text-blue-800 dark:text-yellow-300" />
              <span className="text-2xl text-gray-800 dark:text-gray-100">{`Go to ${title}`}</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Sparkle Layer */}
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
  );
}
