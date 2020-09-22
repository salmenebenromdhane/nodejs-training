

const express=require('express')
const router=express.Router()
const nodemailer = require("nodemailer");

require('dotenv').config();


// add new todo
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


module.exports=router;