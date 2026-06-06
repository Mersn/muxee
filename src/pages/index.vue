<template>
  <div class="bg-gray-50">
    <MyHeader />
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Image with Animation -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 hero-bg opacity-50 z-10"></div>
        <img
          src="@/assets/images/hero_bg.jpg?w=1920"
          alt="Hero Background"
          class="w-full h-full object-cover animate-zoomIn"
        />
      </div>

      <!-- Hero Content -->
      <div class="mt-20 relative z-20 container mx-auto px-4 lg:px-8 text-center">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fadeInDown">
          {{ $t("Home.welcome") }}
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400"
          >
            {{ $t("Home.name") }}
          </span>
        </h1>
        <p
          class="text-xl md:text-2xl text-gray-200 mb-4 animate-fadeInUp"
          style="animation-delay: 0.2s"
        >
          {{ $t("Home.desc") }}
        </p>
        <p
          class="text-md md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto animate-fadeInUp"
          style="animation-delay: 0.4s"
        >
          {{ $t("Home.introduction") }}
        </p>
      </div>

      <!-- Animated Scroll Indicator -->
      <div
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float"
      >
        <svg
          class="w-6 h-10 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            {{ $t('Home.services') }}
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            {{ $t('Home.services_desc') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <!-- Service Card 1 -->
          <div class="lg:col-span-2 lg:col-start-2 card-hover bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div class="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-6">
              <svg
                class="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 1087 1024"
              >
                <path
                  d="M1045.915463 941.817014H1013.590155V428.995185a40.817549 40.817549 0 0 0-27.394328-39.17389l-359.687534-107.933655V41.091493A41.365436 41.365436 0 0 0 575.280899 1.369716L109.577314 127.657571A41.091493 41.091493 0 0 0 79.717496 167.105404v774.71161H41.091493a41.091493 41.091493 0 0 0-41.091493 41.091493 41.091493 41.091493 0 0 0 41.091493 41.091493h1004.82397a41.091493 41.091493 0 0 0 41.091493-41.091493 41.091493 41.091493 0 0 0-41.091493-41.091493zM931.40717 459.676833v77.252006h-152.038524a41.091493 41.091493 0 1 0 0 82.182986H931.40717V712.252541h-152.038524a41.091493 41.091493 0 0 0 0 82.182986H931.40717v148.751204H626.508293v-575.280899zM161.900482 794.435527h228.468699a41.091493 41.091493 0 1 0 0-82.182986H161.900482v-93.140716h228.468699a41.091493 41.091493 0 0 0 0-82.182986H161.900482v-91.497057h228.468699a41.091493 41.091493 0 0 0 0-82.182986H161.900482v-164.365971l383.520599-103.824505v846.758694h-383.520599z"
                  fill="#ffffff"
                ></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4">{{ $t('Service.service1') }}</h3>
            <p class="text-gray-600 mb-6">
              {{ $t('Service.service1_desc') }}
            </p>
          </div>

          <!-- Service Card 2 -->
          <div
            class="lg:col-span-2 card-hover bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
          >
            <div
              class="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-6"
            >
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 1024 1024">
                <path d="M827.733333 512l157.866667-157.866667c42.666667-42.666667 42.666667-110.933333 0-149.333333L819.2 38.4c-38.4-38.4-110.933333-38.4-149.333333 0L512 196.266667 354.133333 38.4C315.733333 0 243.2 0 204.8 38.4L38.4 204.8c-42.666667 42.666667-42.666667 110.933333 0 149.333333L196.266667 512 128 576c-12.8 12.8-21.333333 25.6-25.6 42.666667L8.533333 878.933333c-12.8 34.133333-4.266667 68.266667 12.8 93.866667 21.333333 25.6 51.2 42.666667 85.333334 42.666667 12.8 0 21.333333 0 34.133333-4.266667l260.266667-93.866667c17.066667-4.266667 29.866667-12.8 42.666666-25.6l64-64 157.866667 157.866667c21.333333 21.333333 46.933333 29.866667 76.8 29.866667s55.466667-12.8 76.8-29.866667l166.4-166.4c42.666667-42.666667 42.666667-110.933333 0-149.333333L827.733333 512z m-81.066666-422.4c4.266667 0 12.8 4.266667 17.066666 4.266667l166.4 166.4c8.533333 8.533333 8.533333 21.333333 0 29.866666l-59.733333 59.733334-196.266667-196.266667 59.733334-59.733333s4.266667-4.266667 12.8-4.266667zM200.533333 396.8l76.8-76.8c12.8-12.8 12.8-34.133333 0-46.933333s-34.133333-12.8-46.933333 0L153.6 349.866667 98.133333 294.4c-8.533333-8.533333-8.533333-21.333333 0-29.866667l166.4-166.4c4.266667-4.266667 8.533333-4.266667 17.066667-4.266666s12.8 4.266667 17.066667 4.266666L452.266667 256 256 452.266667 200.533333 396.8z m187.733334 439.466667s-4.266667 4.266667-8.533334 4.266666l-260.266666 93.866667c-8.533333 4.266667-17.066667 0-21.333334-8.533333-4.266667-4.266667-4.266667-8.533333-4.266666-17.066667l93.866666-260.266667c0-4.266667 4.266667-4.266667 4.266667-8.533333l93.866667-93.866667 256-256 85.333333-85.333333 196.266667 196.266667-85.333334 85.333333-256 256-93.866666 93.866667z m537.6-76.8l-166.4 166.4c-8.533333 8.533333-21.333333 8.533333-29.866667 0l-55.466667-55.466667 76.8-76.8c12.8-12.8 12.8-34.133333 0-46.933333s-34.133333-12.8-46.933333 0l-76.8 76.8-55.466667-55.466667 196.266667-196.266667 157.866667 157.866667c8.533333 8.533333 8.533333 21.333333 0 29.866667z" fill="#ffffff"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4">{{ $t('Service.service2') }}</h3>
            <p class="text-gray-600 mb-6">
              {{ $t('Service.service2_desc') }}
            </p>
          </div>
        </div>
        <div class="text-center mt-12">
          <RouterLink
            to="/services"
            class="inline-block px-8 py-3 btn-outline btn-outline:hover font-semibold rounded-full hover:shadow-lg transition"
          >
            {{$t("Home.btn_service")}}
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 hero-gradient">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-4xl lg:text-5xl font-bold gradient-text mb-2">
              100+
            </div>
            <p class="text-gray-600">{{$t("Home.project")}}</p>
          </div>
          <div>
            <div class="text-4xl lg:text-5xl font-bold gradient-text mb-2">
              60+
            </div>
            <p class="text-gray-600">{{$t("Home.client")}}</p>
          </div>
          <div>
            <div class="text-4xl lg:text-5xl font-bold gradient-text mb-2">
              20+
            </div>
            <p class="text-gray-600">{{$t("Home.member")}}</p>
          </div>
          <div>
            <div class="text-4xl lg:text-5xl font-bold gradient-text mb-2">
              20+
            </div>
            <p class="text-gray-600">{{$t("Home.years")}}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            {{$t("Home.project_recent")}}
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            {{$t("Home.project_recent_desc")}}
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
          v-for="item in projectList" :key="item.label"
            class="bg-white rounded-lg shadow-lg overflow-hidden card-hover"
          >
            <img 
              :src="item.url"
              :alt="item.label"
              class="w-full h-64 object-cover"
            />
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2">{{ item.label }}</h3>
                <p class="text-gray-600 mb-4">{{ item.desc }}</p>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <RouterLink
            to="/portfolio"
            class="inline-block px-8 py-3 btn-outline btn-outline:hover font-semibold rounded-full hover:shadow-lg transition"
          >
            {{$t("Home.btn_more")}}
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Product Section -->
    <section class="py-20 bg-grey">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            {{$t("Home.product")}}
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            {{$t("Home.product_desc")}}
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div
            v-for="item in productList" :key="item.label"
            class="group relative overflow-hidden rounded-2xl shadow-lg card-hover"
          >
            <img
              :src="item.url"
              :alt="item.label"
              class="w-full h-100 lg:h-64 object-cover group-hover:scale-110 transition duration-500"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"
            >
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 class="text-xl font-bold mb-2">{{ item.label }}</h3>
                <p class="text-sm">{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <RouterLink
            to="/portfolio"
            class="inline-block px-8 py-3 btn-outline btn-outline:hover font-semibold rounded-full hover:shadow-lg transition"
          >
            {{$t("Home.btn_more")}}
          </RouterLink>
        </div>
      </div>
    </section>

    <StartProject />
    <MyFooter />
  </div>
</template>
<script setup>
import { computed } from "vue"
import { useI18n } from "vue-i18n"
import project_1 from "@/assets/images/portfolio/projects_1.png"
import project_2 from "@/assets/images/portfolio/projects_2.png"
import project_3 from "@/assets/images/portfolio/projects_3.png"
import product_1 from "@/assets/images/portfolio/product_1.png"
import product_2 from "@/assets/images/portfolio/product_2.png"
import product_3 from "@/assets/images/portfolio/product_3.png"
import product_4 from "@/assets/images/portfolio/product_4.png"
import product_5 from "@/assets/images/portfolio/product_5.png"
import product_6 from "@/assets/images/portfolio/product_6.png"
const { t } = useI18n()
// 引入图片
// const imageModules = import.meta.glob("../assets/images/portfolio/*", { as: 'url', eager: true})
// function getImageUrl(name) {
//   const path =`../assets/images/portfolio/${name}`
//   return imageModules[path]
//   // console.log('--getImageUrl--', import.meta.url)
//   // let newUrl =  new URL(`../assets/images/portfolio/project_1.png`, import.meta.url)
//   // console.log('--getImageUrl--', newUrl)
//   // return newUrl.href
// }
// const imageModules = import.meta.glob("../assets/images/portfolio/*", { eager: true})
// function getImageUrl(name) {
//   console.log('--getImageUrl-imageModules-', imageModules)
//   const path =`../assets/images/portfolio/${name}`
//   console.log('--getImageUrl-path-', path)
//   let img =  imageModules[path]
//   console.log('--getImageUrl--', img)
//   return img
// }
// getImageUrl('project_1.png')
const projectList = computed(() => [
  { label: t("Portfolio.project1"), desc: t("Portfolio.project1_desc"), url: project_1 },
  { label: t("Portfolio.project2"), desc: t("Portfolio.project2_desc"), url: project_2 },
  { label: t("Portfolio.project3"), desc: t("Portfolio.project3_desc"), url: project_3 },
])
const productList = computed(() => [
  { label: t("Portfolio.product1"), desc: t("Portfolio.product1_desc"), url: product_1 },
  { label: t("Portfolio.product2"), desc: t("Portfolio.product2_desc"), url: product_2 },
  { label: t("Portfolio.product3"), desc: t("Portfolio.product3_desc"), url: product_3 },
  { label: t("Portfolio.product4"), desc: t("Portfolio.product4_desc"), url: product_4 },
  { label: t("Portfolio.product5"), desc: t("Portfolio.product5_desc"), url: product_5 },
  { label: t("Portfolio.product6"), desc: t("Portfolio.product6_desc"), url: product_6 },
])
</script>
