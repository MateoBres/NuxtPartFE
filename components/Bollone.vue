<template>
    <div class="flex flex-1">
        <div v-if="name!='progetti & territori'"
            class="
            w-full
            h-0
            rounded-full
            bg-yellow-700 bg-cover
            relative
            bg-center
            "
            :style="{ backgroundImage: `url(` + require(`~/assets/img/icone/${name}.jpg`)+`)`}"
            style="
            padding-top: 100%;
            
            "
        >
        <NuxtLink :to="name">
                
            <div
            class="
                w-full
                h-full
                bg-red
                absolute
                top-0
                bg-black bg-opacity-30
                rounded-full
            "
            >
                <p
                    v-if="name==='prodotti'" 
                    class="
                    text-center
                    uppercase
                    font-semibold
                    pt-2/12
                    xl:text-3xl
                    lg:text-2xl
                    md:text-lg
                    text-base 
                    text-white
                    "
                >
                    {{ $t('bolloneProdotti')}}
                </p>
                <p
                    v-if="name==='aziende'" 
                    class="
                    text-center
                    uppercase
                    font-semibold
                    pt-2/12
                    xl:text-3xl
                    lg:text-2xl
                    md:text-lg
                    text-base 
                    text-white
                    "
                >
                    {{ $t('bolloneAziende')}}
                </p>
                <p
                    v-if="name==='iniziative'" 
                    class="
                    text-center
                    uppercase
                    font-semibold
                    pt-2/12
                    xl:text-3xl
                    lg:text-2xl
                    md:text-lg
                    text-base 
                    text-white
                    "
                >
                    {{ $t('bolloneIniziative')}}
                </p>
                <p
                    v-if="name==='valori'" 
                    class="
                    text-center
                    uppercase
                    font-semibold
                    pt-2/12
                    xl:text-3xl
                    lg:text-2xl
                    md:text-lg
                    text-base 
                    text-white
                    "
                >
                    {{ $t('bolloneValori')}}
                </p>
                <div class="w-1/3 mx-auto lg:mt-4 mt-1">
                    <img :src="require(`~/assets/img/icone/${name}.svg`)" class="w-10 sm:w-20"  :alt="`icona-${name}`">
                </div>          
            </div>
        </NuxtLink>
        </div>
        <div v-if="name==='progetti & territori'" class="flex flex-1">            
            <div
                class="
                w-full
                h-0
                rounded-full
                bg-yellow-300 bg-cover
                relative
                bg-center
                "
                :style="{ backgroundImage: `url(` + require(`~/assets/img/icone/progetti&territori.jpg`)+`)`}"
                style="
                padding-top: 100%;
                "
            >
            <NuxtLink to="/progetti">
                <div
                class="
                    w-full
                    h-full
                    bg-red
                    absolute
                    top-0
                    bg-black bg-opacity-30
                    rounded-full
                "
                >
                <p
                    class="
                    text-center
                    uppercase
                    font-semibold
                    pt-2/12
                    mt-2
                    xl:text-3xl
                    lg:text-2xl
                    md:text-lg
                    text-base text-white
                    leading-none
                    "
                >
                    {{ $t('bolloneProgetti') }}
                </p>
                <div class="w-1/3 mx-auto lg:mt-4 mt-1">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 45"
                    fill="none"
                    class="w-full"
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
                </div>
            </NuxtLink>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  props:['name']
}
</script>

