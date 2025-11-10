'use client';
import Head from 'next/head';
import PageWrapper from '@/components/PageWrapper';
import BackToHome from '@/components/BackToHome';
import { FaDownload, FaBriefcase, FaGraduationCap, FaProjectDiagram, FaTrophy } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume | Kishor Munikar</title>
        <meta name="description" content="Explore Kishor Munikar's qualifications, skills, and experience." />
      </Head>

      <PageWrapper>
        <motion.div
          className="bg-sky-50 dark:bg-gray-900 p-12 md:p-20 rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col gap-12">
            <motion.div
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">Resume</h1>
              <Link
                href="/docs/kishor-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow hover:bg-blue-700 transition"
              >
                <FaDownload /> Download
              </Link>
            </motion.div>

            {/* Experience Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="flex items-center gap-2 text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                <FaBriefcase /> Experience
              </h2>
              <div className="space-y-8 text-gray-700 dark:text-gray-300 text-lg border-l-4 border-blue-500 pl-6">
                <div>
                  <p className="font-bold text-xl">Full Stack Developer <span className="text-sm text-gray-500">– Index IT Hub (2022–Present)</span></p>
                  <p className="mt-2">Built and deployed client projects, led dev teams, and maintained code quality across MERN/Laravel stacks.</p>
                </div>
                <div>
                  <p className="font-bold text-xl">Trainer & Mentor <span className="text-sm text-gray-500">– Evolve IT Hub</span></p>
                  <p className="mt-2">Guided aspiring developers through real-world projects in MERN, PHP, and UI/UX tracks.</p>
                </div>
              </div>
            </motion.section>

            {/* Education Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="flex items-center gap-2 text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                <FaGraduationCap /> Education
              </h2>
              <div className="text-gray-700 dark:text-gray-300 text-lg border-l-4 border-indigo-500 pl-6">
                <p className="font-bold text-xl">Bachelor in Computer Science <span className="text-sm text-gray-500">– Tribhuvan University, 2019–2023</span></p>
              </div>
            </motion.section>

            {/* Projects Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="flex items-center gap-2 text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                <FaProjectDiagram /> Projects
              </h2>
              <ul className="list-disc pl-8 text-gray-700 dark:text-gray-300 space-y-3 text-lg border-l-4 border-purple-500">
                <li><strong>Smart Resume Builder:</strong> A dynamic resume builder with live preview and PDF export.</li>
                <li><strong>E-learning Platform:</strong> Developed platform with student, instructor & admin dashboards.</li>
                <li><strong>POS + Website Integration:</strong> For Joshimar Iron Marketing.</li>
              </ul>
            </motion.section>

            {/* Achievements Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="flex items-center gap-2 text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                <FaTrophy /> Achievements
              </h2>
              <ul className="list-disc pl-8 text-gray-700 dark:text-gray-300 space-y-3 text-lg border-l-4 border-yellow-500">
                <li>Founded and scaled Evolve IT Hub to train 200+ students.</li>
                <li>Delivered keynote sessions at local dev events and hackathons.</li>
                <li>Published multiple open-source utilities and tools on GitHub.</li>
              </ul>
            </motion.section>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <BackToHome />
            </motion.div>
          </div>
        </motion.div>
      </PageWrapper>
    </>
  );
}
