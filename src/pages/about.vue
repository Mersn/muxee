<template>
  <div class="bg-gray-50">
    <MyHeader />
    <MyHero
      :title="$t('About.title_pre')"
      :title-high="$t('About.title')"
      :content="$t('About.title_desc')"
    />

    <!-- Our Story Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="animate-fadeInLeft">
            <h2 class="text-4xl font-bold mb-6">{{ $t("About.intro") }}</h2>
            <p class="text-gray-600 mb-3">
              {{ $t("About.intro_content1") }}
            </p>
            <p class="text-gray-600 mb-3">
              {{ $t("About.intro_content2") }}
            </p>
            <p class="text-gray-600 mb-3">
              {{ $t("About.intro_content3") }}
            </p>
            <p class="text-gray-600 mb-3">
              {{ $t("About.intro_content4") }}
            </p>
            <p class="text-gray-600 mb-3">
              {{ $t("About.intro_content5") }}
            </p>

            <div class="grid grid-cols-2 gap-6">
              <div class="bg-purple-50 p-6 rounded-lg">
                <h3 class="text-3xl font-bold text-primary mb-2">100+</h3>
                <p class="text-gray-600">{{ $t("Home.project") }}</p>
              </div>
              <div class="bg-indigo-50 p-6 rounded-lg">
                <h3 class="text-3xl font-bold text-primary mb-2">20+</h3>
                <p class="text-gray-600">{{ $t("Home.years") }}</p>
              </div>
            </div>
          </div>

          <div class="relative animate-fadeInRight">
            <img
              src="@/assets/images/about/intro.png?w=600"
              alt="Team collaboration"
              class="rounded-2xl shadow-xl"
            />
            <div
              class="absolute -bottom-3 -right-3 bg-white p-6 rounded-xl shadow-lg max-w-xs"
            >
              <p class="text-2xl font-bold gradient-text mb-2">
                {{ $t("About.mission") }}
              </p>
              <p class="text-gray-600">{{ $t("About.mission_desc") }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4">{{ $t("About.core_values") }}</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            {{ $t("About.core_values_desc") }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div
              class="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">
              {{ $t("About.core_value1") }}
            </h3>
            <p class="text-gray-600">{{ $t("About.core_value1_desc") }}</p>
          </div>

          <div class="text-center">
            <div
              class="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">
              {{ $t("About.core_value2") }}
            </h3>
            <p class="text-gray-600">{{ $t("About.core_value2_desc") }}</p>
          </div>

          <div class="text-center">
            <div
              class="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">
              {{ $t("About.core_value3") }}
            </h3>
            <p class="text-gray-600">{{ $t("About.core_value3_desc") }}</p>
          </div>

          <div class="text-center">
            <div
              class="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">
              {{ $t("About.core_value4") }}
            </h3>
            <p class="text-gray-600">{{ $t("About.core_value4_desc") }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4">{{ $t("About.team") }}</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            {{ $t("About.team_desc") }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Team Member 1 -->
          <div v-for="item in teamList" :key="item.name" class="text-center group">
            <div class="relative mb-4 h-80 overflow-hidden rounded-xl">
              <img
                :src="item.url"
                alt="Team member"
                class="w-full group-hover:scale-110 transition duration-500"
              />
            </div>
            <h3 class="text-xl font-bold mb-1">{{ item.name }}</h3>
            <p class="text-primary mb-2">{{ item.position }}</p>
            <p class="text-gray-600 text-left">{{ item.desc }}</p>
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
import team_1 from "@/assets/images/about/team_1.png"
import team_2 from "@/assets/images/about/team_2.png"
import team_3 from "@/assets/images/about/team_3.png"
import team_4 from "@/assets/images/about/team_4.png"
import team_5 from "@/assets/images/about/team_5.png"
import team_6 from "@/assets/images/about/team_6.png"
import team_7 from "@/assets/images/about/team_7.png"
const { t } = useI18n()
const teamList = computed(() => [
  {
    name: t("About.team1"),
    position: t("About.team1_position"),
    desc: t("About.team1_desc"),
    url: team_1,
  },
  {
    name: t("About.team2"),
    position: t("About.team2_position"),
    desc: t("About.team2_desc"),
    url: team_2,
  },
  {
    name: t("About.team3"),
    position: t("About.team3_position"),
    desc: t("About.team3_desc"),
    url: team_3,
  },
  {
    name: t("About.team4"),
    position: t("About.team4_position"),
    desc: t("About.team4_desc"),
    url: team_4,
  },
  {
    name: t("About.team5"),
    position: t("About.team5_position"),
    desc: t("About.team5_desc"),
    url: team_5,
  },
  {
    name: t("About.team6"),
    position: t("About.team6_position"),
    desc: t("About.team6_desc"),
    url: team_6,
  },
  {
    name: t("About.team7"),
    position: t("About.team7_position"),
    desc: t("About.team7_desc"),
    url: team_7,
  },
])
</script>
