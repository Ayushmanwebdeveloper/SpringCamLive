mapboxgl.accessToken = 'pk.eyJ1IjoiYXl1c2htYW4wNzciLCJhIjoiY2wxZXVpZXI2MHVydzNmcDNzZjJ5dzMwMyJ9.ZaUXQCKVoKzQ18mToYxcPQ';
const map1 = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10', // stylesheet location
    center: campground.geometry.coordinates, // starting position [lng, lat]
    zoom: 10 // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());


new mapboxgl.Marker()
    .setLngLat(campground.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
        .setHTML(
            `<h3>${campground.title}</h3><p>${campground.location}</p>`
        )
    )
    .addTo(map)



import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoiYXl1c2htYW4wNzciLCJhIjoiY2wxZXVpZXI2MHVydzNmcDNzZjJ5dzMwMyJ9.ZaUXQCKVoKzQ18mToYxcPQ';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});