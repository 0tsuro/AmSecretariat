import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Remplace par l'adresse du serveur SMTP
      port: 587, // Port pour TLS (non sécurisé), ou 465 pour SSL
      auth: {
        user: process.env.SMTP_USER, // Ton email
        pass: process.env.SMTP_PASS, // Ton mot de passe ou token SMTP
      },
    });

    await transporter.sendMail({
      from: `"Formulaire" <${process.env.SMTP_USER}>`, // Utilisation de l'email stocké
      to: process.env.SMTP_USER, // Envoi vers ton propre email
      subject: "Nouveau message depuis le formulaire",
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return NextResponse.json({ message: "Email envoyé avec succès" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Erreur lors de l'envoi de l'email" },
      { status: 500 }
    );
  }
}
