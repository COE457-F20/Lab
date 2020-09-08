roomTemp = Math.floor(Math.random() * 13) + 18;
doorIsOpen = Math.random() >= 0.5;

var sensorValues = {
    lightIsOn: doorIsOpen,
    roomTemp: roomTemp
};

if (sensorValues.roomTemp > 25) {
    console.log("It is getting too hot.. AC switched on");
} else {
    console.log("It is getting too cold.. AC switched off");
}

if (sensorValues.lightIsOn) {
    console.log("Someone just walked in...\nWelcome home... lights switched on");
} else {
    console.log("Door is closed...\nConserve Energy... lights switched off");

}

console.log("The sensor values are: ");
console.log("Temperature: " + sensorValues.roomTemp + "C");
console.log("Light-on: " + sensorValues.lightIsOn);