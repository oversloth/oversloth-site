import React from 'react';

export const Mentions: React.FC = () => {
  return (
    <div className="py-20 px-6 bg-white min-h-screen pt-32">
      <div className="max-w-3xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Mentions Légales</h1>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">1. Éditeur du site</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Le site Oversloth est édité par l'agence Oversloth SAS.<br/>
            Siège social : [Adresse de l'agence]<br/>
            SIRET : [Numéro SIRET]<br/>
            Directeur de la publication : [Nom du fondateur]<br/>
            Contact : hello@oversloth.fr
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">2. Hébergement</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Ce site est hébergé par Netlify, Inc.<br/>
            2325 3rd Street, Suite 215, San Francisco, California 94107, USA.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">3. Propriété intellectuelle</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">4. Données personnelles</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Les informations recueillies via le formulaire de contact sont enregistrées dans un fichier informatisé par Oversloth pour la gestion de notre clientèle. Elles sont conservées pendant 3 ans. Conformément à la loi « informatique et libertés », vous pouvez exercer votre droit d'accès aux données vous concernant et les faire rectifier en nous contactant.
          </p>
        </section>
      </div>
    </div>
  );
};