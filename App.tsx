import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Menu, X, ArrowRight, Check, ChevronDown, CheckCircle, XCircle, Mail, Phone, ExternalLink } from 'lucide-react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Offers } from './pages/Offers';
import { Contact } from './pages/Contact';
import { ThankYou } from './pages/ThankYou';
import { Mentions } from './pages/Mentions';
import { Confidentialite } from './pages/Confidentialite';
import { Cgv } from './pages/Cgv';
import { Models } from './pages/Models';
import { CustomCursor } from './components/CustomCursor';
import { SmoothScroll } from './components/SmoothScroll';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <SmoothScroll />
      <CustomCursor />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offres" element={<Offers />} />
          <Route path="/modeles" element={<Models />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/merci" element={<ThankYou />} />
          <Route path="/mentions" element={<Mentions />} />
          <Route path="/confidentialite" element={<Confidentialite />} />
          <Route path="/cgv" element={<Cgv />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;