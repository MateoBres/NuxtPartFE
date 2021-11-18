<template>
  <div id="map"></div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
export default {
  props: ['markers'],
  data() {
    return {
      access_token:
        'pk.eyJ1IjoiZ2lvcmdpb21hcmluaSIsImEiOiJja2xxdHJ3ZXUxZ2lrMm5uMzd4NXdxcG9mIn0.A1StLGRTTfe-WwxNCQMzUA',
      map: {},
    }
  },
  mounted() {
    this.createMap()
  },
  methods: {
    createMap() {
      mapboxgl.accessToken = this.access_token
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/giorgiomarini/ckvqk737z3fbx14phpbw7u4yb',
        zoom: 8,
        center: [8.168, 45.062],
      })
      if (this.markers) {
        this.markers.forEach((event) => {
          console.log('add marker')
          const marker = new mapboxgl.Marker({
            color: '#55FF55',
            draggable: true,
          })
            .setLngLat(event.geo)
            .addTo(this.map)
        })
      }
    },
  },
}
</script>

<style>
#map {
  width: 100%;
  height: 100%;
}
</style>
