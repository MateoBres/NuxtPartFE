<template>
    <footer
        class="
        text-center text-white
        bg-miac_green-default
        w-full
        md:mt-28
        mt-10
        px-6
        md:px-0
        "
    >
        <p class="md:pt-12 pt-8 font-medium">
          <a target="_blank" :href=baseUrl+terms>Termini e condizioni </a>
        • <a target="_blank" :href=baseUrl+privacy>Privacy Policy </a> • <a target="_blank" :href=baseUrl+cookies> Cookie Policy </a>
        </p>
        <p class="md:py-2 py-2 text-sm font-light">
        {{ contact.name }} - {{ contact.address }} - tel. {{ contact.phone }} - P.IVA e CF
        {{ contact.vat }}
        </p>
        <p class="mt:pb-12 pb-8 text-miac_green-footer">
        Made with ❤ by Attivi Digitali
        </p>
    </footer>
</template>

<script>
export default {
  props:['contact', 'baseUrl', 'terms', 'cookies', 'privacy'],
  fetch() {
    // console.log('*****foooter',this)
  }
}
</script>
