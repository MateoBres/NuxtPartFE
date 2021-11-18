<template>
    <div>
                <!-- titolo della pagina -->
        <section id="titolo" class="w-full h-auto md:mt-12 mt-6">
            <div class="container mx-auto">
                <div class="w-auto h-auto md:flex md:justify-center px-3 md:px-0 mx-auto">
                    <div class="md:w-20 md:h-20 w-14 h-14 rounded-full bg-miac_green-default flex md:mx-0 mx-auto"> 
                        <img :src="require(`~/assets/img/icone/${name}.svg`)" class="px-5"  :alt="`icona-${name}`"> 
                    </div>
                    <h1 v-if="product" class="uppercase font-semibold text-miac_green-black md:text-3xl text-2xl md:pl-5 px-8 md:px-0 md:text-left text-center align-middle mt-5 leading-none">{{product.name}}</h1>
                    <h1 v-else class="uppercase font-semibold md:text-3xl text-base md:pl-5 px-8 md:px-0 md:text-left text-center align-middle mt-5 leading-none">{{ $t(`${name}TitoloIndex`) }}</h1>
                </div>   
            </div>
        </section>
       

        <!-- sezione descrizione azienda -->
        <section id="" class="w-full h-auto mt-14 text-miac_green-black">
            <div class="container lg:flex lg:flex-1 mx-auto gap-x-10">
                <div v-if="product" class="w-full h-0 relative mx-auto lg:mx-0 bg-cover" style="padding-top: 40%; max-width: 40%;" :style="{ backgroundImage: `url(${this.$store.state.baseUrl+product.imageUrl})`}">
                </div>
                <div v-if="products && name==='iniziative'" class="w-full h-0 relative mx-auto lg:mx-0 bg-cover" style="padding-top: 40%; max-width: 40%;" :style="{ backgroundImage: `url(` + require(`~/assets/img/icone/${name}.jpg`)+`)`}">
                </div>
                <div class="w-full h-auto lg:text-left text-center md:pt-7">
                    <div v-if="web||yoytube||instagram" class="flex flex-1 lg:justify-start justify-center lg:mt-0 mt-8 gap-x-5 h-auto">
                        <div class="lg:h-12 h-8">
                            <img :src="require(`~/assets/img/icone/${web}.svg`)" class="px-5"  :alt="`icona-${web}`">
                        </div>
                        <div class="lg:h-12 h-8">
                            <img :src="require(`~/assets/img/icone/${youtube}.svg`)" class="px-5"  :alt="`icona-${youtube}`">
                        </div>
                        <div class="lg:h-12 h-8">
                            <img :src="require(`~/assets/img/icone/${instagram}.svg`)" class="px-5"  :alt="`icona-${instagram}`">
                        </div>
                    </div>
                    <!-- <h1 class="uppercase sm:text-4xl text-2xl font-extraboldld py-6 hidden">titolo della sezione</h1> -->
                    <p v-if="product" class="text-lg pr-5 md:pl-0 pl-5 my-5">{{product.description}}</p>
                    <p v-else class="text-center md:px-0 px-5 mt-8 md:text-lg text-base">{{ $t(`${name}Parrafo`)}}</p>
                    <div v-if="qr" class="flex flex-1 lg:justify-start justify-center md:mt-p mt-8 gap-x-3 h-auto">
                        <div class="w-32 h-32 bg-red-600 bg-cover bg-center" :style="{ backgroundImage: `url(` + require(`~/assets/img/ex-qr-code.png`)+`)`}">
                        </div>
                        <button class="w-32 h-32 bg-miac_green-black text-white text-center uppercase md:text-lg text-base" >
                            {{ $t('bottoneProcesso') }} 
                        </button>
                    </div>
                </div>
            </div>
        </section> 
    </div>
</template>

<script>
export default {
  props:['product', 'products', 'name', 'web', 'youtube', 'instagram', 'qr']
}
</script>