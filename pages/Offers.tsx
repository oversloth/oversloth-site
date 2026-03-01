import React, { useState, useRef } from 'react';
import { Check, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingCardProps {
  title: string;
  price: number;
  prevPrice?: number;
  features: string[];
  recommended?: boolean;
  fidelityPrice: number;
  refreshOption: string;
  backgroundImage?: string;
  cycleDuration: 12 | 24;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  price, 
  prevPrice,
  features, 
  recommended = false, 
  fidelityPrice,
  refreshOption,
  backgroundImage,
  cycleDuration
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

  // Determine offer type for state passing
  const offerType = title.includes('ONE') ? 'ONE' : 'FIVE';
  const engagementText = `${cycleDuration} mois`;

  return (
    <div 
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative flex flex-col p-8 rounded-3xl overflow-hidden border ${recommended ? 'shadow-xl shadow-purple-500/10 border-purple-200 z-10 bg-white' : 'bg-white border-slate-200 shadow-lg'}`}
    >
      {/* Spotlight Effect Layer */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(168, 85, 247, 0.1), transparent 40%)`
        }}
      />
      
      {/* Background Image if provided */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none z-0"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        ></div>
      )}
      
      <div className="relative z-20 flex flex-col h-full">
        {recommended && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
            Recommandé
          </div>
        )}
        
        <div className="mb-8 mt-4">
          <h3 className={`text-lg font-bold mb-2 ${recommended ? 'text-purple-600' : 'text-slate-500'}`}>{title}</h3>
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-extrabold text-slate-900">{price}€</span>
            <span className="text-slate-500 font-medium">/ mois</span>
          </div>
          {prevPrice && (
            <div className="text-slate-400 line-through text-sm mt-1">{prevPrice}€ / mois</div>
          )}
        </div>

        <ul className="flex-1 space-y-4 mb-8">
          {features.map((feat, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
              <div className={`mt-0.5 p-0.5 rounded-full ${recommended ? 'bg-purple-100 text-purple-600' : 'bg-slate-100 text-slate-500'}`}>
                <Check size={12} strokeWidth={3} />
              </div>
              {feat}
            </li>
          ))}
        </ul>

        <div className="border-t border-slate-100 pt-6 mb-8">
           <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Fidélité (après 24 mois)</p>
           <div className="text-sm text-slate-600">
             <span className="font-bold text-slate-900">{fidelityPrice}€ / mois</span> + {refreshOption}
           </div>
        </div>

        {/* Improved Button Styling: Shorter height (py-3) */}
        <div className="mt-auto">
          <Link 
            to="/contact"
            state={{ preselectedOffer: offerType, preselectedCycle: engagementText }}
            className={`block w-full py-3 px-8 rounded-xl font-bold text-base text-center transition-all ${
              recommended 
                ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white shadow-xl shadow-purple-500/20 hover:shadow-2xl hover:shadow-purple-500/30' 
                : 'bg-slate-50 text-slate-900 hover:bg-slate-100 border border-slate-200'
            }`}
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
  const [cycle, setCycle] = useState<12 | 24>(24);

  const faqData = [
    { q: "Qu'est-ce qui est inclus dans le ticket de maintenance ?", a: "Un ticket correspond à une modification simple de 10-15 minutes : changement de texte, remplacement d'image, modification d'horaire ou de coordonnées. Les demandes plus complexes font l'objet d'un devis séparé." },
    { q: "Puis-je changer d'offre en cours de route ?", a: "Oui, vous pouvez passer de l'offre ONE à FIVE à tout moment. Le nouvel engagement repartira pour la durée choisie." },
    { q: "Le site est-il optimisé pour Google (SEO) ?", a: "Absolument. Nous respectons les meilleures pratiques techniques (structure, balises, vitesse, responsive) pour que Google adore votre site." },
    { q: "Qui héberge le site ?", a: "Nous gérons l'hébergement sur des serveurs ultra-performants (Netlify) avec un certificat SSL inclus (le cadenas vert)." },
    { q: "Que se passe-t-il après 24 mois ?", a: "Le site vous appartient ! Vous pouvez continuer avec notre tarif fidélité réduit pour garder la maintenance, ou récupérer le site et le gérer vous-même." },
    { q: "Si je veux arrêter avant la fin ?", a: "Les mois restants de l'engagement sont dus pour pouvoir récupérer la propriété du site, conformément au contrat de leasing." },
    { q: "Fournissez-vous les textes et les images ?", a: "Idéalement, vous nous fournissez votre contenu. Si vous n'avez rien, nous pouvons utiliser des images libres de droits et vous aider à structurer vos textes (optionnel)." },
    { q: "Y a-t-il des frais cachés ?", a: "Non. Le prix affiché est le prix payé. Les seules options payantes sont les tickets supplémentaires ou l'ajout de pages non prévues." },
    { q: "Puis-je avoir un nom de domaine en .fr ou .com ?", a: "Oui, la configuration de votre nom de domaine est incluse lors de la mise en ligne." },
    { q: "Faites-vous du e-commerce ?", a: "Non, Oversloth est spécialisé dans les sites vitrines performants. Pour du e-commerce complexe, nous pouvons vous rediriger vers des partenaires." },
    { q: "Le site sera-t-il compatible mobile ?", a: "Oui, 100%. Nous adoptons une approche 'Mobile First'. Votre site sera parfait sur smartphone, tablette et ordinateur." },
    { q: "Comment se passe le paiement ?", a: "Par virement bancaire mensuel, mis en place au début du contrat." },
    { q: "Combien de temps pour la mise en ligne ?", a: "Une fois les éléments reçus, comptez 7 à 10 jours ouvrés pour la première version." },
    { q: "J'ai déjà un site, pouvez-vous le refaire ?", a: "Avec plaisir ! C'est souvent l'occasion de repartir sur des bases saines et modernes." },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header with padding to clear fixed navbar */}
      <section className="pt-32 pb-12 px-6 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Des tarifs simples et transparents</h1>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Investissez dans votre image sans trésorerie lourde. Choisissez la durée de votre engagement.
        </p>

        {/* Toggle - Button based as requested */}
        <div className="flex justify-center items-center mt-10">
           <div className="inline-flex bg-white p-1 rounded-full border border-slate-200 shadow-sm relative z-10">
              <button 
                onClick={() => setCycle(12)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${cycle === 12 ? 'bg-slate-100 text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Engagement 12 mois
              </button>
              
              <button 
                onClick={() => setCycle(24)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 ${cycle === 24 ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Engagement 24 mois
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${cycle === 24 ? 'bg-white/20 text-white' : 'bg-green-100 text-green-700'}`}>
                  -20%
                </span>
              </button>
           </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 pb-24 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          <PricingCard 
            title="Pack ONE — Landing"
            price={cycle === 24 ? 99 : 129}
            prevPrice={cycle === 24 ? 129 : undefined}
            features={[
              "1 Page unique longue (Hero, Offre, FAQ, Contact)",
              "Design premium responsive",
              "Mise en ligne Netlify + SSL",
              "2 rounds de retours inclus",
              "Maintenance : 6 tickets / an (1 tous les 2 mois)",
              "Support correctif 14 jours"
            ]}
            fidelityPrice={89}
            refreshOption="Mini refresh (60-90 min)"
            cycleDuration={cycle}
          />

          <PricingCard 
            title="Pack FIVE — Site Vitrine"
            price={cycle === 24 ? 159 : 199}
            prevPrice={cycle === 24 ? 199 : undefined}
            features={[
              "Jusqu'à 5 pages (Accueil + 4 pages)",
              "Design premium responsive sur-mesure",
              "Optimisation images & vitesse",
              "Mise en ligne Netlify + SSL",
              "2 rounds de retours inclus",
              "Maintenance : 1 ticket / mois",
              "Support correctif 14 jours"
            ]}
            recommended={true}
            fidelityPrice={149}
            refreshOption="Mini refresh (2h) ou +2 tickets bonus"
            backgroundImage="https://res.cloudinary.com/dnmhz4hmz/image/upload/q_auto,f_auto/v1770646359/bg-1_bsgloe.png"
            cycleDuration={cycle}
          />

        </div>

        {/* Extra Info Options */}
        <div className="mt-16 bg-white rounded-2xl p-8 border border-slate-200 text-center">
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
            Offres soumises à engagement de 12 ou 24 mois. Paiement par virement bancaire. 
            Le site reste la propriété d'Oversloth jusqu'au terme de l'engagement ou du paiement intégral des mensualités dues. 
            Tout mois entamé est dû. La maintenance incluse ne couvre pas la refonte graphique complète ni l'ajout de nouvelles fonctionnalités complexes.
          </p>
        </div>
      </section>
    </div>
  );
};