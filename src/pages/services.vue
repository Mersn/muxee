<template>
  <div class="bg-gray-50">
    <MyHeader />
    <MyHero
      :title="$t('Service.title_pre')"
      :title-high="$t('Service.title')"
      :content="$t('Service.title_desc')"
    />

    <!-- Main Services Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <!-- Service 1 -->
        <div class="mb-20">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="animate-slideInLeft">
              <h2 class="text-4xl font-bold mb-6">
                {{ $t("Service.service1") }}
              </h2>
              <p class="text-gray-600 mb-6">
                {{ $t("Service.service1_desc") }}
              </p>

              <div
                v-for="item in service1SubList"
                :key="item.title"
                class="space-y-4 mb-8"
              >
                <div class="flex items-start">
                  <svg
                    class="w-6 h-6 text-green-500 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <div>
                    <h4 class="font-semibold mb-1">{{ item.title }}</h4>
                    <p class="text-gray-600 text-sm">{{ item.desc }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative animate-slideInRight">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600"
                alt="Web Development"
                class="rounded-2xl shadow-xl"
              />
              <div
                class="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs"
              >
                <div class="flex items-center space-x-4">
                  <div class="text-3xl font-bold gradient-text">90%</div>
                  <div>
                    <p class="font-semibold">{{ $t("Service.client") }}</p>
                    <p class="text-sm text-gray-600">
                      {{ $t("Service.client_desc") }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Service 2 -->
        <div class="mb-20">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600"
                alt="Mobile Development"
                class="rounded-2xl shadow-xl"
              />
            </div>

            <div class="order-1 lg:order-2">
              <h2 class="text-4xl font-bold mb-6">
                {{ $t("Service.service2") }}
              </h2>
              <p class="text-gray-600 mb-6">
                {{ $t("Service.service2_desc") }}
              </p>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div
                  v-for="item in service2SubList"
                  :key="item.title"
                  class="bg-gray-50 p-4 rounded-lg"
                >
                  <h4 class="font-semibold mb-2">{{ item.title }}</h4>
                  <p class="text-gray-600 text-sm">{{ item.desc }}</p>
                </div>
              </div>

              <RouterLink
                to="/portfolio"
                class="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition"
              >
                {{ $t("Service.btn") }}
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4">{{ $t("Service.process") }}</h2>
          <p class="text-xl text-gray-600">{{ $t("Service.process_desc") }}</p>
        </div>

        <div class="max-w-5xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <!-- Step 1 -->
            <div class="text-center">
              <div
                class="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4"
              >
                1
              </div>
              <h3 class="text-xl font-bold mb-2">
                {{ $t("Service.process_cell1") }}
              </h3>
              <p class="text-gray-600">
                {{ $t("Service.process_cell1_desc") }}
              </p>
            </div>

            <!-- Step 2 -->
            <div class="text-center">
              <div
                class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4"
              >
                2
              </div>
              <h3 class="text-xl font-bold mb-2">
                {{ $t("Service.process_cell2") }}
              </h3>
              <p class="text-gray-600">
                {{ $t("Service.process_cell2_desc") }}
              </p>
            </div>

            <!-- Step 3 -->
            <div class="text-center">
              <div
                class="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4"
              >
                3
              </div>
              <h3 class="text-xl font-bold mb-2">
                {{ $t("Service.process_cell3") }}
              </h3>
              <p class="text-gray-600">
                {{ $t("Service.process_cell3_desc") }}
              </p>
            </div>

            <!-- Step 4 -->
            <div class="text-center">
              <div
                class="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4"
              >
                4
              </div>
              <h3 class="text-xl font-bold mb-2">
                {{ $t("Service.process_cell4") }}
              </h3>
              <p class="text-gray-600">
                {{ $t("Service.process_cell4_desc") }}
              </p>
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
const { t } = useI18n()
const service1SubList = computed(() => [
  {
    title: t("Service.service1_sub1"),
    desc: t("Service.service1_desc_sub1"),
  },
  {
    title: t("Service.service1_sub2"),
    desc: t("Service.service1_desc_sub2"),
  },
  {
    title: t("Service.service1_sub3"),
    desc: t("Service.service1_desc_sub3"),
  },
  {
    title: t("Service.service1_sub4"),
    desc: t("Service.service1_desc_sub4"),
  },
])
const service2SubList = computed(() => [
  {
    title: t("Service.service2_sub1"),
    desc: t("Service.service2_desc_sub1"),
  },
  {
    title: t("Service.service2_sub2"),
    desc: t("Service.service2_desc_sub2"),
  },
  {
    title: t("Service.service2_sub3"),
    desc: t("Service.service2_desc_sub3"),
  },
  {
    title: t("Service.service2_sub4"),
    desc: t("Service.service2_desc_sub4"),
  },
])
</script>
