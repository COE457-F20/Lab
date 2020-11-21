var express = require('express');
var fs = require("fs");

var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(__dirname + '/public'));
app.set('port', process.env.PORT || 3000);

// ---------------------------------------

// add the database 
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/images', { useNewUrlParser: true, useUnifiedTopology: true });
// we create a scheme first 
const imageSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: { data: Buffer, contentType: String}
});

const Image = mongoose.model("Image", imageSchema);

// var imageData1 = fs.readFileSync('C:\\Users\\Tasli\\Desktop\\Node Folder\\IoTCourse\\Lab11\\images\\boy.jpg');

// const image = new Image({
//     name: "Boy",
//     description: "Cute happy boy",
//     img: {data: imageData1, contentType : "'image/jpeg'"}
// });
// image.save()

// var imageData2 = fs.readFileSync('C:\\Users\\Tasli\\Desktop\\Node Folder\\IoTCourse\\Lab11\\images\\girl.jpg');
// const image2 = new Image({
//     name: "Girl",
//     description: "Young confused girl",
//     img: {data: imageData2, contentType : "'image/jpeg'"}
// });
// image2.save()


//------------------------------------------------
app.get('/images', function (req, res) {
    Image.find({}, function (err, images) {
        if (err) {
            res.status(400).send("ERROR");
        } else {
            res.render("images.ejs",{images:images});
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

// launch 
app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
