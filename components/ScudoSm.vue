<template>
    <div id="scudo" class="relative w-56">
        <img
        src="~/assets/img/icone/scudo.svg"
        class="relative w-56 pl-2"
        />
        <div class="absolute w-full h-full sm:top-16 top-12">
        <p
            v-if="title==='innovazione'"
            class="
            text-center
            uppercase
            text-white
            font-semibold
            text-sm
            sm:text-xl
            leading-none
            "
        >
            {{ $t('scudoInnovazione') }}
        </p>
        <p
            v-if="title==='controllo'"
            class="
            text-center
            uppercase
            text-white
            font-semibold
            text-sm
            sm:text-xl
            leading-none
            "
        >
            {{ $t('scudoControllo') }}
        </p>
        <p
            v-if="title==='sociale'"
            class="
            text-center
            uppercase
            text-white
            font-semibold
            text-sm
            sm:text-xl
            leading-none
            "
        >
            {{ $t('scudoSociale') }}
        </p>
        <p
            v-if="title==='ambientale'"
            class="
            text-center
            uppercase
            text-white
            font-semibold
            text-sm
            sm:text-xl
            leading-none
            "
        >
            {{ $t('scudoAmbientale') }}
        </p>
        <img
            v-if="star==='on'"
            src="~/assets/img/icone/full-star.svg"
            class="mx-auto mt-2 w-10 sm:w-16 sm:mt-4"
        />
        <img
            v-if="star==='off'"
            src="~/assets/img/icone/empty-star.svg"
            class="mx-auto mt-2 w-10 sm:w-16 sm:mt-4"
        />
        </div>
    </div>
</template>

<script>
export default {
  props:['title', 'star'],
}
</script>