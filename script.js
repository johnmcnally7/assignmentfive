    //create map
    var map = L.map('mapcontainer', {
        center: [40.6622, -73.9442],
        zoom: 12
    });

    //tile layer
    L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
      }).addTo(map);

 //scale bar 
L.control.scale({
    metric: false,
    imperial: true,
    maxWidth:200
}).addTo(map);

