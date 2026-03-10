import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ShieldCheck, Heart, Instagram } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Offres', path: '/offres' },
    { name: 'Nos Modèles', path: '/modeles' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 overflow-x-hidden">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
        <nav
          className={`
            w-full max-w-5xl rounded-full transition-all duration-300
            flex items-center justify-between px-6 pl-8 bg-white/90 backdrop-blur-md border border-white/50
            ${isScrolled 
              ? 'py-3 shadow-xl shadow-purple-900/5' 
              : 'py-4 shadow-lg shadow-purple-900/5'
            }
          `}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="https://res.cloudinary.com/dnmhz4hmz/image/upload/q_auto,f_auto/v1770397203/logo-oversloth_xvlrjd.png" 
              alt="Oversloth Logo" 
              className="w-9 h-9 object-contain transition-transform group-hover:scale-105"
            />
            <span className="font-bold text-xl tracking-tight text-slate-800 group-hover:text-purple-600 transition-colors">Oversloth</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold transition-colors hover:text-purple-600 ${
                  location.pathname === link.path ? 'text-purple-600' : 'text-purple-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="relative group inline-block overflow-hidden rounded-full"
            >
              <div 
                className="px-6 py-3 bg-cover bg-center font-bold text-sm shadow-md group-hover:shadow-lg transition-all transform group-hover:-translate-y-0.5 text-purple-900"
                style={{
                   backgroundImage: "url('https://res.cloudinary.com/dnmhz4hmz/image/upload/v1770646359/bg-1_bsgloe.png')"
                }}
              >
                Démarrer mon projet
              </div>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-purple-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-24 px-6 md:hidden animate-fade-in-up text-slate-900">
          <div className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-semibold text-purple-900 hover:text-purple-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-4 rounded-xl font-bold mt-4 shadow-xl bg-cover bg-center text-purple-900"
              style={{
                 backgroundImage: "url('https://res.cloudinary.com/dnmhz4hmz/image/upload/v1770646359/bg-1_bsgloe.png')"
              }}
            >
              Démarrer mon projet
            </Link>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12 mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                 <img 
                    src="https://res.cloudinary.com/dnmhz4hmz/image/upload/q_auto,f_auto/v1770397203/logo-oversloth_xvlrjd.png" 
                    alt="Oversloth Logo" 
                    className="w-6 h-6 object-contain"
                  />
                <span className="font-bold text-lg text-slate-900">Oversloth</span>
              </div>
              <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
                Votre agence de création de sites web en leasing. Une présence en ligne impeccable, sans investissement initial lourd, avec maintenance incluse.
              </p>
              
              <div className="mt-6">
                <a 
                  href="https://www.instagram.com/oversloth.fr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-full text-slate-700 font-semibold hover:border-purple-300 hover:text-purple-600 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <div className="p-1 rounded-full bg-slate-100 group-hover:bg-purple-50 transition-colors">
                     <Instagram size={18} />
                  </div>
                  <span>Suivez-nous sur Instagram</span>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><Link to="/offres" className="hover:text-purple-600 transition-colors">Nos Offres</Link></li>
                <li><Link to="/modeles" className="hover:text-purple-600 transition-colors">Nos Modèles</Link></li>
                <li><Link to="/contact" className="hover:text-purple-600 transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Légal</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><Link to="/mentions" className="hover:text-purple-600 transition-colors">Mentions Légales</Link></li>
                <li><Link to="/confidentialite" className="hover:text-purple-600 transition-colors">Confidentialité</Link></li>
                <li><Link to="/cgv" className="hover:text-purple-600 transition-colors">CGV</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <p>© {new Date().getFullYear()} Oversloth Agency. Tous droits réservés.</p>
            <div className="flex items-center gap-1">
              <span>Fait avec</span>
              <Heart size={12} className="text-red-400 fill-current" />
              <span>en France</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};