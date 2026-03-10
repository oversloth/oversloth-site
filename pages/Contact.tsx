import React, { useState, useEffect } from 'react';
import { Mail, Instagram, Check } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Contact: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    offer: 'FIVE',
    engagement: '24 mois',
    activity: 'TPE',
    phone: '',
    callMe: false,
    website: '',
    timeline: 'Dès que possible',
    message: '',
    'bot-field': ''
  });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Pre-fill form from navigation state
  useEffect(() => {
    if (location.state) {
      const { preselectedOffer, preselectedCycle } = location.state as { preselectedOffer?: string, preselectedCycle?: string };
      setFormData(prev => ({
        ...prev,
        offer: preselectedOffer || prev.offer,
        engagement: preselectedCycle || prev.engagement
      }));
    }
  }, [location.state]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData({ ...formData, [name]: val });
  };

  const handleOfferChange = (offer: string) => {
    setFormData({ ...formData, offer });
  };

  const handleEngagementChange = (engagement: string) => {
    setFormData({ ...formData, engagement });
  };

  const encode = (data: any) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(() => {
        navigate("/merci");
      })
      .catch(() => {
        setError("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-white to-slate-50 -z-10"></div>
      
      <div className="max-w-6xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Démarrer mon projet</h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Répondez à quelques questions pour recevoir votre proposition adaptée ou simplement échanger sur vos besoins.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Email</h3>
                <p className="text-slate-500 text-sm mb-1">Réponse sous 24h ouvrées</p>
                <a href="mailto:hello@oversloth.fr" className="text-purple-600 font-semibold hover:underline">hello@oversloth.fr</a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
               <div className="p-3 bg-pink-50 text-pink-600 rounded-xl">
                <Instagram size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Instagram</h3>
                <p className="text-slate-500 text-sm mb-1">Suivez nos dernières actus</p>
                <a href="https://www.instagram.com/oversloth.fr/" target="_blank" rel="noopener noreferrer" className="text-pink-600 font-semibold hover:underline transition-colors">@oversloth.fr</a>
              </div>
            </div>
          </div>
        </div>

        {/* Improved Form */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-purple-500/5 border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Vos informations</h2>
          
          <form 
            name="contact" 
            method="POST" 
            action="/merci"
            data-netlify="true" 
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Netlify Config */}
            <input type="hidden" name="form-name" value="contact" />
            <div className="hidden">
              <label>Ne pas remplir: <input name="bot-field" value={formData['bot-field']} onChange={handleChange} /></label>
            </div>

            {/* Main Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-slate-700">Nom complet</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name"
                  required 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                  placeholder="Jean Dupont"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email professionnel</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email"
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                  placeholder="jean@entreprise.com"
                />
              </div>
            </div>

            {/* Offer & Engagement Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Offre envisagée</label>
                <div className="grid grid-cols-3 gap-2">
                  {['ONE', 'FIVE', 'Aidez-moi'].map((opt) => (
                    <div 
                      key={opt}
                      onClick={() => handleOfferChange(opt)}
                      className={`cursor-pointer px-2 py-3 rounded-xl border text-center text-xs font-bold transition-all flex items-center justify-center gap-1 ${
                        formData.offer === opt 
                          ? 'border-purple-500 bg-purple-50 text-purple-700 ring-1 ring-purple-500' 
                          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                      }`}
                    >
                       {formData.offer === opt && <Check size={12} strokeWidth={3} />}
                       {opt}
                    </div>
                  ))}
                </div>
                {/* Hidden input for Netlify */}
                <input type="hidden" name="offer" value={formData.offer} />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Engagement</label>
                <div className="grid grid-cols-2 gap-2">
                  {['12 mois', '24 mois', '36 mois', 'On voit ça ensemble'].map((opt) => (
                    <div 
                      key={opt}
                      onClick={() => handleEngagementChange(opt)}
                      className={`cursor-pointer px-2 py-3 rounded-xl border text-center text-xs font-bold transition-all flex items-center justify-center gap-1 ${
                        formData.engagement === opt 
                          ? 'border-purple-500 bg-purple-50 text-purple-700 ring-1 ring-purple-500' 
                          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                      }`}
                    >
                       {formData.engagement === opt && <Check size={12} strokeWidth={3} />}
                       {opt}
                    </div>
                  ))}
                </div>
                {/* Hidden input for Netlify */}
                <input type="hidden" name="engagement" value={formData.engagement} />
              </div>
            </div>

            {/* Qualification: Activity & Website */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="space-y-2">
                  <label htmlFor="activity" className="text-sm font-semibold text-slate-700">Votre activité</label>
                  <div className="relative">
                    <select
                      name="activity"
                      id="activity"
                      value={formData.activity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all appearance-none text-slate-700"
                    >
                      <option value="Artisan">Artisan</option>
                      <option value="TPE">TPE / PME</option>
                      <option value="Indépendant">Indépendant / Freelance</option>
                      <option value="Autre">Autre</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
               </div>
               <div className="space-y-2">
                  <label htmlFor="website" className="text-sm font-semibold text-slate-700">Site actuel <span className="text-slate-400 font-normal">(Optionnel)</span></label>
                  <input 
                    type="text" 
                    name="website" 
                    id="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                    placeholder="www.monsite.com"
                  />
               </div>
            </div>

            {/* Qualification: Phone & Timeline */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="space-y-2">
                   <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Téléphone <span className="text-slate-400 font-normal">(Optionnel)</span></label>
                   <input 
                      type="tel" 
                      name="phone" 
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                      placeholder="06 12 34 56 78"
                    />
                 </div>
                 
                 <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Délai souhaité</label>
                    <div className="grid grid-cols-2 gap-2">
                        {/* Custom small radios */}
                        {['Dès que possible', '< 2 sem.', '1 mois', '+ 1 mois'].map(t => (
                          <label key={t} className={`cursor-pointer text-xs font-medium py-3 px-2 rounded-lg text-center border transition-all ${
                            formData.timeline === t 
                              ? 'bg-purple-50 border-purple-300 text-purple-700' 
                              : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100'
                          }`}>
                            <input 
                              type="radio" 
                              name="timeline" 
                              value={t} 
                              checked={formData.timeline === t} 
                              onChange={handleChange} 
                              className="hidden" 
                            />
                            {t}
                          </label>
                        ))}
                    </div>
                 </div>
              </div>
              
              {/* Checkbox Call */}
              <label className="flex items-center gap-3 cursor-pointer group">
                <input 
                  type="checkbox" 
                  name="callMe" 
                  checked={formData.callMe} 
                  onChange={handleChange}
                  className="w-5 h-5 rounded text-purple-600 focus:ring-purple-500 border-gray-300"
                />
                <span className="text-sm text-slate-600 group-hover:text-slate-800 transition-colors">
                  Vous pouvez m'appeler si nécessaire
                </span>
              </label>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold text-slate-700">Détails du projet</label>
              <textarea 
                name="message" 
                id="message"
                required 
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all resize-none"
                placeholder="Décrivez votre activité, vos services, les pages souhaitées et vos exemples de sites préférés..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-xl hover:-translate-y-1 transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
            </button>
            
            {error && (
              <p className="text-sm text-center text-red-500 mt-2 font-medium">
                {error}
              </p>
            )}

            <p className="text-xs text-center text-slate-400 mt-4 leading-relaxed">
              Vos données restent confidentielles. Pas de spam, promis.<br/>
              Réponse sous 24h ouvrées.
            </p>
          </form>
        </div>

      </div>
    </div>
  );
};