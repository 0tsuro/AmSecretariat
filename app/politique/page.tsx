import Link from "next/link";
import Image from "next/image";

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white text-gray-800 p-6 shadow-md">
        <div className="container mx-auto flex justify-center items-center">
          <h1 className="text-2xl font-bold flex items-center space-x-4">
            <Image src="/logo.png" alt="Logo" width={100} height={100} />
            <span>AmSecretariat</span>
          </h1>
        </div>
      </header>

      <nav className="container mx-auto text-center py-4">
        <Link
          href="/"
          className="text-lg font-medium text-blue-500 hover:text-blue-700 transition-colors"
        >
          Retour à la page d&apos;accueil
        </Link>
      </nav>

      <main className="container mx-auto p-6 mt-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-8">
          Politique de Confidentialité
        </h1>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p>
            La présente politique de confidentialité a pour objectif de vous
            informer sur la manière dont nous collectons, utilisons et
            protégeons vos données personnelles lors de votre utilisation de
            notre site.
          </p>

          <h2 className="text-2xl font-semibold">2. Informations collectées</h2>
          <p>
            Nous collectons les informations suivantes lorsque vous utilisez
            notre site :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Cookies</strong> : Nous utilisons des cookies pour
              améliorer l&apos;expérience utilisateur.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold">
            3. Utilisation des informations
          </h2>
          <p>
            Les informations collectées sont utilisées pour les finalités
            suivantes :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Améliorer la navigation sur notre site.</li>
            <li>Personnaliser votre expérience.</li>
            <li>
              Répondre à vos demandes (formulaire de contact, support client).
            </li>
            <li>Envoyer des newsletters si vous y êtes abonné(e).</li>
          </ul>

          <h2 className="text-2xl font-semibold">4. Protection des données</h2>
          <p>
            Nous mettons en œuvre des mesures de sécurité techniques et
            organisationnelles pour protéger vos données personnelles contre
            tout accès non autorisé, toute altération, divulgation ou
            destruction.
          </p>

          <h2 className="text-2xl font-semibold">5. Partage des données</h2>
          <p>
            Nous ne vendons ni ne louons vos données personnelles à des tiers.
            Toutefois, nous pouvons partager vos informations avec des
            prestataires de services tiers pour assurer le bon fonctionnement du
            site ou pour répondre à vos demandes, dans la limite du nécessaire.
          </p>

          <h2 className="text-2xl font-semibold">6. Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez des droits suivants concernant
            vos données :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Droit d&apos;accès</strong> : Vous pouvez demander
              l&apos;accès à vos données personnelles.
            </li>
            <li>
              <strong>Droit de rectification</strong> : Vous pouvez corriger vos
              données si elles sont inexactes.
            </li>
            <li>
              <strong>Droit à l&apos;effacement</strong> : Vous pouvez demander
              la suppression de vos données dans certains cas.
            </li>
            <li>
              <strong>Droit d&apos;opposition</strong> : Vous pouvez vous
              opposer à l&apos;utilisation de vos données à des fins de
              marketing direct.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold">7. Cookies</h2>
          <p>
            Nous utilisons des cookies pour améliorer votre expérience sur notre
            site. Vous pouvez gérer vos préférences de cookies dans les
            paramètres de votre navigateur. Pour plus de détails, consultez
            notre <strong>politique de cookies</strong>.
          </p>

          <h2 className="text-2xl font-semibold">
            8. Modification de la politique de confidentialité
          </h2>
          <p>
            Nous nous réservons le droit de modifier cette politique de
            confidentialité à tout moment. Toute modification sera publiée sur
            cette page avec la date de mise à jour.
          </p>

          <h2 className="text-2xl font-semibold">9. Contact</h2>
          <p>
            Pour toute question concernant cette politique de confidentialité,
            vous pouvez nous contacter à l&apos;adresse suivante :
            siteinnovants@gmail.com.
          </p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-6 mt-12">
        <div className="container mx-auto text-center">
          <p>
            Fait avec ❤️ par <a href="https://www.webmaniak.fr/">WebManiak</a>{" "}
            &copy; {new Date().getFullYear()}. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
