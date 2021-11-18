<template>
    <div class="flex flex-1  ">
        <div class="w-full h-0  relative bg-cover bg-center md:py-0 py-16" style="padding-top: 25%;" :style="{ backgroundImage: `url(${image})`}">
            <div class="absolute lg:top-3/12 sm:top-2/12 top-4/12  left-0 w-full h-full">
                <p class="text-center lg:text-4xl md:text-xl uppercase text-white">{{ title }}</p>
                <p class="text-center lg:text-xl md:text-base lg:py-5 md:py-3 py-2 md:px-10 px-5 sm:block hidden text-white">{{ description }}</p>
            </div>
        </div>
    </div>    
</template>


<script>
import fakeImg from "assets/img/territori/territorio1.jpg";
export default {
  data() {
    return {
      image: fakeImg,
      title: 'festa del salame',
      description: 'saga dei produttori astigiani di salami e pancette, cocina tipica e musica dal vivo.'
    };
  }
};
</script>