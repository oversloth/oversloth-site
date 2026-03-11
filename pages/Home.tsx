import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Zap, Shield, Sparkles, CheckCircle2, XCircle, Code, PenTool, Rocket, ChevronDown } from 'lucide-react';

const LogoBar = () => (
  <div className="w-full border-b border-slate-100 bg-white py-8 overflow-hidden relative z-20">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <span className="text-sm font-medium text-slate-500 uppercase tracking-wide text-center md:text-left">
        Propulsé par les meilleurs outils du web
      </span>
      <div className="flex flex-wrap justify-center md:justify-end gap-8 md:gap-12 items-center">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Netlify_logo.svg" 
          alt="Netlify" 
          className="h-7 object-contain transition-all duration-300 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110 cursor-default" 
        />
        <div className="flex items-center gap-2 transition-all duration-300 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110 cursor-default">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" className="h-7 object-contain" />
          <span className="font-bold text-xl text-slate-800 tracking-tight">GitHub</span>
        </div>
        <img 
          src="https://res.cloudinary.com/cloudinary/image/upload/c_scale,w_200/v1/logo/for_white_bg/cloudinary_logo_for_white_bg.svg" 
          alt="Cloudinary" 
          className="h-7 object-contain transition-all duration-300 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110 cursor-default" 
        />
        <div className="flex items-center gap-2 transition-all duration-300 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110 cursor-default">
          <img 
            src="https://res.cloudinary.com/dnmhz4hmz/image/upload/f_auto,q_auto/v1773155341/download_ciu7ck.png" 
            alt="OVH" 
            className="h-6 object-contain" 
          />
          <span className="font-bold text-xl text-slate-800 tracking-tight">OVH</span>
        </div>
      </div>
    </div>
  </div>
);

// Composant d'animation au scroll
interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ children, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

interface FeatureCardProps {
  icon: any;
  title: string;
  desc: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, desc }) => (
  <div className="relative bg-white/60 backdrop-blur-md p-8 rounded-2xl border border-white/60 shadow-lg group overflow-hidden hover:shadow-purple-500/20 transition-all duration-300 h-full">
    {/* Shimmer Effect */}
    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-0 pointer-events-none"></div>
    
    <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div className="relative z-10">
      <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors shadow-sm">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  </div>
);

interface ProcessStepProps {
  number: string;
  title: string;
  desc: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, desc }) => (
  <div className="relative pl-8 md:pl-0">
    <div className="md:mb-4 flex items-center gap-4">
      <span 
        className="text-4xl font-extrabold md:text-5xl bg-clip-text text-transparent bg-cover bg-center"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dnmhz4hmz/image/upload/v1770647563/bg-4_sgzhkx.png')" }}
      >
        {number}
      </span>
      <h4 className="text-lg font-bold text-slate-800 md:hidden">{title}</h4>
    </div>
    <h4 className="text-lg font-bold text-slate-800 hidden md:block mb-2">{title}</h4>
    <p className="text-sm text-slate-500">{desc}</p>
  </div>
);

interface HomeFaqItemProps {
  question: string;
  answer: string;
}

const HomeFaqItem: React.FC<HomeFaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className={`font-semibold text-sm md:text-base transition-colors ${isOpen ? 'text-purple-600' : 'text-slate-700 group-hover:text-purple-600'}`}>
          {question}
        </span>
        {isOpen ? <ChevronDown className="text-purple-600 rotate-180 transition-transform" size={18} /> : <ChevronDown className="text-slate-400 transition-transform" size={18} />}
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mb-4' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <p className="text-slate-500 text-sm leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const Typewriter = () => {
  const words = ["propre.", "efficace.", "livré rapidement."];
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setText("propre.");
      return;
    }

    const i = loopNum % words.length;
    const fullText = words[i];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === fullText) {
      // Pause at end of word
      timer = setTimeout(() => setIsDeleting(true), 900);
    } else if (isDeleting && text === '') {
      // Move to next word
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    } else {
      // Typing or deleting
      timer = setTimeout(() => {
        setText(current => isDeleting 
          ? fullText.substring(0, current.length - 1) 
          : fullText.substring(0, current.length + 1)
        );
      }, isDeleting ? 35 : 60);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words]);

  return (
    <span className="relative inline-flex items-center text-left min-h-[1.1em]">
       {/* Phantom text for layout reservation (longest word) */}
       <span className="opacity-0 pointer-events-none select-none">livré rapidement.</span>
       
       {/* Active typing text */}
       <span className="absolute top-0 left-0 flex items-baseline whitespace-nowrap">
          <span className="aurora-text">{text}</span>
          <span className="w-[3px] h-[0.9em] bg-white/80 ml-1 animate-pulse rounded-full"></span>
       </span>
    </span>
  );
};

