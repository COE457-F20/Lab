var express = require('express');
var nodemailer = require('nodemailer');

var app = express();
app.set('port', process.env.PORT || 1234);

app.use(express.static(__dirname + '/public'));


var bodyParser = require('body-parser');
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// process_get to process the post.html input
app.post('/process_post', urlencodedParser, function (req, res) {

    // Prepare output in JSON format
    var response = {
        name: req.body.name,
        email: req.body.email,
        msg: req.body.msg,
    };

    var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        service: 'Gmail',
        auth: {
            user: "@gmail.com", // this should be YOUR GMAIL account
            pass: "" // this should be your password
        }
    });

    var mailOptions = {
        from: response.email,
        to: '@gmail.com',
        subject: response.name + 'Sent an email through the contact form!',
        text: 'name: ' + response.name + '\nemail: ' + response.email + '\nmessage: ' + response.msg,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/success.html');
        }
    });
});


// custom 404 page 
app.use(function (req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

// custom 500 page 
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});