'use client';
import Head from 'next/head';
import PageWrapper from '@/components/PageWrapper';
import BackToHome from '@/components/BackToHome';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      <Head>
        <title>About Me | Kishor Munikar</title>
        <meta
          name="description"
          content="Learn more about Kishor Munikar, a passionate full-stack developer from Nepal."
        />
      </Head>

      <PageWrapper>
        <div className="flex justify-center py-12 md:py-20 px-4">
          <motion.div
            className="w-full max-w-6xl bg-white/90 dark:bg-gray-900/90 p-10 md:p-16 rounded-3xl shadow-2xl backdrop-blur-md border border-sky-100 dark:border-gray-700"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-col-reverse lg:flex-row items-center gap-20">
              
              {/* === TEXT SECTION === */}
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h1 className="text-5xl font-extrabold mb-6 text-gray-900 dark:text-gray-100">
                  Hi, I'm <span className="text-sky-600">Kishor Munikar</span>
                </h1>
                <p className="text-justify text-lg leading-8 text-gray-700 dark:text-gray-300">
                  I’m a full-stack developer from Nepal with a passion for crafting
                  elegant, scalable, and impactful digital products. My work blends
                  logic and creativity to deliver user-centered experiences that are
                  both technically sound and visually refined.
                </p>
                <p className="text-justify text-lg leading-8 text-gray-700 dark:text-gray-300 mt-6">
                  With a strong foundation in the <span className="font-semibold text-sky-600">MERN stack</span> and{' '}
                  <span className="font-semibold text-sky-600">Laravel</span>, I’ve
                  led teams, trained developers, and built applications that solve
                  real-world challenges. My journey began with curiosity how
                  technology connects people and continues with a drive to
                  innovate, teach, and empower others through code.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="px-6 py-3 bg-sky-600 text-white rounded-lg shadow hover:bg-sky-700 hover:shadow-lg transition"
                  >
                    Contact Me
                  </Link>
                  <BackToHome />
                </div>
              </motion.div>

              {/* === IMAGE SECTION === */}
              <motion.div
                className="lg:w-1/2 w-full flex justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <div className="relative w-[360px] h-[360px] md:w-[400px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-sky-200 dark:border-sky-700 hover:scale-[1.03] transition-transform duration-300">
                  <Image
                    src="/images/kishor.jpg"
                    alt="Kishor Munikar"
                    fill
                    priority={false}
                    loading="lazy"
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '/images/fallback.jpg';
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </PageWrapper>
    </>
  );
}
