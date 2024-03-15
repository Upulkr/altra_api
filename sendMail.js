import nodemailer from "nodemailer";

const Email = (options) => {
  let transpoter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
  });

  transpoter.sendMail(options, (err, info) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Email sent:", info);
  });
};

const EmailSender = ({ name, email, phoneNumber, message }) => {
  const customerDetailsOptions = {
    from: `Customer Request to Altra Scientific`,
    to: process.env.SEND_TO,
    subject: "Message From a customer",
    html: `
          <div style="width: 100%; background-color: #f3f9ff; padding: 5rem 0">
          <div style="max-width: 700px; background-color: white; margin: 0 auto">
         
            <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
              <p style="font-weight: 800; font-size: 1.2rem; padding: 0 30px">
              From ${name}
              </p>
              <div style="font-size: .8rem; margin: 0 30px">
                <p>name: <b>${name}</b></p>
                <p>Email: <b>${email}</b></p>
                <p>phoneNumber: <b>${phoneNumber}</b></p>
                <p>Message: <i>${message}</i></p>
              </div>
            </div>
          </div>
        </div>
          `,
  };
  const shaneTextileResponseOptions = {
    from: `Altra Scientific`,
    to: email,
    subject: "Regarding your message to Altra Scientific",
    html: `
      <div style=" padding: 15px; border-top: 4px solid #D97706; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <p style="font-size: 18px; font-weight: bold; color: #1F2937;">
                Hi ${name}, thank you for reaching out to Altra Scientific!
            </p>
            <p style="margin-top: 10px; font-size: 16px; color: #6B7280;">
                We've received your message, and our dedicated customer service team is diligently working to provide you with a prompt and satisfactory response. Your satisfaction is our priority, and we appreciate your patience.
            </p>
        </div>
    `,
  };

  Email(customerDetailsOptions);
  Email(shaneTextileResponseOptions);
};

export default EmailSender;
