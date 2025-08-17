// api/send-mail.js

import sgMail from "@sendgrid/mail";

export default async function handler(req, res) {
  const { sheetUrl, name, email, message } = req.body;

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const content = `
    ΝΕΑ ΥΠΟΒΟΛΗ ΑΠΟ BenchReborn:\n
    Google Sheet URL: ${sheetUrl || "-"}
    Όνομα: ${name || "-"}
    Email: ${email || "-"}
    Μήνυμα: ${message || "-"}
  `;

  try {
    await sgMail.send({
      to: "benchreborn@gmail.com",
      from: "benchreborn@gmail.com",
      subject: "Νέα υποβολή από τον χρήστη",
      text: content,
    });
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("SendGrid Error:", error);
    return res.status(500).json({ ok: false });
  }
}
