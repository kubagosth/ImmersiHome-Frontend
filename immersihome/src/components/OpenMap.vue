<template>
    <div class="map-container">
        <div id="map"></div>
    </div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder";
import markerIconPath from "@/assets/marker-icon.png";

export default {
    name: "OpenMap",
    data() {
        return {
            map: null,
        };
    },
    mounted() {
        this.map = L.map("map").setView([55.0152622, 11.9150684], 13);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this.map);

        const customIcon = L.icon({
            iconUrl: markerIconPath,
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32],
        });

        L.marker([55.0152622, 11.9150684], { icon: customIcon })
            .addTo(this.map)
            .bindPopup("Hello World!") 
            .openPopup();

        const geocoderControl = L.Control.geocoder({
            defaultMarkGeocode: false,
            collapsed: false,
        })
            .on("markgeocode", (e) => {
                const { bbox, center } = e.geocode;

                this.map.fitBounds(bbox);

                L.marker(center, { icon: customIcon })
                    .addTo(this.map)
                    .bindPopup(e.geocode.name)
                    .openPopup();
            })
            .addTo(this.map);

        const geocoderElement = geocoderControl.getContainer();
        const mapContainer = document.getElementById("map");
        mapContainer.insertBefore(geocoderElement, mapContainer.firstChild);
    },
};
</script>

<style>
.map-container {
    position: relative;
    height: 100vh;
    width: 100%;
}

#map {
    height: 75vh !important;
    width: 100vw !important;
}

.leaflet-control-geocoder {
    margin: 10px auto;
    z-index: 1000;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    padding: 5px 10px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
