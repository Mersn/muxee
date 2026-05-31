<template>
  <!-- CTA Section -->
  <section class="py-20 gradient-bg">
    <div class="container mx-auto px-4 lg:px-8 text-center">
      <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
        {{ $t('Component.title_cta') }}
      </h2>
      <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
        {{ $t('Component.desc_cta') }}
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <RouterLink to="/contact"
          class="px-8 py-4 bg-white btn-outline btn-outline:hover font-semibold rounded-full hover:shadow-xl transform hover:scale-105 transition"
        >
          {{ $t('Component.btn_cta') }}
        </RouterLink>
        <!-- <button
                  class="px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white hover:text-purple-600 transition">
                  View Pricing
              </button> -->
      </div>
    </div>
  </section>
</template>
<script setup>
</script>
