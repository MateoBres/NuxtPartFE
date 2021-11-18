<template>
    <section id="breadcrumbs" class="w-full h-auto md:mt-32 mt-28">
        <NuxtLink to="/">
            <div class="container mx-auto pl-5 flex pt-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" class="text-gray-500 stroke-current">
                    <path d="M10.6667 6.66666L4 13.3333L10.6667 20" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4 13.3333H14.6667C22.0307 13.3333 28 19.3026 28 26.6666V28" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p class="align-middle min-h-32 pl-3 md:text-xl text-lg pt-1 font-normal text-miac_green-gray">{{ $t('backToHomeButton') }}</p>
            </div>
        </NuxtLink>
        </section>
</template>