<template>
    <div id="bollone" class="w-24 h-24 rounded-full bg-cover bg-center">
      
            <div v-if="name!='progetti & territori'" 
                class="bg-black bg-opacity-40 w-full h-full rounded-full"            
            >
              <NuxtLink :to="name">
                <div>
                <p
                    class="
                    text-center
                    uppercase
                    text-white
                    pt-5
                    text-sm
                    leading-none
                    "
                >
                    {{ name }}
                </p>
                 <img :src="require(`~/assets/img/icone/${name}.svg`)" class="w-10 sm:w-20"  :alt="`icona-${name}`">
            </div>
            </NuxtLink>
            </div>
        
        <div v-if="name==='progetti & territori'"
            id="bollone-territori"
            class="
            w-24
            h-24
            rounded-full
            bg-black bg-opacity-20 bg-cover bg-center
            "
        >
        <NuxtLink to="/progetti">
            <div class="bg-black bg-opacity-20 w-full h-full rounded-full">
            <p
                class="
                text-center
                uppercase
                text-white
                pt-4
                text-sm
                leading-none
                "
            >
                progetti <br />
                & territori
            </p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 45"
                fill="none"
                class="w-10 mx-auto mt-1"
            >
                <path
                d="M2 42.1702L22.1646 10.1796L27.8903 16.3823L36.8523 3L61 42.7562H2V42.1702Z"
                stroke="#F0F0F0"
                stroke-width="2.5"
                stroke-miterlimit="10"
                />
                <path
                d="M13.2026 25.7109L19.1275 27.9086L27.3925 23.9526L34.4127 28.3482L40.1385 23.9526L48.6026 27.0784L50.0465 26.1504"
                stroke="#F0F0F0"
                stroke-width="2.5"
                stroke-miterlimit="10"
                />
            </svg>
            </div>
            </NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
  props:['name']
}
</script>