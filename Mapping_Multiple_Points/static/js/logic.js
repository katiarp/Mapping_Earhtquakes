//Add console.log to check if code is working
console.log("working");

//Create the map object with a center and zoom level

let map = L.map('mapid').setView([40.7, -94.5], 4);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
 
// Then we add our 'graymap' tile layer to the map

streets.addTo(map);

//Add a marker to the map for LA, CA
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// let marker = L.circle([34.0522, -118.2437], {
//     radius: 100
// }).addTo(map);

// var circle = L.circle([34.0522, -118.2437], {
//     color: 'black',
//     fillColor: 'yellow',
//     fillOpacity: 0.15,
//     radius: 300
// }).addTo(map);

// let circle= L.circleMarker([34.0522, -118.2437], {
//     radius: 30,
//     color: "black",
//     fillColor: '#ffffa1'
// }).addTo(map);

// Get data from cities.js

let cityData = cities;


// loop through the cities array and create one marker for each city
  cityData.forEach(function(city){
    console.log(city)
    L.circleMarker(city.location, {
      radius:city.population/100000
    }).addTo(map)
    .bindPopup("<h2>"+ city.city+ ", "+ city.state+ "</h2><hr><h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
  })