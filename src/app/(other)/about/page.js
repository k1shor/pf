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
        <div
          className="relative bg-cover bg-center bg-no-repeat md:px-4"
        >
          <motion.div
            className="bg-rose-50/90 dark:bg-gray-900/90 p-10 md:p-16 rounded-2xl shadow-xl backdrop-blur-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                  Hi, I'm Kishor Munikar
                </h1>
                <p className="text-justify text-lg leading-8 text-gray-700 dark:text-gray-300">
                  I’m a full-stack developer from Nepal with a passion for clean code, intuitive design, and purposeful
                  solutions. With a strong foundation in the MERN stack and Laravel, I’ve developed scalable applications,
                  trained students, and led development teams on impactful projects.
                </p>
                <p className="text-justify text-lg leading-8 text-gray-700 dark:text-gray-300 mt-6">
                  My journey started with curiosity about how websites work, which grew into a deep interest in backend
                  logic, frontend interaction, and user experience. I love building tools that empower people—whether it’s
                  a student learning platform or a smart resume builder.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                  >
                    Contact Me
                  </Link>
                  <BackToHome />
                </div>
              </motion.div>

              <motion.div
                className="lg:w-1/2 w-full flex justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <div className="w-[320px] h-[320px] relative rounded-xl overflow-hidden shadow-lg">
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
