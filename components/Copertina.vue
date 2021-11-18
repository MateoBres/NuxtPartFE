<!-- copertina con titolo, sottotilo, bottone -->
<template>
    <section id="copertina" class="w-full h-auto">
    <div class="container mx-auto text-center">
        <h1
        class="
            md:pt-32
            pt-4
            md:pb-16
            pb-8
            md:text-7xl
            text-5xl
            font-semibold
            uppercase
            text-white
        "
        >
        {{ title }}
        </h1>
        <h2
        class="
            md:pb-20
            pb-14
            md:text-3xl
            text-2xl
            md:px-16
            px-8
            text-white
            font-light
        "
        >
        {{ subtitle }}
        </h2>
        <button
        class="
            md:py-5
            py-3
            md:px-8
            px-5
            md:mb-32
            mb-16
            bg-white
            md:text-2xl
            text-xl
            font-semibold
            rounded-3xl
            uppercase
            text-miac_green-black
        "
        >
        {{ $t('scopriDiPiu') }}
        </button>
    </div>
    </section>
</template>

<script>
export default {
  props:['title', 'subtitle']
}
</script>
