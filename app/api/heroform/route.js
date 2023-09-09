import nodemailer from "nodemailer";

export const POST = async (req, res) => {
  try {
    const { topic, email, phoneNumber, wordCount, deadline} = await req.json();

    const toEmail = process.env.SMTPEMAIL; // Replace with the actual recipient email
    const password = process.env.SMTPPASSWORD; // Replace with the actual recipient email
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.sendinblue.com",
      port: 587,
      secure: false,
      auth: {
        user: toEmail,
        pass: password,
      },
    });

    const mailOptions = {
      from: toEmail,
      to: toEmail,
      subject: `CONTACT: Query received from ${email}`,
      text: `
        Topic: ${topic}
        Email: ${email}
        Phone Number: ${phoneNumber}
        Word Count: ${wordCount}
        Deadline: ${deadline}
      `,
    };

    await transporter.sendMail(mailOptions);
    return new Response("Request Sent", { status: 200 });
} catch (error) {
  console.error("Error handling form data:", error);
  return new Response("Failed to send request", { status: 500 });
}
};
