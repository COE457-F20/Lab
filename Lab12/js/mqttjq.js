var wsbroker = "localhost";  //mqtt websocket enabled broker
var wsport = 9001 // port for above
// create client using the Paho library
var client = new Paho.MQTT.Client(wsbroker, wsport,
    "myclientid_" + parseInt(Math.random() * 100, 10));
client.onConnectionLost = function (responseObject) {
    console.log("connection lost: " + responseObject.errorMessage);
};
client.onMessageArrived = function (message) {
    if(message.destinationName == "coe457/emotions"){
        $(".messages").append('<h1 style="color:green;font-family: Arial, Helvetica, sans-serif;">' +
        message.payloadString + '</h1>');
    }else{
        $(".messages").append('<img src="'+message.payloadString +'"/>');
    }
};
var options = {
    timeout: 3,
    onSuccess: function () {
        console.log("mqtt connected");
        // Connection succeeded; subscribe to our topic, you can add multile lines of these
        client.subscribe("coe457/emotions", { qos: 1 });
        client.subscribe("coe457/images", { qos: 1 });
    },
    onFailure: function (message) {
        console.log("Connection failed: " + message.errorMessage);
    }
};

function init() {
    client.connect(options);
}
