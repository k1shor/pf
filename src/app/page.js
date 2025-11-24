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
    <div className="flex flex-col min-h-screen transition-colors duration-300 bg-cover" >
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
  );
}
