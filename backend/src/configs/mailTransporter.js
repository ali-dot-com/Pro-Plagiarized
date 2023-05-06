var nodemailer = require('nodemailer');
var mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'docadvisormail@gmail.com',
           pass: 'kxggjysrjomdyxbs'
       }
   });

module.exports = mailTransporter;