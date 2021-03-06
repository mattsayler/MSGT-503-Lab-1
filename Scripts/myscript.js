// Navigation Menu
document.getElementById("nav01").innerHTML =
"<ul id='menu'>" +
"<li class='left'><a href='index.html'>Home</a></li>" +
"<li><a href='about.html'>About</a></li>" +
"<li class='right'><a href='lab1.html'>Labs</a></li>" +
"</ul>";

// Basic Leaflet map
var map = L.map('map',).setView([47.246650, -122.438894],16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Marker for Pinkerton building
L.marker([47.246650, -122.438894]).addTo(map);
