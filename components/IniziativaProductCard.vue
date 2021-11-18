<template>
    <div>
        <div v-if="index===0 || index===1">   
            <NuxtLink :to="`/prodotti/${item.id}`">
                <div class="sm:flex flex-1 hidden">
                    <div class="w-full h-0 bg-cover bg-center" style="padding-top: 100%;"  :style="{ backgroundImage: `url(${this.$store.state.baseUrl+item.imageUrl})`}">
                        <p class="text-center md:text-lg text-base my-5 uppercase leading-none">{{ item.name }}</p>
                    </div>
                </div>
            </NuxtLink>
        </div>
        <div v-if="index===2">   
            <NuxtLink :to="`/prodotti/${item.id}`">
                <div class="flex flex-1">
                    <div class="w-full h-0 bg-cover bg-center" style="padding-top: 100%;"  :style="{ backgroundImage: `url(${this.$store.state.baseUrl+item.imageUrl})`}">
                        <p class="text-center md:text-lg text-base my-5 uppercase leading-none">{{ item.name }}</p>
                    </div>
                </div>
            </NuxtLink>
        </div>
        <div v-if="index===3 || index===4">   
            <NuxtLink :to="`/prodotti/${item.id}`">
                <div class="md:flex flex-1 hidden">
                    <div class="w-full h-0 bg-cover bg-center" style="padding-top: 100%;"  :style="{ backgroundImage: `url(${this.$store.state.baseUrl+item.imageUrl})`}">
                        <p class="text-center md:text-lg text-base my-5 uppercase leading-none">{{ item.name }}</p>
                    </div>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
  props:['item', 'index']
}
</script>