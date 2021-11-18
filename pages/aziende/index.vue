<template>
    <div>
        <NavBar />
        <BackHomeButton />
        <TitleAndDescription name='aziende' /> 

        <!-- griglia galleria -->
        <section class="w-full md:px-0 px-10">
            <div class="container mx-auto">
                <div class="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-x-5 gap-y-10 mt-16 lg:px-7 px-0">

                    <!-- prodotto della galleria -->
                    <div v-for="product in products"
                    :key="product.id" id="card">
                        <ItemCard :item=product type='aziende' />
                    </div>    
                    
                </div>
            </div>
        </section>

         <!-- footer -->
        <Footer :baseUrl=baseUrl :contact=contact :terms=terms :privacy=privacy :cookies =cookies />
    </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import BackHomeButton from '~/components/BackHomeButton.vue'
import TitleAndDescription from '~/components/TitleAndDescription.vue'
import Footer from '~/components/Footer.vue'

export default {
  data() {
      return {     
          name: 'aziende'   
      }    
  },
  components: {
    NavBar,
    BackHomeButton,
    TitleAndDescription,
    Footer
  },
  mounted() {
  },
  async asyncData({$axios, error, store, data, env, route, isDev, params, query, req, res, redirect}) {
    $axios.setToken( process.env.bearer_token, 'Bearer')
        let lenguage = route.path.substring(1)?route.path.substring(1):'it'
        let responseInfo = await $axios.get(process.env.baseUrl+'api/infos?language='+lenguage)
        let responseProd = await $axios.get(process.env.baseUrl+'api/products?language='+lenguage)
        return {
          contact: responseInfo.data.data.contact,
          baseUrl: process.env.baseUrl,
          terms: responseInfo.data.data.terms,
          cookies: responseInfo.data.data.cookies,
          privacy: responseInfo.data.data.privacy,
          products: responseProd.data.data
        }
    },
}

 </script>