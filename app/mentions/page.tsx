import Link from "next/link";
import Image from "next/image";

export default function MentionsLegales() {
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
          Mentions Légales
        </h1>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">1. Éditeur du site</h2>
          <p>
            Le site <strong>AmSecretariat</strong> est édité par :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Raison sociale</strong> : [Nom de l’entreprise ou de la
              personne]
            </li>
            <li>
              <strong>Statut juridique</strong> : [Auto-entrepreneur / SARL /
              SAS]
            </li>
            <li>
              <strong>Siège social</strong> : [Adresse complète]
            </li>
            <li>
              <strong>Numéro SIRET</strong> : [Numéro]
            </li>
            <li>
              <strong>RCS</strong> : [Ville du registre du commerce]
            </li>
            <li>
              <strong>Adresse e-mail</strong> : [Adresse de contact]
            </li>
            <li>
              <strong>Téléphone</strong> : [Numéro de contact]
            </li>
          </ul>

          <h2 className="text-2xl font-semibold">2. Hébergeur</h2>
          <p>Le site est hébergé par :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Nom de l’hébergeur</strong> : [Exemple : OVH, AWS]
            </li>
            <li>
              <strong>Siège social</strong> : [Adresse complète]
            </li>
            <li>
              <strong>Téléphone</strong> : [Numéro]
            </li>
            <li>
              <strong>Site web</strong> : [Lien]
            </li>
          </ul>

          <h2 className="text-2xl font-semibold">
            3. Propriété intellectuelle
          </h2>
          <p>
            Le contenu du site (textes, images, illustrations, vidéos, logos,
            etc.) est la propriété exclusive de [Nom]. Toute reproduction,
            modification ou publication est interdite sauf autorisation écrite
            préalable.
          </p>

          <h2 className="text-2xl font-semibold">4. Données personnelles</h2>
          <p>
            Le traitement des données personnelles respecte les dispositions du
            RGPD. Vous disposez d’un droit d’accès et de rectification.
            Contactez-nous à [E-mail].
          </p>

          <h2 className="text-2xl font-semibold">5. Cookies</h2>
          <p>
            Le site utilise des cookies pour améliorer l’expérience utilisateur.
            Consultez notre politique de cookies pour plus de détails.
          </p>

          <h2 className="text-2xl font-semibold">
            6. Limitation de responsabilité
          </h2>
          <p>
            [Nom de l’entreprise ou de la personne] ne pourra être tenu
            responsable des dommages causés par l’utilisation du site ou d’un
            matériel incompatible.
          </p>

          <h2 className="text-2xl font-semibold">7. Contact</h2>
          <p>Pour toute question, contactez-nous à [Adresse e-mail].</p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-6 mt-12">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} AmSecretariat. Tous droits
            réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
