document.getElementById("nav01").innerHTML =
"<ul id='menu'>" +
"<li class='left'><a href='index.html'>Home</a></li>" +
"<li><a href='about.html'>About</a></li>" +
"<li class='right'><a href='lab1.html'>Labs</a></li>" +
"</ul>";

var map = L.map('map',).setView([47.246650, -122.438894],16);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([47.246650, -122.438894]).addTo(map);

//$("#overlayDIV").on("click","div", function() {
//    console.log("I hear you");
//    $(this).remove(); 
//});

$("div").on("click", "div", function() {
  console.log("I hear you");
});
