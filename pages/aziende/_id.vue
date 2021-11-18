<template>
    <div>        
        <NavBar />
        <BackHomeButton />
        <SwitchLenguage />

        <TitleAndDescription :product=product name='aziende' web='web' youtube='youtube' instagram='instagram' :qr=true />        

        <!-- sezione con mappa dell'azienda e indirizzo -->
        <section
            id="mappa"
            class="w-full md:my-32 my-10 md:h-128 h-72 bg-red-500 relative"
            >
            <map-home-page  :markers="events"></map-home-page>
            <p>{{ $t('clickMapHomepage') }}</p>
            <div class="absolute h-full top-0 right-0 md:w-1/3 w-1/2 bg-white py-10 md:pl-10 px-5 bg-opacity-25 text-miac_green-black">
                <p class="md:text-2xl text-xl uppercase font-semibold mt-5"> indirizzo </p>
                <address class="md:text-xl text-base">via questa 157, 18764 BT </address>
                <p class="md:text-2xl text-xl uppercase font-semibold mt-5"> e-mail </p>
                <p class="md:text-xl text-base"> vendita-trote@gmail.com </p>
                <p class="md:text-2xl text-xl uppercase font-semibold mt-5"> telefono </p>
                <p class="md:text-xl text-base"> 030.25654789 </p>
            </div>  
        </section>
            
        <!-- section gallery e media -->
        <section id="gallery" class="w-full h-auto">
            <div class="container mx-auto md:my-24 my-8">
                <h3 class="text-center font-semibold uppercase md:text-4xl text-2xl text-miac_green-black">gallery & media</h3>
                <div class="w-full flex flex-1 justify-center my-14 gap-x-5">
                   <div class="w-1/2 h-0 bg-blue-700 sm:block hidden bg-cover bg-center" style="padding-top: 30%;" :style="{ backgroundImage: `url(${this.$store.state.baseUrl+product.imageUrl})`}"></div>
                    <div class="sm:w-1/2 w-full h-0 bg-blue-700 bg-cover bg-center" style="padding-top: 30%;" :style="{ backgroundImage: `url(${this.$store.state.baseUrl+product.imageUrl})`}"></div>
                </div>
            </div>
        </section>

        <!-- sezione prodotti dell'azienda -->
        <section id="aziende" class="w-full h-auto md:px-0 px-10">
            <div class="container mx-auto md:my-24 my-8">
                <h3 class="text-center font-semibold uppercase md:text-4xl text-2xl text-miac_green-black">{{ $t('aziendeProdottiTitle') }}</h3>
                <div class="flex md:mt-24 mt-12 md:mb-10 mb-4">                    
                    <div class="flex flex-1 gap-x-5">
                         <section class="w-full md:px-0 px-10">
                            <div class="container mx-auto">
                                <div class="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-x-5 gap-y-10 lg:px-7 px-0">

                                    <!-- prodotto della galleria -->
                                    <div v-for="product in products"
                                    :key="product.id" id="card">
                                        <ItemCard :item=product  type='prodotti' />
                                    </div>    
                                    
                                </div>
                            </div>
                        </section>                   
                    </div>                    
                </div>
            </div>
        </section>


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
                    mb-16
                    "
                >
                    {{ $t('nostriValori') }}
                </h3>                
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
import Scudo from '~/components/Scudo.vue'

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
    Scudo
  },
  async asyncData({ $axios, error, store, data, env, route, isDev, params, query, req, res, redirect }) {
    $axios.setToken(process.env.bearer_token, 'Bearer')
    let lenguage = route.path.substring(1)?route.path.substring(1):'it'
    const responseInfo = await $axios.$get(store.state.baseUrl+'api/infos?language='+lenguage)
    let responseProd = await $axios.get(store.state.baseUrl+'api/products/prodotto/'+route.params.id+'?language='+lenguage)
    let responseProds = await $axios.get(process.env.baseUrl+'api/products?language='+lenguage)
        console.log(responseProd.data.data)
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