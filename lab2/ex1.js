roomTemp = Math.floor(Math.random() * 13) + 18;
doorIsOpen = Math.random() >= 0.5;

console.log("The room Temperature is " + roomTemp);
if (roomTemp > 25) {
    console.log("It is getting too hot.. AC switched on");
} else {
    console.log("It is getting too cold.. AC switched off");
}

if (doorIsOpen) {
    console.log("Someone just walked in...\nWelcome home... lights switched on");
} else {
    console.log("Door is closed...\nConserve Energy... lights switched off");

}