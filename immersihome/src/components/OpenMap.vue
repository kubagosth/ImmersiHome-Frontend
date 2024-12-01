<template>
    <div id="map" style="width: 100%; height: 400px;"></div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";

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

        L.marker([55.0152622, 11.9150684])
            .addTo(this.map)
            .bindPopup("Home Sweet Home")
            .openPopup();
    },
};
</script>

<style>
#map {
  height: 100vh !important; 
  width: 100vw !important; 
}
</style>