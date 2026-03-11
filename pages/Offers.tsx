import React, { useState, useRef } from 'react';
import { Check, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingCardProps {
  title: string;
  price: number;
  prevPrice?: number;
  features: string[];
  recommended?: boolean;
  backgroundImage?: string;
  cycleDuration: 12 | 24 | 36;
  packType: 'ONE' | 'FIVE';
  isGold?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  price, 
  prevPrice,
  features, 
  recommended = false, 
  backgroundImage,
  cycleDuration,
  packType,
  isGold = false
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const engagementText = `${cycleDuration} mois`;

  // --- Custom Styles per Card Duration ---
  let cardContainerClass = "";
  let titleClass = "";
  let priceClass = "";
  let checkBgClass = "";
  let buttonClass = "";
  let overlayClass = "";
  let prevPriceClass = "";

  if (cycleDuration === 12) {
    // 12 Mois: White card, White button
    cardContainerClass = "bg-white border-slate-200 shadow-lg text-slate-900";
    titleClass = "text-slate-500";
    priceClass = "text-slate-900";
    checkBgClass = "bg-slate-100 text-slate-500";
    buttonClass = "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 shadow-sm";
    prevPriceClass = "text-slate-400";
  } else if (cycleDuration === 24) {
    // 24 Mois: Light/Violet card, Purple button
    cardContainerClass = "bg-white border-purple-100 shadow-xl shadow-purple-500/10 text-slate-900";
    titleClass = "text-purple-600";
    priceClass = "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"; // Gradient Purple Price
    checkBgClass = "bg-purple-50 text-purple-600";
    buttonClass = "bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-600 text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 hover:scale-[1.02]"; // Enhanced Gradient
    overlayClass = "bg-white/40"; 
    prevPriceClass = "text-slate-400";
  } else if (cycleDuration === 36) {
    // 36 Mois: Blue/Aurora card, Yellow button
    cardContainerClass = "border-blue-500/30 shadow-xl shadow-blue-900/20 text-blue-950"; 
    
    // Unified Gold gradient for Title, Price, and Suffix (Lighter/Brighter)
    const goldGradient = "text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 drop-shadow-sm";
    
    titleClass = goldGradient + " font-extrabold tracking-tight"; 
    priceClass = goldGradient; 
    
    checkBgClass = "bg-blue-600 text-white shadow-sm"; 
    // Gradient Gold Button with Hover Scale
    buttonClass = "bg-gradient-to-r from-yellow-400 to-orange-400 text-blue-900 font-bold hover:shadow-xl hover:scale-[1.02] shadow-lg shadow-orange-400/20 transition-all duration-300";
    overlayClass = ""; 
    prevPriceClass = "text-blue-900/60 font-semibold"; 
  }

  return (
    <div 
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative flex flex-col p-8 rounded-3xl overflow-hidden border transition-all duration-300 ${cardContainerClass}`}
    >
      {/* Spotlight Effect Layer */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.1), transparent 40%)`
        }}
      />
      
      {/* Background Image if provided */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        >
          {/* Custom Overlay */}
          {overlayClass && <div className={`absolute inset-0 backdrop-blur-[1px] ${overlayClass}`}></div>}
        </div>
      )}
      
      <div className="relative z-20 flex flex-col h-full">
        {recommended && (
          <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider shadow-lg">
            Meilleure valeur
          </div>
        )}
        
        <div className="mb-8 mt-4">
          <h3 className={`text-lg font-bold mb-2 ${titleClass}`}>{title}</h3>
          <div className="flex items-baseline gap-2">
            <span className={`text-5xl font-extrabold ${priceClass}`}>{price}€</span>
            <span className={`font-medium ${cycleDuration === 36 ? priceClass : 'text-slate-500'}`}>/ mois</span>
          </div>
          {prevPrice && (
            <div className="relative inline-block mt-2">
              <span className={`text-lg font-semibold ${prevPriceClass}`}>
                {prevPrice}€ / mois
              </span>
              {/* Red Horizontal Line (Thinner) */}
              <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
                <div className="w-full h-[1px] bg-red-500 shadow-sm"></div>
              </div>
            </div>
          )}
        </div>

        <ul className="flex-1 space-y-4 mb-8">
          {features.map((feat, idx) => (
            <li key={idx} className={`flex items-start gap-3 text-sm ${cycleDuration === 36 ? 'text-blue-950 font-medium' : 'text-slate-600'}`}>
              <div className={`mt-0.5 p-0.5 rounded-full ${checkBgClass}`}>
                <Check size={12} strokeWidth={3} />
              </div>
              {feat}
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <Link 
            to="/contact"
            state={{ preselectedOffer: packType, preselectedCycle: engagementText }}
            className={`block w-full py-3 px-8 rounded-xl font-bold text-base text-center transition-all ${buttonClass}`}
          >
            Choisir cette offre
          </Link>
        </div>
      </div>
    </div>
  );
};

const FaqItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button 
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`font-semibold transition-colors ${isOpen ? 'text-purple-600' : 'text-slate-800 group-hover:text-purple-600'}`}>
          {question}
        </span>
        {isOpen ? <ChevronUp size={20} className="text-purple-600" /> : <ChevronDown size={20} className="text-slate-400" />}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-slate-600 text-sm leading-relaxed pr-8">{answer}</p>
      </div>
    </div>
  );
};

