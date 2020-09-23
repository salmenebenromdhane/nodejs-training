

const express=require('express')
const router=express.Router()
const nodemailer = require("nodemailer");
var ejs = require("ejs");
var path=require('path');
require('dotenv').config();


// sending simple mail
router.post('/add', async (req,res)=>{
// Step 1
let transporter = nodemailer.createTransport({
  
  service: 'gmail',
  auth: {
      user: process.env.EMAIL || 'salmene.benromdhane@esprit.tn', // TODO: your gmail account
      pass: process.env.PASSWORD || '183JMT3041' // TODO: your gmail password
  }
});

// Step 2
let mailOptions = {
  from: 'salmene.benromdhane@esprit.tn', // TODO: email sender
  to: 'salmene.benromdhane@esprit.tn', // TODO: email receiver
  subject: 'Nodemailer - Test',
  text: 'Wooohooo it works!!',
  html: "<b>Hello world?</b>",
};

// Step 3
transporter.sendMail(mailOptions, (err, data) => {
  if (err) {
      res.json(err);
  }
  return res.json("Email sent!")
});

});

//sending mail with html file
router.post('/sendMailWithHtml', async (req,res)=>{

  // Step 1
  let transporter = nodemailer.createTransport({
    
    service: 'gmail',
    auth: {
        user: process.env.EMAIL || 'your gmail account', // TODO: your gmail account
        pass: process.env.PASSWORD || 'your gmail password' // TODO: your gmail password
    }
  });
  
  // Step 2
 let fileData = {
  name: 'Salmene.'
};
ejs.renderFile(path.resolve('./views/','EmailTemplate.html'), fileData, function (err, data) {
  if (err) {
      console.log(err);
  } else {
      var mainOptions = {
          from: '"salmene.benromdhane@esprit.tn',
          to: "salmene.benromdhane@esprit.tn",
          subject: 'Hello, world',
          html: data
      };
     // Step 3
      transporter.sendMail(mainOptions, function (err, info) {
        if (err) {
          res.json(err);
      }
          res.json("Email sent!")
      });
  }
  
  });
  
  });
  
module.exports=router;