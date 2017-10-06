document.getElementById("nav01").innerHTML =
"<ul id='menu'>" +
"<li><a href='index.html'>Home</a></li>" +
"<li><a href='about.html'>About</a></li>" +
"<li><a href='lab1.html'>Labs</a></li>" +
"</ul>";

var map = L.map('map',).setView([47.246650, -122.438894],16);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([47.246650, -122.438894]).addTo(map);