export const Offers: React.FC = () => {
  const [selectedPack, setSelectedPack] = useState<'ONE' | 'FIVE'>('FIVE');

  const faqData = [
    { q: "Qu'est-ce qui est inclus dans le ticket de maintenance ?", a: "Un ticket correspond à une modification simple de 10-15 minutes : changement de texte, remplacement d'image, modification d'horaire ou de coordonnées. Les demandes plus complexes font l'objet d'un devis séparé." },
    { q: "Puis-je changer d'offre en cours de route ?", a: "Oui, vous pouvez passer de l'offre ONE à FIVE à tout moment. Le nouvel engagement repartira pour la durée choisie." },
    { q: "Le site est-il optimisé pour Google (SEO) ?", a: "Absolument. Nous respectons les meilleures pratiques techniques (structure, balises, vitesse, responsive) pour que Google adore votre site." },
    { q: "Qui héberge le site ?", a: "Nous gérons l'hébergement sur des serveurs ultra-performants (Netlify) avec un certificat SSL inclus (le cadenas vert)." },
    { q: "Que se passe-t-il à la fin de mon engagement ?", a: "À l'issue de votre engagement, le site et le nom de domaine vous sont transférés définitivement. Vous pouvez alors le gérer vous-même ou continuer avec nous sur un abonnement réduit." },
    { q: "Si je veux arrêter avant la fin ?", a: "Les mensualités restantes jusqu'au terme de l'engagement sont dues. Le site sera suspendu à la date de résiliation et transféré uniquement après règlement intégral." },
    { q: "Fournissez-vous les textes et les images ?", a: "Idéalement, vous nous fournissez votre contenu. Si vous n'avez rien, nous pouvons utiliser des images libres de droits et vous aider à structurer vos textes (optionnel)." },
    { q: "Y a-t-il des frais cachés ?", a: "Non. Le prix affiché est le prix payé. Les seules options payantes sont les tickets supplémentaires ou l'ajout de pages non prévues." },
    { q: "Puis-je avoir un nom de domaine en .fr ou .com ?", a: "Oui, la configuration de votre nom de domaine est incluse lors de la mise en ligne." },
    { q: "Faites-vous du e-commerce ?", a: "Non, Oversloth est spécialisé dans les sites vitrines performants. Pour du e-commerce complexe, nous pouvons vous rediriger vers des partenaires." },
    { q: "Le site sera-t-il compatible mobile ?", a: "Oui, 100%. Nous adoptons une approche 'Mobile First'. Votre site sera parfait sur smartphone, tablette et ordinateur." },
    { q: "Comment se passe le paiement ?", a: "Par virement bancaire mensuel ou prélèvement automatique selon votre préférence. Les détails sont précisés lors de la signature du contrat." },
    { q: "Combien de temps pour la mise en ligne ?", a: "Une fois les éléments reçus, comptez 7 à 10 jours ouvrés pour la première version." },
    { q: "J'ai déjà un site, pouvez-vous le refaire ?", a: "Avec plaisir ! C'est souvent l'occasion de repartir sur des bases saines et modernes." },
  ];

  const features = selectedPack === 'ONE' ? [
    "1 Page unique longue",
    "Design premium responsive",
    "Mise en ligne Netlify + SSL",
    "2 rounds de retours inclus",
    "Maintenance : 6 tickets / an",
    "Support correctif 14 jours"
  ] : [
    "Jusqu'à 5 pages",
    "Design premium responsive sur-mesure",
    "Optimisation images & vitesse",
    "Mise en ligne Netlify + SSL",
    "2 rounds de retours inclus",
    "Maintenance : 1 ticket / mois",
    "Support correctif 14 jours"
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header with padding to clear fixed navbar */}
      <section className="pt-32 pb-12 px-6 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Des tarifs simples et transparents</h1>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Investissez dans votre image sans trésorerie lourde. Choisissez votre pack et la durée de votre engagement.
        </p>

        {/* Pack Toggle */}
        <div className="flex justify-center items-center mt-10">
           <div className="inline-flex bg-white p-1 rounded-full border border-slate-200 shadow-sm relative z-10">
              <button 
                onClick={() => setSelectedPack('ONE')}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${selectedPack === 'ONE' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Pack ONE
              </button>
              
              <button 
                onClick={() => setSelectedPack('FIVE')}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${selectedPack === 'FIVE' ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Pack FIVE
              </button>
           </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          
          {/* 12 Mois */}
          <PricingCard 
            title="Engagement 12 mois"
            price={selectedPack === 'ONE' ? 149 : 199}
            features={features}
            cycleDuration={12}
            packType={selectedPack}
          />

          {/* 24 Mois */}
          <PricingCard 
            title="Engagement 24 mois"
            price={selectedPack === 'ONE' ? 99 : 159}
            prevPrice={selectedPack === 'ONE' ? 149 : 199}
            features={features}
            cycleDuration={24}
            packType={selectedPack}
            backgroundImage="https://res.cloudinary.com/dnmhz4hmz/image/upload/q_auto,f_auto/v1770646359/bg-1_bsgloe.png"
          />

          {/* 36 Mois - Highlighted */}
          <PricingCard 
            title="Engagement 36 mois"
            price={selectedPack === 'ONE' ? 79 : 129}
            prevPrice={selectedPack === 'ONE' ? 149 : 199}
            features={features}
            cycleDuration={36}
            packType={selectedPack}
            recommended={true}
            isGold={true}
            backgroundImage="https://res.cloudinary.com/dnmhz4hmz/image/upload/f_auto,q_auto/v1770647563/bg-4_sgzhkx.png"
          />

        </div>

        {/* Extra Info Options */}
        <div className="mt-16 bg-white rounded-2xl p-8 border border-slate-200 text-center max-w-4xl mx-auto">
          <h3 className="font-bold text-slate-800 mb-4">Options supplémentaires</h3>
          <div className="flex flex-col md:flex-row justify-center gap-8 text-sm text-slate-600">
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              Ticket sup. : <strong>45€</strong>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              Page supplémentaire : <strong>120€</strong> (one-shot)
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              Fonctionnalités avancées : <strong>Sur devis</strong>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-24 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
              <HelpCircle size={24} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Questions fréquentes</h2>
          </div>
          
          <div className="space-y-2">
            {faqData.map((item, idx) => (
              <FaqItem key={idx} question={item.q} answer={item.a} />
            ))}
          </div>

          <div className="mt-16 text-center">
             <p className="text-slate-500 text-sm mb-4">Vous avez d'autres questions ?</p>
             <Link to="/contact" className="text-purple-600 font-bold hover:underline">Contactez-nous directement</Link>
          </div>
        </div>
      </section>

      {/* Conditions summary */}
      <section className="py-12 px-6 text-center bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-xs text-slate-400 leading-relaxed">
          <p className="font-bold mb-2 uppercase tracking-wide">Conditions résumées</p>
          <p>
            Offres soumises à engagement de 12, 24 ou 36 mois. Paiement par virement bancaire. 
            Le site reste la propriété d'Oversloth jusqu'au terme de l'engagement ou du paiement intégral des mensualités dues. 
            Tout mois entamé est dû. La maintenance incluse ne couvre pas la refonte graphique complète ni l'ajout de nouvelles fonctionnalités complexes.
          </p>
        </div>
      </section>
    </div>
  );
};