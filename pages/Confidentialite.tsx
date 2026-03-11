import React from 'react';

export const Confidentialite: React.FC = () => {
  return (
    <div className="py-20 px-6 bg-white min-h-screen pt-32">
      <div className="max-w-3xl mx-auto space-y-12 text-slate-700">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Politique de Confidentialité — Oversloth</h1>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">Section 1 — Responsable du traitement :</h2>
          <p className="text-sm leading-relaxed">
            Le responsable du traitement des données personnelles est Eden-Louis Eymeric, exerçant sous la dénomination commerciale Oversloth, auto-entrepreneur immatriculé sous le numéro SIRET 94003509000015, domicilié à 30650 Rochefort-du-Gard. Contact : <a href="mailto:hello@oversloth.fr" className="text-purple-600 hover:underline">hello@oversloth.fr</a>
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">Section 2 — Données collectées :</h2>
          <p className="text-sm leading-relaxed">
            Les données suivantes sont collectées via le formulaire de contact : nom et prénom, adresse email, numéro de téléphone (optionnel), type d'activité, message libre. Aucune donnée bancaire n'est collectée directement sur le site.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">Section 3 — Base légale du traitement :</h2>
          <p className="text-sm leading-relaxed">
            Le traitement de vos données repose sur votre consentement explicite lors de la soumission du formulaire de contact (article 6.1.a du RGPD), ainsi que sur l'intérêt légitime d'Oversloth à répondre aux demandes commerciales entrantes (article 6.1.f du RGPD).
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">Section 4 — Finalité du traitement :</h2>
          <p className="text-sm leading-relaxed">
            Vos données sont collectées uniquement dans le but de traiter votre demande de contact, d'établir un devis ou un contrat de prestation, et d'assurer le suivi de la relation commerciale.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">Section 5 — Durée de conservation :</h2>
          <p className="text-sm leading-relaxed">
            Les données des prospects (sans suite commerciale) sont conservées 1 an à compter du dernier contact. Les données des clients sont conservées pendant toute la durée du contrat puis 3 ans après sa fin, conformément aux obligations légales comptables.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">Section 6 — Destinataires des données :</h2>
          <p className="text-sm leading-relaxed">
            Vos données sont traitées exclusivement par Oversloth. Elles ne sont jamais vendues, louées ou cédées à des tiers. Elles peuvent être transmises à des sous-traitants techniques (Netlify pour l'hébergement du formulaire) dans le strict cadre de l'exécution du service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">Section 7 — Vos droits :</h2>
          <p className="text-sm leading-relaxed">
            Conformément au RGPD, vous disposez des droits suivants : droit d'accès à vos données, droit de rectification, droit à l'effacement (droit à l'oubli), droit d'opposition au traitement, droit à la portabilité de vos données (obtenir une copie dans un format structuré). Pour exercer ces droits, contactez : <a href="mailto:hello@oversloth.fr" className="text-purple-600 hover:underline">hello@oversloth.fr</a>. Vous disposez également du droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) sur le site <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">www.cnil.fr</a>.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">Section 8 — Cookies :</h2>
          <p className="text-sm leading-relaxed">
            Ce site n'utilise pas de cookies de tracking ou publicitaires. Seuls des cookies techniques strictement nécessaires au bon fonctionnement du site peuvent être utilisés.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">Section 9 — Réclamation auprès de la CNIL :</h2>
          <p className="text-sm leading-relaxed">
            Si vous estimez que vos droits ne sont pas respectés, vous disposez du droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL), autorité de contrôle française, sur le site <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">www.cnil.fr</a> ou par courrier à l'adresse : CNIL, 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07.
          </p>
        </section>
      </div>
    </div>
  );
};
