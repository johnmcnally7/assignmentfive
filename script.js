//create map
 var map = L.map('mapcontainer', {
        center: [40.6622, -73.9442],
        zoom: 12
    });

    //tile layer
    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
      }).addTo(map);

 //scale bar 
L.control.scale({
    metric: false,
    imperial: true,
    maxWidth:200
}).addTo(map);

//points
var wifiData = L.geoJson(wifiData, {
     pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: 'Navy',
            radius: 0.3,
            weight: 3

         })
    },
    onEachFeature: function(feature, layer) {
        layer.bindPopup('<b>Network Name:</b> ' + feature.properties.ssid + '<b><br>Provider:</b> ' + feature.properties.provider)
    }
 }).addTo(map);

//lighter outer glow
var glow = L.geoJson(wifiData, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: 'DodgerBlue',
            radius: 6,
            opacity: 0.1
        })
     }
 }).addTo(map);
    