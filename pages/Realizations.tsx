import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard: React.FC<{ title: string, category: string, imageGradient: string }> = ({ title, category, imageGradient }) => (
  <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 cursor-pointer">
    {/* Background Image Placeholder (Gradient) */}
    <div className={`absolute inset-0 bg-gradient-to-br ${imageGradient} opacity-80 group-hover:scale-105 transition-transform duration-700`}></div>
    
    {/* Glass Overlay Content */}
    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
    
    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent pt-20">
      <span className="text-xs font-medium text-white/80 uppercase tracking-wider mb-1 block">{category}</span>
      <div className="flex justify-between items-end">
        <h3 className="text-xl font-bold text-white group-hover:translate-x-1 transition-transform">{title}</h3>
        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight size={20} />
        </div>
      </div>
    </div>
  </div>
);

export const Realizations: React.FC = () => {
  const projects = [
    { title: "Bistrot du Port", category: "Restauration", gradient: "from-orange-400 to-red-500" },
    { title: "Cabinet Legalix", category: "Avocat / Conseil", gradient: "from-slate-700 to-slate-900" },
    { title: "Bloom Fleuriste", category: "Artisan", gradient: "from-pink-300 to-rose-400" },
    { title: "Dr. Martin", category: "Santé", gradient: "from-cyan-400 to-blue-500" },
    { title: "Pure Yoga", category: "Bien-être", gradient: "from-emerald-300 to-teal-500" },
    { title: "Agence Immo", category: "Immobilier", gradient: "from-indigo-400 to-purple-600" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Increased padding-top to account for fixed navbar */}
      <section className="pt-32 pb-12 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wide">
            Démos & Projets
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Nos réalisations</h1>
          <p className="text-lg text-slate-500">
            Découvrez le niveau de qualité que nous apportons à chaque projet. <br/>
            Design épuré, navigation fluide et attention aux détails.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <ProjectCard 
              key={idx} 
              title={p.title} 
              category={p.category} 
              imageGradient={p.gradient} 
            />
          ))}
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <h2 className="text-3xl font-bold text-slate-900 mb-6">Votre projet est unique</h2>
           <p className="text-slate-500 mb-8 max-w-2xl mx-auto">
             Nous ne faisons pas de copier-coller. Chaque site est adapté à l'identité visuelle de votre entreprise.
           </p>
           {/* Thinner button appearance by reducing padding inside the gradient border container if needed, or just cleaner overall */}
           <Link to="/contact" className="relative inline-block p-[1px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 group">
              <span className="block px-6 py-3 bg-white rounded-full text-slate-800 font-bold group-hover:bg-slate-50 transition-colors">
                Discuter de mon projet
              </span>
           </Link>
        </div>
      </section>
    </div>
  );
};