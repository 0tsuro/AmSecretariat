"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    rgpdConsent: false,
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    // Vérifie si l'élément est un <input> de type checkbox
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked, // Cast explicite pour accéder à checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    // Vérification de la case RGPD
    if (!formData.rgpdConsent) {
      alert("Vous devez accepter les conditions RGPD pour continuer.");
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          firstName: "",
          name: "",
          email: "",
          phone: "",
          message: "",
          rgpdConsent: false,
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center text-center py-10 px-4 pink rounded-lg shadow-lg max-w-6xl w-full mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 font-roboto">
        Contactez-nous
      </h1>
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <div className="flex flex-col items-start">
          <label htmlFor="firstName" className="text-gray-700 mb-2 font-bold">
            Prénom
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Entrez votre prénom"
          />
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="name" className="text-gray-700 font-bold mb-2">
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Entrez votre nom"
          />
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="email" className="text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Entrez votre email"
          />
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="phone" className="text-gray-700 font-bold mb-2">
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Entrez votre numéro de téléphone"
          />
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="message" className="text-gray-700 font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Écrivez votre message"
            rows={4}
          />
        </div>
        <div className="flex items-start">
          <input
            id="rgpdConsent"
            name="rgpdConsent"
            type="checkbox"
            checked={formData.rgpdConsent}
            onChange={handleChange}
            required
            className="mr-2"
          />
          <label
            htmlFor="rgpdConsent"
            className="text-gray-700 font-medium select-none"
          >
            J&apos;accepte les conditions RGPD.
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
        >
          Envoyer
        </button>
      </form>
      {status === "success" && (
        <p className="mt-4 text-green-600 font-medium">
          Email envoyé avec succès !
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-red-600 font-medium">
          Une erreur est survenue. Veuillez réessayer.
        </p>
      )}
    </div>
  );
};

export default ContactForm;
