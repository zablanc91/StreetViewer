<template>
        <div id="map">
            <p>Placeholder for Map: {{streetView}}</p>
            <div id="googlemap"></div>
            <div id="streetview"></div>
        </div>
</template>

<script>
import {loadGoogleMaps} from '../utils/loadGoogleMaps';

export default {
    name: 'Map',
    data(){ 
        return {
            streetView: 'hi'
        }
    },
    mounted() {
        loadGoogleMaps.then(() => {
            this.initMap();
            this.renderStreetView();
        });
    },
    methods: {
        initMap(){
            new window.google.maps.Map(document.getElementById("googlemap"), {
                center: { lat: -34.397, lng: 150.644 },
            zoom: 8
            });
        },  
        renderStreetView(){
              new window.google.maps.StreetViewPanorama(
                document.getElementById("streetview"),
                {
                    position: { lat: 37.86926, lng: -122.254811 },
                    pov: { heading: 165, pitch: 0 },
                    zoom: 1
                }
            );
        }
    }
}
</script>

<style>
    #googlemap{
        border: 1px solid black;
        height: 200px;
    }

    #streetview {
        border: 2px solid blue;
        height: 200px;
    }
</style>