<template>
  <!-- Hero Section -->
  <section class="py-20 pt-40 bg-gradient-to-br from-purple-50 to-indigo-50">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center animate-fadeInUp">
        <h1 class="text-5xl lg:text-6xl font-bold mb-6">
          {{title}} <span class="gradient-text">{{titleHigh}}</span>
        </h1>
        <p class="text-xl text-gray-600 mb-8">{{content}}</p>
        <!-- <div class="flex justify-center space-x-4">
          <button
            class="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition"
          >
            Join Our Team
          </button>
          <button
            class="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition"
          >
            Our Story
          </button>
        </div> -->
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  title: String,
  titleHigh: String,
  content: String
})
</script>
