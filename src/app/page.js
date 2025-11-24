'use client';

import Head from "next/head";
import FlipCard from "@/components/FlipCard";
import Footer from "@/components/Footer";

const cards = [
  { title: "About Me", link: "/about", bg: "bg-rose-100", image: "/images/about-bg.jpg" },
  { title: "Resume", link: "/resume", bg: "bg-sky-100", image: "/images/resume-bg.jpg" },
  { title: "Experience", link: "/experience", bg: "bg-yellow-100", image: "/images/experience-bg.jpg" },
  { title: "Kishor Munikar", link: "/home", bg: "bg-green-100", image: "/images/home-bg.jpg" },
  { title: "Blogs", link: "/blogs", bg: "bg-indigo-100", image: "/images/passion-bg.jpg" },
  { title: "Contact", link: "/contact", bg: "bg-pink-100", image: "/images/contact-bg.jpg" },
  { title: "Projects", link: "/projects", bg: "bg-purple-100", image: "/images/projects-bg.jpg" },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Kishor Munikar | Portfolio & Software Developer</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Kishor Munikar — Software Developer specializing in full-stack development, UI/UX, SEO, and professional projects."
        />
        <meta
          name="keywords"
          content="Kishor Munikar, software developer, full stack developer, portfolio, projects, blogs, resume, SEO expert"
        />
        <meta name="author" content="Kishor Munikar" />

        {/* Favicon — Correct Paths */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Open Graph */}
        <meta property="og:title" content="Kishor Munikar | Software Developer Portfolio" />
        <meta
          property="og:description"
          content="Explore my projects, blogs, experience, and journey as a professional software developer."
        />
        <meta property="og:image" content="/images/portfolio-preview.jpg" />
        <meta property="og:url" content="https://your-domain.com" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kishor Munikar | Software Developer" />
        <meta name="twitter:description" content="Explore my development work, experience, and tech blogs." />
        <meta name="twitter:image" content="/images/portfolio-preview.jpg" />
      </Head>


      <div className="flex flex-col min-h-screen transition-colors duration-300 bg-cover">
        <main className="grid grid-cols-4 grid-rows-3 gap-4 p-6 flex-grow">
          <div className="col-span-2"><FlipCard {...cards[0]} /></div>
          <div className="col-span-2"><FlipCard {...cards[1]} /></div>
          <div className="col-span-1"><FlipCard {...cards[2]} /></div>
          <div className="col-span-2"><FlipCard {...cards[3]} /></div>
          <div className="col-span-1"><FlipCard {...cards[4]} /></div>
          <div className="col-span-2"><FlipCard {...cards[5]} /></div>
          <div className="col-span-2"><FlipCard {...cards[6]} /></div>
        </main>

        <Footer />
      </div>
    </>
  );
}
