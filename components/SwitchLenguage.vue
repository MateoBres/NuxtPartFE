<template>
    <button @click="reload">
        <nuxt-link
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"            
        >{{ locale.code }}
        </nuxt-link>
    </button>
</template>

<script>
export default {
  data() {
      return {        
      }    
  },
  methods: {
    reload() {
      window.location.reload()
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
    ambientLocale() {
        return this.$i18n.locale
    },
  }
}
</script>
