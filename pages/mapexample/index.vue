<template>
  <section class="w-full h-screen">
    <map-home-page :markers="events"></map-home-page>
  </section>
</template>

<script>
import MapHomePage from '~/components/MapHomePage.vue'
export default {
  components: {
    MapHomePage,
  },
  data() {
    return {
      events: [
        {
          name: 'event1',
          geo: [8.168, 45.062],
        },
        {
          name: 'event2',
          geo: [8.268, 45.072],
        },
        {
          name: 'event3',
          geo: [8.368, 45.082],
        },
        {
          name: 'event4',
          geo: [8.468, 45.092],
        },
      ],
    }
  },
}
</script>

<style></style>
