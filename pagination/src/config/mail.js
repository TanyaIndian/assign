const nodemailer = require("nodemailer");


let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "57d304e7555aad", // generated ethereal user
      pass: "c7f8863579ac5f", // generated ethereal password
    },
  });

  module.exports = transporter