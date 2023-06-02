// JavaScript
mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-96, 37.8],
    zoom: 3
});

let marker;

function addMarker() {
    let popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    })
        .setHTML('<h2>Location</h2><p>Your selected location</p>');

    marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat(map.getCenter())
        .setPopup(popup)
        .addTo(map);

    marker.on('dragend', () => {
        let lngLat = marker.getLngLat();
        getWeather(lngLat.lat, lngLat.lng);
    });
}

function getWeather(lat, lon) {
    const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=YOUR_OPENWEATHERMAP_APPID&units=metric;'

    fetch(url)
        .then(response => response.json())
        .then(data => showWeather(data))
        .catch(error => console.error(error));
}

function showWeather(data) {
    const cards = document.querySelector('.cards');
    cards.innerHTML = '';

    data.list.forEach(item => {
        const date = new Date(item.dt * 1000);
        const day = date.toLocaleDateString('en-US', { weekday: 'short' });
        const temp = Math.round(item.main.temp);
        const icon = item.weather[0].icon;

        const card =
            <div class="card">
                <h3>${day}</h3>
                <img src="https://openweathermap.org/img/wn/${icon}.png" alt="${item.weather[0].description}" />
                <p>${temp}°C</p>
            </div>
        ;

        cards.insertAdjacentHTML('beforeend', card);
    });
}

addMarker();

const searchButton = document.getElementById('search');
const locationInput = document.getElementById('location');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;

    if (location) {
        const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${mapboxgl.accessToken}';

        fetch(geocodeUrl)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Please enter a valid location.');
                }
            })
            .then(data => {
                if (data.features.length > 0) {
                    const lon = data.features[0].center[0];
                    const lat = data.features[0].center[1];

                    map.setCenter([lon, lat]);
                    marker.setLngLat([lon, lat]);
                    getWeather(lat, lon);
                } else {
                    throw new Error('Please enter a valid location.');
                }
            })
            .catch(error => console