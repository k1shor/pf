'use client';
import Head from 'next/head';
import PageWrapper from '@/components/PageWrapper';
import BackToHome from '@/components/BackToHome';
import { motion } from 'framer-motion';
import { FaBriefcase, FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaProjectDiagram } from 'react-icons/fa';
import Link from 'next/link';

export default function ExperienceProjectsContact() {
  return (
    <>
      <Head>
        <title>Experience, Projects & Contact | Kishor Munikar</title>
        <meta name="description" content="Explore my experience, notable projects, and ways to get in touch." />
      </Head>

      <PageWrapper>
        <motion.div
          className="p-10 md:p-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl shadow-xl text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-16">
            {/* Experience */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="flex items-center gap-2 text-4xl font-bold mb-6">
                <FaBriefcase /> Experience
              </h2>
              <div className="space-y-4 border-l-4 border-blue-500 pl-6 text-lg">
                <div>
                  <p className="font-semibold text-xl">Full Stack Developer – Index IT Hub</p>
                  <p className="text-sm text-gray-500">2022–Present</p>
                  <p className="mt-2">Delivered scalable web solutions with MERN & Laravel, and led cross-functional dev teams.</p>
                </div>
                <div>
                  <p className="font-semibold text-xl">Trainer & Mentor – Evolve IT Hub</p>
                  <p className="text-sm text-gray-500">Mentoring aspiring developers in MERN, PHP, and UI/UX</p>
                </div>
              </div>
            </motion.section>

            {/* Projects */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="flex items-center gap-2 text-4xl font-bold mb-6">
                <FaProjectDiagram /> Projects
              </h2>
              <ul className="list-disc pl-8 space-y-3 border-l-4 border-purple-500 text-lg">
                <li><strong>Resume Builder:</strong> Build & export resumes dynamically using React + Tailwind.</li>
                <li><strong>E-learning Platform:</strong> Multi-role LMS with interactive modules and dashboards.</li>
                <li><strong>POS Integration:</strong> POS + Website sync for Joshimar Iron Marketing Services.</li>
              </ul>
            </motion.section>

            {/* Contact */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="flex items-center gap-2 text-4xl font-bold mb-6">
                <FaEnvelope /> Contact
              </h2>
              <div className="space-y-4 text-lg">
                <p className="flex items-center gap-2">
                  <FaEnvelope className="text-blue-600" /> kishor@example.com
                </p>
                <p className="flex items-center gap-2">
                  <FaPhone className="text-green-600" /> +977-9812345678
                </p>
                <p className="flex items-center gap-2">
                  <FaGithub className="text-gray-800 dark:text-white" />
                  <Link href="https://github.com/kishormunikar" target="_blank" className="underline">github.com/kishormunikar</Link>
                </p>
                <p className="flex items-center gap-2">
                  <FaLinkedin className="text-sky-700" />
                  <Link href="https://linkedin.com/in/kishormunikar" target="_blank" className="underline">linkedin.com/in/kishormunikar</Link>
                </p>
              </div>
            </motion.section>

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
