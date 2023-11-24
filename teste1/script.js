// Leaflet - leafletjs.com

const map = L.map('map').setView([-24.915010, -53.422037], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-24.915010, -53.422037]).addTo(map)
.bindPopup('Quadra de Esporte do Floresta <br>')
.openPopup('');

let isFetching = false

map.on("click", async e => {
    if(isFetching) return

    isFetching = true

    const { lat, lng } = e.latlng
    console.log(lat, lng)

    const link = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&addressdetails=1&format=jsonv2&`

    const data = await fetch(link).then(response => response.json()).catch(error => false)

    console.log(data)

    setTimeout(() => isFetching = false, 1000)
})

/* Links:
//https://www.fernandoquadro.com.br/html/2019/04/18/introducao-ao-leaflet-estilos-parte-13/
//https://github.com/dwilhelm89/Leaflet.StyleEditor --> GITHUB com os arquivos editados do Leaflet
https://www.youtube.com/watch?v=hLd0bgVXZpc --> Utilizado
https://www.youtube.com/watch?v=cBQcMLzq5gU --> Visualizado
https://www.youtube.com/watch?v=v_TLg3ncUyU --> Visualizado
https://www.youtube.com/watch?v=XK6TDA2vqD0
https://leafletjs.com/examples/custom-icons/
https://leafletjs.com/examples/choropleth/
*/
