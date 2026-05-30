<template>
  <div class="bg-gray-50">
    <MyHeader />
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Image with Animation -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-indigo-900/90 z-10"></div>
        <img
          src="@/assets/images/home/hero_bg.jpg?w=1920"
          alt="Hero Background"
          class="w-full h-full object-cover animate-zoomIn"
        />
      </div>

      <!-- Hero Content -->
      <div class="relative z-20 container mx-auto px-4 lg:px-8 text-center">
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

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Service Card 1 -->
          <div class="card-hover bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
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
            <h3 class="text-2xl font-bold mb-4">{{ $t('Footer.services1') }}</h3>
            <p class="text-gray-600 mb-6">
              {{ $t('Footer.services1_desc') }}
            </p>
          </div>

          <!-- Service Card 2 -->
          <div
            class="card-hover bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mb-6"
            >
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 1024 1024">
                <path d="M827.733333 512l157.866667-157.866667c42.666667-42.666667 42.666667-110.933333 0-149.333333L819.2 38.4c-38.4-38.4-110.933333-38.4-149.333333 0L512 196.266667 354.133333 38.4C315.733333 0 243.2 0 204.8 38.4L38.4 204.8c-42.666667 42.666667-42.666667 110.933333 0 149.333333L196.266667 512 128 576c-12.8 12.8-21.333333 25.6-25.6 42.666667L8.533333 878.933333c-12.8 34.133333-4.266667 68.266667 12.8 93.866667 21.333333 25.6 51.2 42.666667 85.333334 42.666667 12.8 0 21.333333 0 34.133333-4.266667l260.266667-93.866667c17.066667-4.266667 29.866667-12.8 42.666666-25.6l64-64 157.866667 157.866667c21.333333 21.333333 46.933333 29.866667 76.8 29.866667s55.466667-12.8 76.8-29.866667l166.4-166.4c42.666667-42.666667 42.666667-110.933333 0-149.333333L827.733333 512z m-81.066666-422.4c4.266667 0 12.8 4.266667 17.066666 4.266667l166.4 166.4c8.533333 8.533333 8.533333 21.333333 0 29.866666l-59.733333 59.733334-196.266667-196.266667 59.733334-59.733333s4.266667-4.266667 12.8-4.266667zM200.533333 396.8l76.8-76.8c12.8-12.8 12.8-34.133333 0-46.933333s-34.133333-12.8-46.933333 0L153.6 349.866667 98.133333 294.4c-8.533333-8.533333-8.533333-21.333333 0-29.866667l166.4-166.4c4.266667-4.266667 8.533333-4.266667 17.066667-4.266666s12.8 4.266667 17.066667 4.266666L452.266667 256 256 452.266667 200.533333 396.8z m187.733334 439.466667s-4.266667 4.266667-8.533334 4.266666l-260.266666 93.866667c-8.533333 4.266667-17.066667 0-21.333334-8.533333-4.266667-4.266667-4.266667-8.533333-4.266666-17.066667l93.866666-260.266667c0-4.266667 4.266667-4.266667 4.266667-8.533333l93.866667-93.866667 256-256 85.333333-85.333333 196.266667 196.266667-85.333334 85.333333-256 256-93.866666 93.866667z m537.6-76.8l-166.4 166.4c-8.533333 8.533333-21.333333 8.533333-29.866667 0l-55.466667-55.466667 76.8-76.8c12.8-12.8 12.8-34.133333 0-46.933333s-34.133333-12.8-46.933333 0l-76.8 76.8-55.466667-55.466667 196.266667-196.266667 157.866667 157.866667c8.533333 8.533333 8.533333 21.333333 0 29.866667z" fill="#ffffff"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4">{{ $t('Footer.services2') }}</h3>
            <p class="text-gray-600 mb-6">
              {{ $t('Footer.services2_desc') }}
            </p>
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
                viewBox="0 0 1024 1024"
              >
                <path d="M510.207 286.36c61.62 0 111.574-49.953 111.574-111.574 0-61.62-49.953-111.573-111.574-111.573-61.62 0-111.573 49.953-111.573 111.573 0 61.62 49.954 111.574 111.573 111.574z m0-167.219c30.683 0 55.646 24.963 55.646 55.646s-24.962 55.647-55.646 55.647c-30.683 0-55.645-24.963-55.645-55.647s24.962-55.646 55.645-55.646z m-335.51 463.422c-61.62 0-111.573 49.953-111.573 111.574 0 61.62 49.953 111.574 111.573 111.574s111.574-49.954 111.574-111.574-49.953-111.574-111.574-111.574z m0 167.219c-30.682 0-55.646-24.962-55.646-55.646 0-30.683 24.963-55.646 55.646-55.646s55.646 24.962 55.646 55.646-24.963 55.646-55.646 55.646zM845.95 582.563c-61.62 0-111.573 49.953-111.573 111.574 0 61.62 49.953 111.574 111.573 111.574s111.574-49.954 111.574-111.574-49.953-111.574-111.574-111.574z m0 167.219c-30.683 0-55.646-24.962-55.646-55.646 0-30.683 24.963-55.646 55.646-55.646s55.647 24.962 55.647 55.646-24.964 55.646-55.647 55.646zM509.425 879.616c-79.714 0-157.406-27.896-218.755-78.526l-35.611 43.12c71.358 58.904 161.694 91.333 254.365 91.333 93.463 0 184.4-32.934 256.044-92.726l-35.829-42.928c-61.62 51.408-139.819 79.727-220.214 79.727z m343.95-343.95h55.928c0-154.827-90.705-297.158-231.098-362.603l-23.622 50.685c120.758 56.31 198.793 178.734 198.793 311.917zM364.268 223.747l-23.622-50.685C200.265 238.508 109.56 380.84 109.56 535.665h55.928c0-133.183 78.034-255.621 198.779-311.917z" fill="#ffffff"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4">{{ $t('Footer.services3') }}</h3>
            <p class="text-gray-600 mb-6">
              {{ $t('Footer.services3_desc') }}
            </p>
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
                viewBox="0 0 1024 1024"
              >
                <path d="M917.098901 917.61039l-106.38961-716.083916c-2.045954-16.367632-16.367632-28.643357-33.758242-28.643357H656.23976c0-9.206793-1.022977-18.413586-2.045954-26.597403C647.032967 56.263736 590.769231 0 505.862138 0S363.668332 56.263736 356.507493 145.262737c-1.022977 9.206793-1.022977 18.413586-1.022978 26.597403H237.842158c-16.367632 0-30.689311 12.275724-33.758242 28.643357l-33.758242 231.192807c-1.022977 9.206793 1.022977 18.413586 7.160839 25.574425 1.022977 1.022977 64.447552 80.815185 113.55045 141.170829-40.919081 43.988012-83.884116 130.941059-13.298701 240.399601 11.252747 18.413586 21.482517 33.758242 31.712287 49.102897-46.033966 0-103.320679-1.022977-141.170829-1.022977 11.252747-68.539461 36.827173-231.192807 45.010989-290.525475 2.045954-18.413586-10.22977-35.804196-28.643356-37.850149h-4.091908c-17.390609 0-31.712288 12.275724-33.758242 29.666333-9.206793 69.562438-43.988012 284.387612-51.148851 328.375625-2.045954 10.22977 1.022977 19.436563 7.160839 27.620379 6.137862 7.160839 15.344655 12.275724 25.574425 12.275724 0 0 159.584416 1.022977 225.054945 1.022978 22.505495 35.804196 31.712288 50.125874 31.712288 50.125874 5.114885 7.160839 13.298701 13.298701 21.482518 15.344655 2.045954 0 4.091908 1.022977 6.137862 1.022977 7.160839 0 13.298701-2.045954 19.436563-6.137862l85.93007-59.332667h36.827173c107.412587 0 327.352647-2.045954 329.398601-2.045955 10.22977 0 19.436563-4.091908 25.574426-12.275724 6.137862-7.160839 9.206793-17.390609 7.160839-26.597402zM335.024975 804.05994C266.485514 695.624376 353.438561 634.245754 357.53047 631.176823c4.091908-3.068931 26.597403-16.367632 56.263736-16.367632 39.896104 0 75.7003 23.528472 108.435564 69.562437 42.965035 61.378621 71.608392 102.297702 88.999001 127.872128L423.000999 941.138861c-16.367632-25.574426-43.988012-69.562438-87.976024-137.078921z m342.697303 43.988012c7.160839-5.114885 12.275724-13.298701 14.321678-21.482517 2.045954-9.206793 0-18.413586-5.114885-25.574426 0 0-32.735265-48.07992-108.435565-155.492508-56.263736-80.815185-119.688312-97.182817-162.653346-97.182817-27.62038 0-51.148851 6.137862-67.516484 13.298702-37.85015-47.056943-86.953047-108.435564-107.412587-132.987013l26.597403-187.204796h86.953046c0 4.091908 1.022977 14.321678 1.022977 29.666334 0 18.413586 15.344655 33.758242 33.758242 33.758242 18.413586 0 33.758242-15.344655 33.758242-33.758242 0-15.344655-1.022977-25.574426-1.022977-29.666334h166.745255c0 11.252747-1.022977 28.643357-1.022977 28.643357 0 9.206793 3.068931 17.390609 9.206793 24.551449 6.137862 6.137862 14.321678 10.22977 23.528471 10.22977 18.413586 0 33.758242-15.344655 33.758242-32.735265 0 0 1.022977-18.413586 1.022977-29.666334h91.044955l96.15984 648.567433c-53.194805 0-149.354645 1.022977-227.100899 2.045954l62.401599-45.010989zM505.862138 67.516484c48.07992 0 77.746254 29.666334 81.838162 83.884115 1.022977 7.160839 1.022977 14.321678 1.022977 21.482518H423.000999c0-7.160839 0-14.321678 1.022977-21.482518 4.091908-54.217782 32.735265-83.884116 81.838162-83.884115z" fill="#ffffff"></path><path d="M437.322677 781.554446c-10.22977 0-21.482517-5.114885-27.620379-14.321679l-31.712288-46.033966c-10.22977-15.344655-7.160839-35.804196 8.183816-47.056943 15.344655-10.22977 35.804196-7.160839 47.056943 8.183816l31.712288 46.033966c10.22977 15.344655 7.160839 35.804196-8.183816 47.056943-6.137862 4.091908-12.275724 6.137862-19.436564 6.137863z" fill="#ffffff"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4">{{ $t('Footer.services4') }}</h3>
            <p class="text-gray-600 mb-6">
              {{ $t('Footer.services4_desc') }}
            </p>
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
            <h3 class="text-2xl font-bold mb-4">{{ $t('Footer.services5') }}</h3>
            <p class="text-gray-600 mb-6">
              {{ $t('Footer.services5_desc') }}
            </p>
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
              src="@/assets/images/home/projects_1.png?w=500"
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
              src="@/assets/images/home/projects_2.png?w=500"
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
              src="@/assets/images/home/projects_3.png?w=500"
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
