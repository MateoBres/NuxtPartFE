<template>
    <div>        
        <NavBar />
        <BackHomeButton />
        <SwitchLenguage />
        <TitleAndDescription :product=product name='prodotti' /> 
        
        <!-- sezione aziende che producono -->
        <section id="aziende" class="w-full h-auto lg:mt-32 md:mt-8 mt-20 md:px-0 px-10">
            <div class="container mx-auto md:my-24 my-8">
                <h3 class="text-center font-semibold uppercase md:text-4xl text-2xl text-miac_green-black leading-none">{{ $t('prodottoAziendeProducono') }}</h3>
                <div class="flex md:mt-24 mt-12 md:mb-10 mb-4">
                    <div class="flex flex-1 sm:gap-x-5 gap-x-3">
                        <div class="flex flex-1">
                            <div class="w-full h-0 bg-yellow-300 bg-cover rounded-full" style="padding-top: 100%; background-image: url(../media/img/);"></div>
                        </div>
                        <div class="flex flex-1 ">
                            <div class="w-full h-0 bg-yellow-300 bg-cover rounded-full" style="padding-top: 100%; background-image: url(../media/img/);"></div>
                        </div>
                        <div class="flex flex-1">
                            <div class="w-full h-0 bg-yellow-300 bg-cover rounded-full" style="padding-top: 100%; background-image: url(../media/img/);"></div>
                        </div>
                        <div class="md:flex flex-1 hidden">
                            <div class="w-full h-0 bg-yellow-300 bg-cover rounded-full" style="padding-top: 100%; background-image: url(../media/img/);"></div>
                        </div>
                        <div class="md:flex flex-1 hidden">
                            <div class="w-full h-0 bg-yellow-300 bg-cover rounded-full" style="padding-top: 100%; background-image: url(../media/img/);"></div>
                        </div>      
                        <div class="md:flex flex-1 hidden">
                            <div class="w-full h-0 bg-yellow-300 bg-cover rounded-full" style="padding-top: 100%; background-image: url(../media/img/);"></div>
                        </div>                   
                    </div>
                </div>
                <div class="md:flex md:mt-12 mt-8 md:mb-10 mb-4 hidden">
                    <div class="flex flex-1 gap-x-5">
                        <div class="sm:flex flex-1 hidden">
                            <div class="w-full h-0 bg-yellow-300 bg-cover rounded-full" style="padding-top: 100%; background-image: url(../media/img/);"></div>
                        </div>
                        <div class="sm:flex flex-1 hidden">
                            <div class="w-full h-0 bg-yellow-300 bg-cover rounded-full" style="padding-top: 100%; background-image: url(../media/img/);"></div>
                        </div>
                        <div class="flex flex-1">
                            <div class="w-full h-0 bg-yellow-300 bg-cover rounded-full" style="padding-top: 100%; background-image: url(../media/img/);"></div>
                        </div>
                        <div class="md:flex flex-1 hidden">
                            <div class="w-full h-0 bg-yellow-300 bg-cover rounded-full" style="padding-top: 100%; background-image: url(../media/img/);"></div>
                        </div>
                        <div class="md:flex flex-1 hidden">
                            <div class="w-full h-0 bg-yellow-300 bg-cover rounded-full" style="padding-top: 100%; background-image: url(../media/img/);"></div>
                        </div>      
                        <div class="md:flex flex-1 hidden">
                            <div class="w-full h-0 bg-yellow-300 bg-cover rounded-full" style="padding-top: 100%; background-image: url(../media/img/);"></div>
                        </div>                   
                    </div>
                </div>
            </div>
        </section>

        <!-- sezione prodotti dell'azienda -->
        <section id="aziende" class="w-full h-auto md:px-0 px-10">
            <div class="container mx-auto md:my-24 my-8">
                <h3 class="text-center font-semibold uppercase md:text-4xl text-2xl text-miac_green-black">{{ $t('prodottoAbbinamento') }}</h3>
                <div class="flex md:mt-24 mt-12 md:mb-20 mb-12">
                    <div id="arrow sx" class="md:w-30 w-auto md:px-10 px-3 my-auto" >
                        <svg xmlns="http://www.w3.org/2000/svg" class="md:w-14 md:h-14 w-6 h-6"  viewBox="0 0 52 51" fill="none">
                            <path d="M20.9963 22.9062L26.2255 17.78L26.2257 17.7798C26.7205 17.2946 27.0021 16.6323 27.0021 15.9375C27.0021 15.2427 26.7205 14.5804 26.2257 14.0952C25.7316 13.6106 25.0655 13.3417 24.375 13.3417C23.6845 13.3417 23.0184 13.6106 22.5243 14.0952L12.7752 23.6568C12.7751 23.6569 12.775 23.657 12.7749 23.6571C12.5297 23.8971 12.3341 24.1832 12.2002 24.4995C12.0663 24.8161 11.9971 25.1561 11.9971 25.5C11.9971 25.8439 12.0663 26.1839 12.2002 26.5005C12.3341 26.8168 12.5297 27.1029 12.7749 27.3429C12.775 27.343 12.7751 27.3431 12.7752 27.3432L22.5243 36.9048C22.7691 37.1449 23.0587 37.3344 23.376 37.4633C23.6933 37.5922 24.0327 37.6583 24.375 37.6583C24.7173 37.6583 25.0567 37.5922 25.374 37.4633C25.6913 37.3344 25.9809 37.1449 26.2257 36.9048C26.4706 36.6647 26.6658 36.3785 26.7994 36.0622C26.933 35.7459 27.0021 35.4061 27.0021 35.0625C27.0021 34.7189 26.933 34.3791 26.7994 34.0628C26.6658 33.7465 26.4706 33.4603 26.2257 33.2202L26.2255 33.22L20.9963 28.0938H37.375C38.065 28.0938 38.7305 27.8251 39.2243 27.3409C39.7186 26.856 40 26.1942 40 25.5C40 24.8058 39.7186 24.144 39.2243 23.6591C38.7305 23.1749 38.065 22.9062 37.375 22.9062H20.9963ZM8.31543 8.18272C13.0024 3.58587 19.3634 1 26 1C32.6366 1 38.9976 3.58587 43.6846 8.18272C48.3709 12.7789 51 19.0085 51 25.5C51 31.9915 48.3709 38.2211 43.6846 42.8173C38.9976 47.4141 32.6366 50 26 50C19.3634 50 13.0024 47.4141 8.31543 42.8173C3.62911 38.2211 1 31.9915 1 25.5C1 19.0085 3.62911 12.7789 8.31543 8.18272Z" stroke="#919191" stroke-width="2"/>
                        </svg>
                    </div>
                    <div class="flex flex-1 gap-x-5">
                        <div class="sm:flex flex-1 hidden">
                            <div class="w-full h-0 bg-cover bg-center" style="padding-top: 100%; background-image: url(../media/img/prodotti/beer.jpg);">
                                <p class="md:py-3 py-1 text-center">abbinamento</p>
                            </div>
                        </div>
                        <div class="sm:flex flex-1 hidden">
                            <div class="w-full h-0 bg-cover bg-center" style="padding-top: 100%; background-image: url(../media/img/prodotti/potato.jpg);">
                                <p class="md:py-3 py-1 text-center">abbinamento</p>
                            </div>
                        </div>
                        <div class="flex flex-1">
                            <div class="w-full h-0 bg-cover bg-center" style="padding-top: 100%; background-image: url(../media/img/prodotti/wine.jpg);">
                                <p class="md:py-3 py-1 text-center">abbinamento</p>
                            </div>
                        </div>
                        <div class="md:flex flex-1 hidden">
                            <div class="w-full h-0 bg-cover bg-center" style="padding-top: 100%; background-image: url(../media/img/prodotti/grapes.jpg);">
                                <p class="md:py-3 py-1 text-center">abbinamento</p>
                            </div>
                        </div>
                        <div class="md:flex flex-1 hidden">
                            <div class="w-full h-0 bg-cover bg-center" style="padding-top: 100%; background-image: url(../media/img/prodotti/carrot.jpg);">
                                <p class="md:py-3 py-1 text-center">abbinamento</p>
                            </div>
                        </div>                        
                    </div>
                    <div id="arrow dx" class="my-auto md:px-10 px-3" >
                        <svg xmlns="http://www.w3.org/2000/svg" class="md:w-14 md:h-14 h-6 w-6" viewBox="0 0 52 51" fill="none">
                            <g clip-path="url(#clip0)">
                            <path d="M31.0037 28.0937L25.7745 33.22L25.7743 33.2202C25.2795 33.7054 24.9979 34.3677 24.9979 35.0625C24.9979 35.7573 25.2795 36.4196 25.7743 36.9048C26.2684 37.3894 26.9345 37.6583 27.625 37.6583C28.3155 37.6583 28.9816 37.3894 29.4757 36.9048L39.2248 27.3432C39.2249 27.3431 39.225 27.343 39.2251 27.3429C39.4703 27.1029 39.6659 26.8168 39.7998 26.5005C39.9337 26.1839 40.0029 25.8439 40.0029 25.5C40.0029 25.1561 39.9337 24.8161 39.7998 24.4995C39.6659 24.1832 39.4703 23.8971 39.2251 23.6571C39.225 23.657 39.2249 23.6569 39.2248 23.6568L29.4757 14.0952C29.2309 13.8551 28.9413 13.6656 28.624 13.5367C28.3067 13.4078 27.9673 13.3417 27.625 13.3417C27.2827 13.3417 26.9433 13.4078 26.626 13.5367C26.3087 13.6656 26.0191 13.8551 25.7743 14.0952C25.5294 14.3353 25.3342 14.6215 25.2006 14.9378C25.067 15.2541 24.998 15.5939 24.998 15.9375C24.998 16.2811 25.067 16.6209 25.2006 16.9372C25.3342 17.2535 25.5294 17.5397 25.7743 17.7798L25.7745 17.78L31.0037 22.9062L14.625 22.9062C13.935 22.9062 13.2695 23.1749 12.7757 23.6591C12.2814 24.144 12 24.8058 12 25.5C12 26.1942 12.2814 26.856 12.7757 27.3409C13.2695 27.8251 13.935 28.0937 14.625 28.0937L31.0037 28.0937ZM43.6846 42.8173C38.9976 47.4141 32.6366 50 26 50C19.3634 50 13.0024 47.4141 8.31543 42.8173C3.62911 38.2211 1 31.9915 1 25.5C1 19.0085 3.62911 12.7789 8.31544 8.18271C13.0024 3.58586 19.3634 0.999997 26 0.999998C32.6366 0.999998 38.9976 3.58586 43.6846 8.18272C48.3709 12.7789 51 19.0085 51 25.5C51 31.9915 48.3709 38.2211 43.6846 42.8173Z" stroke="#919191" stroke-width="2"/>
                            </g>
                            <defs>
                            <clipPath id="clip0">
                            <rect width="52" height="51" fill="white" transform="translate(52 51) rotate(-180)"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </section>

       <!-- sezione cucina con noi -->
        <section id="" class="w-full h-auto md:px-0 px-10">
            <div class="container mx-auto md:my-24 my-8">
                <h3 class="text-center font-semibold uppercase md:text-4xl text-2xl text-miac_green-black md:pt-16 pt-8">{{ $t('prodottoCucinaConNoi') }}</h3>
                <div class="flex md:mt-24 mt-12 md:mb-20 mb-12">
                    <div id="arrow sx" class="md:w-30 w-auto md:px-10 px-3 my-auto" >
                        <svg xmlns="http://www.w3.org/2000/svg" class="md:w-14 md:h-14 w-6 h-6"  viewBox="0 0 52 51" fill="none">
                            <path d="M20.9963 22.9062L26.2255 17.78L26.2257 17.7798C26.7205 17.2946 27.0021 16.6323 27.0021 15.9375C27.0021 15.2427 26.7205 14.5804 26.2257 14.0952C25.7316 13.6106 25.0655 13.3417 24.375 13.3417C23.6845 13.3417 23.0184 13.6106 22.5243 14.0952L12.7752 23.6568C12.7751 23.6569 12.775 23.657 12.7749 23.6571C12.5297 23.8971 12.3341 24.1832 12.2002 24.4995C12.0663 24.8161 11.9971 25.1561 11.9971 25.5C11.9971 25.8439 12.0663 26.1839 12.2002 26.5005C12.3341 26.8168 12.5297 27.1029 12.7749 27.3429C12.775 27.343 12.7751 27.3431 12.7752 27.3432L22.5243 36.9048C22.7691 37.1449 23.0587 37.3344 23.376 37.4633C23.6933 37.5922 24.0327 37.6583 24.375 37.6583C24.7173 37.6583 25.0567 37.5922 25.374 37.4633C25.6913 37.3344 25.9809 37.1449 26.2257 36.9048C26.4706 36.6647 26.6658 36.3785 26.7994 36.0622C26.933 35.7459 27.0021 35.4061 27.0021 35.0625C27.0021 34.7189 26.933 34.3791 26.7994 34.0628C26.6658 33.7465 26.4706 33.4603 26.2257 33.2202L26.2255 33.22L20.9963 28.0938H37.375C38.065 28.0938 38.7305 27.8251 39.2243 27.3409C39.7186 26.856 40 26.1942 40 25.5C40 24.8058 39.7186 24.144 39.2243 23.6591C38.7305 23.1749 38.065 22.9062 37.375 22.9062H20.9963ZM8.31543 8.18272C13.0024 3.58587 19.3634 1 26 1C32.6366 1 38.9976 3.58587 43.6846 8.18272C48.3709 12.7789 51 19.0085 51 25.5C51 31.9915 48.3709 38.2211 43.6846 42.8173C38.9976 47.4141 32.6366 50 26 50C19.3634 50 13.0024 47.4141 8.31543 42.8173C3.62911 38.2211 1 31.9915 1 25.5C1 19.0085 3.62911 12.7789 8.31543 8.18272Z" stroke="#919191" stroke-width="2"/>
                        </svg>
                    </div>
                    <div class="flex flex-1 gap-x-5">
                        <div class="sm:flex flex-1 hidden">
                            <div class="w-full h-0 bg-cover bg-center" style="padding-top: 100%; background-image: url(../media/img/cucina_con_noi/ricetta_fish.jpg);">
                                <p class="md:py-3 py-1 text-center">ricetta</p>
                            </div>
                        </div>
                        <div class="sm:flex flex-1 hidden">
                            <div class="w-full h-0 bg-cover bg-center" style="padding-top: 100%; background-image: url(../media/img/cucina_con_noi/ricetta1.jpg);">
                                <p class="md:py-3 py-1 text-center">ricetta</p>
                            </div>
                        </div>
                        <div class="flex flex-1">
                            <div class="w-full h-0 bg-cover bg-center" style="padding-top: 100%; background-image: url(../media/img/cucina_con_noi/ricetta2.jpg);">
                                <p class="md:py-3 py-1 text-center">ricetta</p>
                            </div>
                        </div>
                        <div class="md:flex flex-1 hidden">
                            <div class="w-full h-0 bg-cover bg-center" style="padding-top: 100%; background-image: url(../media/img/cucina_con_noi/ricetta3.jpg);">
                                <p class="md:py-3 py-1 text-center">ricetta</p>
                            </div>
                        </div>
                        <div class="md:flex flex-1 hidden">
                            <div class="w-full h-0 bg-cover bg-center" style="padding-top: 100%; background-image: url(../media/img/cucina_con_noi/ricetta4.jpg);">
                                <p class="md:py-3 py-1 text-center">ricetta</p>
                            </div>
                        </div>                        
                    </div>
                    <div id="arrow dx" class="my-auto md:px-10 px-3" >
                        <svg xmlns="http://www.w3.org/2000/svg" class="md:w-14 md:h-14 h-6 w-6" viewBox="0 0 52 51" fill="none">
                            <g clip-path="url(#clip0)">
                            <path d="M31.0037 28.0937L25.7745 33.22L25.7743 33.2202C25.2795 33.7054 24.9979 34.3677 24.9979 35.0625C24.9979 35.7573 25.2795 36.4196 25.7743 36.9048C26.2684 37.3894 26.9345 37.6583 27.625 37.6583C28.3155 37.6583 28.9816 37.3894 29.4757 36.9048L39.2248 27.3432C39.2249 27.3431 39.225 27.343 39.2251 27.3429C39.4703 27.1029 39.6659 26.8168 39.7998 26.5005C39.9337 26.1839 40.0029 25.8439 40.0029 25.5C40.0029 25.1561 39.9337 24.8161 39.7998 24.4995C39.6659 24.1832 39.4703 23.8971 39.2251 23.6571C39.225 23.657 39.2249 23.6569 39.2248 23.6568L29.4757 14.0952C29.2309 13.8551 28.9413 13.6656 28.624 13.5367C28.3067 13.4078 27.9673 13.3417 27.625 13.3417C27.2827 13.3417 26.9433 13.4078 26.626 13.5367C26.3087 13.6656 26.0191 13.8551 25.7743 14.0952C25.5294 14.3353 25.3342 14.6215 25.2006 14.9378C25.067 15.2541 24.998 15.5939 24.998 15.9375C24.998 16.2811 25.067 16.6209 25.2006 16.9372C25.3342 17.2535 25.5294 17.5397 25.7743 17.7798L25.7745 17.78L31.0037 22.9062L14.625 22.9062C13.935 22.9062 13.2695 23.1749 12.7757 23.6591C12.2814 24.144 12 24.8058 12 25.5C12 26.1942 12.2814 26.856 12.7757 27.3409C13.2695 27.8251 13.935 28.0937 14.625 28.0937L31.0037 28.0937ZM43.6846 42.8173C38.9976 47.4141 32.6366 50 26 50C19.3634 50 13.0024 47.4141 8.31543 42.8173C3.62911 38.2211 1 31.9915 1 25.5C1 19.0085 3.62911 12.7789 8.31544 8.18271C13.0024 3.58586 19.3634 0.999997 26 0.999998C32.6366 0.999998 38.9976 3.58586 43.6846 8.18272C48.3709 12.7789 51 19.0085 51 25.5C51 31.9915 48.3709 38.2211 43.6846 42.8173Z" stroke="#919191" stroke-width="2"/>
                            </g>
                            <defs>
                            <clipPath id="clip0">
                            <rect width="52" height="51" fill="white" transform="translate(52 51) rotate(-180)"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </section>

        <!-- section i progetti -->
        <section class="w-full mt-20">
            <div class="container mx-auto">
                <h3 class="text-center font-semibold uppercase md:text-4xl text-2xl md:mb-20 mb-2 text-miac_green-black md:pt-12 pt-5">{{ $t('prodottoProgetti') }}</h3>
                <div class="flex flex-1 md:mt-14 mt-6 md:mb-10 mb-4">
                    <div id="arrow sx" class="md:w-30 w-auto md:px-10 px-3 my-auto" >
                        <svg xmlns="http://www.w3.org/2000/svg" class="md:w-14 md:h-14 w-6 h-6"  viewBox="0 0 52 51" fill="none">
                            <path d="M20.9963 22.9062L26.2255 17.78L26.2257 17.7798C26.7205 17.2946 27.0021 16.6323 27.0021 15.9375C27.0021 15.2427 26.7205 14.5804 26.2257 14.0952C25.7316 13.6106 25.0655 13.3417 24.375 13.3417C23.6845 13.3417 23.0184 13.6106 22.5243 14.0952L12.7752 23.6568C12.7751 23.6569 12.775 23.657 12.7749 23.6571C12.5297 23.8971 12.3341 24.1832 12.2002 24.4995C12.0663 24.8161 11.9971 25.1561 11.9971 25.5C11.9971 25.8439 12.0663 26.1839 12.2002 26.5005C12.3341 26.8168 12.5297 27.1029 12.7749 27.3429C12.775 27.343 12.7751 27.3431 12.7752 27.3432L22.5243 36.9048C22.7691 37.1449 23.0587 37.3344 23.376 37.4633C23.6933 37.5922 24.0327 37.6583 24.375 37.6583C24.7173 37.6583 25.0567 37.5922 25.374 37.4633C25.6913 37.3344 25.9809 37.1449 26.2257 36.9048C26.4706 36.6647 26.6658 36.3785 26.7994 36.0622C26.933 35.7459 27.0021 35.4061 27.0021 35.0625C27.0021 34.7189 26.933 34.3791 26.7994 34.0628C26.6658 33.7465 26.4706 33.4603 26.2257 33.2202L26.2255 33.22L20.9963 28.0938H37.375C38.065 28.0938 38.7305 27.8251 39.2243 27.3409C39.7186 26.856 40 26.1942 40 25.5C40 24.8058 39.7186 24.144 39.2243 23.6591C38.7305 23.1749 38.065 22.9062 37.375 22.9062H20.9963ZM8.31543 8.18272C13.0024 3.58587 19.3634 1 26 1C32.6366 1 38.9976 3.58587 43.6846 8.18272C48.3709 12.7789 51 19.0085 51 25.5C51 31.9915 48.3709 38.2211 43.6846 42.8173C38.9976 47.4141 32.6366 50 26 50C19.3634 50 13.0024 47.4141 8.31543 42.8173C3.62911 38.2211 1 31.9915 1 25.5C1 19.0085 3.62911 12.7789 8.31543 8.18272Z" stroke="#919191" stroke-width="2"/>
                        </svg>
                    </div>
                    <div class="flex flex-1  ">
                        <div class="w-full h-0  relative bg-cover bg-center md:py-0 py-16" style="padding-top: 25%; background-image: url(../media/img/paesaggio-piemonte.jpg);">
                            <div class="absolute lg:top-3/12 sm:top-2/12 top-4/12  left-0 w-full h-full">
                                <p class="text-center lg:text-4xl md:text-xl uppercase text-white">titolo del progetto</p>
                                <p class="text-center lg:text-xl md:text-base lg:py-5 md:py-3 py-2 md:px-10 px-5 sm:block hidden text-white">sottotitolo del progetto Lorem, abore, animi. Harum ipsa ratione architecto commodi, explicabo quaerat.</p>
                            </div>
                        </div>
                    </div>             
                    <div id="arrow dx" class="my-auto md:px-10 px-3" >
                        <svg xmlns="http://www.w3.org/2000/svg" class="md:w-14 md:h-14 h-6 w-6" viewBox="0 0 52 51" fill="none">
                            <g clip-path="url(#clip0)">
                            <path d="M31.0037 28.0937L25.7745 33.22L25.7743 33.2202C25.2795 33.7054 24.9979 34.3677 24.9979 35.0625C24.9979 35.7573 25.2795 36.4196 25.7743 36.9048C26.2684 37.3894 26.9345 37.6583 27.625 37.6583C28.3155 37.6583 28.9816 37.3894 29.4757 36.9048L39.2248 27.3432C39.2249 27.3431 39.225 27.343 39.2251 27.3429C39.4703 27.1029 39.6659 26.8168 39.7998 26.5005C39.9337 26.1839 40.0029 25.8439 40.0029 25.5C40.0029 25.1561 39.9337 24.8161 39.7998 24.4995C39.6659 24.1832 39.4703 23.8971 39.2251 23.6571C39.225 23.657 39.2249 23.6569 39.2248 23.6568L29.4757 14.0952C29.2309 13.8551 28.9413 13.6656 28.624 13.5367C28.3067 13.4078 27.9673 13.3417 27.625 13.3417C27.2827 13.3417 26.9433 13.4078 26.626 13.5367C26.3087 13.6656 26.0191 13.8551 25.7743 14.0952C25.5294 14.3353 25.3342 14.6215 25.2006 14.9378C25.067 15.2541 24.998 15.5939 24.998 15.9375C24.998 16.2811 25.067 16.6209 25.2006 16.9372C25.3342 17.2535 25.5294 17.5397 25.7743 17.7798L25.7745 17.78L31.0037 22.9062L14.625 22.9062C13.935 22.9062 13.2695 23.1749 12.7757 23.6591C12.2814 24.144 12 24.8058 12 25.5C12 26.1942 12.2814 26.856 12.7757 27.3409C13.2695 27.8251 13.935 28.0937 14.625 28.0937L31.0037 28.0937ZM43.6846 42.8173C38.9976 47.4141 32.6366 50 26 50C19.3634 50 13.0024 47.4141 8.31543 42.8173C3.62911 38.2211 1 31.9915 1 25.5C1 19.0085 3.62911 12.7789 8.31544 8.18271C13.0024 3.58586 19.3634 0.999997 26 0.999998C32.6366 0.999998 38.9976 3.58586 43.6846 8.18272C48.3709 12.7789 51 19.0085 51 25.5C51 31.9915 48.3709 38.2211 43.6846 42.8173Z" stroke="#919191" stroke-width="2"/>
                            </g>
                            <defs>
                            <clipPath id="clip0">
                            <rect width="52" height="51" fill="white" transform="translate(52 51) rotate(-180)"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </section>

        <!-- section le iniziative -->
        <section class="w-full mt-20">
            <div class="container mx-auto">
                <h3 class="text-center font-semibold uppercase md:text-4xl text-2xl md:mb-20 mb-2 text-miac_green-black">{{ $t('prodottoIniziativeTitle')}}</h3>
                <div class="flex flex-1 md:mt-14 mt-6 md:mb-10 mb-4">
                    <div id="arrow sx" class="md:w-30 w-auto md:px-10 px-3 my-auto" >
                        <svg xmlns="http://www.w3.org/2000/svg" class="md:w-14 md:h-14 w-6 h-6"  viewBox="0 0 52 51" fill="none">
                            <path d="M20.9963 22.9062L26.2255 17.78L26.2257 17.7798C26.7205 17.2946 27.0021 16.6323 27.0021 15.9375C27.0021 15.2427 26.7205 14.5804 26.2257 14.0952C25.7316 13.6106 25.0655 13.3417 24.375 13.3417C23.6845 13.3417 23.0184 13.6106 22.5243 14.0952L12.7752 23.6568C12.7751 23.6569 12.775 23.657 12.7749 23.6571C12.5297 23.8971 12.3341 24.1832 12.2002 24.4995C12.0663 24.8161 11.9971 25.1561 11.9971 25.5C11.9971 25.8439 12.0663 26.1839 12.2002 26.5005C12.3341 26.8168 12.5297 27.1029 12.7749 27.3429C12.775 27.343 12.7751 27.3431 12.7752 27.3432L22.5243 36.9048C22.7691 37.1449 23.0587 37.3344 23.376 37.4633C23.6933 37.5922 24.0327 37.6583 24.375 37.6583C24.7173 37.6583 25.0567 37.5922 25.374 37.4633C25.6913 37.3344 25.9809 37.1449 26.2257 36.9048C26.4706 36.6647 26.6658 36.3785 26.7994 36.0622C26.933 35.7459 27.0021 35.4061 27.0021 35.0625C27.0021 34.7189 26.933 34.3791 26.7994 34.0628C26.6658 33.7465 26.4706 33.4603 26.2257 33.2202L26.2255 33.22L20.9963 28.0938H37.375C38.065 28.0938 38.7305 27.8251 39.2243 27.3409C39.7186 26.856 40 26.1942 40 25.5C40 24.8058 39.7186 24.144 39.2243 23.6591C38.7305 23.1749 38.065 22.9062 37.375 22.9062H20.9963ZM8.31543 8.18272C13.0024 3.58587 19.3634 1 26 1C32.6366 1 38.9976 3.58587 43.6846 8.18272C48.3709 12.7789 51 19.0085 51 25.5C51 31.9915 48.3709 38.2211 43.6846 42.8173C38.9976 47.4141 32.6366 50 26 50C19.3634 50 13.0024 47.4141 8.31543 42.8173C3.62911 38.2211 1 31.9915 1 25.5C1 19.0085 3.62911 12.7789 8.31543 8.18272Z" stroke="#919191" stroke-width="2"/>
                        </svg>
                    </div>
                    <IniziativaCard />

                    <div id="arrow dx" class="my-auto md:px-10 px-3" >
                        <svg xmlns="http://www.w3.org/2000/svg" class="md:w-14 md:h-14 h-6 w-6" viewBox="0 0 52 51" fill="none">
                            <g clip-path="url(#clip0)">
                            <path d="M31.0037 28.0937L25.7745 33.22L25.7743 33.2202C25.2795 33.7054 24.9979 34.3677 24.9979 35.0625C24.9979 35.7573 25.2795 36.4196 25.7743 36.9048C26.2684 37.3894 26.9345 37.6583 27.625 37.6583C28.3155 37.6583 28.9816 37.3894 29.4757 36.9048L39.2248 27.3432C39.2249 27.3431 39.225 27.343 39.2251 27.3429C39.4703 27.1029 39.6659 26.8168 39.7998 26.5005C39.9337 26.1839 40.0029 25.8439 40.0029 25.5C40.0029 25.1561 39.9337 24.8161 39.7998 24.4995C39.6659 24.1832 39.4703 23.8971 39.2251 23.6571C39.225 23.657 39.2249 23.6569 39.2248 23.6568L29.4757 14.0952C29.2309 13.8551 28.9413 13.6656 28.624 13.5367C28.3067 13.4078 27.9673 13.3417 27.625 13.3417C27.2827 13.3417 26.9433 13.4078 26.626 13.5367C26.3087 13.6656 26.0191 13.8551 25.7743 14.0952C25.5294 14.3353 25.3342 14.6215 25.2006 14.9378C25.067 15.2541 24.998 15.5939 24.998 15.9375C24.998 16.2811 25.067 16.6209 25.2006 16.9372C25.3342 17.2535 25.5294 17.5397 25.7743 17.7798L25.7745 17.78L31.0037 22.9062L14.625 22.9062C13.935 22.9062 13.2695 23.1749 12.7757 23.6591C12.2814 24.144 12 24.8058 12 25.5C12 26.1942 12.2814 26.856 12.7757 27.3409C13.2695 27.8251 13.935 28.0937 14.625 28.0937L31.0037 28.0937ZM43.6846 42.8173C38.9976 47.4141 32.6366 50 26 50C19.3634 50 13.0024 47.4141 8.31543 42.8173C3.62911 38.2211 1 31.9915 1 25.5C1 19.0085 3.62911 12.7789 8.31544 8.18271C13.0024 3.58586 19.3634 0.999997 26 0.999998C32.6366 0.999998 38.9976 3.58586 43.6846 8.18272C48.3709 12.7789 51 19.0085 51 25.5C51 31.9915 48.3709 38.2211 43.6846 42.8173Z" stroke="#919191" stroke-width="2"/>
                            </g>
                            <defs>
                            <clipPath id="clip0">
                            <rect width="52" height="51" fill="white" transform="translate(52 51) rotate(-180)"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </section>

        <!-- section il territorio -->
        <section class="w-full mt-20">
            <div class="container mx-auto">
                <h3 class="text-center font-semibold uppercase md:text-4xl text-2xl md:mb-20 mb-2 text-miac_green-black">{{ $t('prodottoTerritorio') }}</h3>
                <div class="flex flex-1 md:mt-14 mt-6 md:mb-10 mb-4">
                    <div id="arrow sx" class="md:w-30 w-auto md:px-10 px-3 my-auto" >
                        <svg xmlns="http://www.w3.org/2000/svg" class="md:w-14 md:h-14 w-6 h-6"  viewBox="0 0 52 51" fill="none">
                            <path d="M20.9963 22.9062L26.2255 17.78L26.2257 17.7798C26.7205 17.2946 27.0021 16.6323 27.0021 15.9375C27.0021 15.2427 26.7205 14.5804 26.2257 14.0952C25.7316 13.6106 25.0655 13.3417 24.375 13.3417C23.6845 13.3417 23.0184 13.6106 22.5243 14.0952L12.7752 23.6568C12.7751 23.6569 12.775 23.657 12.7749 23.6571C12.5297 23.8971 12.3341 24.1832 12.2002 24.4995C12.0663 24.8161 11.9971 25.1561 11.9971 25.5C11.9971 25.8439 12.0663 26.1839 12.2002 26.5005C12.3341 26.8168 12.5297 27.1029 12.7749 27.3429C12.775 27.343 12.7751 27.3431 12.7752 27.3432L22.5243 36.9048C22.7691 37.1449 23.0587 37.3344 23.376 37.4633C23.6933 37.5922 24.0327 37.6583 24.375 37.6583C24.7173 37.6583 25.0567 37.5922 25.374 37.4633C25.6913 37.3344 25.9809 37.1449 26.2257 36.9048C26.4706 36.6647 26.6658 36.3785 26.7994 36.0622C26.933 35.7459 27.0021 35.4061 27.0021 35.0625C27.0021 34.7189 26.933 34.3791 26.7994 34.0628C26.6658 33.7465 26.4706 33.4603 26.2257 33.2202L26.2255 33.22L20.9963 28.0938H37.375C38.065 28.0938 38.7305 27.8251 39.2243 27.3409C39.7186 26.856 40 26.1942 40 25.5C40 24.8058 39.7186 24.144 39.2243 23.6591C38.7305 23.1749 38.065 22.9062 37.375 22.9062H20.9963ZM8.31543 8.18272C13.0024 3.58587 19.3634 1 26 1C32.6366 1 38.9976 3.58587 43.6846 8.18272C48.3709 12.7789 51 19.0085 51 25.5C51 31.9915 48.3709 38.2211 43.6846 42.8173C38.9976 47.4141 32.6366 50 26 50C19.3634 50 13.0024 47.4141 8.31543 42.8173C3.62911 38.2211 1 31.9915 1 25.5C1 19.0085 3.62911 12.7789 8.31543 8.18272Z" stroke="#919191" stroke-width="2"/>
                        </svg>
                    </div>
                    <div class="flex flex-1  ">
                        <div class="w-full h-0  relative bg-cover bg-center md:py-0 py-16" style="padding-top: 25%; background-image: url(../media/img/territori/territorio3.jpg);">
                            <div class="absolute lg:top-3/12 sm:top-2/12 top-4/12  left-0 w-full h-full">
                                <p class="text-center lg:text-4xl md:text-xl uppercase text-white">nome del territorio</p>
                                <p class="text-center lg:text-xl md:text-base lg:py-5 md:py-3 py-2 md:px-10 px-5 sm:block hidden text-white">sottotitolo del progetto Lorem, abore, animi. Harum ipsa ratione architecto commodi, explicabo quaerat.</p>
                            </div>
                        </div>
                    </div>             
                    <div id="arrow dx" class="my-auto md:px-10 px-3" >
                        <svg xmlns="http://www.w3.org/2000/svg" class="md:w-14 md:h-14 h-6 w-6" viewBox="0 0 52 51" fill="none">
                            <g clip-path="url(#clip0)">
                            <path d="M31.0037 28.0937L25.7745 33.22L25.7743 33.2202C25.2795 33.7054 24.9979 34.3677 24.9979 35.0625C24.9979 35.7573 25.2795 36.4196 25.7743 36.9048C26.2684 37.3894 26.9345 37.6583 27.625 37.6583C28.3155 37.6583 28.9816 37.3894 29.4757 36.9048L39.2248 27.3432C39.2249 27.3431 39.225 27.343 39.2251 27.3429C39.4703 27.1029 39.6659 26.8168 39.7998 26.5005C39.9337 26.1839 40.0029 25.8439 40.0029 25.5C40.0029 25.1561 39.9337 24.8161 39.7998 24.4995C39.6659 24.1832 39.4703 23.8971 39.2251 23.6571C39.225 23.657 39.2249 23.6569 39.2248 23.6568L29.4757 14.0952C29.2309 13.8551 28.9413 13.6656 28.624 13.5367C28.3067 13.4078 27.9673 13.3417 27.625 13.3417C27.2827 13.3417 26.9433 13.4078 26.626 13.5367C26.3087 13.6656 26.0191 13.8551 25.7743 14.0952C25.5294 14.3353 25.3342 14.6215 25.2006 14.9378C25.067 15.2541 24.998 15.5939 24.998 15.9375C24.998 16.2811 25.067 16.6209 25.2006 16.9372C25.3342 17.2535 25.5294 17.5397 25.7743 17.7798L25.7745 17.78L31.0037 22.9062L14.625 22.9062C13.935 22.9062 13.2695 23.1749 12.7757 23.6591C12.2814 24.144 12 24.8058 12 25.5C12 26.1942 12.2814 26.856 12.7757 27.3409C13.2695 27.8251 13.935 28.0937 14.625 28.0937L31.0037 28.0937ZM43.6846 42.8173C38.9976 47.4141 32.6366 50 26 50C19.3634 50 13.0024 47.4141 8.31543 42.8173C3.62911 38.2211 1 31.9915 1 25.5C1 19.0085 3.62911 12.7789 8.31544 8.18271C13.0024 3.58586 19.3634 0.999997 26 0.999998C32.6366 0.999998 38.9976 3.58586 43.6846 8.18272C48.3709 12.7789 51 19.0085 51 25.5C51 31.9915 48.3709 38.2211 43.6846 42.8173Z" stroke="#919191" stroke-width="2"/>
                            </g>
                            <defs>
                            <clipPath id="clip0">
                            <rect width="52" height="51" fill="white" transform="translate(52 51) rotate(-180)"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </section>

         <!-- footer -->
        <Footer :contact=contact :terms=terms :privacy=privacy :cookies =cookies />
    </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import BackHomeButton from '~/components/BackHomeButton.vue'
import Footer from '~/components/Footer.vue'
import ItemCard from '~/components/ItemCard.vue'
import SwitchLenguage from '~/components/SwitchLenguage.vue'
import IniziativaCard from '~/components/IniziativaCard.vue'

export default {
  data() {
    return {
        name: 'prodotti'
    }
  },
  components: {
    NavBar,
    BackHomeButton,
    Footer,
    ItemCard,
    SwitchLenguage,
    IniziativaCard
  },
  async asyncData({ $axios, error, store, data, env, route, isDev, params, query, req, res, redirect }) {
    $axios.setToken(process.env.bearer_token, 'Bearer')
    let lenguage = route.path.substring(1)?route.path.substring(1):'it'
    const responseInfo = await $axios.$get(store.state.baseUrl+'api/infos?language='+lenguage)
    let responseProd = await $axios.get(store.state.baseUrl+'api/products/prodotto/'+route.params.id+'?language='+lenguage)
        console.log(responseProd.data.data)
    return {
        contact: responseInfo.data.contact,
        terms: responseInfo.data.terms,
        cookies: responseInfo.data.cookies,
        privacy: responseInfo.data.privacy,
        product: responseProd.data.data
        }
    }
}
</script>