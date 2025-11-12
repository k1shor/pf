import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import PageWrapper from '@/components/PageWrapper';
import BackToHome from '@/components/BackToHome';

export default function Main() {
  return (
    <>
      <Head>
        <title>Kishor Munikar | Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Kishor Munikar — a software developer from Nepal specializing in scalable web applications, user-centered design, and modern JavaScript frameworks."
        />
        <meta property="og:title" content="Kishor Munikar | Portfolio" />
        <meta
          property="og:description"
          content="Software developer crafting scalable, efficient, and human-centered digital experiences."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/portfolio-preview.jpg" />
        <meta property="og:url" content="https://your-portfolio-domain.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <PageWrapper>
        <main className="bg-gradient-to-br from-sky-50 to-sky-100 p-10 rounded-2xl shadow-lg max-w-7xl mx-auto mt-12">
          {/* === HERO SECTION === */}
          <section className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Profile Image */}
            <div className="relative w-full md:w-2/5 h-80 md:h-[400px] rounded-3xl overflow-hidden border-4 border-sky-50 shadow-xl hover:scale-[1.02] transition-transform duration-300">
              <Image
                src="/images/home-bg.jpg" // Replace with your actual image
                alt="Kishor Munikar profile picture"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Hero Text */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl font-extrabold text-gray-800 mb-3">
                Kishor Munikar
              </h1>
              <h2 className="text-xl text-sky-600 font-medium mb-6">
                Software Developer • IT Engineer • Technical Instructor
              </h2>

              <p className="text-gray-700 leading-relaxed text-lg max-w-2xl">
                As a dedicated software developer from Nepal, I specialize in
                building scalable, intuitive, and visually appealing web
                solutions. I combine creativity and logic to deliver seamless
                digital experiences that prioritize both performance and
                usability. My work bridges design and engineering to bring ideas
                to life with precision and elegance.
              </p>

              <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
                <Link
                  href="/contact"
                  className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
                >
                  Contact Me
                </Link>
                <BackToHome />
              </div>
            </div>
          </section>

          {/* === TECH STACK SECTION === */}
          <section className="mt-14 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Technical Stack
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {[
                'React.js',
                'Next.js',
                'Node.js',
                'Express.js',
                'MongoDB',
                'Tailwind CSS',
                'Redux Toolkit',
                'TypeScript',
                'Git & GitHub',
                'Docker',
                'Firebase',
                'Vercel / Netlify',
              ].map((tech) => (
                <div
                  key={tech}
                  className="bg-white/70 backdrop-blur-sm rounded-xl py-4 shadow-sm font-medium text-gray-800 border border-transparent hover:border-sky-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </section>
        </main>
      </PageWrapper>
    </>
  );
}