export const Home: React.FC = () => {
  const faqData = [
    { q: "Le site m'appartient-il ?", a: "Le site est mis à votre disposition pendant toute la durée de votre engagement. À l'issue de celui-ci, le code source et le nom de domaine vous sont transférés définitivement. Vous en devenez propriétaire à part entière." },
    { q: "Puis-je modifier le contenu moi-même ?", a: "Pour garantir un design impeccable, nous gérons la maintenance. Vous nous envoyez un message, on modifie dans la journée. Simple." },
    { q: "Quels sont les délais de mise en ligne ?", a: "Entre 3 et 10 jours ouvrés selon le pack choisi, une fois que nous avons reçu vos éléments (textes, images)." },
    { q: "Y a-t-il des frais cachés ?", a: "Aucun. L'hébergement, le nom de domaine, la maintenance et le SSL sont inclus dans l'abonnement mensuel." },
    { q: "Le site est-il optimisé pour Google (SEO) ?", a: "Oui, tous nos sites respectent les standards techniques de Google (vitesse, balisage, mobile-friendly) pour un référencement naturel optimal." },
    { q: "Que se passe-t-il si je veux arrêter ?", a: "Vous pouvez arrêter à la fin de votre engagement (12, 24 ou 36 mois). Si vous souhaitez arrêter avant la fin, les mensualités restantes jusqu'au terme de l'engagement sont dues." }
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section 
        className="relative flex items-center pt-32 pb-20 bg-cover bg-top bg-no-repeat overflow-hidden"
        style={{ 
          backgroundImage: "url('https://res.cloudinary.com/dnmhz4hmz/image/upload/v1770647153/bg-3_audsgj.png')",
          minHeight: 'max(78vh, 720px)'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10 h-full">
          {/* Left Content */}
          <div className="space-y-8 relative z-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-purple-100 text-purple-700 text-xs font-semibold tracking-wide backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              Nouvelle offre 2026 disponible
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] drop-shadow-sm">
              Votre site vitrine,<br />
              <Typewriter />
            </h1>
            
            <p className="text-lg md:text-xl text-slate-900 max-w-lg leading-relaxed font-medium">
              Site vitrine clé en main, design premium et maintenance incluse, accessible via un abonnement mensuel simple.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 rounded-full text-white font-semibold flex items-center justify-center gap-2 shadow-xl shadow-purple-500/20 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-1 transition-all
                bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-[length:200%_auto] animate-gradient-slow"
              >
                Démarrer mon projet <ArrowRight size={18} />
              </Link>
              <Link 
                to="/offres" 
                className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-800 rounded-full font-semibold hover:border-slate-300 hover:bg-white transition-all flex items-center justify-center shadow-sm"
              >
                Voir les tarifs
              </Link>
            </div>
            
            <p className="text-xs text-slate-500 font-medium">
              Sans engagement caché • Support réactif • Technologies modernes
            </p>
          </div>

          {/* Right Mockup */}
          <div className="hidden lg:block relative z-10 w-full h-full" style={{ overflow: 'visible' }}>
             <div 
               className="absolute top-1/2"
               style={{
                 right: '-8vw', // Ancré à droite, dépasse du conteneur
                 width: 'clamp(520px, 46vw, 860px)', // Taille responsive plus grande
                 transform: 'translateY(-45%) translateX(6vw) rotate(0deg)', // Raised to prevent cutoff
                 zIndex: 10
               }}
             >
                <div className="relative w-full">
                  <img 
                    src="https://res.cloudinary.com/dnmhz4hmz/image/upload/v1770736202/mockup-site-5_qtz6l9.png" 
                    alt="Interface Oversloth" 
                    className="w-full h-auto object-contain drop-shadow-2xl"
                  />
                  
                  {/* Lueur blanche en bas du mockup pour fondre la transition */}
                  <div 
                     className="absolute"
                     style={{
                       bottom: '-20px',
                       left: '50%',
                       transform: 'translateX(-50%)',
                       width: '110%',
                       height: '140px',
                       background: 'radial-gradient(closest-side, rgba(255,255,255,0.95), rgba(255,255,255,0))',
                       filter: 'blur(18px)',
                       pointerEvents: 'none',
                       zIndex: 20
                     }}
                  ></div>
                </div>
             </div>
          </div>
        </div>
        
        {/* White fade at the bottom for seamless transition */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-0"></div>

      </section>

      <LogoBar />

      {/* Why Oversloth */}
      <section className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Pourquoi Oversloth ?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Nous avons supprimé tout ce qui est inutile dans les agences traditionnelles pour ne garder que l'essentiel : la qualité et la rapidité.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <RevealOnScroll delay={0}>
              <FeatureCard 
                icon={Zap}
                title="Rapide"
                desc="Pas de réunions interminables. Un process fluide pour une mise en ligne en moins de 10 jours."
              />
            </RevealOnScroll>
            <RevealOnScroll delay={0.15}>
              <FeatureCard 
                icon={Sparkles}
                title="Propre"
                desc="Design soigné, code optimisé pour le SEO, sécurité SSL incluse. Votre image de marque mérite l'excellence."
              />
            </RevealOnScroll>
            <RevealOnScroll delay={0.3}>
              <FeatureCard 
                icon={Shield}
                title="Sans prise de tête"
                desc="Hébergement, maintenance, mises à jour... Nous gérons tout. Vous vous concentrez sur votre métier."
              />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Oversloth vs Agence Traditionnelle</h2>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="grid grid-cols-3 p-6 border-b border-slate-100 bg-slate-50/50">
              <div className="text-xs md:text-sm font-semibold text-slate-400 self-center">Critères</div>
              <div className="text-center flex flex-col items-center justify-center gap-1 font-bold text-purple-600 text-lg">
                <div className="flex items-center gap-2">
                   <img src="https://res.cloudinary.com/dnmhz4hmz/image/upload/q_auto,f_auto/v1770397203/logo-oversloth_xvlrjd.png" className="w-5 h-5 object-contain" alt="Logo" />
                   Oversloth
                </div>
              </div>
              <div className="text-center font-semibold text-slate-400 text-sm md:text-base self-center">Agence Classique</div>
            </div>
            
            {[
              { label: "Coût de mise en place", over: "0€ (Abonnement mensuel)", trad: "1500€ - 5000€" },
              { label: "Délai de livraison", over: "ONE 3-5j / FIVE 5-10j", trad: "1-2 mois" },
              { label: "Maintenance", over: "Incluse", trad: "Option coûteuse" },
              { label: "Design", over: "Premium & Moderne", trad: "Variable" },
              { label: "Engagement", over: "12 ou 24 mois (au choix)", trad: "Acompte non remboursable" }
            ].map((row, idx) => (
              <div key={idx} className="grid grid-cols-3 p-6 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors items-center">
                <div className="font-medium text-slate-700 text-xs md:text-base">{row.label}</div>
                <div className="text-center flex justify-center items-center gap-2 font-semibold text-slate-800 bg-purple-50/50 py-2 rounded-lg text-xs md:text-sm px-1">
                  <CheckCircle2 size={16} className="text-purple-600 shrink-0" /> 
                  <span>{row.over}</span>
                </div>
                <div className="text-center flex justify-center items-center gap-2 text-slate-400 text-xs md:text-sm">
                   <XCircle size={16} className="text-red-300 shrink-0" />
                   <span>{row.trad}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div 
          className="rounded-3xl p-12 text-white relative overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: "url('https://res.cloudinary.com/dnmhz4hmz/image/upload/v1770647563/bg-4_sgzhkx.png')" }}
        >
          {/* Overlay for legibility if needed */}
          <div className="absolute inset-0 bg-slate-900/40 z-0"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Des offres claires,<br/>sans surprise.</h2>
              <p className="text-slate-100 text-lg font-medium">
                Choisissez entre une landing page percutante ou un site vitrine complet. Tout est inclus.
              </p>
              <div className="flex gap-4 pt-4">
                 <Link to="/offres" className="px-6 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-purple-50 transition-colors">
                   Voir les offres détaillées
                 </Link>
              </div>
            </div>
            
            <div className="md:w-1/2 flex gap-4">
              {/* Mini Cards Preview */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex-1 transform translate-y-4 shadow-lg">
                <div className="text-sm text-purple-200 font-bold mb-2">PACK ONE</div>
                <div className="text-2xl font-bold mb-4">99€<span className="text-sm font-normal text-slate-200">/mois</span></div>
              </div>
              <div className="bg-white text-slate-900 p-6 rounded-2xl flex-1 shadow-lg transform -translate-y-4">
                <div className="text-sm text-purple-600 font-bold mb-2">PACK FIVE</div>
                <div className="text-2xl font-bold mb-4">159€<span className="text-sm font-normal text-slate-400">/mois</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process - Updated to 4 steps */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Un process ultra-court</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>
            <ProcessStep 
              number="01" 
              title="Brief & Contenus" 
              desc="On définit vos objectifs et vous nous envoyez vos textes/images." 
            />
            <ProcessStep 
              number="02" 
              title="Design & Dev" 
              desc="Création de votre site avec nos outils IA et expertise design." 
            />
             <ProcessStep 
              number="03" 
              title="Retours" 
              desc="Vous avez 2 rounds de retours inclus pour affiner les détails." 
            />
            <ProcessStep 
              number="04" 
              title="Mise en ligne" 
              desc="Connexion domaine, SSL, hébergement. Tout est en live !" 
            />
          </div>
        </div>
      </section>

      {/* FAQ Teaser - Expanded */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">Questions fréquentes</h2>
          <div className="space-y-2 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            {faqData.map((item, idx) => (
              <HomeFaqItem key={idx} question={item.q} answer={item.a} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/offres" className="text-purple-600 font-semibold hover:underline">Voir toutes les questions & réponses</Link>
          </div>
        </div>
      </section>

      {/* Final CTA - New Background */}
      <section className="py-24 px-6">
        <div 
          className="max-w-5xl mx-auto rounded-[2.5rem] p-12 md:p-24 text-center relative overflow-hidden bg-cover bg-center shadow-2xl shadow-purple-900/20"
          style={{ backgroundImage: "url('https://res.cloudinary.com/dnmhz4hmz/image/upload/v1771323952/bg-6_n1lfry.png')" }}
        >
             <div className="absolute inset-0 bg-purple-900/10 mix-blend-multiply z-0"></div>
             
             <div className="relative z-10">
               <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight drop-shadow-md">
                 Prêt à passer au niveau supérieur ?
               </h2>
               <p className="text-xl text-purple-50 mb-10 max-w-2xl mx-auto font-medium drop-shadow-sm">
                 Rejoignez Oversloth et offrez à votre activité la vitrine qu'elle mérite, dès aujourd'hui.
               </p>
               <Link 
                 to="/contact" 
                 className="inline-flex items-center gap-2 px-10 py-5 bg-white text-purple-700 text-lg font-bold rounded-full shadow-xl shadow-purple-900/10 hover:shadow-2xl hover:scale-105 transition-all duration-300"
               >
                 Démarrer mon projet
                 <ArrowRight size={20} />
               </Link>
             </div>
        </div>
      </section>
    </div>
  );
};