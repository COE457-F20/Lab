roomTemp = []
doorIsOpen = Math.random() >= 0.5;

for (i = 0; i < 20; i++) {
    roomTemp.push(Math.floor(Math.random() * 13) + 18);
    // console.log(roomTemp[i]);
}
var maxTemp = Math.max.apply(null, roomTemp);
var sensorValues = {
    lightIsOn: doorIsOpen,
    roomTemp: maxTemp
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