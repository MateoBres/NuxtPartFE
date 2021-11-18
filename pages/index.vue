<template>
  <!-- <body style="font-family: 'Jost', sans-serif"> -->
  <div id="general-container" class="w-full h-auto relative">
    <NavBarHome
      :backgroundUrlFront="backgroundUrlFront"
      :title="title"
      :subtitle="subtitle"
    />

    <SwitchLenguage />
    <NuxtLink to="/fr">FR </NuxtLink>
    <NuxtLink to="/en">EN </NuxtLink>
    <NuxtLink to="/">IT </NuxtLink>

    <!-- sezione bolloni da sm -->
    <section
      class="
        w-full
        xl:h-96
        lg:h-80
        md:h-64
        sm:h-56
        h-96
        relative
        bg-miac_green-default
        sm:block
        hidden
      "
    >
      <div
        id="curva"
        class="absolute bottom-0 bg-white w-full h-32"
        style="box-sizing: border-box; clip-path: ellipse(55% 100% at 50% 100%)"
      ></div>

      <div
        class="
          absolute
          xl:bottom-0
          lg:bottom-5
          md:bottom-10
          sm:bottom-14
          bottom-0
          w-full
          px-10
        "
      >
        <section id="prodotti" class="w-full h-auto">
          <div class="container mx-auto">
            <div class="flex flex-1 gap-5 flex-wrap justify-center">
              <Bollone name="prodotti" />
              <Bollone name="aziende" />
              <Bollone name="progetti & territori" />
              <Bollone name="iniziative" />
              <Bollone name="valori" />
            </div>
          </div>
        </section>
      </div>
    </section>

    <!-- sezione bolloni - breakpoint xsm -->
    <section
      class="w-full h-auto relative bg-miac_green-default sm:hidden block"
    >
      <section class="flex justify-center gap-x-5 pt-8">
        <BolloneXsm name="prodotti" />
        <BolloneXsm name="aziende" />
        <BolloneXsm name="progetti & territori" />
      </section>

      <section class="flex justify-center gap-x-5 sm:hidden pt-3 mx-10 pb-8">
        <BolloneXsm name="iniziative" />
        <BolloneXsm name="valori" />
      </section>
    </section>

    <!-- sezione di ricerca -->
    <section id="ricerca" class="w-full h-auto">
      <div class="container mx-auto mb-16 flex flex-col text-miac_green-black">
        <p
          class="
            text-center
            md:text-3xl
            text-xl
            2xl:mt-32
            lg:mt-16
            md:mt-10
            mt-3
          "
        >
          {{ $t('domandaRicercaHomepage') }}
        </p>
        <input
          type="text"
          :placeholder="$t('placeholderRicercaHomepage')"
          class="
            border-2
            border-miac_green-black
            text-2xl
            md:py-3
            py-1
            md:px-20
            px-8
            md:my-12
            my-8
            rounded-md
            mx-auto
          "
        />
      </div>
    </section>

    <!-- sezione gallery "i prodotti delle nostre aziende" -->
    <ItemsGalleryHomepage :items="products" :baseUrl="baseUrl" title="prodotti" />

    <!-- sezione con la mappa -->
    <section
      id="mappa"
      class="w-full md:my-32 my-10 md:h-128 h-72 bg-red-500 relative"
    >
      <map-home-page  :markers="events"></map-home-page>
      <p>{{ $t('clickMapHomepage') }}</p>
    </section>

    <!-- sezione gallery "cucina con noi" -->
    <ItemsGalleryHomepage :items="products" :baseUrl="baseUrl" title="ricette" />

    <!-- sezione "i nostri valori" -->
    <section id="scudi" class="w-full h-auto mt-20">
      <div class="container mx-auto">
        <h3
          class="
            text-center
            font-semibold
            uppercase
            md:text-4xl
            text-3xl
            text-miac_green-black
          "
        >
          {{ $t('nostriValori') }}
        </h3>
        <h5
          class="
            text-center
            font-medium
            md:text-2xl
            text-base
            md:mt-16
            mt-5
            md:mb-24
            mb-5
            px-5
            md:px-0
            text-miac_green-black
          "
        >
          {{ $t('valoriContentHomepage') }}
        </h5>
        <!-- md e superiori -->
        <div class="md:flex justify-evenly hidden">
          <Scudo title="innovazione" star="on" />
          <Scudo title="controllo" star="off" />
          <Scudo title="sociale" star="on" />
          <Scudo title="ambientale" star="on" />
        </div>

        <!-- sm e inferiori -->
        <section class="md:hidden">
          <div class="flex justify-evenly px-5">
            <ScudoSm title="innovazione" star="on" />
            <ScudoSm title="controllo" star="off" />
          </div>
          <div class="flex justify-evenly my-5 px-5">
            <ScudoSm title="sociale" star="on" />
            <ScudoSm title="ambientale" star="on" />
          </div>
        </section>
        <!--
                <p class="text-right md:mr-36 mr-12 md:text-xl md:mt-8 text-base text-miac_green-gray font-normal">scopri i nostri valori →</p>-->
      </div>
    </section>

    <!-- footer -->
    <Footer
      :baseUrl="baseUrl"
      :contact="contact"
      :terms="terms"
      :privacy="privacy"
      :cookies="cookies"
    />
  </div>
  <!-- </body> -->
</template>

<script>
import NavBarHome from '~/components/NavBarHome.vue'
import Footer from '~/components/Footer.vue'
import Bollone from '~/components/Bollone.vue'
import BolloneXsm from '~/components/BolloneXsm.vue'
import ItemsGalleryHomepage from '~/components/ItemsGalleryHomepage.vue'
import Scudo from '~/components/Scudo.vue'
import ScudoSm from '~/components/ScudoSm.vue'
import SwitchLenguage from '~/components/SwitchLenguage.vue'
import MapHomePage from '~/components/MapHomePage.vue'

export default {
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
  components: {
    NavBarHome,
    Footer,
    Bollone,
    BolloneXsm,
    ItemsGalleryHomepage,
    Scudo,
    ScudoSm,
    SwitchLenguage,
    MapHomePage,
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
  },
  mounted() {},
  async asyncData({
    $axios,
    error,
    store,
    data,
    env,
    route,
    isDev,
    params,
    query,
    req,
    res,
    redirect,
  }) {
    $axios.setToken(process.env.bearer_token, 'Bearer')
    let lenguage = route.path.substring(1) ? route.path.substring(1) : 'it'
    let responseInfo = await $axios.get(
      env.baseUrl + 'api/infos?language=' + lenguage
    )
    let responseProd = await $axios.get(
      env.baseUrl + 'api/products?language=' + lenguage
    )
    console.log('****', lenguage)
    return {
      title: responseInfo.data.data.title,
      backgroundUrlFront: env.baseUrl + responseInfo.data.data.bgimageUrl,
      subtitle: responseInfo.data.data.subtitle,
      contact: responseInfo.data.data.contact,
      baseUrl: env.baseUrl,
      terms: responseInfo.data.data.terms,
      cookies: responseInfo.data.data.cookies,
      privacy: responseInfo.data.data.privacy,
      products: responseProd.data.data,
    }
  },
}
</script>

<style scoped></style>
