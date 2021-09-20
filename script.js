mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFyaXNodGFtYXJhbmEiLCJhIjoiY2txa21zZWhiMDE3azJ2bGlmand1YTdlNSJ9.o9FVGFyiFR9G_0cfNRJiVw";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});
function successLocation(position) {
  console.log(position);
  setLocation([position.coords.longitude, position.coords.latitude]);
}
function errorLocation() {
  setLocation([-2.12, 34.55]);
}
function setLocation(center) {
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15,
  });
  map.addControl(new mapboxgl.NavigationControl());
  map.addControl(
    new MapboxDirections({
      accessToken: mapboxgl.accessToken,
    }),
    "top-left"
  );
}
