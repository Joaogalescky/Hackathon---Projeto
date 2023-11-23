// Leaflet - leafletjs.com

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();

//https://www.fernandoquadro.com.br/html/2019/04/18/introducao-ao-leaflet-estilos-parte-13/

/* Instalar plugin
  <link rel="stylesheet" href="/stylesheets/leaflet.css" />
  <link rel="stylesheet" href="/stylesheets/Leaflet.StyleEditor.min.css" />
  <script src="/js/leaflet.js"></script>
  <script src="/js/Leaflet.StyleEditor.min.js"></script>
*/

//Initialize the StyleEditor
/* Adicionar o editor de estilo do mapa
let styleEditor = L.control.styleEditor({
    position: 'bottomleft'
});
*/

//Initialize the StyleEditor
/*
let styleEditor = L.control.styleEditor({
    position: 'bottomleft',
    colorRamp: ['#1abc9c', '#2ecc71', '#3498db'],
    markers: ['circle-stroked', 'circle', 'square-stroked', 'square']
});
map.addControl(styleEditor)
*/

//https://github.com/dwilhelm89/Leaflet.StyleEditor --> GITHUB com os arquivos editados do Leaflet
/* Links:
https://www.youtube.com/watch?v=hLd0bgVXZpc
https://www.youtube.com/watch?v=cBQcMLzq5gU
https://www.youtube.com/watch?v=3fTbYa8qYDY
https://www.youtube.com/watch?v=v_TLg3ncUyU
https://www.youtube.com/watch?v=XK6TDA2vqD0
https://leafletjs.com/examples/custom-icons/
https://leafletjs.com/examples/choropleth/
*/
