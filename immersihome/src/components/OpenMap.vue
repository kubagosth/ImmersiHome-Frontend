<template>
    <div id="map"></div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";
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
            .bindPopup("Home Sweet Home")
            .openPopup();
    },
};
</script>

<style>
#map {
    height: 75vh !important;
    width: 100vw !important;
}
</style>