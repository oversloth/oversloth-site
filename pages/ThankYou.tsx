import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-6 text-center pt-32 pb-12">
      <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-8 animate-bounce shadow-lg shadow-green-500/20">
        <CheckCircle size={40} strokeWidth={3} />
      </div>
      
      <h1 className="text-4xl font-bold text-slate-900 mb-4">Message bien reçu !</h1>
      <p className="text-lg text-slate-500 max-w-lg mb-12">
        Merci de m'avoir contacté. Je vais étudier votre demande personnellement et je reviendrai vers vous sous 24h ouvrées.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          to="/" 
          className="px-8 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all"
        >
          Retour à l'accueil
        </Link>
        <Link 
          to="/offres" 
          className="px-8 py-3 bg-white border border-slate-200 text-slate-700 rounded-full font-semibold hover:bg-slate-50 transition-all"
        >
          Revoir les offres
        </Link>
      </div>
    </div>
  );
};