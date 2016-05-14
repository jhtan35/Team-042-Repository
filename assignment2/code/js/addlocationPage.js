// Code for the Add Location page.

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}
 //async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWlFVMpgT7DMlVPh8h7jPj7tp3R6bodhI&callback=initMap"

