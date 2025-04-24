import { FC } from "react";
import { FaCode, FaShieldAlt, FaChartLine, FaShoppingCart } from "react-icons/fa";
import { FiLayout } from "react-icons/fi";

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <FaCode className="text-3xl mb-4" />,
    title: "WEB DEVELOPMENT",
    description: "From landing pages to complex sites we build fast, responsive, and scalable websites.",
  },
  {
    icon: <FiLayout className="text-3xl mb-4" />,
    title: "UI/UX DESIGN",
    description: "We design sleek, user-friendly interfaces that make every interaction smooth and enjoyable.",
  },
  {
    icon: <FaShieldAlt className="text-3xl mb-4" />,
    title: "HOSTING & SECURITY SOLUTIONS",
    description: "We provide reliable hosting with top-tier security to keep your site safe, fast, and always online.",
  },
  {
    icon: <FaChartLine className="text-3xl mb-4" />,
    title: "SEO SOLUTIONS",
    description: "We boost your visibility with smart SEO strategies that drive traffic and improve rankings.",
  },
  {
    icon: <FaShoppingCart className="text-3xl mb-4" />,
    title: "E-COM SOLUTIONS",
    description: "We build powerful, easy-to-manage online stores that turn visitors into loyal customers.",
  },
];

const ServicesSection: FC = () => {
  const firstTwo = services.slice(0, 2);
  const lastThree = services.slice(2);

  return (
    <section className="bg-black text-white py-16 px-4 md:px-20">
      {/* First row: two cards + header text */}
      <div className="grid gap-6 justify-center grid-cols-1 md:grid-cols-3 mb-10">
        {firstTwo.map((svc, idx) => (
          <div
            key={idx}
            className="border border-dashed border-indigo-400 w-[304px] h-[360px] p-6 rounded-sm flex flex-col hover:bg-indigo-900/10 transition-all"
          >
            <div className="text-indigo-400">{svc.icon}</div>
            <h3 className="text-indigo-400 font-semibold text-lg mb-2 mt-2">{svc.title}</h3>
            <p className="text-sm text-indigo-200 leading-relaxed flex-grow">{svc.description}</p>
          </div>
        ))}

        {/* Header card */}
        <div className="w-[304px] h-[360px] p-6 flex flex-col justify-center text-right">
          <p className="text-sm font-bold uppercase tracking-wide">↘ What We Offer</p>
          <h2 className="text-3xl font-light mt-2 leading-snug">
            <span className="text-indigo-400 font-semibold">WebDrave</span> delivers{' '}
            <span className="text-indigo-400 font-semibold">creative</span>, custom-built<br />
            digital <span className="text-indigo-400 font-semibold">services</span> designed<br />
            to grow your <span className="text-indigo-400 font-semibold">business</span><br />
            and <span className="text-indigo-400 font-semibold">elevate</span> your brand.
          </h2>
        </div>
      </div>

      {/* Second row: remaining three cards */}
      <div className="grid gap-6 justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {lastThree.map((svc, idx) => (
          <div
            key={idx}
            className="border border-dashed border-indigo-400 w-[304px] h-[360px] p-6 rounded-sm flex flex-col hover:bg-indigo-900/10 transition-all"
          >
            <div className="text-indigo-400">{svc.icon}</div>
            <h3 className="text-indigo-400 font-semibold text-lg mb-2 mt-2">{svc.title}</h3>
            <p className="text-sm text-indigo-200 leading-relaxed flex-grow">{svc.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
