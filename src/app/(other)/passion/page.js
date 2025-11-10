'use client';

import Head from 'next/head';
import PageWrapper from '@/components/PageWrapper';
import BackToHome from '@/components/BackToHome';
import { FaCameraRetro, FaPaintBrush, FaCode, FaBicycle, FaBook } from 'react-icons/fa';
import Image from 'next/image';

const hobbies = [
  { icon: FaCameraRetro, label: 'Photography' },
  { icon: FaPaintBrush, label: 'Digital Art' },
  { icon: FaCode, label: 'Creative Coding' },
  { icon: FaBicycle, label: 'Cycling' },
  { icon: FaBook, label: 'Reading Sci-Fi' },
];

const gallery = [
  { src: '/gallery/photo1.jpg', title: 'Mountain Ride' },
  { src: '/gallery/photo2.jpg', title: 'City Lights' },
  { src: '/gallery/photo3.jpg', title: 'Coding Session' },
  { src: '/gallery/photo4.jpg', title: 'Brush & Canvas' },
  { src: '/gallery/photo5.jpg', title: 'Book & Brew' },
];

export default function Passion() {
  return (
    <>
      <Head>
        <title>Passion | Kishor Munikar</title>
        <meta name="description" content="Explore Kishor Munikar's interests and inspirations." />
      </Head>
      <PageWrapper>
        <div className="bg-indigo-50 dark:bg-gray-900 text-black dark:text-white p-6 rounded-xl space-y-8">
          {/* Passion Section */}
          <section>
            <h1 className="text-3xl font-bold mb-4">Passion</h1>
            <p>
              I’m passionate about teaching, open-source contribution, and ethical AI. Empowering people with digital skills is what keeps me going.
            </p>
            <p className="mt-4">
              I also love visual storytelling, animation in UI/UX, and blending creativity with logic.
            </p>
          </section>

          {/* Hobbies Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Hobbies</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {hobbies.map(({ icon: Icon, label }, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow hover:scale-105 transition-transform"
                >
                  <Icon size={32} className="text-indigo-600 dark:text-yellow-300 mb-2" />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Gallery Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {gallery.map(({ src, title }, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden shadow-lg group"
                >
                  <div className="relative w-full h-48 sm:h-56 md:h-64">
                    <Image
                      src={src}
                      alt={title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 text-center text-sm font-medium">
                    {title}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <BackToHome />
        </div>
      </PageWrapper>
    </>
  );
}
