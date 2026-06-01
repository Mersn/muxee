<template>
  <!-- Footer -->
  <footer class="bg-gray-900 text-white py-12 text-center lg:text-left">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 class="text-2xl font-bold mb-4 gradient-text">MUXEE</h3>
          <p class="text-gray-400">{{ $t('Footer.desc') }}</p>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4">{{ $t('Footer.qlinks') }}</h4>
          <ul class="space-y-2 text-gray-400">
            <li
              v-for="item in menu"
              :key="item.path"
            >
              <RouterLink :to="item.path" class="hover:text-white transition"
                >{{item.label}}</RouterLink
              >
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4">{{ $t('Header.services') }}</h4>
          <ul class="space-y-2 text-gray-400">
            <li v-for="item in servicesList" :key="item.label" >{{item.label}}</li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4">{{ $t('Footer.contactInfo') }}</h4>
          <ul class="space-y-2 text-gray-400">
            <li>{{ $t('Footer.addrDetail') }}</li>
            <li>{{ $t('Footer.addr') }}</li>
            <li>{{ $t('Footer.phone') }}{{ $t('Contact.title_cell2_desc') }}</li>
            <li>{{ $t('Footer.email') }}{{ $t('Contact.title_cell1_desc') }}</li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 pt-8 text-center text-gray-400">
        <p>&copy; {{ $t('Footer.right') }}</p>
      </div>
    </div>
    <!-- Back to Top Button -->
    <button
      @click="handleBackToTop"
      :class="isShowBackToTopBtn"
      class="gradient-bg animate-glow card-hover fixed bottom-8 right-8 w-12 h-12 rounded-full shadow-lg transition-all duration-300 z-40"
    >
      <svg
        class="w-6 h-6 mx-auto"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        ></path>
      </svg>
    </button>
  </footer>
</template>
<script setup>
import { ref, watch, computed } from "vue"
import { useRoute } from 'vue-router';
import { useI18n } from "vue-i18n"

// 获取 I18n 实例的核心方法：locale（当前语言）、t（翻译函数）
const { t } = useI18n()

const route = useRoute();
// 监听路由变化
watch(
  () => route.path, // 监听 path 变化
  (newPath, oldPath) => {
    console.log('路由路径从', oldPath, '变为', newPath);
    handleBackToTop()
  },
  { immediate: true }
);

// Back to top button
let isShowBackToTopBtn = ref(["opacity-0", "invisible"])
function handleBackToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    isShowBackToTopBtn.value = ["opacity-100", "visible"]
  } else {
    isShowBackToTopBtn.value = ["opacity-0", "invisible"]
  }
})

const menu = computed(() => [
  { label: t("Header.services"), path: "/services" },
  { label: t("Header.portfolio"), path: "/portfolio" },
  { label: t("Header.about"), path: "/about" },
  { label: t("Header.contact"), path: "/contact" },
])

const servicesList = computed(() => [
  { label: t("Footer.services1") },
  { label: t("Footer.services2") },
  { label: t("Footer.services3") },
  { label: t("Footer.services4") },
])
</script>
