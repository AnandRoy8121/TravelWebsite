// pages/api/sendEmail.js

import nodemailer from 'nodemailer';
import ejs from 'ejs';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, personCount, email, phone, tourId,tourName,value } = req.body;
    console.log(req.body)
    // Create a Nodemailer transporter using your SMTP server credentials
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.email,
          pass: process.env.pass,
        },
      });
  

    // Compose the email
    // await const mailOptions = {
    //   from: process.env.email,
    //   to: process.env.email,
    //   subject: "Test Email",
    //   text: name+" "+personCount+" "+email+" "+phone+" "+tourId+" "+tourName,
    // };
    //const emailTemplate = fs.readFileSync('./templates/Emailtemplate.ejs', 'utf-8');

    // Render the email template with custom data
    //const renderedTemplate = ejs.render(emailTemplate, { tourName, name, personCount, email, phone });
    try {
    const templatePath = path.join('./templates/', 'Emailtemplate.html');
    const template = fs.readFileSync(templatePath, 'utf-8');
    const dateVal = JSON.parse(JSON.stringify(value))

    // Replace placeholders with dynamic data
    const dynamicData = {
        name: name,
        person: personCount,
        date : dateVal["startDate"].toString()+" to "+dateVal["endDate"].toString(),
        email: email,
        phone:phone,
        tourName: tourName

    };
    const html = template.replace(/{{(\w+)}}/g, (match, key) => dynamicData[key]);

    await transporter.sendMail({
      from: process.env.email,
      to: email,
      subject: 'Thank For Reaching Out To North South Tours & Travels',
      html: html,
    });


    // Send email to the admin
    // await transporter.sendMail({
    //   from: process.env.email,
    //   to: process.env.email,
    //   subject: 'New form submission',
    //   text: `You have received a new form submission:\n\nName:
    //    ${name+" "+personCount+" "+email+" "+phone+" "+tourId+" "+tourName}`,
    // });

    const adminTemplatePath = path.join('./templates/', 'adminEmailtemplate.html');
    const adminTemplate = fs.readFileSync(adminTemplatePath, 'utf-8');
    const travelDateVal = JSON.parse(JSON.stringify(value))

    // Replace placeholders with dynamic data
    const addminDynamicData = {
        name: name,
        person: personCount,
        date : travelDateVal["startDate"].toString()+" to "+travelDateVal["endDate"].toString(),
        email: email,
        phone:phone,
        tourName: tourName

    };
    const htmlTemplate = adminTemplate.replace(/{{(\w+)}}/g, (match, key) => addminDynamicData[key]);
    
    await transporter.sendMail({
      from: process.env.email,
      to: process.env.email,
      subject: `You received new enquiry from ${name}`,
      html: htmlTemplate,
    });

    
      // Send the email
      //await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ error});
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
