import { ArrowRight } from 'lucide-react';

const Landingpage = () => {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden text-white flex items-center justify-center">
      {/* Fancy Flowing Background (you can replace with actual video or canvas later) */}
      <div className="absolute inset-0 z-0 opacity-60">
        <img
          src="/path-to-your-flow-background.png" // Replace with real asset path
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-2">
          Creative Web Design Agency!!
        </p>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-8 max-w-5xl">
          CREATIVE MINDS. POWERFUL CODE. WELCOME TO WEBDRAVE.
        </h1>

        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-white text-black px-6 py-3 flex items-center gap-2 rounded-full hover:bg-gray-100 transition">
            <ArrowRight size={18} /> Contact
          </button>
          <button className="bg-white text-black px-6 py-3 flex items-center gap-2 rounded-full hover:bg-gray-100 transition">
            <ArrowRight size={18} /> Contact
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-10 flex flex-col items-center">
        <div className="animate-bounce text-xs uppercase tracking-widest rotate-90 mb-2 text-gray-400">
          Scroll • Scroll • Scroll
        </div>
        <div className="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center">
          <ArrowRight className="-rotate-90" size={14} />
        </div>
      </div>
    </section>
  );
};

export default Landingpage;
