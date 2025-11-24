'use client';
import Head from 'next/head';
import PageWrapper from '@/components/PageWrapper';
import BackToHome from '@/components/BackToHome';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Resume() {
  const techStack = [
    'React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS',
    'Redux Toolkit', 'TypeScript', '.NET', 'SQL Server', 'MATLAB', 'Docker', 'Firebase'
  ];

  const sections = [
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
  ];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Head>
        <title>Resume | Kishor Munikar</title>
        <meta
          name="description"
          content="Official resume of Kishor Munikar — Full Stack Developer, IT Engineer, and Technical Instructor based in Nepal. Explore education, projects, and professional achievements."
        />
        <meta
          name="keywords"
          content="Kishor Munikar, Full Stack Developer, Software Engineer, Portfolio, Resume, Web Developer, Next.js, React.js, Nepal Developer, Node.js, MERN, DOTNET"
        />
        <meta name="author" content="Kishor Munikar" />
        <meta property="og:title" content="Resume | Kishor Munikar" />
        <meta
          property="og:description"
          content="Explore Kishor Munikar’s technical expertise, experience, and achievements in web development, IT education, and engineering."
        />
        <meta property="og:image" content="/images/kishor.jpg" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <PageWrapper>
        <div className="flex flex-col md:flex-row py-12 md:py-20 px-2 md:px-8 gap-8">

          {/* Sidebar */}
          <motion.aside
            className="md:w-72 flex-shrink-0 sticky md:top-20 h-fit bg-white/90 dark:bg-gray-900/90 p-6 rounded-2xl shadow-lg backdrop-blur-md border border-sky-100 dark:border-gray-700"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Profile Image */}
            <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-sky-400 shadow-lg mx-auto mb-6">
              <Image
                src="/images/kishor.jpg"
                alt="Kishor Munikar"
                fill
                className="object-cover"
                priority
                onError={(e) => e.currentTarget.src = '/images/fallback.jpg'}
              />
            </div>

            {/* Name and Title */}
            <h1 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-2">
              Kishor Munikar
            </h1>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-4">
              Full Stack Developer | IT Engineer | Technical Instructor
            </p>

            {/* Contact Info */}
            <div className="text-gray-700 dark:text-gray-300 text-center text-lg mb-4">
              <p>📧 k1shor.mkar@gmail.com</p>
              <p>📞 +977-9860113289</p>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-5 text-gray-700 dark:text-gray-300 mb-8 text-2xl">
              <Link href="https://github.com/k1shor" target="_blank" className="hover:text-sky-600 transition">
                <FaGithub />
              </Link>
              <Link href="https://www.linkedin.com/in/kishor-munikar-94aa4937/" target="_blank" className="hover:text-sky-600 transition">
                <FaLinkedin />
              </Link>
              <Link href="https://www.facebook.com/dE5Tructi0n/" target="_blank" className="hover:text-sky-600 transition">
                <FaFacebook />
              </Link>
              <Link href="https://instagram.com/k1shor" target="_blank" className="hover:text-sky-600 transition">
                <FaInstagram />
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-2 mb-8 text-center">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleScroll(section.id)}
                  className="px-4 py-2 text-lg font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-sky-500 hover:text-white transition"
                >
                  {section.label}
                </button>
              ))}
            </div>

            {/* Tech Stack */}
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {techStack.map((tech) => (
                <motion.div
                  key={tech}
                  whileHover={{ scale: 1.1, backgroundColor: '#0ea5e9', color: '#fff' }}
                  className="px-3 py-1 bg-white/70 dark:bg-gray-800 rounded-lg shadow-sm font-medium text-gray-800 dark:text-gray-200 border border-transparent hover:border-sky-400 transition-all duration-300 cursor-pointer text-center"
                >
                  {tech}
                </motion.div>
              ))}
            </div>

            {/* Download Resume Button */}
            <Link
              href="/docs/kishor-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-6 px-6 py-3 bg-sky-600 text-white text-center text-lg rounded-lg shadow hover:bg-sky-700 hover:scale-105 transition-transform duration-200"
            >
              Download Resume
            </Link>
          </motion.aside>

          {/* Main Content */}
          <motion.main
            className="flex-1 space-y-16"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* === Experience Section === */}
            <section id="experience">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Experience</h2>
              <div className="space-y-8 text-gray-700 dark:text-gray-300 text-lg border-l-4 border-sky-400 pl-6">
                <div>
                  <p className="font-bold text-xl">Full Stack Developer & Project Manager – Index IT Hub (2022–Present)</p>
                  <p className="mt-2">Built and deployed full-scale web solutions, led development teams, and managed software lifecycle from design to deployment.</p>
                </div>
                <div>
                  <p className="font-bold text-xl">Trainer, Mentor & Center Head – Evolve IT Hub (2022–Present)</p>
                  <p className="mt-2">Trained and mentored students in modern web technologies, coordinated academic operations, and led projects for skill-based education.</p>
                </div>
                <div>
                  <p className="font-bold text-xl">Trainer – Dursikshya Education Network (2020–2022)</p>
                  <p className="mt-2">Delivered technical training sessions on web development, programming logic, and hands-on project-based learning modules.</p>
                </div>
                <div>
                  <p className="font-bold text-xl">Admin Head – Annapurna Secondary School (2015–2020)</p>
                  <p className="mt-2">Oversaw school administration, implemented digital systems, and optimized workflow for efficient data and staff management.</p>
                </div>
              </div>
            </section>

            {/* === Education Section === */}
            <section id="education">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Education</h2>
              <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg border-l-4 border-sky-400 pl-6">
                <div>
                  <p className="font-bold text-xl">MSc in System and Control Engineering – Telemark University College, Norway (2012)</p>
                  <p className="mt-2">Specialized in designing control systems for industrial digital equipment involving sensors, data processing, and automation.</p>
                </div>
                <div>
                  <p className="font-bold text-xl">BE in Information Technology – Cosmos College, Pokhara University (2010)</p>
                  <p className="mt-2">Focused on software development, web technologies, and database management with hands-on engineering projects.</p>
                </div>
                <div>
                  <p className="font-bold text-xl">+2 in Science – Annapurna Secondary School (2005)</p>
                  <p className="mt-2">Built foundational understanding in mathematics and physics to support engineering and computing studies.</p>
                </div>
              </div>
            </section>

            {/* === Projects Section === */}
            <section id="projects">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Projects</h2>
              <div className="space-y-8 text-gray-700 dark:text-gray-300 text-lg border-l-4 border-sky-400 pl-6">
                <div>
                  <p className="font-bold text-xl">E-commerce Websites</p>
                  <p className="mt-2">Developed secure, scalable e-commerce platforms with smooth checkout and responsive design.</p>
                </div>
                <div>
                  <p className="font-bold text-xl">Smart Resume Builder</p>
                  <p className="mt-2">Built an interactive resume builder with live preview and export features using modern web technologies.</p>
                </div>
                <div>
                  <p className="font-bold text-xl">E-learning Platform</p>
                  <p className="mt-2">Designed and deployed a complete e-learning platform with dashboards and course management.</p>
                </div>
                <div>
                  <p className="font-bold text-xl">Object Path Determination (Master’s Thesis)</p>
                  <p className="mt-2">Implemented MATLAB-based image analysis to determine object trajectories from multi-angle imagery.</p>
                </div>
                <div>
                  <p className="font-bold text-xl">Smart Library Management System</p>
                  <p className="mt-2">Developed .NET-based library automation system supporting self-checkout and book reservations.</p>
                </div>
              </div>
            </section>

            {/* === Achievements Section === */}
            <section id="achievements">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Achievements</h2>
              <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg border-l-4 border-sky-400 pl-6">
                <p>Founded <strong>Index IT Hub</strong>, providing full-scale software development and IT solutions.</p>
                <p>Trained over <strong>500 students</strong> in modern development technologies at Evolve IT Hub, Dursikshya and colleges.</p>
                <p>Digitally transformed administrative processes at <strong>Annapurna Secondary School</strong>.</p>
              </div>
            </section>

            <div className="pt-10">
              <BackToHome />
            </div>
          </motion.main>
        </div>
      </PageWrapper>
    </>
  );
}
