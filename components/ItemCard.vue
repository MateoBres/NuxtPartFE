<template>
    <div>   
        <NuxtLink   :to="`/${type}/${item.id}`">     
            <div class="flex flex-1">
                <div class="w-full h-0 bg-yellow-300 bg-cover bg-center" style="padding-top: 100%;"  :style="{ backgroundImage: `url(${this.$store.state.baseUrl+item.imageUrl})`}"></div>
            </div>
            <p class="text-center md:text-lg text-base my-5 uppercase leading-none">{{ item.name }}</p>
        </NuxtLink>
    </div>
</template>

<script>
export default {
  props:['item', 'type']
}
</script>