<template>
  <main>
    <section>
      <nuxt-link
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        >{{ locale.name }}
      </nuxt-link>
      <header>Ciao</header>
      <div>
        <p>your locale is {{ambientLocale }}</p>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
    ambientLocale() {
        return this.$i18n.locale
    }
  },
}
</script>

<style></style>
