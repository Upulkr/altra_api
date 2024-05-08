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
  });
};

const EmailSender = ({ name, email, phoneNumber, message }) => {
  const customerDetailsOptions = {
    from: `sales@altrascientific.com`,
    to: process.env.SEND_TO,
    subject: "Request from Customer - Website",
    html: `
          <div style="width: 100%; background-color: #f3f9ff; padding: 5rem 0">
          <div style="max-width: 700px; background-color: white; margin: 0 auto">
         
            <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
              <p style="font-weight: 800; font-size: 1.2rem; padding: 0 30px">
              From ${name}
              </p>
              <div style="font-size: .8rem; margin: 0 30px">
                <p>Customer name: <b>${name}</b></p>
                <p>Customer Email: <b>${email}</b></p>
                <p>Customer phoneNumber: <b>${phoneNumber}</b></p>
                <p>Customer Request: <i>${message}</i></p>
              </div>
            </div>
          </div>
        </div>
          `,
  };
  const shaneTextileResponseOptions = {
    from: `sales@altrascientific.com`,
    to: email,
    subject: "Regarding your message to Altra Scientific",
    html: `
      <div style=" padding: 15px; border-top: 4px solid #D97706; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <img src="https://i.postimg.cc/52CWSMjC/header-Logo.png" alt="Customer Care" style="display: block; margin: 0 auto; max-width:300px; width: 200px; height: auto;">
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
