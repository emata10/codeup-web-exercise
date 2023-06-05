var city = "El Paso"; // You can replace "El Paso" with any city you want or get it from user input.
// console.log(myWeatherKey);
$(function() {



// Display current weather conditions
$.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?q=" + city
        + "&units=imperial&appid=" + myWeatherKey,
    type: "GET",
    dataType: "json",
    success: function (data) {
        $("#current-city").html(data.name);
        $("#current-country").html(data.sys.country);
        $("#current-icon").html("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>");
        $("#current-temp").html(Math.round(data.main.temp) + " &#8457;");
        $("#current-humidity").html("Humidity: " + data.main.humidity + "%");
        $("#current-desc").html(data.weather[0].description);
    }
});

// Display Five-Day forecast
$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + myWeatherKey,
    type: "GET",
    dataType: "json",
    success: function (data) {
        var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        for (var i = 0; i < 5; i++) {
            var date = new Date();
            date.setDate(date.getDate() + i);
            $(".day-of-week").eq(i).html(daysOfWeek[date.getDay()]);
            $(".icon").eq(i).html("<img src='http://openweathermap.org/img/w/" + data.list[i * 8].weather[0].icon + ".png'>");
            $(".temp").eq(i).html(Math.round(data.list[i * 8].main.temp) + " &#8457;");
            $(".desc").eq(i).html(data.list[i * 8].weather[0].description);
        }
    }
})



// Access Token definition
// var accessToken = myBoxKey;
mapboxgl.accessToken = myBoxKey;

// Map instance creation

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 3,
    center: [-106.4959, 31.7574]
});
// Add geocoder to the map
// map.on('load', function () {
//     map.addControl(
//         new MapboxGeocoder({
//             accessToken: mapboxgl.accessToken,
//             mapboxgl: mapboxgl
//         })
//     );
// });

// Place marker on click event
// map.on('click', function (e) {
//     var coordinates = e.lngLat;
//     var longitude = coordinates.lng;
//     var latitude = coordinates.lat;
// });

// TexInfo object
var texInfo = {
    address: "6701 Convair Rd, El Paso 79925",
    popupHTML: "<p>Welcome to mini Mexico!</p>"
};


// Place marker and popup function
function placeMarkerAndPopup(info, token, map) {
    geocode(info.address, token).then(function (coordinates) {
        var popup = new mapboxgl.Popup()
            .setHTML(info.popupHTML);
        var marker = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map)
            .setPopup(popup);
        popup.addTo(map);
        marker.addTo(map)

    });
}
placeMarkerAndPopup(texInfo, myBoxKey, map);

// mapboxgl.accessToken = myBoxKey;
// var map = new mapboxgl.Map({
//     container: 'map', // Container ID
//     style: 'mapbox://styles/mapbox/streets-v11',
//     center: [-96, 37.8],
//     zoom: 3
// });

// var geocoder = new MapboxGeocoder({
//     accessToken: mapboxgl.accessToken,
//     mapboxgl: mapboxgl
// });
});