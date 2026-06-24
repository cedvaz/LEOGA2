import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const { vorname, nachname, email, thema, nachricht, _hp, _t } = await request.json();

  if (_hp) {
    return NextResponse.json({ success: true });
  }

  if (typeof _t === "number" && _t < 3000) {
    return NextResponse.json({ success: true });
  }

  const urlCount = (nachricht?.match(/https?:\/\//g) || []).length;
  if (urlCount > 2) {
    return NextResponse.json({ success: true });
  }

  if (!vorname || !nachname || !email || !nachricht) {
    return NextResponse.json({ error: "Pflichtfelder fehlen." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.strato.de",
    port: 465,
    secure: true,
    auth: {
      user: "info@leoga.de",
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: "LEOGA Kontaktformular <info@leoga.de>",
      to: "info@leoga.de",
      replyTo: email,
      subject: `Neue Anfrage: ${thema} – ${vorname} ${nachname}`,
      text: `Name: ${vorname} ${nachname}\nE-Mail: ${email}\nThema: ${thema}\n\n${nachricht}`,
      html: `
        <h2>Neue Kontaktanfrage über leoga.de</h2>
        <p><strong>Name:</strong> ${vorname} ${nachname}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Thema:</strong> ${thema}</p>
        <hr />
        <p><strong>Nachricht:</strong></p>
        <p>${nachricht.replace(/\n/g, "<br/>")}</p>
      `,
    });
  } catch (err) {
    console.error("[SMTP Error]", err);
    const message = err instanceof Error ? err.message : "Unbekannter Fehler";
    return NextResponse.json({ error: message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
