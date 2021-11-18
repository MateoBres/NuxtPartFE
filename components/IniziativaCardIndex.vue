<template>
  <NuxtLink  :to="`/iniziative/${item.id}`">     
    <div id="card">
        <div class="flex flex-1">
            <div class="w-full h-0 bg-yellow-300 bg-cover bg-center relative text-white"  style="padding-top: 40%;" :style="{ backgroundImage: `url(${item.image})`}">
                <p class="text-center md:top-1/3 top-1/4 w-full h-full align-middle md:text-lg text-base my-5 uppercase leading-none absolute">{{ item.title }}</p></div>
        </div>
    </div>   
  </NuxtLink>
</template>


<script>
import fakeImg from "assets/img/territori/territorio3.jpg";
export default {
  data() {
    return {
      item: {
        id: 1,
        image: fakeImg,
        title: 'festa del salame',
        description: 'saga dei produttori astigiani di salami e pancette, cocina tipica e musica dal vivo.'
      }
    };
  }
};
</script>