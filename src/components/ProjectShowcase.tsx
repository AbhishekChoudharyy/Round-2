import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'THE ARVAN',
    description:
      'A Modern And Elegant Website For Arvan. Showcasing High-End Fashion With A Minimal, Responsive Design That Highlights Products And Brand Identity.',
    category: 'Full Stack',
    image: '/images/arvan.png',
    link: '#'
  },
  {
    id: 2,
    title: 'LAND ROVER RE-DESIGN',
    description:
      'A Premium Redesign Concept For Range Rover — Blending Luxury Aesthetics With Modern UI/UX, Smooth Transitions, And A Bold, High-Performance User Experience That Matches The Brand’s Legacy.',
    category: 'Three.JS',
    image: '/images/landrover.png',
    link: '#'
  },
  {
    id: 3,
    title: 'ROYAL ENFIELD REDESIGN',
    description:
      'A Rugged Yet Refined Redesign For Royal Enfield — Built To Reflect The Brand’s Heritage With A Bold Layout, Immersive Visuals, And An Experience As Powerful As The Ride Itself.',
    category: 'GSAP',
    image: '/images/royalenfield.png',
    link: '#'
  }
];

const ProjectShowcase = () => {
  useEffect(() => {
    gsap.utils.toArray('.project-card').forEach((card: any, i: number) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        }
      );
    });
  }, []);

  return (
    <section className="bg-black text-white px-4 py-12 lg:px-24">
      <h2 className="text-2xl lg:text-4xl font-bold mb-12">
        A <span className="text-blue-400">glimpse</span> into what we’ve built — websites, apps,
        and <span className="text-blue-400">experiences</span> that <span className="text-blue-400">speak</span> for themselves.
      </h2>
      <div className="flex flex-col gap-16">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="project-card bg-zinc-900 rounded-2xl p-6 lg:flex items-center justify-between gap-8 shadow-xl">
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <span className="text-xs uppercase text-zinc-400">{project.category}</span>
              <h3 className="text-2xl font-bold my-4">{project.title}</h3>
              <p className="text-zinc-300 text-sm mb-6 lg:mb-8">{project.description}</p>
              <a href={project.link} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-medium text-sm">
                Visit The Site
              </a>
            </div>
            <div className="lg:w-1/2">
              <img src={project.image} alt={project.title} className="rounded-xl w-full" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
