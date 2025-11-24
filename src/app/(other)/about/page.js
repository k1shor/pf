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
            className="w-full max-w-5xl bg-white/90 dark:bg-gray-900/90 p-10 md:p-16 rounded-3xl shadow-2xl backdrop-blur-md border border-sky-100 dark:border-gray-700"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Modern Centered Layout */}
            <div className="flex flex-col items-center text-center gap-10">

              {/* === IMAGE SECTION === */}
              <motion.div
                className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-3xl overflow-hidden shadow-2xl border-4 border-sky-200 dark:border-sky-700 hover:scale-[1.03] transition-transform duration-300"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <Image
                  src="/images/kishor.jpg"
                  alt="Kishor Munikar"
                  fill
                  loading="lazy"
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/images/fallback.jpg';
                  }}
                />
              </motion.div>

              {/* === TEXT SECTION === */}
              <motion.div
                className="max-w-3xl text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <h1 className="text-5xl font-extrabold mb-8 text-gray-900 dark:text-gray-100">
                  Hi, I'm <span className="text-sky-600">Kishor Munikar</span>
                </h1>

                <div className="space-y-8 text-lg leading-8 text-justify">
                  <p>
                    I am a full-stack developer with a strong focus on modern JavaScript technologies, particularly React, Next.js, and Tailwind CSS. I enjoy building clean, scalable, and visually appealing user interfaces while ensuring that every component is efficient, reusable, and easy to maintain. Whether I’m structuring a complex dashboard, refining UI behavior, or optimizing component logic, I approach each task with attention to detail and a commitment to delivering high-quality results.
                  </p>

                  <p>
                    Beyond the frontend, my work extends into backend development, where I set up APIs, manage authentication flows, connect databases, and resolve deployment challenges. I’ve worked with Express, server-side rendering, API handlers, and various hosting environments, including cPanel deployments. I love solving practical problems—whether it’s fixing logic issues, rewriting cleaner APIs, or integrating secure and reliable payment solutions like Stripe. My goal is always to create robust, production-ready features that work smoothly in real-world scenarios.
                  </p>

                  <p>
                    I also contribute to the broader digital presence of projects by working on SEO optimization, performance improvements, and content structuring. From auditing site visibility to improving meta structures and user flows, I aim to help businesses enhance both their technical foundation and their online reach. Additionally, I often deal with media-related tasks such as video editing tools, content formatting, and design assistance to support complete digital needs.
                  </p>

                  <p>
                    Overall, my approach to work is simple: be fast, be practical, and deliver solutions that truly make a difference. I value clarity, efficiency, and problem-solving, and I’m always focused on creating dependable systems that meet client expectations. Whether working on a client project, troubleshooting a deployment, or exploring new tools, I am committed to building smooth experiences and strong digital foundations.
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <Link
                    href="/contact"
                    className="px-6 py-3 bg-sky-600 text-white rounded-lg shadow hover:bg-sky-700 hover:shadow-lg transition"
                  >
                    Contact Me
                  </Link>
                  <BackToHome />
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </PageWrapper>
    </>
  );
}