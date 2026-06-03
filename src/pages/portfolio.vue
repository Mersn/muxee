<template>
  <div class="bg-gray-50">
    <MyHeader />
    <MyHero
      :title="$t('Portfolio.title_pre')"
      :title-high="$t('Portfolio.title')"
      :content="$t('Portfolio.title_desc')"
    />

    <!-- Portfolio Grid -->
    <section class="py-20 animate-fadeInDown">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4">{{ $t("Service.service1") }}</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            {{ $t("Service.service1_desc") }}
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Portfolio Item 1 -->
          <div
            v-for="item in projectList"
            :key="item.label"
            class="portfolio-item animate-scaleIn"
          >
            <div
              class="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer group"
            >
              <div class="relative overflow-hidden h-64">
                <img
                  :src="item.url"
                  alt="Portfolio"
                  class="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div
                  class="absolute inset-0 portfolio-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6"
                >
                  <div class="text-white">
                    <span class="text-sm font-medium gradient-text font-bold">{{
                      $t("Service.service1")
                    }}</span>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2">{{ item.label }}</h3>
                <p class="text-gray-600 mb-4">{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio2 Grid -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4">{{ $t("Service.service2") }}</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            {{ $t("Service.service2_desc") }}
          </p>
        </div>
        <div class="mx-auto px-6">
          <!-- Portfolio Grid -->
          <div class="masonry">
            <div
                v-for="item in productList"
                :key="item.label" class="masonry-item group cursor-pointer">
              <div class="relative overflow-hidden rounded-lg">
                <img
                  :src="item.url"
                  alt="Project"
                  class="w-full hover-img"
                />
                <div
                  class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6"
                >
                  <div class="text-white">
                    <h3 class="text-2xl font-bold mb-2">{{ item.label }}</h3>
                    <p class="text-sm">{{ item.desc }}</p>
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
import { computed } from "vue"
import { useI18n } from "vue-i18n"
import project_1 from "@/assets/images/portfolio/projects_1.png"
import project_2 from "@/assets/images/portfolio/projects_2.png"
import project_3 from "@/assets/images/portfolio/projects_3.png"
import project_4 from "@/assets/images/portfolio/projects_4.png"
import project_5 from "@/assets/images/portfolio/projects_5.png"
import product_1 from "@/assets/images/portfolio/product_1.png"
import product_2 from "@/assets/images/portfolio/product_2.png"
import product_3 from "@/assets/images/portfolio/product_3.png"
import product_4 from "@/assets/images/portfolio/product_4.png"
import product_5 from "@/assets/images/portfolio/product_5.png"
import product_6 from "@/assets/images/portfolio/product_6.png"
import product_7 from "@/assets/images/portfolio/product_7.png"
import product_8 from "@/assets/images/portfolio/product_8.png"
import product_9 from "@/assets/images/portfolio/product_9.png"
import product_10 from "@/assets/images/portfolio/product_10.png"
import product_11 from "@/assets/images/portfolio/product_11.png"
import product_12 from "@/assets/images/portfolio/product_12.png"
import product_13 from "@/assets/images/portfolio/product_13.png"
import product_14 from "@/assets/images/portfolio/product_14.png"
const { t } = useI18n()
const projectList = computed(() => [
  {
    label: t("Portfolio.project1"),
    desc: t("Portfolio.project1_desc"),
    url: project_1,
  },
  {
    label: t("Portfolio.project2"),
    desc: t("Portfolio.project2_desc"),
    url: project_2,
  },
  {
    label: t("Portfolio.project3"),
    desc: t("Portfolio.project3_desc"),
    url: project_3,
  },
  {
    label: t("Portfolio.project4"),
    desc: t("Portfolio.project4_desc"),
    url: project_4,
  },
  {
    label: t("Portfolio.project5"),
    desc: t("Portfolio.project5_desc"),
    url: project_5,
  },
])
const productList = computed(() => [
  {
    label: t("Portfolio.product1"),
    desc: t("Portfolio.product1_desc"),
    url: product_1,
  },
  {
    label: t("Portfolio.product2"),
    desc: t("Portfolio.product2_desc"),
    url: product_2,
  },
  {
    label: t("Portfolio.product3"),
    desc: t("Portfolio.product3_desc"),
    url: product_3,
  },
  {
    label: t("Portfolio.product4"),
    desc: t("Portfolio.product4_desc"),
    url: product_4,
  },
  {
    label: t("Portfolio.product5"),
    desc: t("Portfolio.product5_desc"),
    url: product_5,
  },
  {
    label: t("Portfolio.product6"),
    desc: t("Portfolio.product6_desc"),
    url: product_6,
  },
  {
    label: t("Portfolio.product7"),
    desc: t("Portfolio.product7_desc"),
    url: product_7,
  },
  {
    label: t("Portfolio.product8"),
    desc: t("Portfolio.product8_desc"),
    url: product_8,
  },
  {
    label: t("Portfolio.product9"),
    desc: t("Portfolio.product9_desc"),
    url: product_9,
  },
  {
    label: t("Portfolio.product10"),
    desc: t("Portfolio.product10_desc"),
    url: product_10,
  },
  {
    label: t("Portfolio.product11"),
    desc: t("Portfolio.product11_desc"),
    url: product_11,
  },
  {
    label: t("Portfolio.product12"),
    desc: t("Portfolio.product12_desc"),
    url: product_12,
  },
  {
    label: t("Portfolio.product13"),
    desc: t("Portfolio.product13_desc"),
    url: product_13,
  },
  {
    label: t("Portfolio.product14"),
    desc: t("Portfolio.product14_desc"),
    url: product_14,
  },
])
</script>
<style scoped>
.masonry {
  column-count: 4;
  column-gap: 2rem;
}

@media (max-width: 1024px) {
  .masonry {
    column-count: 2;
  }
}

@media (max-width: 640px) {
  .masonry {
    column-count: 1;
  }
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 2rem;
}

.hover-img {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-img:hover {
  transform: scale(0.95);
}
</style>
