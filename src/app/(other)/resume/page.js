'use client';
import Head from 'next/head';
import PageWrapper from '@/components/PageWrapper';
import BackToHome from '@/components/BackToHome';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Resume() {
  const techStack = [
    'React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS',
    'Redux Toolkit', 'TypeScript', '.NET', 'SQL Server', 'MATLAB', 'Docker', 'Firebase'
  ];

  return (
    <>
      <Head>
        <title>Resume | Kishor Munikar</title>
        <meta name="description" content="Explore Kishor Munikar's qualifications, skills, and experience." />
      </Head>

      <PageWrapper>
        <div className="flex flex-col md:flex-row py-12 md:py-20 px-4 gap-8">

          {/* Sidebar */}
          <motion.aside
            className="md:w-64 flex-shrink-0 sticky top-20 bg-white/90 dark:bg-gray-900/90 p-6 rounded-2xl shadow-lg backdrop-blur-md border border-sky-100 dark:border-gray-700"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
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
            <h1 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-2">Kishor Munikar</h1>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-4">
              Full Stack Developer | IT Engineer | Technical Instructor
            </p>
            <div className="text-gray-700 dark:text-gray-300 text-lg flex flex-col gap-2 mb-4">
              <p>Email: kishor@example.com</p>
              <p>Phone: +977-9812345678</p>
            </div>
            <div className="flex justify-center gap-4 text-gray-700 dark:text-gray-300 mb-6 text-xl">
              <Link href="https://github.com/kishor" target="_blank">GitHub</Link>
              <Link href="https://linkedin.com/in/kishor" target="_blank">LinkedIn</Link>
              <Link href="https://facebook.com/kishor" target="_blank">Facebook</Link>
              <Link href="https://instagram.com/kishor" target="_blank">Instagram</Link>
            </div>

            {/* Tech Stack */}
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">Tech Stack</h2>
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

            {/* Download Button */}
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
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Experience Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Experience</h2>
              <div className="space-y-8 text-gray-700 dark:text-gray-300 text-lg border-l-4 border-sky-400 pl-6">
                <div>
                  <p className="font-bold text-xl">Full Stack Developer, Project Manager <span className="text-sm text-gray-500">– Index IT Hub (2022–Present)</span></p>
                  <p className="mt-2">Built and deployed client projects, led development teams, and maintained code quality across MERN stacks.</p>
                </div>
                <div>
                  <p className="font-bold text-xl">Trainer, Mentor & Center Head <span className="text-sm text-gray-500">– Evolve IT Hub, Nepal (2022–Present)</span></p>
                  <p className="mt-2">Leading development programs, mentoring students, managing center operations, and delivering real-world project guidance in web development using MERN stack.</p>
                </div>
                <div>
                  <p className="font-bold text-xl">Trainer <span className="text-sm text-gray-500">– Dursikshya Education Network (2020–2022)</span></p>
                  <p className="mt-2">Conducted practical training sessions in web technologies and programming fundamentals for students, enhancing their skills for real-world applications.</p>
                </div>
                <div>
                  <p className="font-bold text-xl">Admin Head <span className="text-sm text-gray-500">– Annapurna Secondary School (2015–2020)</span></p>
                  <p className="mt-2">Managed administrative operations, coordinated staff and student programs, and implemented organizational systems to improve overall school efficiency.</p>
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Education</h2>
              <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg border-l-4 border-sky-400 pl-6">
                <div>
                  <p className="font-bold text-xl">MSc in System and Control Engineering (2012) <span className="text-sm text-gray-500">– Telemark University College, Porsgrunn, Norway</span></p>
                  <p className="mt-2">Focused on designing control systems for digital equipment in industrial applications, involving sensors and automation techniques.</p>
                </div>
                <div>
                  <p className="font-bold text-xl">BE in Information Technology (2010) <span className="text-sm text-gray-500">– Cosmos College of Management and Technology, Pokhara University, Lalitpur, Nepal</span></p>
                  <p className="mt-2">Focused mainly on software development, including web/app development, database management, and software engineering principles.</p>
                </div>
                <div>
                  <p className="font-bold text-xl">+2 in Science (2005) <span className="text-sm text-gray-500">– Annapurna Secondary School</span></p>
                  <p className="mt-2">Completed higher secondary education with focus on physics and mathematics.</p>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Projects</h2>
              <div className="space-y-8 text-gray-700 dark:text-gray-300 text-lg border-l-4 border-sky-400 pl-6">
                <div>
                  <p className="font-bold text-xl">E-commerce Websites</p>
                  <p className="mt-2">Developed multiple e-commerce platforms with product catalogs, secure checkout, and responsive design.</p>
                </div>
                <div>
                  <p className="font-bold text-xl">Portfolio & Personal Websites</p>
                  <p className="mt-2">Built personal and portfolio websites showcasing projects, skills, and achievements with modern UI/UX.</p>
                </div>
                <div>
                  <p className="font-bold text-xl">Information Websites</p>
                  <p className="mt-2">Developed informational websites with accessibility, clean layouts, and user-friendly navigation.</p>
                </div>
                <div>
                  <p className="font-bold text-xl">Job Portal Platforms</p>
                  <p className="mt-2">Designed job portal platforms with candidate registration, employer postings, and search/filter functionality.</p>
                </div>
                <div>
                  <p className="font-bold text-xl">Smart Resume Builder</p>
                  <p className="mt-2">Dynamic resume builder with live preview and PDF export functionality.</p>
                </div>
                <div>
                  <p className="font-bold text-xl">E-learning Platform</p>
                  <p className="mt-2">Full-featured e-learning platform with dashboards for students, instructors, and admins, including assessments.</p>
                </div>
                <div>
                  <p className="font-bold text-xl">POS & Website Integration</p>
                  <p className="mt-2">Integrated POS system with online website for smooth inventory management, sales, and online presence.</p>
                </div>
                <div>
                  <p className="font-bold text-xl">Object Path Determination (Master’s Thesis)</p>
                  <p className="mt-2">Developed a system to determine object trajectories using images from two angles. Implemented in MATLAB.</p>
                </div>
                <div>
                  <p className="font-bold text-xl">Cargo Ship Testing System Proposal (Master's Project)</p>
                  <p className="mt-2">Proposed enhancements to cargo ship testing systems integrating software development principles for efficiency.</p>
                </div>
                <div>
                  <p className="font-bold text-xl">Smart Library Management System (Bachelors Project)</p>
                  <p className="mt-2">Created a Library Management System using .NET and SQL Server, enabling self-checkout, reservations, and overall management.</p>
                </div>
              </div>
            </section>

            {/* Achievements Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Achievements</h2>
              <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg border-l-4 border-sky-400 pl-6">
                <p>Founded <strong>Index IT Hub</strong>, a software development company delivering projects across web development, applications, and IT consulting, managing scalable and high-quality solutions.</p>
                <p>Trained and mentored over <strong>500 students</strong> in trending web technologies through <strong>Evolve IT Hub</strong> and <strong>Dursikshya Education Network</strong>, providing practical project-based learning.</p>
                <p>Led administrative digital transformation at <strong>Annapurna Secondary School</strong>, implementing digital workflows and improving operational efficiency.</p>
                <p>Delivered multiple impactful software projects including e-commerce platforms, smart resume builders, and e-learning portals, showcasing leadership in both execution and project management.</p>
                <p>Contributed to community learning via workshops, seminars, and hackathons, empowering students and junior developers to enhance their skills and industry readiness.</p>
              </div>
            </section>

            <div className="mt-10">
              <BackToHome />
            </div>
          </motion.main>

        </div>
      </PageWrapper>
    </>
  );
}
