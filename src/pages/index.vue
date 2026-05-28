<template>
  <div class="bg-gray-50">
    <MyHeader />
    <!-- Hero Section -->
    <section
      class="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <!-- Background Image with Animation -->
      <div class="absolute inset-0 z-0">
        <div
          class="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-indigo-900/90 z-10"
        ></div>
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920"
          alt="Hero Background"
          class="w-full h-full object-cover animate-zoomIn"
        />
      </div>

      <!-- Hero Content -->
      <div class="relative z-20 container mx-auto px-4 lg:px-8 text-center">
        <h1
          class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fadeInDown"
        >
          {{ $t('Home.welcome') }}
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400"
            >{{ $t('Home.name') }}</span
          >
        </h1>
        <p
          class="text-xl md:text-2xl text-gray-200 mb-4 animate-fadeInUp"
          style="animation-delay: 0.2s"
        >
          {{ $t('Home.desc') }}
        </p>
        <p
          class="text-md md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto animate-fadeInUp"
          style="animation-delay: 0.4s"
        >
          {{ $t('Home.introduction') }}
        </p>

        <!-- <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp" style="animation-delay: 0.6s">
                <button
                    class="px-8 py-4 bg-gradient-to-r from-yellow-400 to-pink-400 text-gray-900 font-semibold rounded-full hover:shadow-2xl transform hover:scale-105 transition">
                    Start Your Project
                </button>
                <button
                    class="px-8 py-4 bg-white/10 backdrop-blur text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition">
                    View Our Work
                </button>
            </div> -->
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
            Our Services
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Service Card 1 -->
          <div
            class="card-hover bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6"
            >
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
            <h3 class="text-2xl font-bold mb-4">企业咨询</h3>
            <p class="text-gray-600 mb-6">
              专业赋能企业发展，提供全方位落地咨询服务
            </p>
            <a
              href="#"
              class="text-purple-600 font-semibold hover:text-purple-700 transition"
            >
              Learn More →
            </a>
          </div>

          <!-- Service Card 2 -->
          <div
            class="card-hover bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mb-6"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4">包材定制</h3>
            <p class="text-gray-600 mb-6">
              一站式餐饮包装服务，品质、设计与交付全面可靠
            </p>
            <a
              href="#"
              class="text-purple-600 font-semibold hover:text-purple-700 transition"
            >
              Learn More →
            </a>
          </div>

          <!-- Service Card 3 -->
          <div
            class="card-hover bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                ></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4">厨品整合</h3>
            <p class="text-gray-600 mb-6">
              全品类商用厨具，适配海外场景，配套完善售后
            </p>
            <a
              href="#"
              class="text-purple-600 font-semibold hover:text-purple-700 transition"
            >
              Learn More →
            </a>
          </div>

          <!-- Service Card 4 -->
          <div
            class="card-hover bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                ></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4">风味研发</h3>
            <p class="text-gray-600 mb-6">
              风味丰富可定制，跨境供应链成熟，合作灵活高效
            </p>
            <a
              href="#"
              class="text-purple-600 font-semibold hover:text-purple-700 transition"
            >
              Learn More →
            </a>
          </div>

          <!-- Service Card 5 -->
          <div
            class="card-hover bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mb-6"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                ></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4">瓷器甄选</h3>
            <p class="text-gray-600 mb-6">
              实用兼具美学，品质达标出口标准，款式持续创新
            </p>
            <a
              href="#"
              class="text-purple-600 font-semibold hover:text-purple-700 transition"
            >
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 hero-gradient">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-4xl lg:text-5xl font-bold gradient-text mb-2">
              500+
            </div>
            <p class="text-gray-600">Projects Completed</p>
          </div>
          <div>
            <div class="text-4xl lg:text-5xl font-bold gradient-text mb-2">
              200+
            </div>
            <p class="text-gray-600">Happy Clients</p>
          </div>
          <div>
            <div class="text-4xl lg:text-5xl font-bold gradient-text mb-2">
              20+
            </div>
            <p class="text-gray-600">Team Members</p>
          </div>
          <div>
            <div class="text-4xl lg:text-5xl font-bold gradient-text mb-2">
              10+
            </div>
            <p class="text-gray-600">Years Experience</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Recent Projects
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing our latest work and creative solutions
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Portfolio Item 1 -->
          <div
            class="group relative overflow-hidden rounded-2xl shadow-lg card-hover"
          >
            <img
              src="@/assets/images/today.png?w=500"
              alt="Project 1"
              class="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"
            >
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 class="text-xl font-bold mb-2">Today Platform</h3>
                <p class="text-sm">自有产品的借势营销，打造百万级超级活动</p>
              </div>
            </div>
          </div>

          <!-- Portfolio Item 2 -->
          <div
            class="group relative overflow-hidden rounded-2xl shadow-lg card-hover"
          >
            <img
              src="@/assets/images/qinye.png?w=500"
              alt="Project 2"
              class="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"
            >
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 class="text-xl font-bold mb-2">ChinYe Platform</h3>
                <p class="text-sm">精准洞悉战略机遇,抢先占位目标心智</p>
              </div>
            </div>
          </div>

          <!-- Portfolio Item 3 -->
          <div
            class="group relative overflow-hidden rounded-2xl shadow-lg card-hover"
          >
            <img
              src="@/assets/images/xianggaoji.png?w=500"
              alt="Project 3"
              class="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"
            >
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 class="text-xl font-bold mb-2">XiangGaoJi Platform</h3>
                <p class="text-sm">
                  是提供人力服务，更是忠实伙伴，提供管理之“渔”
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <a
            href="./portfolio.html"
            class="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full hover:shadow-lg transition"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>

    <!-- Testimonials Section with Slider -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Client Testimonials
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            What our clients say about working with us
          </p>
        </div>

        <div class="slider-container max-w-4xl mx-auto">
          <div class="slider-track">
            <!-- Testimonial 1 -->
            <div class="min-w-full px-4">
              <div class="bg-white rounded-2xl shadow-lg p-8 text-center">
                <div class="mb-6">
                  <svg
                    class="w-12 h-12 text-purple-500 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
                    />
                  </svg>
                </div>
                <p class="text-lg text-gray-600 mb-6">
                  "MUXEE transformed our online presence completely. Their
                  attention to detail and innovative approach exceeded our
                  expectations."
                </p>
                <div class="flex items-center justify-center">
                  <img
                    src="https://i.pravatar.cc/100?img=1"
                    alt="Client"
                    class="w-12 h-12 rounded-full mr-4"
                  />
                  <div class="text-left">
                    <p class="font-semibold">John Smith</p>
                    <p class="text-sm text-gray-500">CEO, TechCorp</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Testimonial 2 -->
            <div class="min-w-full px-4">
              <div class="bg-white rounded-2xl shadow-lg p-8 text-center">
                <div class="mb-6">
                  <svg
                    class="w-12 h-12 text-purple-500 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
                    />
                  </svg>
                </div>
                <p class="text-lg text-gray-600 mb-6">
                  "Working with MUXEE was a game-changer for our business. They
                  delivered beyond what we imagined possible."
                </p>
                <div class="flex items-center justify-center">
                  <img
                    src="https://i.pravatar.cc/100?img=5"
                    alt="Client"
                    class="w-12 h-12 rounded-full mr-4"
                  />
                  <div class="text-left">
                    <p class="font-semibold">Sarah Johnson</p>
                    <p class="text-sm text-gray-500">Founder, StartupX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <StartProject />
    <MyFooter />
  </div>
</template>
<script setup>
import { useI18n } from "vue-i18n"
const { t } = useI18n()
</script>
