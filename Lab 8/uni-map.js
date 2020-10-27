var map;
var dir;

var currentMarker;

window.onload = function () {

    map = L.map('map', {
        layers: MQ.mapLayer(),
        center: [25.312355, 55.489484],
        zoom: 15
    });


}

function onFindClick() {
    var coordsString = $("#address").val();
    var coordsArr = coordsString.split(", ");
    var currentLocation = { lat: coordsArr[0], lng: coordsArr[1] };

    if (currentMarker == null) {
        currentMarker = new L.Marker(currentLocation);
        currentMarker.bindPopup("Current Location").openPopup();
        map.addLayer(currentMarker);
    }
    else {
        currentMarker.setLatLng(currentLocation);
    }
    map.setView(currentLocation);

}

function onNamedFindClick() {
    var locString = $("#namedAddress").val();
    var locString = encodeURI(locString);
    $.get("https://api.mapbox.com/geocoding/v5/mapbox.places/" + locString + ".json?access_token=pk.eyJ1IjoiYXphZGFuIiwiYSI6ImNrZ3MxOHR2cDBnb24yemt5MWR2d2g5cXMifQ.9-pHb0rNjf9yc3Tc4Bo79g", function (data) {
        var currentLocation = data.features[0].geometry.coordinates;
        var currentLocation = [currentLocation[1], currentLocation[0]];

        if (currentMarker == null) {
            currentMarker = new L.Marker(currentLocation);
            currentMarker.bindPopup("Current Location").openPopup();
            map.addLayer(currentMarker);
        }
        else {
            currentMarker.setLatLng(currentLocation);
        }
        map.setView(currentLocation);
    });
}