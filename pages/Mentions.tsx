import React from 'react';

export const Mentions: React.FC = () => {
  return (
    <div className="py-20 px-6 bg-white min-h-screen pt-32">
      <div className="max-w-3xl mx-auto space-y-12 text-slate-700">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Mentions légales – Oversloth</h1>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">1. Éditeur du site</h2>
          <p className="text-sm leading-relaxed">
            Le site internet Oversloth est édité par Eden-Louis Eymeric, entrepreneur individuel exerçant sous le statut d’auto-entrepreneur. L’activité est exploitée sous la dénomination commerciale Oversloth.<br/><br/>
            Le siège de l’entreprise est situé à 30650 Rochefort-du-Gard, France. L’entreprise est immatriculée sous le numéro SIRET 94003509000015.<br/><br/>
            Le directeur de la publication est Eden-Louis Eymeric.<br/><br/>
            Pour toute question ou demande d’information, il est possible de contacter l’éditeur à l’adresse suivante : <a href="mailto:hello@oversloth.fr" className="text-purple-600 hover:underline">hello@oversloth.fr</a>.<br/><br/>
            L’entreprise est soumise au régime de la franchise en base de TVA. Conformément à l’article 293 B du Code général des impôts, la TVA n’est pas applicable.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">2. Hébergement</h2>
          <p className="text-sm leading-relaxed">
            Le site internet est hébergé par la société Netlify, Inc., dont le siège social est situé 2325 3rd Street, San Francisco, CA 94107, États-Unis.<br/><br/>
            Cet hébergeur assure la mise à disposition des infrastructures techniques nécessaires au fonctionnement et à l’accessibilité du site.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">3. Propriété intellectuelle</h2>
          <p className="text-sm leading-relaxed">
            L’ensemble des éléments présents sur le site Oversloth, incluant notamment son architecture, son design, ses éléments graphiques, ses textes, ses visuels ainsi que le code source, constituent la propriété exclusive d’Oversloth sauf mention contraire.<br/><br/>
            Toute reproduction, représentation, modification, publication, transmission ou exploitation, totale ou partielle, de ces éléments sans autorisation préalable de l’éditeur est strictement interdite et constitue une violation des dispositions relatives à la propriété intellectuelle.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">4. Responsabilité</h2>
          <p className="text-sm leading-relaxed">
            Oversloth s’efforce de fournir sur ce site des informations aussi précises et à jour que possible. Toutefois, l’éditeur ne saurait être tenu responsable des erreurs, omissions ou éventuelles inexactitudes pouvant apparaître sur le site.<br/><br/>
            L’utilisateur reconnaît utiliser les informations disponibles sous sa responsabilité exclusive. Oversloth ne pourra être tenu responsable d’une mauvaise utilisation du site ou des services proposés.<br/><br/>
            Dans le cadre des prestations réalisées par Oversloth, les contenus validés par les clients pour publication sur leurs sites internet, qu’il s’agisse de textes, d’images, de vidéos, de logos ou de tout autre élément, relèvent de la responsabilité exclusive des clients. La validation finale des contenus par le client transfère la responsabilité légale et éditoriale de ces contenus au client.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">5. Litiges</h2>
          <p className="text-sm leading-relaxed">
            Tout litige relatif à l’utilisation du site ou aux services proposés par Oversloth sera soumis au droit français.<br/><br/>
            En cas de litige et à défaut de résolution amiable, la juridiction compétente sera celle du ressort du siège social de l’éditeur, à savoir le tribunal de Nîmes.
          </p>
        </section>
      </div>
    </div>
  );
};