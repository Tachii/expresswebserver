var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

// Show Contact Form
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

//Process Post Data
router.post('/send', function(req, res, next) {
  var transporter = nodemailer.createTransport({
  	serveice: "Gmail",
  	auth: {
  		user: '',
  		pass: ''
  	}
  });
  
  var mailOptions = {
  	from: 'John Doe <johndoe@outlook.com',
  	to: 'zaveruha007@gmail.com',
  	subject: 'Website Sumbmission',
  	text: 'You have a new submission with the following details...Name: '+req.body.name+'Email: '+req.body.email+'Message: '+req.body.message,
  	html: '<p>You got a new message </p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
  	if(error){
  		console.log(error);
  		res.redirect('/');
  	} else {
  		console.log("Message Sent");
  		res.redirect('/');
  	}
  });
});

module.exports = router;