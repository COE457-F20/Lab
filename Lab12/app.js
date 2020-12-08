var mqtt = require('mqtt')
var client = mqtt.connect('ws://localhost:9001')

client.on('connect', function () {

    client.subscribe('coe457/emotions', function (err) {
        if (err) {
            console.log(err);
        }
    });
    client.subscribe('coe457/images', function (err) {
        if (err) {
            console.log(err);
        }
    });
})

client.on('message', function (topic, message) {
    if(topic == "coe457/emotions"){
        console.log(message.toString());
    }
    
})