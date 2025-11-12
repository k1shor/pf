'use client';
import Head from 'next/head';
import PageWrapper from '@/components/PageWrapper';
import BackToHome from '@/components/BackToHome';
import { motion } from 'framer-motion';
import { 
  FaBriefcase, 
  FaProjectDiagram 
} from 'react-icons/fa';

export default function ExperienceProjects() {
  return (
    <>
      <Head>
        <title>Experience & Projects | Kishor Munikar</title>
        <meta
          name="description"
          content="Explore Kishor Munikar's professional experience and major web development projects. Full Stack Developer, Trainer, and Mentor with expertise in MERN and Next.js."
        />
        <meta
          name="keywords"
          content="Kishor Munikar, Full Stack Developer, Trainer, Mentor, MERN Developer, Next.js, React.js, Web Developer Nepal, Software Engineer Portfolio"
        />
        <meta name="author" content="Kishor Munikar" />
        <meta property="og:title" content="Experience & Projects | Kishor Munikar" />
        <meta
          property="og:description"
          content="Discover the professional journey and key projects of Kishor Munikar — a Full Stack Developer and Technical Instructor from Nepal."
        />
        <meta property="og:image" content="/images/kishor.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Experience & Projects | Kishor Munikar" />
        <meta
          name="twitter:description"
          content="Explore Kishor Munikar’s achievements and projects. Full Stack Developer and Mentor specializing in modern web technologies."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <PageWrapper>
        <motion.div
          className="p-6 md:p-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl shadow-xl text-gray-800 dark:text-gray-200 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-16">
            {/* === Experience Section === */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-6">
                <FaBriefcase className="text-blue-600" /> Experience
              </h2>

              <div className="space-y-6 border-l-4 border-blue-500 pl-6 text-base md:text-lg">
                <div>
                  <p className="font-semibold text-xl">Full Stack Developer & Project Manager – Index IT Hub</p>
                  <p className="text-sm text-gray-500">2022 – Present</p>
                  <p className="mt-2">
                    Leading full-scale software projects, integrating front-end and back-end systems using MERN and .NET stacks. 
                    Overseeing deployment pipelines and ensuring seamless client delivery.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-xl">Trainer, Mentor & Center Head – Evolve IT Hub</p>
                  <p className="text-sm text-gray-500">2022 – Present</p>
                  <p className="mt-2">
                    Conducted professional training sessions in modern web technologies (React, Node.js, Tailwind CSS, MongoDB). 
                    Mentored over 300 students and managed academic programs focused on practical learning.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-xl">Trainer – Dursikshya Education Network</p>
                  <p className="text-sm text-gray-500">2020 – 2022</p>
                  <p className="mt-2">
                    Delivered in-depth training on full-stack development and programming fundamentals, 
                    preparing students for real-world software development challenges.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-xl">Admin Head – Annapurna Secondary School</p>
                  <p className="text-sm text-gray-500">2015 – 2020</p>
                  <p className="mt-2">
                    Digitized administrative workflows, managed IT operations, and implemented efficient 
                    communication systems to enhance school management processes.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* === Projects Section === */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-6">
                <FaProjectDiagram className="text-purple-600" /> Projects
              </h2>

              <div className="space-y-5 border-l-4 border-purple-500 pl-6 text-base md:text-lg">
                <div>
                  <p className="font-semibold text-xl">E-commerce Web Solutions</p>
                  <p className="mt-2">
                    Developed secure and scalable e-commerce websites with integrated payment systems, optimized for performance and UX.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-xl">Smart Resume Builder</p>
                  <p className="mt-2">
                    Created a dynamic resume builder using React and Tailwind CSS with live preview and export options.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-xl">E-learning Platform</p>
                  <p className="mt-2">
                    Designed an online learning system featuring dashboards, course tracking, and multi-role access for students and instructors.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-xl">POS + Website Integration</p>
                  <p className="mt-2">
                    Developed a seamless integration between POS and online store systems for real-time product and order synchronization.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-xl">Object Path Determination (Master’s Thesis)</p>
                  <p className="mt-2">
                    Implemented image-based object tracking using MATLAB, analyzing motion from dual-angle imagery to determine object paths.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Back Button */}
            <motion.div
              className="pt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <BackToHome />
            </motion.div>
          </div>
        </motion.div>
      </PageWrapper>
    </>
  );
}
