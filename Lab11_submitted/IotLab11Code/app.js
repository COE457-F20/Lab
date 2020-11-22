var express = require('express');
var fs = require('fs');

const mongoose = require('mongoose');


var app = express();
app.set('port', process.env.PORT || 1234);


app.use(express.static(__dirname + '/public'));


// add the database 
mongoose.connect('mongodb://localhost:27017/images', { useNewUrlParser: true, useUnifiedTopology: true });
// we create a scheme first 
const imageSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: { data: Buffer, contentType: String },
});
// we create a collection called WifiQ with the wifiSchema
const Image = mongoose.model("Image", imageSchema);


app.get('/insert_pics', function (req, res) {

    var imageData1 = fs.readFileSync('imagesToSave/boy.jpg');

    const image = new Image({
        name: "Boy",
        description: "This is a boy",
        img: { data: imageData1, contentType: "image/jpeg" }
    });
    image.save()

    var imageData2 = fs.readFileSync('imagesToSave/girl.jpg');
    const image2 = new Image({
        name: "Girl",
        description: "This is a girl",
        img: { data: imageData2, contentType: "image/jpeg" }
    });
    image2.save()
    res.send("ok");
});


app.get('/get_all_faces', function (req, res) {

    Image.find({}, function (err, allFaces) {
        if (err) {
            console.log(err);
            res.send("error");
        }
        else {
            fixedFaces = []
            for (face of allFaces){
                fixedFaces.push({
                    imageString: face.img.data.toString('base64'),
                    name: face.name,
                    description: face.description,
                    contentType: face.img.contentType,
                });
            }
            res.json(fixedFaces);
        }
    });

});


app.get('/get_face', function (req, res) {

    Image.findOne({name: req.query.name}, function (err, foundFace) {
        if (err) {
            console.log(err);
            res.send("error");
        }
        else {
            console.log('node-red asked: '+foundFace);

            res.send(foundFace.img.data);
        }
    });

});



app.get('/detect_face_app', function (req, res) {
    console.log(req.query);
    res.redirect("http://localhost:1880/detect_face?name="+req.query.name);
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