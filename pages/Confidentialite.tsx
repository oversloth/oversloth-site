import React from 'react';

export const Confidentialite: React.FC = () => {
  return (
    <div className="py-20 px-6 bg-white min-h-screen pt-32">
      <div className="max-w-3xl mx-auto space-y-12 text-slate-700">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Politique de Confidentialité (RGPD)</h1>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">1. Données collectées</h2>
          <p className="text-sm leading-relaxed">
            Nom, prénom, email, téléphone via nos formulaires.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">2. Finalité</h2>
          <p className="text-sm leading-relaxed">
            Uniquement pour la gestion contractuelle et le support technique.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">3. Conservation</h2>
          <p className="text-sm leading-relaxed">
            Les données sont conservées pendant la durée de la relation contractuelle plus 3 ans.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">4. Droits</h2>
          <p className="text-sm leading-relaxed">
            Vous disposez d'un droit d'accès, de rectification et de suppression via <a href="mailto:hello@oversloth.fr" className="text-purple-600 hover:underline">hello@oversloth.fr</a>.
          </p>
        </section>
      </div>
    </div>
  );
};
