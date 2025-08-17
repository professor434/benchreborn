import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function (req, res) {
  const { sheetUrl, name, email, message } = req.body;

  const content = `
    Νέα υποβολή:
    Sheet URL: ${sheetUrl || "-"}
    Όνομα: ${name || "-"}
    Email: ${email || "-"}
    Μήνυμα: ${message || "-"}
  `;

  try {
    await sgMail.send({
      to: "benchreborn@gmail.com",
      from: "benchreborn@gmail.com",
      subject: "BenchReborn - Νέα Υποβολή",
      text: content,
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false });
  }
}
