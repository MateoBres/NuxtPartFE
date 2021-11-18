<template>
    <div>        
        <NavBar />
        <BackHomeButton />
        <SwitchLenguage />
        <TitleAndDescription :products=products name='iniziative' />    

        <!-- sezione prodotti dell'azienda -->
        <section id="aziende" class="w-full h-auto md:px-0 px-10">
            <div class="container mx-auto md:my-24 my-8">
                <h3 class="text-center font-semibold uppercase md:text-4xl text-2xl text-miac_green-black">{{ $t('iniziativaTitoloGalleryProdotti') }}</h3>
                <div class="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-x-5 gap-y-10 mt-16 lg:px-7 px-0">
                    <!-- prodotto della galleria -->
                    <div v-for="product in products"
                    :key="product.id" id="card">
                        <ItemCard :item=product />
                    </div>                        
                </div>
            </div>
        </section>

        <!-- sezione territori -->
        <section id="aziende" class="w-full h-auto md:px-0 px-10">
            <div class="container mx-auto md:my-24 my-8">
                <h3 class="text-center font-semibold uppercase md:text-4xl text-2xl text-miac_green-black md:pt-16 pt-8">{{ $t('iniziativaTitoloGalleryTerritori') }}</h3>
                <div class="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-x-5 gap-y-10 mt-16 lg:px-7 px-0">
                    <!-- prodotto della galleria -->
                    <div v-for="product in products"
                    :key="product.id" id="card">
                        <ItemCard :item=product />
                    </div>                        
                </div>
            </div>
        </section>

        <!-- sezione aziende che partecipano -->
        <section id="aziende" class="w-full h-auto lg:mt-32 md:mt-8 mt-20 md:px-0 px-10">
            <div class="container mx-auto md:my-24 my-8">
                <h3 class="text-center font-semibold uppercase md:text-4xl text-2xl text-miac_green-black md:pt-16 pt-8">{{ $t('iniziativaTitoloAziendeImpegnate') }}</h3>
                <div class="flex md:mt-24 mt-12 md:mb-10 mb-4">                    
                    <div class="flex flex-1 gap-x-5">
                        <div class="sm:flex flex-1 hidden">
                            <div class="w-full h-0 bg-gray-600 bg-cover rounded-full" style="padding-top: 100%; background-image: url(./media/img/paesaggio-piemonte.jpg);"></div>
                        </div>
                        <div class="sm:flex flex-1 hidden">
                            <div class="w-full h-0 bg-gray-600 bg-cover rounded-full" style="padding-top: 100%; background-image: url(./media/img/paesaggio-piemonte.jpg);"></div>
                        </div>
                        <div class="flex flex-1">
                            <div class="w-full h-0 bg-gray-600 bg-cover rounded-full" style="padding-top: 100%; background-image: url(./media/img/paesaggio-piemonte.jpg);"></div>
                        </div>
                        <div class="md:flex flex-1 hidden">
                            <div class="w-full h-0 bg-gray-600 bg-cover rounded-full" style="padding-top: 100%; background-image: url(./media/img/paesaggio-piemonte.jpg);"></div>
                        </div>
                        <div class="md:flex flex-1 hidden">
                            <div class="w-full h-0 bg-gray-600 bg-cover rounded-full" style="padding-top: 100%; background-image: url(./media/img/paesaggio-piemonte.jpg);"></div>
                        </div>                        
                    </div>
                </div>
            </div>
        </section>

         <!-- footer -->
        <Footer :contact=contact :terms=terms :privacy=privacy :cookies =cookies />
    </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import BackHomeButton from '~/components/BackHomeButton.vue'
import Footer from '~/components/Footer.vue'
import ItemCard from '~/components/ItemCard.vue'
import SwitchLenguage from '~/components/SwitchLenguage.vue'
import IniziativaCard from '~/components/IniziativaCard.vue'
import TitleAndDescription from '~/components/TitleAndDescription.vue'

export default {
  data() {
    return {
    }
  },
  components: {
    NavBar,
    BackHomeButton,
    Footer,
    ItemCard,
    SwitchLenguage,
    IniziativaCard,
    TitleAndDescription
  },
  async asyncData({ $axios, error, store, data, env, route, isDev, params, query, req, res, redirect }) {
    $axios.setToken(process.env.bearer_token, 'Bearer')
    let lenguage = route.path.substring(1)?route.path.substring(1):'it'
    const responseInfo = await $axios.$get(store.state.baseUrl+'api/infos?language='+lenguage)
    let responseProd = await $axios.get(store.state.baseUrl+'api/products/prodotto/'+route.params.id+'?language='+lenguage)
    let responseProds = await $axios.get(process.env.baseUrl+'api/products?language='+lenguage)
        
    return {
        contact: responseInfo.data.contact,
        terms: responseInfo.data.terms,
        cookies: responseInfo.data.cookies,
        privacy: responseInfo.data.privacy,
        product: responseProd.data.data,
        products: responseProds.data.data
        }
    }
}
</script>