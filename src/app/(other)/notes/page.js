'use client';
import Head from 'next/head';
import PageWrapper from '@/components/PageWrapper';
import BackToHome from '@/components/BackToHome';
import { motion } from 'framer-motion';
import { FaBriefcase, FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaProjectDiagram, FaDownload, FaStickyNote } from 'react-icons/fa';
import Link from 'next/link';

export default function ExperienceProjectsContact() {
  return (
    <>
      <Head>
        <title>Experience, Projects, Notes & Contact | Kishor Munikar</title>

        {/* Primary Meta Tags */}
        <meta name="title" content="Experience, Projects, Notes & Contact | Kishor Munikar" />
        <meta
          name="description"
          content="Explore my development experience, portfolio projects, personal notes, and contact details. Full-stack developer skilled in MERN, Laravel, UI/UX, and POS integration."
        />
        <meta name="keywords" content="Kishor Munikar, Full Stack Developer, MERN Developer, Laravel Developer, React Developer, Portfolio, Projects, Notes, Contact" />
        <meta name="author" content="Kishor Munikar" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kishor Munikar | Experience, Projects, Notes & Contact" />
        <meta
          property="og:description"
          content="View my experience, portfolio projects, technical notes, and ways to get in touch. Full-Stack Developer from Nepal."
        />
        <meta property="og:image" content="/seo/preview.png" />
        <meta property="og:url" content="https://kishormunikar.com/experience-projects-contact" />
        <meta property="og:site_name" content="Kishor Munikar Portfolio" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kishor Munikar | Experience, Projects, Notes & Contact" />
        <meta
          name="twitter:description"
          content="Explore my dev experience, best projects, notes, and contact details."
        />
        <meta name="twitter:image" content="/seo/preview.png" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://kishormunikar.com/experience-projects-contact" />
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
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="flex items-center gap-2 text-4xl font-bold mb-6"><FaBriefcase /> Experience</h2>
              <div className="space-y-4 border-l-4 border-blue-500 pl-6 text-lg">
                <div>
                  <p className="font-semibold text-xl">Full Stack Developer – Index IT Hub</p>
                  <p className="text-sm text-gray-500">2022–Present</p>
                  <p className="mt-2">Delivered scalable full-stack solutions, POS integrations, and development leadership.</p>
                </div>

                <div>
                  <p className="font-semibold text-xl">Trainer & Mentor – Evolve IT Hub</p>
                  <p className="text-sm text-gray-500">Mentoring developers in MERN, PHP & UI/UX</p>
                </div>
              </div>
            </motion.section>

            {/* Projects */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="flex items-center gap-2 text-4xl font-bold mb-6"><FaProjectDiagram /> Projects</h2>
              <ul className="list-disc pl-8 space-y-3 border-l-4 border-purple-500 text-lg">
                <li><strong>Resume Builder:</strong> Dynamic resume generator with multiple templates.</li>
                <li><strong>E-Learning Platform:</strong> Multi-role LMS with real-time modules and analytics.</li>
                <li><strong>POS Integration:</strong> Live data synchronization + product/stock automation.</li>
              </ul>
            </motion.section>

            {/* Notes Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="flex items-center gap-2 text-4xl font-bold mb-6"><FaStickyNote /> Notes</h2>
              <div className="space-y-4 border-l-4 border-yellow-500 pl-6 text-lg">
                <p>• Personal notes, reminders and quick thoughts.</p>
                <p>• Architecture breakdowns, flowcharts, and rough planning.</p>
                <p>• Ideas for upcoming tools and features.</p>
                <p className="italic text-gray-500 dark:text-gray-400">(*You can expand this into a dynamic notes system later.)</p>
              </div>
            </motion.section>

            {/* Download Links */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <h2 className="flex items-center gap-2 text-4xl font-bold mb-6"><FaDownload /> Downloads</h2>

              <div className="space-y-3 border-l-4 border-green-500 pl-6 text-lg">
                <Link href="/downloads/Kishor-Munikar-Resume.pdf" download className="flex items-center gap-2 underline">
                  <FaDownload /> Download Resume (PDF)
                </Link>

                <Link href="/downloads/projects-documentation.zip" download className="flex items-center gap-2 underline">
                  <FaDownload /> Project Documentation (ZIP)
                </Link>

                <Link href="/downloads/portfolio-assets.zip" download className="flex items-center gap-2 underline">
                  <FaDownload /> Portfolio Assets (ZIP)
                </Link>
              </div>
            </motion.section>

            {/* Contact */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="flex items-center gap-2 text-4xl font-bold mb-6"><FaEnvelope /> Contact</h2>
              <div className="space-y-4 text-lg">
                <p className="flex items-center gap-2">
                  <FaEnvelope className="text-blue-600" /> kishor@example.com
                </p>
                <p className="flex items-center gap-2">
                  <FaPhone className="text-green-600" /> +977-9812345678
                </p>

                <p className="flex items-center gap-2">
                  <FaGithub className="text-gray-800 dark:text-white" />
                  <Link href="https://github.com/kishormunikar" target="_blank" className="underline">
                    github.com/kishormunikar
                  </Link>
                </p>

                <p className="flex items-center gap-2">
                  <FaLinkedin className="text-sky-700" />
                  <Link href="https://linkedin.com/in/kishormunikar" target="_blank" className="underline">
                    linkedin.com/in/kishormunikar
                  </Link>
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
