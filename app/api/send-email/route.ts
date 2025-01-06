import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { firstName, name, email, phone, message, rgpdConsent } =
    await req.json();

  // Vérification des champs requis
  if (!firstName || !name || !email || !phone || !message || !rgpdConsent) {
    return NextResponse.json(
      { message: "Tous les champs obligatoires doivent être remplis." },
      { status: 400 }
    );
  }

  try {
    // Configuration du transporteur SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Serveur SMTP
      port: 587, // Port pour les connexions sécurisées STARTTLS
      secure: false, // Utilisation de STARTTLS
      auth: {
        user: "nath02.chaput@gmail.com", // Ton adresse email
        pass: "nkjw mxub qpfy swxw", // Mot de passe ou token SMTP
      },
    });

    // Envoi de l'email
    await transporter.sendMail({
      from: '"Formulaire de Contact" <nath02.chaput@gmail.com>',
      to: "nath02.chaput@gmail.com", // Adresse de réception
      subject: "Nouveau message depuis le formulaire",
      text: `
Prénom : ${firstName}
Nom : ${name}
Email : ${email}
Téléphone : ${phone}
Message : ${message}
Consentement RGPD : Oui
      `,
    });

    return NextResponse.json({ message: "Email envoyé avec succès." });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email :", error);
    return NextResponse.json(
      { message: "Erreur lors de l'envoi de l'email." },
      { status: 500 }
    );
  }
}
