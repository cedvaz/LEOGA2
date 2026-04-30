import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { vorname, nachname, email, thema, nachricht } = await request.json();

  if (!vorname || !nachname || !email || !nachricht) {
    return NextResponse.json({ error: "Pflichtfelder fehlen." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "LEOGA Kontaktformular <noreply@leoga.de>",
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

  if (error) {
    return NextResponse.json({ error: "E-Mail konnte nicht gesendet werden." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
