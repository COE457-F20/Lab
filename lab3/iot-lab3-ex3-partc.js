var net = require('net');
var client = new net.Socket();
// add your phone's IP and port
client.connect(4242, '192.168.0.143', function () {
    console.log("connected to the logger");
});
// call backs to process events
// -- when receiving data
client.on('data', function (data) {
    try {
        //convert data to a JSON object
        acc = JSON.parse(data.toString());
        console.log(acc.accelerometer.value);
    } catch (err) {
        console.log(err.message);
    }
});
// -- when closing connection
client.on('close', function () {
    console.log('Connection closed');
});