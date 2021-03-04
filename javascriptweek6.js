let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("unimap"), {
    center: { lat: 43.26107, lng: -79.91930 },
    zoom: 16,
  });
}