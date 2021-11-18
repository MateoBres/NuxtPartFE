<!--<template>
  <Tutorial/>
 </template> -->

<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="styles/output.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,400;0,600;0,900;1,300;1,400;1,600;1,900&display=swap"
        rel="stylesheet"
      />
      <title>Homepage</title>
    </head>

    <body style="font-family: 'Jost', sans-serif">
      <div id="general-container" class="w-full h-auto relative">
        <!-- header + menu  ok!!!!-->
        <section id="header" class="w-full h-auto bg-cover bg-center relative">
          <div
            id="img-back"
            class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0"
          ></div>
          <div
            id="menu"
            class="container mx-auto w-full flex justify-between p-8"
          >
            <div id="logo"><img src />/ LOGO</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 27"
                class="md:w-10 md:h-10 h-6 w-6"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.53333 0.55899C1.12667 0.55899 0.736659 0.708215 0.449103 0.973835C0.161547 1.23946 0 1.59971 0 1.97536C0 2.351 0.161547 2.71126 0.449103 2.97688C0.736659 3.2425 1.12667 3.39173 1.53333 3.39173H38.3334C38.74 3.39173 39.13 3.2425 39.4176 2.97688C39.7052 2.71126 39.8667 2.351 39.8667 1.97536C39.8667 1.59971 39.7052 1.23946 39.4176 0.973835C39.13 0.708215 38.74 0.55899 38.3334 0.55899H1.53333ZM0 13.3063C0 12.9307 0.161547 12.5704 0.449103 12.3048C0.736659 12.0392 1.12667 11.8899 1.53333 11.8899H38.3334C38.74 11.8899 39.13 12.0392 39.4176 12.3048C39.7052 12.5704 39.8667 12.9307 39.8667 13.3063C39.8667 13.6819 39.7052 14.0422 39.4176 14.3078C39.13 14.5734 38.74 14.7227 38.3334 14.7227H1.53333C1.12667 14.7227 0.736659 14.5734 0.449103 14.3078C0.161547 14.0422 0 13.6819 0 13.3063ZM0 24.6372C0 24.2616 0.161547 23.9013 0.449103 23.6357C0.736659 23.3701 1.12667 23.2209 1.53333 23.2209H38.3334C38.74 23.2209 39.13 23.3701 39.4176 23.6357C39.7052 23.9013 39.8667 24.2616 39.8667 24.6372C39.8667 25.0129 39.7052 25.3731 39.4176 25.6388C39.13 25.9044 38.74 26.0536 38.3334 26.0536H1.53333C1.12667 26.0536 0.736659 25.9044 0.449103 25.6388C0.161547 25.3731 0 25.0129 0 24.6372Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>

          <!-- copertina con titolo, sottotilo, bottone -->
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
                titooooolone
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
                Enim non ac suscipit quis adipiscing eget nunc, in. Pellentesque
                augue placerat mattis quam imperdiet. Et senectus fringilla
                purus amet. Scelerisque urna eget amet, quis enim.
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
                scopri di più
              </button>
            </div>
          </section>
        </section>

        <!-- sezione bolloni da sm -->
        <section
          class="
            w-full
            xl:h-96
            lg:h-80
            md:h-64
            sm:h-56
            h-96
            relative
            bg-miac_green-default
            sm:block
            hidden
          "
        >
          <div
            id="curva"
            class="absolute bottom-0 bg-white w-full h-32"
            style="
              box-sizing: border-box;
              clip-path: ellipse(55% 100% at 50% 100%);
            "
          ></div>

          <div
            class="
              absolute
              xl:bottom-0
              lg:bottom-5
              md:bottom-10
              sm:bottom-14
              bottom-0
              w-full
              px-10
            "
          >
            <section id="prodotti" class="w-full h-auto">
              <div class="container mx-auto">
                <div class="flex flex-1 gap-5 flex-wrap justify-center">
                  <div class="flex flex-1">
                    <div
                      class="
                        w-full
                        h-0
                        rounded-full
                        bg-yellow-700 bg-cover
                        relative
                        bg-center
                      "
                      style="
                        padding-top: 100%;
                        background-image: url(~assets/img/icone/prodotti.jpg);
                      "
                    >
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
                            pt-3/12
                            xl:text-3xl
                            lg:text-2xl
                            md:text-lg
                            text-base 
                            text-white
                          "
                        >
                          prodotti
                        </p>
                        <div class="w-1/3 mx-auto lg:mt-4 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 60 59"
                            fill="none"
                            class="w-full"
                          >
                            <g clip-path="url(#clip0)">
                              <path
                                d="M58.7904 30.8794H1.20972V41.8179H58.7904V30.8794Z"
                                stroke="#F0F0F0"
                                stroke-width="2.5"
                                stroke-miterlimit="10"
                              />
                              <path
                                d="M9.00003 38.6719C10.1224 38.6719 11.0323 37.7617 11.0323 36.639C11.0323 35.5164 10.1224 34.6062 9.00003 34.6062C7.87765 34.6062 6.96777 35.5164 6.96777 36.639C6.96777 37.7617 7.87765 38.6719 9.00003 38.6719Z"
                                fill="#F0F0F0"
                              />
                              <path
                                d="M50.4195 38.6719C51.5419 38.6719 52.4517 37.7617 52.4517 36.639C52.4517 35.5164 51.5419 34.6062 50.4195 34.6062C49.2971 34.6062 48.3872 35.5164 48.3872 36.639C48.3872 37.7617 49.2971 38.6719 50.4195 38.6719Z"
                                fill="#F0F0F0"
                              />
                              <path
                                d="M58.7904 46.8515H1.20972V57.79H58.7904V46.8515Z"
                                stroke="#F0F0F0"
                                stroke-width="2.5"
                                stroke-miterlimit="10"
                              />
                              <path
                                d="M9.00003 54.644C10.1224 54.644 11.0323 53.7338 11.0323 52.6112C11.0323 51.4885 10.1224 50.5783 9.00003 50.5783C7.87765 50.5783 6.96777 51.4885 6.96777 52.6112C6.96777 53.7338 7.87765 54.644 9.00003 54.644Z"
                                fill="#F0F0F0"
                              />
                              <path
                                d="M8.70962 30.8794C8.70962 30.8794 6.04833 16.2141 13.1128 8.61526C13.1128 8.61526 27.7741 12.5357 32.9516 30.8794"
                                stroke="#F0F0F0"
                                stroke-width="2"
                                stroke-miterlimit="10"
                              />
                              <path
                                d="M50.4195 54.644C51.5419 54.644 52.4517 53.7338 52.4517 52.6112C52.4517 51.4885 51.5419 50.5783 50.4195 50.5783C49.2971 50.5783 48.3872 51.4885 48.3872 52.6112C48.3872 53.7338 49.2971 54.644 50.4195 54.644Z"
                                fill="#F0F0F0"
                              />
                              <path
                                d="M8.66138 18.8761C8.66138 18.8761 12.0001 18.8277 23.2259 14.6169"
                                stroke="#F0F0F0"
                                stroke-width="2"
                                stroke-miterlimit="10"
                              />
                              <path
                                d="M16.7902 30.8794L13.1128 8.61526C13.1128 8.61526 22.7902 22.0706 25.1612 30.8794"
                                stroke="#F0F0F0"
                                stroke-width="2"
                                stroke-miterlimit="10"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M54.3872 30.9762C54.3872 30.9762 58.113 9.48646 49.984 1.35521C49.984 1.35521 35.3227 5.27563 30.1453 23.6194"
                                stroke="#F0F0F0"
                                stroke-width="2"
                                stroke-miterlimit="10"
                              />
                              <path
                                d="M8.66138 28.653C8.66138 28.653 19.5969 23.813 29.6614 22.7482"
                                stroke="#F0F0F0"
                                stroke-width="2"
                                stroke-miterlimit="10"
                              />
                              <path
                                d="M46.016 30.9762L50.0322 1.35521C50.0322 1.35521 37.6451 19.6505 35.8547 30.9762"
                                stroke="#F0F0F0"
                                stroke-width="2"
                                stroke-miterlimit="10"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M54.4839 11.6161C54.4839 11.6161 51.1452 11.5677 39.9194 7.35686"
                                stroke="#F0F0F0"
                                stroke-width="2"
                                stroke-miterlimit="10"
                              />
                              <path
                                d="M55.1613 21.393C55.1613 21.393 43.5 16.5529 33.4839 15.4881"
                                stroke="#F0F0F0"
                                stroke-width="2"
                                stroke-miterlimit="10"
                              />
                              <path
                                d="M30.6292 22.1673C30.6292 22.1673 43.1614 28.5078 54.7259 28.653"
                                stroke="#F0F0F0"
                                stroke-width="2"
                                stroke-miterlimit="10"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0">
                                <rect width="60" height="59" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-1">
                    <div
                      class="
                        w-full
                        h-0
                        rounded-full
                        bg-yellow-300 bg-cover
                        relative
                        bg-center
                      "
                      style="
                        padding-top: 100%;
                        background-image: url(~assets/img/icone/aziende.jpg);
                      "
                    >
                      <div
                        class="
                          w-full
                          h-full
                          bg-red
                          absolute
                          top-0
                          bg-black bg-opacity-20
                          rounded-full
                        "
                      >
                        <p
                          class="
                            text-center
                            uppercase
                            font-semibold
                            pt-3/12
                            xl:text-3xl
                            lg:text-2xl
                            md:text-lg
                            text-base text-white
                          "
                        >
                          aziende
                        </p>
                        <div class="w-1/3 mx-auto lg:mt-4 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-full"
                            viewBox="0 0 61 56"
                            fill="none"
                          >
                            <g clip-path="url(#clip0)">
                              <path
                                d="M54.9688 54.673L55.7323 28.891L29.7748 12.2085L3.81738 28.891L4.58084 54.673H54.9688Z"
                                stroke="#F0F0F0"
                                stroke-width="2.5"
                                stroke-miterlimit="10"
                              />
                              <path
                                d="M0.763428 21.9289L29.7747 2.59242L59.5 22.5"
                                stroke="#F0F0F0"
                                stroke-width="2.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                              />
                              <path
                                d="M43.1352 29.8389H16.4143V46.1422H43.1352V29.8389Z"
                                stroke="#F0F0F0"
                                stroke-width="2"
                                stroke-miterlimit="10"
                              />
                              <path
                                d="M16.4143 29.8389L43.1352 46.1422"
                                stroke="#F0F0F0"
                                stroke-width="2"
                                stroke-miterlimit="10"
                              />
                              <path
                                d="M16.4143 46.1422L43.1352 29.8389"
                                stroke="#F0F0F0"
                                stroke-width="2"
                                stroke-miterlimit="10"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0">
                                <rect width="61" height="56" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-1">
                    <div
                      class="
                        w-full
                        h-0
                        rounded-full
                        bg-yellow-300 bg-cover
                        relative
                        bg-center
                      "
                      style="
                        padding-top: 100%;
                        background-image: url(~assets/img/icone/progetti&territori.jpg);
                      "
                    >
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
                          progetti & territori
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
                    </div>
                  </div>
                  <div class="flex flex-1">
                    <div
                      class="
                        w-full
                        h-0
                        rounded-full
                        bg-yellow-300 bg-cover
                        relative
                        bg-center
                      "
                      style="
                        padding-top: 100%;
                        background-image: url(~assets/img/icone/iniziative.jpg);
                      "
                    >
                      <div
                        class="
                          w-full
                          h-full
                          bg-red
                          absolute
                          top-0
                          bg-black bg-opacity-20
                          rounded-full
                        "
                      >
                        <p
                          class="
                            text-center
                            uppercase
                            font-semibold
                            pt-3/12
                            xl:text-3xl
                            lg:text-2xl
                            md:text-lg
                            text-base text-white
                          "
                        >
                          iniziative
                        </p>
                        <div class="w-1/3 mx-auto lg:mt-4 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-full"
                            viewBox="0 0 65 55"
                            fill="none"
                          >
                            <g clip-path="url(#clip0)">
                              <path
                                d="M25.3566 21.5228C21.9709 29.6117 15.7038 34.6942 11.3337 32.8807C6.96352 31.0673 6.14712 23.0738 9.53279 14.9848C12.1501 8.7332 15.3436 1.07376 15.3436 1.07376L31.4316 7.51628C31.4316 7.51628 28.7422 13.4338 25.3566 21.5228Z"
                                stroke="#F0F0F0"
                                stroke-width="2"
                                stroke-miterlimit="10"
                              />
                              <path
                                d="M10.5413 12.551L26.5091 18.7787"
                                stroke="#F0F0F0"
                                stroke-width="2"
                                stroke-miterlimit="10"
                              />
                              <path
                                d="M17.3847 23.1692C18.0477 23.1692 18.5853 22.635 18.5853 21.9761C18.5853 21.3172 18.0477 20.7831 17.3847 20.7831C16.7216 20.7831 16.1841 21.3172 16.1841 21.9761C16.1841 22.635 16.7216 23.1692 17.3847 23.1692Z"
                                fill="#F0F0F0"
                              />
                              <path
                                d="M13.6628 27.4642C14.5248 27.4642 15.2236 26.7698 15.2236 25.9132C15.2236 25.0567 14.5248 24.3623 13.6628 24.3623C12.8008 24.3623 12.1021 25.0567 12.1021 25.9132C12.1021 26.7698 12.8008 27.4642 13.6628 27.4642Z"
                                fill="#F0F0F0"
                              />
                              <path
                                d="M18.1049 5.98915L15.9438 10.5228"
                                stroke="#F0F0F0"
                                stroke-width="2"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                              />
                              <path
                                d="M10.8295 34L5.13867 46.9566"
                                stroke="#F0F0F0"
                                stroke-width="2"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                              />
                              <path
                                d="M1 46.3579L5 47.8579L9 49.3579"
                                stroke="#F0F0F0"
                                stroke-width="2"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                              />
                              <path
                                d="M39.9075 28.0846C43.1971 36.1974 49.4162 41.3514 53.8103 39.5857C58.2045 37.82 59.0929 29.8265 55.8033 21.7137C53.2581 15.4382 50.1365 7.75488 50.1365 7.75488L33.9766 14.0065C33.9766 14.0065 36.6179 19.9718 39.9075 28.0846Z"
                                stroke="#F0F0F0"
                                stroke-width="2"
                                stroke-miterlimit="10"
                              />
                              <path
                                d="M54.7949 19.2798L38.7791 25.3406"
                                stroke="#F0F0F0"
                                stroke-width="2"
                                stroke-miterlimit="10"
                              />
                              <path
                                d="M47.8556 29.8265C48.5187 29.8265 49.0562 29.2923 49.0562 28.6334C49.0562 27.9745 48.5187 27.4403 47.8556 27.4403C47.1926 27.4403 46.655 27.9745 46.655 28.6334C46.655 29.2923 47.1926 29.8265 47.8556 29.8265Z"
                                fill="#F0F0F0"
                              />
                              <path
                                d="M51.5293 34.1692C52.3913 34.1692 53.09 33.4748 53.09 32.6182C53.09 31.7616 52.3913 31.0672 51.5293 31.0672C50.6673 31.0672 49.9685 31.7616 49.9685 32.6182C49.9685 33.4748 50.6673 34.1692 51.5293 34.1692Z"
                                fill="#F0F0F0"
                              />
                              <path
                                d="M47.3032 12.6464L49.4163 17.2039"
                                stroke="#F0F0F0"
                                stroke-width="2"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                              />
                              <path
                                d="M54.2908 39.3709L59.8375 52.3753"
                                stroke="#F0F0F0"
                                stroke-width="2"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                              />
                              <path
                                d="M64 51L56 54"
                                stroke="#F0F0F0"
                                stroke-width="2"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0">
                                <rect width="65" height="55" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-1">
                    <div
                      class="
                        w-full
                        h-0
                        rounded-full
                        bg-yellow-300 bg-cover
                        relative
                        bg-center
                      "
                      style="
                        padding-top: 100%;
                        background-image: url(~assets/img/icone/valori.jpg);
                      "
                    >
                      <div
                        class="
                          w-full
                          h-full
                          bg-red
                          absolute
                          top-0
                          bg-black bg-opacity-0
                          rounded-full
                        "
                      >
                        <p
                          class="
                            text-center
                            uppercase
                            font-semibold
                            pt-3/12
                            xl:text-3xl
                            lg:text-2xl
                            md:text-lg
                            text-base text-white
                          "
                        >
                          valori
                        </p>
                        <div class="w-1/3 mx-auto lg:mt-4 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 59 65"
                            fill="none"
                            class="w-full"
                          >
                            <path
                              d="M18.7769 56.8734C8.89783 52.8391 2 43.4259 2 32.4438C2 18.2679 13.5743 6.66951 28.1884 5.88507"
                              stroke="#E2E2E2"
                              stroke-width="2.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                            />
                            <path
                              d="M23.9794 12.1045L22.8688 11.208L27.6037 6.05316L21.875 1.85084L22.8103 0.730225L31.0461 5.70181L23.9794 12.1045Z"
                              fill="#E2E2E2"
                            />
                            <path
                              d="M42.2758 8.68658C51.3365 13.057 57.5328 22.078 57.5328 32.4438C57.5328 46.6196 45.9585 58.2181 31.3445 59.0025"
                              stroke="#E2E2E2"
                              stroke-width="2.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                            />
                            <path
                              d="M35.5538 52.783L36.6645 53.6795L31.9295 58.8344L37.6582 63.0368L36.7229 64.1574L28.9712 58.8344L35.5538 52.783Z"
                              fill="#E2E2E2"
                            />
                            <path
                              d="M26.8555 47.4114C26.8555 47.4114 31.4308 34.2548 41.6907 31.0653"
                              stroke="#E2E2E2"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                            />
                            <path
                              d="M29.2815 42.0957C29.2815 42.0957 25.9539 27.4107 37.9469 26.0153C37.9469 26.0153 46.8204 25.5502 49.4547 25.5502C49.4547 25.5502 47.3057 27.6101 45.8499 33.391C44.3941 39.172 40.5119 44.4213 29.2815 42.0957Z"
                              stroke="#E2E2E2"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                            />
                            <path
                              d="M10.3562 21.8955C10.3562 21.8955 11.9506 27.012 13.6837 29.7364C15.0009 31.7298 20.1308 35.2516 24.2209 33.391C28.311 31.5305 24.2209 23.4903 20.8934 22.8258C17.5658 22.0949 10.3562 21.8955 10.3562 21.8955Z"
                              stroke="#E2E2E2"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                            />
                            <path
                              d="M19.6455 28.0752C19.6455 28.0752 29.2122 36.4476 29.6282 41.2319"
                              stroke="#E2E2E2"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <!-- sezione bolloni - breakpoint xsm -->
        <section
          class="w-full h-auto relative bg-miac_green-default sm:hidden block"
        >
          <section class="flex justify-center gap-x-5 pt-8">
            <!-- bollone prodotti -->
            <div id="bollone" class="w-24 h-24 rounded-full bg-cover bg-center">
              <div class="bg-black bg-opacity-40 w-full h-full rounded-full">
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
                  prodotti
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 60 59"
                  fill="none"
                  class="w-10 mx-auto mt-1"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M58.7904 30.8794H1.20972V41.8179H58.7904V30.8794Z"
                      stroke="#F0F0F0"
                      stroke-width="2.5"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M9.00003 38.6719C10.1224 38.6719 11.0323 37.7617 11.0323 36.639C11.0323 35.5164 10.1224 34.6062 9.00003 34.6062C7.87765 34.6062 6.96777 35.5164 6.96777 36.639C6.96777 37.7617 7.87765 38.6719 9.00003 38.6719Z"
                      fill="#F0F0F0"
                    />
                    <path
                      d="M50.4195 38.6719C51.5419 38.6719 52.4517 37.7617 52.4517 36.639C52.4517 35.5164 51.5419 34.6062 50.4195 34.6062C49.2971 34.6062 48.3872 35.5164 48.3872 36.639C48.3872 37.7617 49.2971 38.6719 50.4195 38.6719Z"
                      fill="#F0F0F0"
                    />
                    <path
                      d="M58.7904 46.8515H1.20972V57.79H58.7904V46.8515Z"
                      stroke="#F0F0F0"
                      stroke-width="2.5"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M9.00003 54.644C10.1224 54.644 11.0323 53.7338 11.0323 52.6112C11.0323 51.4885 10.1224 50.5783 9.00003 50.5783C7.87765 50.5783 6.96777 51.4885 6.96777 52.6112C6.96777 53.7338 7.87765 54.644 9.00003 54.644Z"
                      fill="#F0F0F0"
                    />
                    <path
                      d="M8.70962 30.8794C8.70962 30.8794 6.04833 16.2141 13.1128 8.61526C13.1128 8.61526 27.7741 12.5357 32.9516 30.8794"
                      stroke="#F0F0F0"
                      stroke-width="2"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M50.4195 54.644C51.5419 54.644 52.4517 53.7338 52.4517 52.6112C52.4517 51.4885 51.5419 50.5783 50.4195 50.5783C49.2971 50.5783 48.3872 51.4885 48.3872 52.6112C48.3872 53.7338 49.2971 54.644 50.4195 54.644Z"
                      fill="#F0F0F0"
                    />
                    <path
                      d="M8.66138 18.8761C8.66138 18.8761 12.0001 18.8277 23.2259 14.6169"
                      stroke="#F0F0F0"
                      stroke-width="2"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M16.7902 30.8794L13.1128 8.61526C13.1128 8.61526 22.7902 22.0706 25.1612 30.8794"
                      stroke="#F0F0F0"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M54.3872 30.9762C54.3872 30.9762 58.113 9.48646 49.984 1.35521C49.984 1.35521 35.3227 5.27563 30.1453 23.6194"
                      stroke="#F0F0F0"
                      stroke-width="2"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M8.66138 28.653C8.66138 28.653 19.5969 23.813 29.6614 22.7482"
                      stroke="#F0F0F0"
                      stroke-width="2"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M46.016 30.9762L50.0322 1.35521C50.0322 1.35521 37.6451 19.6505 35.8547 30.9762"
                      stroke="#F0F0F0"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M54.4839 11.6161C54.4839 11.6161 51.1452 11.5677 39.9194 7.35686"
                      stroke="#F0F0F0"
                      stroke-width="2"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M55.1613 21.393C55.1613 21.393 43.5 16.5529 33.4839 15.4881"
                      stroke="#F0F0F0"
                      stroke-width="2"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M30.6292 22.1673C30.6292 22.1673 43.1614 28.5078 54.7259 28.653"
                      stroke="#F0F0F0"
                      stroke-width="2"
                      stroke-miterlimit="10"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="60" height="59" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>

            <!-- bollone aziende -->
            <div
              id="bollone-aziende"
              class="w-24 h-24 rounded-full bg-cover bg-center"
            >
              <div class="bg-black bg-opacity-20 w-full h-full rounded-full">
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
                  aziende
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-10 mx-auto mt-1"
                  viewBox="0 0 61 56"
                  fill="none"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M54.9688 54.673L55.7323 28.891L29.7748 12.2085L3.81738 28.891L4.58084 54.673H54.9688Z"
                      stroke="#F0F0F0"
                      stroke-width="2.5"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M0.763428 21.9289L29.7747 2.59242L59.5 22.5"
                      stroke="#F0F0F0"
                      stroke-width="2.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                    <path
                      d="M43.1352 29.8389H16.4143V46.1422H43.1352V29.8389Z"
                      stroke="#F0F0F0"
                      stroke-width="2"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M16.4143 29.8389L43.1352 46.1422"
                      stroke="#F0F0F0"
                      stroke-width="2"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M16.4143 46.1422L43.1352 29.8389"
                      stroke="#F0F0F0"
                      stroke-width="2"
                      stroke-miterlimit="10"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="61" height="56" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>

            <!-- bollone progetti & territori -->
            <div
              id="bollone-territori"
              class="
                w-24
                h-24
                rounded-full
                bg-black bg-opacity-20 bg-cover bg-center
              "
            >
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
            </div>
          </section>

          <section
            class="flex justify-center gap-x-5 sm:hidden pt-3 mx-10 pb-8"
          >
            <!-- bollone iniziative -->
            <div
              id="bollone-iniziative"
              class="
                w-24
                h-24
                rounded-full
                bg-black bg-opacity-20 bg-cover bg-center
              "
            >
              <div class="bg-black bg-opacity-20 w-full h-full rounded-full">
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
                  iniziative
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-10 mx-auto mt-2"
                  viewBox="0 0 65 55"
                  fill="none"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M25.3566 21.5228C21.9709 29.6117 15.7038 34.6942 11.3337 32.8807C6.96352 31.0673 6.14712 23.0738 9.53279 14.9848C12.1501 8.7332 15.3436 1.07376 15.3436 1.07376L31.4316 7.51628C31.4316 7.51628 28.7422 13.4338 25.3566 21.5228Z"
                      stroke="#F0F0F0"
                      stroke-width="2"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M10.5413 12.551L26.5091 18.7787"
                      stroke="#F0F0F0"
                      stroke-width="2"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M17.3847 23.1692C18.0477 23.1692 18.5853 22.635 18.5853 21.9761C18.5853 21.3172 18.0477 20.7831 17.3847 20.7831C16.7216 20.7831 16.1841 21.3172 16.1841 21.9761C16.1841 22.635 16.7216 23.1692 17.3847 23.1692Z"
                      fill="#F0F0F0"
                    />
                    <path
                      d="M13.6628 27.4642C14.5248 27.4642 15.2236 26.7698 15.2236 25.9132C15.2236 25.0567 14.5248 24.3623 13.6628 24.3623C12.8008 24.3623 12.1021 25.0567 12.1021 25.9132C12.1021 26.7698 12.8008 27.4642 13.6628 27.4642Z"
                      fill="#F0F0F0"
                    />
                    <path
                      d="M18.1049 5.98915L15.9438 10.5228"
                      stroke="#F0F0F0"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                    <path
                      d="M10.8295 34L5.13867 46.9566"
                      stroke="#F0F0F0"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                    <path
                      d="M1 46.3579L5 47.8579L9 49.3579"
                      stroke="#F0F0F0"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                    <path
                      d="M39.9075 28.0846C43.1971 36.1974 49.4162 41.3514 53.8103 39.5857C58.2045 37.82 59.0929 29.8265 55.8033 21.7137C53.2581 15.4382 50.1365 7.75488 50.1365 7.75488L33.9766 14.0065C33.9766 14.0065 36.6179 19.9718 39.9075 28.0846Z"
                      stroke="#F0F0F0"
                      stroke-width="2"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M54.7949 19.2798L38.7791 25.3406"
                      stroke="#F0F0F0"
                      stroke-width="2"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M47.8556 29.8265C48.5187 29.8265 49.0562 29.2923 49.0562 28.6334C49.0562 27.9745 48.5187 27.4403 47.8556 27.4403C47.1926 27.4403 46.655 27.9745 46.655 28.6334C46.655 29.2923 47.1926 29.8265 47.8556 29.8265Z"
                      fill="#F0F0F0"
                    />
                    <path
                      d="M51.5293 34.1692C52.3913 34.1692 53.09 33.4748 53.09 32.6182C53.09 31.7616 52.3913 31.0672 51.5293 31.0672C50.6673 31.0672 49.9685 31.7616 49.9685 32.6182C49.9685 33.4748 50.6673 34.1692 51.5293 34.1692Z"
                      fill="#F0F0F0"
                    />
                    <path
                      d="M47.3032 12.6464L49.4163 17.2039"
                      stroke="#F0F0F0"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                    <path
                      d="M54.2908 39.3709L59.8375 52.3753"
                      stroke="#F0F0F0"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                    <path
                      d="M64 51L56 54"
                      stroke="#F0F0F0"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="65" height="55" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>

            <!-- bollone valori -->
            <div
              id="bollone-valori"
              class="
                w-24
                h-24
                rounded-full
                bg-black bg-opacity-20 bg-cover bg-center
              "
            >
              <div class="bg-black bg-opacity-0 w-full h-full rounded-full">
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
                  valori
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 59 65"
                  fill="none"
                  class="w-10 mx-auto mt-1"
                >
                  <path
                    d="M18.7769 56.8734C8.89783 52.8391 2 43.4259 2 32.4438C2 18.2679 13.5743 6.66951 28.1884 5.88507"
                    stroke="#E2E2E2"
                    stroke-width="2.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M23.9794 12.1045L22.8688 11.208L27.6037 6.05316L21.875 1.85084L22.8103 0.730225L31.0461 5.70181L23.9794 12.1045Z"
                    fill="#E2E2E2"
                  />
                  <path
                    d="M42.2758 8.68658C51.3365 13.057 57.5328 22.078 57.5328 32.4438C57.5328 46.6196 45.9585 58.2181 31.3445 59.0025"
                    stroke="#E2E2E2"
                    stroke-width="2.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M35.5538 52.783L36.6645 53.6795L31.9295 58.8344L37.6582 63.0368L36.7229 64.1574L28.9712 58.8344L35.5538 52.783Z"
                    fill="#E2E2E2"
                  />
                  <path
                    d="M26.8555 47.4114C26.8555 47.4114 31.4308 34.2548 41.6907 31.0653"
                    stroke="#E2E2E2"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M29.2815 42.0957C29.2815 42.0957 25.9539 27.4107 37.9469 26.0153C37.9469 26.0153 46.8204 25.5502 49.4547 25.5502C49.4547 25.5502 47.3057 27.6101 45.8499 33.391C44.3941 39.172 40.5119 44.4213 29.2815 42.0957Z"
                    stroke="#E2E2E2"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M10.3562 21.8955C10.3562 21.8955 11.9506 27.012 13.6837 29.7364C15.0009 31.7298 20.1308 35.2516 24.2209 33.391C28.311 31.5305 24.2209 23.4903 20.8934 22.8258C17.5658 22.0949 10.3562 21.8955 10.3562 21.8955Z"
                    stroke="#E2E2E2"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M19.6455 28.0752C19.6455 28.0752 29.2122 36.4476 29.6282 41.2319"
                    stroke="#E2E2E2"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
          </section>
        </section>

        <!-- sezione di ricerca -->
        <section id="ricerca" class="w-full h-auto">
          <div
            class="container mx-auto mb-16 flex flex-col text-miac_green-black"
          >
            <p
              class="
                text-center
                md:text-3xl
                text-xl
                2xl:mt-32
                lg:mt-16
                md:mt-10
                mt-3
              "
            >
              Cerchi qualcosa in particolare? Digitalo qui:
            </p>
            <input
              type="text"
              placeholder="Prodotto / Azienda .."
              class="
                border-2
                border-miac_green-black
                text-2xl
                md:py-3
                py-1
                md:px-20
                px-8
                md:my-12
                my-8
                rounded-md
                mx-auto
              "
            />
          </div>
        </section>

        <!-- sezione "i prodotti delle nostre aziende" -->
        <section id="prodotti" class="w-full h-auto">
          <div class="container mx-auto md:my-24 my-8">
            <h3
              class="
                text-center
                font-semibold
                uppercase
                md:text-4xl
                text-3xl
                text-miac_green-black
              "
            >
              i prodotti delle nostre aziende
            </h3>
            <div class="flex md:mt-24 mt-12 md:mb-10 mb-4">
              <div id="arrow sx" class="md:w-30 w-auto md:px-10 px-3 my-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="md:w-14 md:h-14 w-6 h-6"
                  viewBox="0 0 52 51"
                  fill="none"
                >
                  <path
                    d="M20.9963 22.9062L26.2255 17.78L26.2257 17.7798C26.7205 17.2946 27.0021 16.6323 27.0021 15.9375C27.0021 15.2427 26.7205 14.5804 26.2257 14.0952C25.7316 13.6106 25.0655 13.3417 24.375 13.3417C23.6845 13.3417 23.0184 13.6106 22.5243 14.0952L12.7752 23.6568C12.7751 23.6569 12.775 23.657 12.7749 23.6571C12.5297 23.8971 12.3341 24.1832 12.2002 24.4995C12.0663 24.8161 11.9971 25.1561 11.9971 25.5C11.9971 25.8439 12.0663 26.1839 12.2002 26.5005C12.3341 26.8168 12.5297 27.1029 12.7749 27.3429C12.775 27.343 12.7751 27.3431 12.7752 27.3432L22.5243 36.9048C22.7691 37.1449 23.0587 37.3344 23.376 37.4633C23.6933 37.5922 24.0327 37.6583 24.375 37.6583C24.7173 37.6583 25.0567 37.5922 25.374 37.4633C25.6913 37.3344 25.9809 37.1449 26.2257 36.9048C26.4706 36.6647 26.6658 36.3785 26.7994 36.0622C26.933 35.7459 27.0021 35.4061 27.0021 35.0625C27.0021 34.7189 26.933 34.3791 26.7994 34.0628C26.6658 33.7465 26.4706 33.4603 26.2257 33.2202L26.2255 33.22L20.9963 28.0938H37.375C38.065 28.0938 38.7305 27.8251 39.2243 27.3409C39.7186 26.856 40 26.1942 40 25.5C40 24.8058 39.7186 24.144 39.2243 23.6591C38.7305 23.1749 38.065 22.9062 37.375 22.9062H20.9963ZM8.31543 8.18272C13.0024 3.58587 19.3634 1 26 1C32.6366 1 38.9976 3.58587 43.6846 8.18272C48.3709 12.7789 51 19.0085 51 25.5C51 31.9915 48.3709 38.2211 43.6846 42.8173C38.9976 47.4141 32.6366 50 26 50C19.3634 50 13.0024 47.4141 8.31543 42.8173C3.62911 38.2211 1 31.9915 1 25.5C1 19.0085 3.62911 12.7789 8.31543 8.18272Z"
                    stroke="#919191"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <div class="flex flex-1">
                <div class="flex flex-1">
                  <div
                    class="w-full h-0 bg-yellow-300 bg-cover bg-center"
                    style="
                      padding-top: 100%;
                      background-image: url(~assets/img/prodotti/fish.jpg);
                    "
                  ></div>
                </div>
                <div class="flex flex-1">
                  <div
                    class="w-full h-0 bg-yellow-300 bg-cover bg-center"
                    style="
                      padding-top: 100%;
                      background-image: url(~assets/img/prodotti/grapes.jpg);
                    "
                  ></div>
                </div>
                <div class="flex flex-1">
                  <div
                    class="w-full h-0 bg-yellow-300 bg-cover bg-center"
                    style="
                      padding-top: 100%;
                      background-image: url(~assets/img/prodotti/meat.jpg);
                    "
                  ></div>
                </div>
                <div class="md:flex flex-1 hidden">
                  <div
                    class="w-full h-0 bg-yellow-300 bg-cover bg-center"
                    style="
                      padding-top: 100%;
                      background-image: url(~assets/img/prodotti/potato.jpg);
                    "
                  ></div>
                </div>
                <div class="md:flex flex-1 hidden">
                  <div
                    class="w-full h-0 bg-yellow-300 bg-cover bg-center"
                    style="
                      padding-top: 100%;
                      background-image: url(~assets/img/prodotti/carrot.jpg);
                    "
                  ></div>
                </div>
              </div>
              <div id="arrow dx" class="my-auto md:px-10 px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="md:w-14 md:h-14 h-6 w-6"
                  viewBox="0 0 52 51"
                  fill="none"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M31.0037 28.0937L25.7745 33.22L25.7743 33.2202C25.2795 33.7054 24.9979 34.3677 24.9979 35.0625C24.9979 35.7573 25.2795 36.4196 25.7743 36.9048C26.2684 37.3894 26.9345 37.6583 27.625 37.6583C28.3155 37.6583 28.9816 37.3894 29.4757 36.9048L39.2248 27.3432C39.2249 27.3431 39.225 27.343 39.2251 27.3429C39.4703 27.1029 39.6659 26.8168 39.7998 26.5005C39.9337 26.1839 40.0029 25.8439 40.0029 25.5C40.0029 25.1561 39.9337 24.8161 39.7998 24.4995C39.6659 24.1832 39.4703 23.8971 39.2251 23.6571C39.225 23.657 39.2249 23.6569 39.2248 23.6568L29.4757 14.0952C29.2309 13.8551 28.9413 13.6656 28.624 13.5367C28.3067 13.4078 27.9673 13.3417 27.625 13.3417C27.2827 13.3417 26.9433 13.4078 26.626 13.5367C26.3087 13.6656 26.0191 13.8551 25.7743 14.0952C25.5294 14.3353 25.3342 14.6215 25.2006 14.9378C25.067 15.2541 24.998 15.5939 24.998 15.9375C24.998 16.2811 25.067 16.6209 25.2006 16.9372C25.3342 17.2535 25.5294 17.5397 25.7743 17.7798L25.7745 17.78L31.0037 22.9062L14.625 22.9062C13.935 22.9062 13.2695 23.1749 12.7757 23.6591C12.2814 24.144 12 24.8058 12 25.5C12 26.1942 12.2814 26.856 12.7757 27.3409C13.2695 27.8251 13.935 28.0937 14.625 28.0937L31.0037 28.0937ZM43.6846 42.8173C38.9976 47.4141 32.6366 50 26 50C19.3634 50 13.0024 47.4141 8.31543 42.8173C3.62911 38.2211 1 31.9915 1 25.5C1 19.0085 3.62911 12.7789 8.31544 8.18271C13.0024 3.58586 19.3634 0.999997 26 0.999998C32.6366 0.999998 38.9976 3.58586 43.6846 8.18272C48.3709 12.7789 51 19.0085 51 25.5C51 31.9915 48.3709 38.2211 43.6846 42.8173Z"
                      stroke="#919191"
                      stroke-width="2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="52"
                        height="51"
                        fill="white"
                        transform="translate(52 51) rotate(-180)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <p
              class="
                text-right
                md:mr-36
                mr-12
                md:text-xl
                text-base
                text-miac_green-gray
                font-normal
              "
            >
              vedi tutti i prodotti →
            </p>
          </div>
        </section>

        <!-- sezione con la mappa -->
        <section
          id="mappa"
          class="w-full md:my-32 my-10 md:h-128 h-72 bg-red-500 relative"
        >
          <div
            class="
              bg-black bg-opacity-20
              absolute
              w-full
              h-auto
              bottom-0
              flex
              md:py-8
              py-4
              md:px-10
              px-4
              md:text-base
              text-sm text-white
            "
          >
            <p>Fai click per visualizzare l'azienda</p>
          </div>
        </section>

        <!-- sezione "cucina con noi" -->
        <section id="prodotti" class="w-full h-auto">
          <div class="container mx-auto md:my-24 my-8">
            <h3
              class="
                text-center
                font-semibold
                uppercase
                md:text-4xl
                text-3xl
                text-miac_green-black
              "
            >
              cucina con noi
            </h3>
            <div class="flex md:mt-24 mt-12 md:mb-10 mb-4">
              <div id="arrow sx" class="md:w-30 w-auto md:px-10 px-3 my-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="md:w-14 md:h-14 w-6 h-6"
                  viewBox="0 0 52 51"
                  fill="none"
                >
                  <path
                    d="M20.9963 22.9062L26.2255 17.78L26.2257 17.7798C26.7205 17.2946 27.0021 16.6323 27.0021 15.9375C27.0021 15.2427 26.7205 14.5804 26.2257 14.0952C25.7316 13.6106 25.0655 13.3417 24.375 13.3417C23.6845 13.3417 23.0184 13.6106 22.5243 14.0952L12.7752 23.6568C12.7751 23.6569 12.775 23.657 12.7749 23.6571C12.5297 23.8971 12.3341 24.1832 12.2002 24.4995C12.0663 24.8161 11.9971 25.1561 11.9971 25.5C11.9971 25.8439 12.0663 26.1839 12.2002 26.5005C12.3341 26.8168 12.5297 27.1029 12.7749 27.3429C12.775 27.343 12.7751 27.3431 12.7752 27.3432L22.5243 36.9048C22.7691 37.1449 23.0587 37.3344 23.376 37.4633C23.6933 37.5922 24.0327 37.6583 24.375 37.6583C24.7173 37.6583 25.0567 37.5922 25.374 37.4633C25.6913 37.3344 25.9809 37.1449 26.2257 36.9048C26.4706 36.6647 26.6658 36.3785 26.7994 36.0622C26.933 35.7459 27.0021 35.4061 27.0021 35.0625C27.0021 34.7189 26.933 34.3791 26.7994 34.0628C26.6658 33.7465 26.4706 33.4603 26.2257 33.2202L26.2255 33.22L20.9963 28.0938H37.375C38.065 28.0938 38.7305 27.8251 39.2243 27.3409C39.7186 26.856 40 26.1942 40 25.5C40 24.8058 39.7186 24.144 39.2243 23.6591C38.7305 23.1749 38.065 22.9062 37.375 22.9062H20.9963ZM8.31543 8.18272C13.0024 3.58587 19.3634 1 26 1C32.6366 1 38.9976 3.58587 43.6846 8.18272C48.3709 12.7789 51 19.0085 51 25.5C51 31.9915 48.3709 38.2211 43.6846 42.8173C38.9976 47.4141 32.6366 50 26 50C19.3634 50 13.0024 47.4141 8.31543 42.8173C3.62911 38.2211 1 31.9915 1 25.5C1 19.0085 3.62911 12.7789 8.31543 8.18272Z"
                    stroke="#919191"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <div class="flex flex-1">
                <div class="flex flex-1">
                  <div
                    class="w-full h-0 bg-yellow-300 bg-cover bg-center"
                    style="
                      padding-top: 100%;
                      background-image: url(~assets/img/cucina_con_noi/ricetta1.jpg);
                    "
                  ></div>
                </div>
                <div class="flex flex-1">
                  <div
                    class="w-full h-0 bg-yellow-300 bg-cover bg-center"
                    style="
                      padding-top: 100%;
                      background-image: url(~assets/img/cucina_con_noi/ricetta2.jpg);
                    "
                  ></div>
                </div>
                <div class="flex flex-1">
                  <div
                    class="w-full h-0 bg-yellow-300 bg-cover bg-center"
                    style="
                      padding-top: 100%;
                      background-image: url(~assets/img/cucina_con_noi/ricetta3.jpg);
                    "
                  ></div>
                </div>
                <div class="md:flex flex-1 hidden">
                  <div
                    class="w-full h-0 bg-yellow-300 bg-cover bg-center"
                    style="
                      padding-top: 100%;
                      background-image: url(~assets/img/cucina_con_noi/ricetta4.jpg);
                    "
                  ></div>
                </div>
                <div class="md:flex flex-1 hidden">
                  <div
                    class="w-full h-0 bg-yellow-300 bg-cover bg-center"
                    style="
                      padding-top: 100%;
                      background-image: url(~assets/img/cucina_con_noi/ricetta5.jpg);
                    "
                  ></div>
                </div>
              </div>
              <div id="arrow dx" class="my-auto md:px-10 px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="md:w-14 md:h-14 h-6 w-6"
                  viewBox="0 0 52 51"
                  fill="none"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M31.0037 28.0937L25.7745 33.22L25.7743 33.2202C25.2795 33.7054 24.9979 34.3677 24.9979 35.0625C24.9979 35.7573 25.2795 36.4196 25.7743 36.9048C26.2684 37.3894 26.9345 37.6583 27.625 37.6583C28.3155 37.6583 28.9816 37.3894 29.4757 36.9048L39.2248 27.3432C39.2249 27.3431 39.225 27.343 39.2251 27.3429C39.4703 27.1029 39.6659 26.8168 39.7998 26.5005C39.9337 26.1839 40.0029 25.8439 40.0029 25.5C40.0029 25.1561 39.9337 24.8161 39.7998 24.4995C39.6659 24.1832 39.4703 23.8971 39.2251 23.6571C39.225 23.657 39.2249 23.6569 39.2248 23.6568L29.4757 14.0952C29.2309 13.8551 28.9413 13.6656 28.624 13.5367C28.3067 13.4078 27.9673 13.3417 27.625 13.3417C27.2827 13.3417 26.9433 13.4078 26.626 13.5367C26.3087 13.6656 26.0191 13.8551 25.7743 14.0952C25.5294 14.3353 25.3342 14.6215 25.2006 14.9378C25.067 15.2541 24.998 15.5939 24.998 15.9375C24.998 16.2811 25.067 16.6209 25.2006 16.9372C25.3342 17.2535 25.5294 17.5397 25.7743 17.7798L25.7745 17.78L31.0037 22.9062L14.625 22.9062C13.935 22.9062 13.2695 23.1749 12.7757 23.6591C12.2814 24.144 12 24.8058 12 25.5C12 26.1942 12.2814 26.856 12.7757 27.3409C13.2695 27.8251 13.935 28.0937 14.625 28.0937L31.0037 28.0937ZM43.6846 42.8173C38.9976 47.4141 32.6366 50 26 50C19.3634 50 13.0024 47.4141 8.31543 42.8173C3.62911 38.2211 1 31.9915 1 25.5C1 19.0085 3.62911 12.7789 8.31544 8.18271C13.0024 3.58586 19.3634 0.999997 26 0.999998C32.6366 0.999998 38.9976 3.58586 43.6846 8.18272C48.3709 12.7789 51 19.0085 51 25.5C51 31.9915 48.3709 38.2211 43.6846 42.8173Z"
                      stroke="#919191"
                      stroke-width="2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="52"
                        height="51"
                        fill="white"
                        transform="translate(52 51) rotate(-180)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <p
              class="
                text-right
                md:mr-36
                mr-12
                md:text-xl
                text-base
                text-miac_green-gray
                font-normal
              "
            >
              vedi tutti i prodotti →
            </p>
          </div>
        </section>

        <!-- sezione "i nostri valori" -->
        <section id="scudi" class="w-full h-auto mt-20">
          <div class="container mx-auto">
            <h3
              class="
                text-center
                font-semibold
                uppercase
                md:text-4xl
                text-3xl
                text-miac_green-black
              "
            >
              i nostri valori
            </h3>
            <h5
              class="
                text-center
                font-medium
                md:text-2xl
                text-base
                md:mt-16
                mt-5
                md:mb-24
                mb-5
                px-5
                md:px-0
                text-miac_green-black
              "
            >
              Pellentesque urna pellentesque imperdiet leo, adipiscing nibh at
              non in. Enim quis nulla laoreet sem libero urna, in.Pellentesque
              urna pellentesque imperdiet leo, adipiscing nibh at non in. Enim
              quis nulla laoreet sem libero urna, in.
            </h5>
            <!-- md e superiori -->
            <div class="md:flex justify-evenly hidden">
              <div id="scudo" class="relative w-56">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="relative w-56 pl-2"
                  viewBox="0 0 211 240"
                  fill="none"
                >
                  <g filter="url(#filter0_d)">
                    <path
                      d="M97.9197 219.783C17.9486 190.452 7.26621 89.7491 11.9214 43.0641C55.435 43.0641 87.3843 23.0214 97.9197 13C126.145 34.7048 171.913 42.0864 191.268 43.0641C193.032 175.053 129.771 215.872 97.9197 219.783Z"
                      fill="url(#paint0_radial)"
                    />
                  </g>
                  <g filter="url(#filter1_d)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M97.8606 232C7.82327 199.092 -4.20378 86.1088 1.03736 33.7305C50.0283 33.7305 85.9991 11.2435 97.8606 0C129.639 24.3518 181.167 32.6336 202.959 33.7305C204.945 181.816 133.721 227.612 97.8606 232ZM97.664 219.391C18.2483 190.06 7.64011 89.3576 12.263 42.6726C55.4744 42.6726 87.2018 22.6299 97.664 12.6085C125.693 34.3133 171.143 41.6949 190.364 42.6726C192.116 174.662 129.294 215.48 97.664 219.391Z"
                      fill="#FFC806"
                      fill-opacity="0.7"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d"
                      x="11"
                      y="13"
                      width="188.304"
                      height="214.783"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="4" dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter1_d"
                      x="0"
                      y="0"
                      width="211"
                      height="240"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="4" dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow"
                        result="shape"
                      />
                    </filter>
                    <radialGradient
                      id="paint0_radial"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(101.152 116.391) rotate(90) scale(103.391 90.1522)"
                    >
                      <stop stop-color="#2E2E2E" stop-opacity="0.68" />
                      <stop offset="1" stop-color="#2E2E2E" />
                    </radialGradient>
                  </defs>
                </svg>
                <div class="absolute w-full h-full top-16">
                  <p
                    class="
                      text-center
                      uppercase
                      text-white
                      font-semibold
                      text-2xl
                    "
                  >
                    innovazione
                  </p>
                  <img
                    src="~/assets/img/icone/full-star.svg"
                    class="mx-auto mt-4"
                  />
                </div>
              </div>
              <div id="scudo" class="relative w-56">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="relative w-56 pl-2"
                  viewBox="0 0 211 240"
                  fill="none"
                >
                  <g filter="url(#filter0_d)">
                    <path
                      d="M97.9197 219.783C17.9486 190.452 7.26621 89.7491 11.9214 43.0641C55.435 43.0641 87.3843 23.0214 97.9197 13C126.145 34.7048 171.913 42.0864 191.268 43.0641C193.032 175.053 129.771 215.872 97.9197 219.783Z"
                      fill="url(#paint0_radial)"
                    />
                  </g>
                  <g filter="url(#filter1_d)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M97.8606 232C7.82327 199.092 -4.20378 86.1088 1.03736 33.7305C50.0283 33.7305 85.9991 11.2435 97.8606 0C129.639 24.3518 181.167 32.6336 202.959 33.7305C204.945 181.816 133.721 227.612 97.8606 232ZM97.664 219.391C18.2483 190.06 7.64011 89.3576 12.263 42.6726C55.4744 42.6726 87.2018 22.6299 97.664 12.6085C125.693 34.3133 171.143 41.6949 190.364 42.6726C192.116 174.662 129.294 215.48 97.664 219.391Z"
                      fill="#FFC806"
                      fill-opacity="0.7"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d"
                      x="11"
                      y="13"
                      width="188.304"
                      height="214.783"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="4" dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter1_d"
                      x="0"
                      y="0"
                      width="211"
                      height="240"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="4" dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow"
                        result="shape"
                      />
                    </filter>
                    <radialGradient
                      id="paint0_radial"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(101.152 116.391) rotate(90) scale(103.391 90.1522)"
                    >
                      <stop stop-color="#2E2E2E" stop-opacity="0.68" />
                      <stop offset="1" stop-color="#2E2E2E" />
                    </radialGradient>
                  </defs>
                </svg>
                <div class="absolute w-full h-full top-16">
                  <p
                    class="
                      text-center
                      uppercase
                      text-white
                      font-semibold
                      text-2xl
                      leading-tight
                      -mt-3
                    "
                  >
                    controllo <br />
                    di filiera
                  </p>
                  <img
                    src="~/assets/img/icone/empty-star.svg"
                    class="mx-auto mt-2"
                  />
                </div>
              </div>
              <div id="scudo" class="relative w-56">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="relative w-56 pl-2"
                  viewBox="0 0 211 240"
                  fill="none"
                >
                  <g filter="url(#filter0_d)">
                    <path
                      d="M97.9197 219.783C17.9486 190.452 7.26621 89.7491 11.9214 43.0641C55.435 43.0641 87.3843 23.0214 97.9197 13C126.145 34.7048 171.913 42.0864 191.268 43.0641C193.032 175.053 129.771 215.872 97.9197 219.783Z"
                      fill="url(#paint0_radial)"
                    />
                  </g>
                  <g filter="url(#filter1_d)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M97.8606 232C7.82327 199.092 -4.20378 86.1088 1.03736 33.7305C50.0283 33.7305 85.9991 11.2435 97.8606 0C129.639 24.3518 181.167 32.6336 202.959 33.7305C204.945 181.816 133.721 227.612 97.8606 232ZM97.664 219.391C18.2483 190.06 7.64011 89.3576 12.263 42.6726C55.4744 42.6726 87.2018 22.6299 97.664 12.6085C125.693 34.3133 171.143 41.6949 190.364 42.6726C192.116 174.662 129.294 215.48 97.664 219.391Z"
                      fill="#FFC806"
                      fill-opacity="0.7"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d"
                      x="11"
                      y="13"
                      width="188.304"
                      height="214.783"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="4" dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter1_d"
                      x="0"
                      y="0"
                      width="211"
                      height="240"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="4" dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow"
                        result="shape"
                      />
                    </filter>
                    <radialGradient
                      id="paint0_radial"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(101.152 116.391) rotate(90) scale(103.391 90.1522)"
                    >
                      <stop stop-color="#2E2E2E" stop-opacity="0.68" />
                      <stop offset="1" stop-color="#2E2E2E" />
                    </radialGradient>
                  </defs>
                </svg>
                <div class="absolute w-full h-full top-16">
                  <p
                    class="
                      text-center
                      uppercase
                      text-white
                      font-semibold
                      text-2xl
                      leading-tight
                      -mt-3
                    "
                  >
                    sostenibilità <br />
                    sociale
                  </p>
                  <img
                    src="~/assets/img/icone/full-star.svg"
                    class="mx-auto mt-2"
                  />
                </div>
              </div>
              <div id="scudo" class="relative w-56">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="relative w-56 pl-2"
                  viewBox="0 0 211 240"
                  fill="none"
                >
                  <g filter="url(#filter0_d)">
                    <path
                      d="M97.9197 219.783C17.9486 190.452 7.26621 89.7491 11.9214 43.0641C55.435 43.0641 87.3843 23.0214 97.9197 13C126.145 34.7048 171.913 42.0864 191.268 43.0641C193.032 175.053 129.771 215.872 97.9197 219.783Z"
                      fill="url(#paint0_radial)"
                    />
                  </g>
                  <g filter="url(#filter1_d)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M97.8606 232C7.82327 199.092 -4.20378 86.1088 1.03736 33.7305C50.0283 33.7305 85.9991 11.2435 97.8606 0C129.639 24.3518 181.167 32.6336 202.959 33.7305C204.945 181.816 133.721 227.612 97.8606 232ZM97.664 219.391C18.2483 190.06 7.64011 89.3576 12.263 42.6726C55.4744 42.6726 87.2018 22.6299 97.664 12.6085C125.693 34.3133 171.143 41.6949 190.364 42.6726C192.116 174.662 129.294 215.48 97.664 219.391Z"
                      fill="#FFC806"
                      fill-opacity="0.7"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d"
                      x="11"
                      y="13"
                      width="188.304"
                      height="214.783"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="4" dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter1_d"
                      x="0"
                      y="0"
                      width="211"
                      height="240"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="4" dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow"
                        result="shape"
                      />
                    </filter>
                    <radialGradient
                      id="paint0_radial"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(101.152 116.391) rotate(90) scale(103.391 90.1522)"
                    >
                      <stop stop-color="#2E2E2E" stop-opacity="0.68" />
                      <stop offset="1" stop-color="#2E2E2E" />
                    </radialGradient>
                  </defs>
                </svg>
                <div class="absolute w-full h-full top-16">
                  <p
                    class="
                      text-center
                      uppercase
                      text-white
                      font-semibold
                      text-2xl
                      leading-tight
                      -mt-3
                    "
                  >
                    sostenibilità <br />
                    ambientale
                  </p>
                  <img
                    src="~/assets/img/icone/full-star.svg"
                    class="mx-auto mt-2"
                  />
                </div>
              </div>
            </div>

            <!-- sm e inferiori -->
            <section class="md:hidden">
              <div class="flex justify-evenly px-5">
                <div id="scudo" class="relative w-56">
                  <img
                    src="~/assets/img/icone/scudo.svg"
                    class="relative w-56 pl-2"
                  />
                  <div class="absolute w-full h-full sm:top-16 top-12">
                    <p
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
                      innovazione
                    </p>
                    <img
                      src="~/assets/img/icone/full-star.svg"
                      class="mx-auto mt-2 w-10 sm:w-16 sm:mt-4"
                    />
                  </div>
                </div>
                <div id="scudo" class="relative w-56">
                  <img
                    src="~/assets/img/icone/scudo.svg"
                    class="relative w-56 pl-2"
                  />
                  <div class="absolute w-full h-full sm:top-12 top-8">
                    <p
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
                      controllo <br />
                      di filiera
                    </p>
                    <img
                      src="~/assets/img/icone/full-star.svg"
                      class="mx-auto mt-2 w-10 sm:w-16 sm:mt-4"
                    />
                  </div>
                </div>
              </div>
              <div class="flex justify-evenly my-5 px-5">
                <div id="scudo" class="relative w-56">
                  <img
                    src="~/assets/img/icone/scudo.svg"
                    class="relative w-56 pl-2"
                  />
                  <div class="absolute w-full h-full sm:top-12 top-8">
                    <p
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
                      sostenibilità <br />
                      sociale
                    </p>
                    <img
                      src="~/assets/img/icone/full-star.svg"
                      class="mx-auto mt-2 w-10 sm:w-16 sm:mt-4"
                    />
                  </div>
                </div>
                <div id="scudo" class="relative w-56">
                  <img
                    src="~/assets/img/icone/scudo.svg"
                    class="relative w-56 pl-2"
                  />
                  <div class="absolute w-full h-full sm:top-12 top-8">
                    <p
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
                      sostenibilità <br />
                      ambientale
                    </p>
                    <img
                      src="~/assets/img/icone/full-star.svg"
                      class="mx-auto mt-2 w-10 sm:w-16 sm:mt-4"
                    />
                  </div>
                </div>
              </div>
            </section>
            <!--
                <p class="text-right md:mr-36 mr-12 md:text-xl md:mt-8 text-base text-miac_green-gray font-normal">scopri i nostri valori →</p>-->
          </div>
        </section>

        <!-- footer -->
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
            Termini e condizioni • Privacy Policy • Cookie Policy
          </p>
          <p class="md:py-2 py-2 text-sm font-light">
            miac srl - Via loremipsum 22, 35321 - tel. 030 25789654 - P.IVA e CF
            0157866548
          </p>
          <p class="mt:pb-12 pb-8 text-miac_green-footer">
            Made with ❤ by Attivi Digitali
          </p>
        </footer>

        <!-- pannello menu - hidden -->
        <section
          id="menu"
          class="
            w-screen
            h-screen
            absolute
            top-0
            left-0
            bg-black bg-opacity-70
            hidden
          "
        >
          <div
            class="
              xl:w-3/6
              w-5/6
              h-auto
              bg-white bg-opacity-50
              mx-auto
              md:mt-20
              mt-10
              relative
            "
          >
            <div class="absolute md:right-6 md:top-6 right-3 top-3 w-10 h-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 28 28"
                class="
                  md:w-8 md:h-8
                  w-4
                  h-4
                  mt-1
                  mx-auto
                  fill-current
                  stroke-current
                  text-white
                "
              >
                <path
                  d="M27.2929 24.5L24.5003 27.2929L14.3523 17.1464L13.9987 16.7929L13.6452 17.1465L3.49969 27.2929L0.707075 24.5L10.8526 14.3535L11.2061 14L10.8526 13.6465L0.707075 3.5L3.49969 0.707138L13.6452 10.8535L13.9987 11.2071L14.3523 10.8536L24.5003 0.707096L27.2929 3.5L17.1474 13.6465L16.7939 14L17.1474 14.3535L27.2929 24.5Z"
                  fill="white"
                  stroke="white"
                />
              </svg>
            </div>
            <div
              id="opzioni-menu"
              class="
                flex-wrap flex
                justify-evenly
                md:pt-24
                pt-14
                md:pb-20
                pb-8
                lg:px-12
                md:px-8
                px-3
                md:gap-y-8
                gap-y-3
                lg:gap-x-2
                md:gap-x-0
              "
            >
              <div
                id="opzione-menu"
                class="
                  2xl:w-1/4
                  lg:w-7/24
                  md:w-7/24
                  w-5/12
                  h-auto
                  md:rounded-tr-4xl md:rounded-bl-4xl
                  rounded-tr-3xl rounded-bl-3xl rounded-tl-sm rounded-br-sm
                  bg-yellow-500 bg-cover bg-center
                  overflow-hidden
                "
                style="background-image: url(~assets/img/icone/prodotti.jpg)"
              >
                <div class="w-full h-full bg-black bg-opacity-20">
                  <p
                    class="
                      text-white
                      lg:text-3xl
                      md:text-xl
                      text-base
                      font-semibold
                      uppercase
                      text-center
                      lg:pt-12
                      md:pt-10
                      pt-4
                    "
                  >
                    prodotti
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="
                      md:mt-5
                      mt-2
                      lg:mb-12
                      md:mb-8
                      mb-6
                      lg:w-24 lg:h-24
                      md:w-18 md:h-18
                      w-12
                      h-12
                      mx-auto
                    "
                    viewBox="0 0 60 59"
                    fill="none"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M58.7904 30.8794H1.20972V41.8179H58.7904V30.8794Z"
                        stroke="#F0F0F0"
                        stroke-width="2.5"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M9.00003 38.6719C10.1224 38.6719 11.0323 37.7617 11.0323 36.639C11.0323 35.5164 10.1224 34.6062 9.00003 34.6062C7.87765 34.6062 6.96777 35.5164 6.96777 36.639C6.96777 37.7617 7.87765 38.6719 9.00003 38.6719Z"
                        fill="#F0F0F0"
                      />
                      <path
                        d="M50.4195 38.6719C51.5419 38.6719 52.4517 37.7617 52.4517 36.639C52.4517 35.5164 51.5419 34.6062 50.4195 34.6062C49.2971 34.6062 48.3872 35.5164 48.3872 36.639C48.3872 37.7617 49.2971 38.6719 50.4195 38.6719Z"
                        fill="#F0F0F0"
                      />
                      <path
                        d="M58.7904 46.8515H1.20972V57.79H58.7904V46.8515Z"
                        stroke="#F0F0F0"
                        stroke-width="2.5"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M9.00003 54.644C10.1224 54.644 11.0323 53.7338 11.0323 52.6112C11.0323 51.4885 10.1224 50.5783 9.00003 50.5783C7.87765 50.5783 6.96777 51.4885 6.96777 52.6112C6.96777 53.7338 7.87765 54.644 9.00003 54.644Z"
                        fill="#F0F0F0"
                      />
                      <path
                        d="M50.4195 54.644C51.5419 54.644 52.4517 53.7338 52.4517 52.6112C52.4517 51.4885 51.5419 50.5783 50.4195 50.5783C49.2971 50.5783 48.3872 51.4885 48.3872 52.6112C48.3872 53.7338 49.2971 54.644 50.4195 54.644Z"
                        fill="#F0F0F0"
                      />
                      <path
                        d="M8.70962 30.8794C8.70962 30.8794 6.04833 16.2141 13.1128 8.61526C13.1128 8.61526 27.7741 12.5357 32.9516 30.8794"
                        stroke="#F0F0F0"
                        stroke-width="2"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M16.7902 30.8794L13.1128 8.61526C13.1128 8.61526 22.7902 22.0706 25.1612 30.8794"
                        stroke="#F0F0F0"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.66138 18.8761C8.66138 18.8761 12.0001 18.8277 23.2259 14.6169"
                        stroke="#F0F0F0"
                        stroke-width="2"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M8.66138 28.653C8.66138 28.653 19.5969 23.813 29.6614 22.7482"
                        stroke="#F0F0F0"
                        stroke-width="2"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M54.3872 30.9762C54.3872 30.9762 58.113 9.48646 49.984 1.35521C49.984 1.35521 35.3227 5.27563 30.1453 23.6194"
                        stroke="#F0F0F0"
                        stroke-width="2"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M46.016 30.9762L50.0322 1.35521C50.0322 1.35521 37.6451 19.6505 35.8547 30.9762"
                        stroke="#F0F0F0"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M54.4839 11.6161C54.4839 11.6161 51.1452 11.5677 39.9194 7.35686"
                        stroke="#F0F0F0"
                        stroke-width="2"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M55.1613 21.393C55.1613 21.393 43.5 16.5529 33.4839 15.4881"
                        stroke="#F0F0F0"
                        stroke-width="2"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M30.6292 22.1673C30.6292 22.1673 43.1614 28.5078 54.7259 28.653"
                        stroke="#F0F0F0"
                        stroke-width="2"
                        stroke-miterlimit="10"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="60" height="59" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div
                id="opzione-menu"
                class="
                  2xl:w-1/4
                  lg:w-7/24
                  md:w-7/24
                  w-5/12
                  h-auto
                  md:rounded-tr-4xl md:rounded-bl-4xl
                  rounded-tr-3xl rounded-bl-3xl rounded-tl-sm rounded-br-sm
                  bg-yellow-500 bg-cover bg-center
                  overflow-hidden
                "
                style="background-image: url(~assets/img/icone/aziende.jpg)"
              >
                <div class="w-full h-full bg-black bg-opacity-20">
                  <p
                    class="
                      text-white
                      lg:text-3xl
                      md:text-xl
                      text-base
                      font-semibold
                      uppercase
                      text-center
                      lg:pt-12
                      md:pt-10
                      pt-4
                    "
                  >
                    aziende
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="
                      md:mt-5
                      mt-2
                      lg:mb-12
                      md:mb-8
                      mb-6
                      lg:w-24 lg:h-24
                      md:w-18 md:h-18
                      w-12
                      h-12
                      mx-auto
                    "
                    viewBox="0 0 61 56"
                    fill="none"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M54.9688 54.673L55.7323 28.891L29.7748 12.2085L3.81738 28.891L4.58084 54.673H54.9688Z"
                        stroke="#F0F0F0"
                        stroke-width="2.5"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M0.763428 21.9289L29.7747 2.59242L59.5 22.5"
                        stroke="#F0F0F0"
                        stroke-width="2.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      />
                      <path
                        d="M43.1352 29.8389H16.4143V46.1422H43.1352V29.8389Z"
                        stroke="#F0F0F0"
                        stroke-width="2"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M16.4143 29.8389L43.1352 46.1422"
                        stroke="#F0F0F0"
                        stroke-width="2"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M16.4143 46.1422L43.1352 29.8389"
                        stroke="#F0F0F0"
                        stroke-width="2"
                        stroke-miterlimit="10"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="61" height="56" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div
                id="opzione-menu"
                class="
                  2xl:w-1/4
                  lg:w-7/24
                  md:w-7/24
                  w-5/12
                  h-auto
                  md:rounded-tr-4xl md:rounded-bl-4xl
                  rounded-tr-3xl rounded-bl-3xl rounded-tl-sm rounded-br-sm
                  bg-yellow-500 bg-cover bg-center
                  overflow-hidden
                "
                style="background-image: url(~assets/img/icone/iniziative.jpg)"
              >
                <div class="w-full h-full bg-black bg-opacity-20">
                  <p
                    class="
                      text-white
                      lg:text-3xl
                      md:text-xl
                      text-base
                      font-semibold
                      uppercase
                      text-center
                      lg:pt-12
                      md:pt-10
                      pt-4
                    "
                  >
                    iniziative
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="
                      md:mt-5
                      mt-2
                      lg:mb-12
                      md:mb-8
                      mb-6
                      lg:w-24 lg:h-24
                      md:w-18 md:h-18
                      w-12
                      h-12
                      mx-auto
                    "
                    viewBox="0 0 65 55"
                    fill="none"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M25.3566 21.5228C21.9709 29.6117 15.7038 34.6942 11.3337 32.8807C6.96352 31.0673 6.14712 23.0738 9.53279 14.9848C12.1501 8.7332 15.3436 1.07376 15.3436 1.07376L31.4316 7.51628C31.4316 7.51628 28.7422 13.4338 25.3566 21.5228Z"
                        stroke="#F0F0F0"
                        stroke-width="2"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M10.5413 12.551L26.5091 18.7787"
                        stroke="#F0F0F0"
                        stroke-width="2"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M17.3847 23.1692C18.0477 23.1692 18.5853 22.635 18.5853 21.9761C18.5853 21.3172 18.0477 20.7831 17.3847 20.7831C16.7216 20.7831 16.1841 21.3172 16.1841 21.9761C16.1841 22.635 16.7216 23.1692 17.3847 23.1692Z"
                        fill="#F0F0F0"
                      />
                      <path
                        d="M13.6628 27.4642C14.5248 27.4642 15.2236 26.7698 15.2236 25.9132C15.2236 25.0567 14.5248 24.3623 13.6628 24.3623C12.8008 24.3623 12.1021 25.0567 12.1021 25.9132C12.1021 26.7698 12.8008 27.4642 13.6628 27.4642Z"
                        fill="#F0F0F0"
                      />
                      <path
                        d="M18.1049 5.98915L15.9438 10.5228"
                        stroke="#F0F0F0"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      />
                      <path
                        d="M10.8295 34L5.13867 46.9566"
                        stroke="#F0F0F0"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      />
                      <path
                        d="M1 46.3579L5 47.8579L9 49.3579"
                        stroke="#F0F0F0"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      />
                      <path
                        d="M39.9075 28.0846C43.1971 36.1974 49.4162 41.3514 53.8103 39.5857C58.2045 37.82 59.0929 29.8265 55.8033 21.7137C53.2581 15.4382 50.1365 7.75488 50.1365 7.75488L33.9766 14.0065C33.9766 14.0065 36.6179 19.9718 39.9075 28.0846Z"
                        stroke="#F0F0F0"
                        stroke-width="2"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M54.7949 19.2798L38.7791 25.3406"
                        stroke="#F0F0F0"
                        stroke-width="2"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M47.8556 29.8265C48.5187 29.8265 49.0562 29.2923 49.0562 28.6334C49.0562 27.9745 48.5187 27.4403 47.8556 27.4403C47.1926 27.4403 46.655 27.9745 46.655 28.6334C46.655 29.2923 47.1926 29.8265 47.8556 29.8265Z"
                        fill="#F0F0F0"
                      />
                      <path
                        d="M51.5293 34.1692C52.3913 34.1692 53.09 33.4748 53.09 32.6182C53.09 31.7616 52.3913 31.0672 51.5293 31.0672C50.6673 31.0672 49.9685 31.7616 49.9685 32.6182C49.9685 33.4748 50.6673 34.1692 51.5293 34.1692Z"
                        fill="#F0F0F0"
                      />
                      <path
                        d="M47.3032 12.6464L49.4163 17.2039"
                        stroke="#F0F0F0"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      />
                      <path
                        d="M54.2908 39.3709L59.8375 52.3753"
                        stroke="#F0F0F0"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      />
                      <path
                        d="M64 51L56 54"
                        stroke="#F0F0F0"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="65" height="55" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div
                id="opzione-menu"
                class="
                  2xl:w-1/4
                  lg:w-7/24
                  md:w-7/24
                  w-5/12
                  h-auto
                  md:rounded-tr-4xl md:rounded-bl-4xl
                  rounded-tr-3xl rounded-bl-3xl rounded-tl-sm rounded-br-sm
                  bg-yellow-500 bg-cover bg-center
                  overflow-hidden
                "
                style="
                  background-image: url(~assets/img/icone/progetti&territori.jpg);
                "
              >
                <div class="w-full h-full bg-black bg-opacity-20">
                  <p
                    class="
                      text-white
                      lg:text-3xl
                      md:text-xl
                      text-base
                      font-semibold
                      uppercase
                      text-center
                      lg:pt-10
                      md:pt-8
                      pt-2
                      leading-none
                    "
                  >
                    progetti <br />
                    & territori
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="
                      md:mt-3
                      mt-2
                      lg:mb-12
                      md:mb-8
                      mb-6
                      lg:w-24 lg:h-24
                      md:w-18 md:h-18
                      w-12
                      h-12
                      mx-auto
                    "
                    viewBox="0 0 64 45"
                    fill="none"
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
              <div
                id="opzione-menu"
                class="
                  2xl:w-1/4
                  lg:w-7/24
                  md:w-7/24
                  w-5/12
                  h-auto
                  md:rounded-tr-4xl md:rounded-bl-4xl
                  rounded-tr-3xl rounded-bl-3xl rounded-tl-sm rounded-br-sm
                  bg-yellow-500 bg-cover bg-center
                  overflow-hidden
                "
                style="background-image: url(~assets/img/icone/aziende.jpg)"
              >
                <div class="w-full h-full bg-black bg-opacity-20">
                  <p
                    class="
                      text-white
                      lg:text-3xl
                      md:text-xl
                      text-base
                      font-semibold
                      uppercase
                      text-center
                      lg:pt-12
                      md:pt-10
                      pt-4
                    "
                  >
                    il progetto
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="
                      md:mt-5
                      mt-2
                      lg:mb-12
                      md:mb-8
                      mb-6
                      lg:w-24 lg:h-24
                      md:w-18 md:h-18
                      w-12
                      h-12
                      mx-auto
                    "
                    viewBox="0 0 65 55"
                    fill="none"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M25.3566 21.5228C21.9709 29.6117 15.7038 34.6942 11.3337 32.8807C6.96352 31.0673 6.14712 23.0738 9.53279 14.9848C12.1501 8.7332 15.3436 1.07376 15.3436 1.07376L31.4316 7.51628C31.4316 7.51628 28.7422 13.4338 25.3566 21.5228Z"
                        stroke="#F0F0F0"
                        stroke-width="2"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M10.5413 12.551L26.5091 18.7787"
                        stroke="#F0F0F0"
                        stroke-width="2"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M17.3847 23.1692C18.0477 23.1692 18.5853 22.635 18.5853 21.9761C18.5853 21.3172 18.0477 20.7831 17.3847 20.7831C16.7216 20.7831 16.1841 21.3172 16.1841 21.9761C16.1841 22.635 16.7216 23.1692 17.3847 23.1692Z"
                        fill="#F0F0F0"
                      />
                      <path
                        d="M13.6628 27.4642C14.5248 27.4642 15.2236 26.7698 15.2236 25.9132C15.2236 25.0567 14.5248 24.3623 13.6628 24.3623C12.8008 24.3623 12.1021 25.0567 12.1021 25.9132C12.1021 26.7698 12.8008 27.4642 13.6628 27.4642Z"
                        fill="#F0F0F0"
                      />
                      <path
                        d="M18.1049 5.98915L15.9438 10.5228"
                        stroke="#F0F0F0"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      />
                      <path
                        d="M10.8295 34L5.13867 46.9566"
                        stroke="#F0F0F0"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      />
                      <path
                        d="M1 46.3579L5 47.8579L9 49.3579"
                        stroke="#F0F0F0"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      />
                      <path
                        d="M39.9075 28.0846C43.1971 36.1974 49.4162 41.3514 53.8103 39.5857C58.2045 37.82 59.0929 29.8265 55.8033 21.7137C53.2581 15.4382 50.1365 7.75488 50.1365 7.75488L33.9766 14.0065C33.9766 14.0065 36.6179 19.9718 39.9075 28.0846Z"
                        stroke="#F0F0F0"
                        stroke-width="2"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M54.7949 19.2798L38.7791 25.3406"
                        stroke="#F0F0F0"
                        stroke-width="2"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M47.8556 29.8265C48.5187 29.8265 49.0562 29.2923 49.0562 28.6334C49.0562 27.9745 48.5187 27.4403 47.8556 27.4403C47.1926 27.4403 46.655 27.9745 46.655 28.6334C46.655 29.2923 47.1926 29.8265 47.8556 29.8265Z"
                        fill="#F0F0F0"
                      />
                      <path
                        d="M51.5293 34.1692C52.3913 34.1692 53.09 33.4748 53.09 32.6182C53.09 31.7616 52.3913 31.0672 51.5293 31.0672C50.6673 31.0672 49.9685 31.7616 49.9685 32.6182C49.9685 33.4748 50.6673 34.1692 51.5293 34.1692Z"
                        fill="#F0F0F0"
                      />
                      <path
                        d="M47.3032 12.6464L49.4163 17.2039"
                        stroke="#F0F0F0"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      />
                      <path
                        d="M54.2908 39.3709L59.8375 52.3753"
                        stroke="#F0F0F0"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      />
                      <path
                        d="M64 51L56 54"
                        stroke="#F0F0F0"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="65" height="55" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div
                id="opzione-menu"
                class="
                  2xl:w-1/4
                  lg:w-7/24
                  md:w-7/24
                  w-5/12
                  h-auto
                  md:rounded-tr-4xl md:rounded-bl-4xl
                  rounded-tr-3xl rounded-bl-3xl rounded-tl-sm rounded-br-sm
                  bg-yellow-500 bg-cover bg-center
                  overflow-hidden
                "
                style="background-image: url(~assets/img/icone/valori.jpg)"
              >
                <div class="w-full h-full bg-black bg-opacity-20">
                  <p
                    class="
                      text-white
                      lg:text-3xl
                      md:text-xl
                      text-base
                      font-semibold
                      uppercase
                      text-center
                      lg:pt-12
                      md:pt-10
                      pt-4
                    "
                  >
                    valori
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="
                      md:mt-5
                      mt-2
                      lg:mb-12
                      md:mb-8
                      mb-6
                      lg:w-24 lg:h-24
                      md:w-18 md:h-18
                      w-12
                      h-12
                      mx-auto
                    "
                    viewBox="0 0 59 65"
                    fill="none"
                  >
                    <path
                      d="M18.7769 56.8734C8.89783 52.8391 2 43.4259 2 32.4438C2 18.2679 13.5743 6.66951 28.1884 5.88507"
                      stroke="#E2E2E2"
                      stroke-width="2.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                    <path
                      d="M23.9794 12.1045L22.8688 11.208L27.6037 6.05316L21.875 1.85084L22.8103 0.730225L31.0461 5.70181L23.9794 12.1045Z"
                      fill="#E2E2E2"
                    />
                    <path
                      d="M42.2758 8.68658C51.3365 13.057 57.5328 22.078 57.5328 32.4438C57.5328 46.6196 45.9585 58.2181 31.3445 59.0025"
                      stroke="#E2E2E2"
                      stroke-width="2.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                    <path
                      d="M35.5538 52.783L36.6645 53.6795L31.9295 58.8344L37.6582 63.0368L36.7229 64.1574L28.9712 58.8344L35.5538 52.783Z"
                      fill="#E2E2E2"
                    />
                    <path
                      d="M26.8555 47.4114C26.8555 47.4114 31.4308 34.2548 41.6907 31.0653"
                      stroke="#E2E2E2"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                    <path
                      d="M29.2815 42.0957C29.2815 42.0957 25.9539 27.4107 37.9469 26.0153C37.9469 26.0153 46.8204 25.5502 49.4547 25.5502C49.4547 25.5502 47.3057 27.6101 45.8499 33.391C44.3941 39.172 40.5119 44.4213 29.2815 42.0957Z"
                      stroke="#E2E2E2"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                    <path
                      d="M10.3562 21.8955C10.3562 21.8955 11.9506 27.012 13.6837 29.7364C15.0009 31.7298 20.1308 35.2516 24.2209 33.391C28.311 31.5305 24.2209 23.4903 20.8934 22.8258C17.5658 22.0949 10.3562 21.8955 10.3562 21.8955Z"
                      stroke="#E2E2E2"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                    <path
                      d="M19.6455 28.0752C19.6455 28.0752 29.2122 36.4476 29.6282 41.2319"
                      stroke="#E2E2E2"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </body>
  </html>
</template>

<script>
export default {}
</script>
<style scoped>
#header {
  background-image: url(~/assets/img/paesaggio-piemonte.jpg);
}
#bollone-prodotti {
  background-image: url(~assets/img/icone/prodotti.jpg);
}
#bollone-aziende {
  background-image: url(~assets/img/icone/aziende.jpg);
}
#bollone-territori {
  background-image: url(~assets/img/icone/progetti&territori.jpg);
}
#bollone-iniziative {
  background-image: url(~assets/img/icone/iniziative.jpg);
}
#bollone-valorie {
  background-image: url(~assets/img/icone/valori.jpg);
}
</style>
