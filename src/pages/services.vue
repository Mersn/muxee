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
                        <h2 class="text-4xl font-bold mb-6">{{ $t('Service.service1') }}</h2>
                        <p class="text-gray-600 mb-6">{{ $t('Service.service1_desc') }}</p>
                        
                        <div v-for="item in service1SubList" :key="item.title" class="space-y-4 mb-8">
                            <div class="flex items-start">
                                <svg class="w-6 h-6 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <div>
                                    <h4 class="font-semibold mb-1">{{ item.title }}</h4>
                                    <p class="text-gray-600 text-sm">{{ item.desc }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="relative animate-slideInRight">
                        <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600" 
                             alt="Web Development" 
                             class="rounded-2xl shadow-xl">
                        <div class="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                            <div class="flex items-center space-x-4">
                                <div class="text-3xl font-bold gradient-text">90%</div>
                                <div>
                                    <p class="font-semibold">{{ $t('Service.client') }}</p>
                                    <p class="text-sm text-gray-600">{{ $t('Service.client_desc') }}</p>
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
                        <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600" 
                             alt="Mobile Development" 
                             class="rounded-2xl shadow-xl">
                    </div>
                    
                    <div class="order-1 lg:order-2">
                        <h2 class="text-4xl font-bold mb-6">Mobile App Development</h2>
                        <p class="text-gray-600 mb-6">
                            Create powerful mobile experiences that engage users and drive business growth. We develop native and cross-platform apps that perform flawlessly.
                        </p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div class="bg-gray-50 p-4 rounded-lg">
                                <h4 class="font-semibold mb-2">iOS Development</h4>
                                <p class="text-gray-600 text-sm">Native iOS apps optimized for iPhone and iPad</p>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-lg">
                                <h4 class="font-semibold mb-2">Android Development</h4>
                                <p class="text-gray-600 text-sm">High-performance Android apps for all devices</p>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-lg">
                                <h4 class="font-semibold mb-2">Cross-Platform</h4>
                                <p class="text-gray-600 text-sm">One codebase for multiple platforms</p>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-lg">
                                <h4 class="font-semibold mb-2">App Maintenance</h4>
                                <p class="text-gray-600 text-sm">Ongoing support and updates</p>
                            </div>
                        </div>
                        
                        <RouterLink to="/portfolio" class="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition">
                            View Portfolio
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Additional Services Grid -->
    <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold mb-4">Additional Services</h2>
                <p class="text-xl text-gray-600">Complete solutions for all your digital needs</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Service Card 1 -->
                <div class="service-card bg-white rounded-xl p-8 shadow-lg">
                    <div class="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold mb-3">API Development</h3>
                    <p class="text-gray-600 mb-4">Robust and scalable API solutions for seamless integration</p>
                    <a href="#" class="text-blue-600 font-semibold hover:text-blue-700">Learn More →</a>
                </div>
                
                <!-- Service Card 2 -->
                <div class="service-card bg-white rounded-xl p-8 shadow-lg">
                    <div class="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold mb-3">Cloud Solutions</h3>
                    <p class="text-gray-600 mb-4">Cloud infrastructure setup and migration services</p>
                    <a href="#" class="text-purple-600 font-semibold hover:text-purple-700">Learn More →</a>
                </div>
                
                <!-- Service Card 3 -->
                <div class="service-card bg-white rounded-xl p-8 shadow-lg">
                    <div class="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold mb-3">Cybersecurity</h3>
                    <p class="text-gray-600 mb-4">Protect your digital assets with advanced security solutions</p>
                    <a href="#" class="text-green-600 font-semibold hover:text-green-700">Learn More →</a>
                </div>
                
                <!-- Service Card 4 -->
                <div class="service-card bg-white rounded-xl p-8 shadow-lg">
                    <div class="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold mb-3">Data Analytics</h3>
                    <p class="text-gray-600 mb-4">Turn your data into actionable insights</p>
                    <a href="#" class="text-red-600 font-semibold hover:text-red-700">Learn More →</a>
                </div>
                
                <!-- Service Card 5 -->
                <div class="service-card bg-white rounded-xl p-8 shadow-lg">
                    <div class="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold mb-3">Performance Optimization</h3>
                    <p class="text-gray-600 mb-4">Speed up your website and improve user experience</p>
                    <a href="#" class="text-yellow-600 font-semibold hover:text-yellow-700">Learn More →</a>
                </div>
                
                <!-- Service Card 6 -->
                <div class="service-card bg-white rounded-xl p-8 shadow-lg">
                    <div class="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                        <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold mb-3">Technical Support</h3>
                    <p class="text-gray-600 mb-4">24/7 support and maintenance services</p>
                    <a href="#" class="text-indigo-600 font-semibold hover:text-indigo-700">Learn More →</a>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Process Section -->
    <section class="py-20">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold mb-4">Our Process</h2>
                <p class="text-xl text-gray-600">How we deliver exceptional results</p>
            </div>
            
            <div class="max-w-5xl mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <!-- Step 1 -->
                    <div class="text-center">
                        <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                            1
                        </div>
                        <h3 class="text-xl font-bold mb-2">Discovery</h3>
                        <p class="text-gray-600">Understanding your goals, requirements, and challenges</p>
                    </div>
                    
                    <!-- Step 2 -->
                    <div class="text-center">
                        <div class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                            2
                        </div>
                        <h3 class="text-xl font-bold mb-2">Strategy</h3>
                        <p class="text-gray-600">Creating a roadmap for success with clear milestones</p>
                    </div>
                    
                    <!-- Step 3 -->
                    <div class="text-center">
                        <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                            3
                        </div>
                        <h3 class="text-xl font-bold mb-2">Execution</h3>
                        <p class="text-gray-600">Building and implementing with precision and care</p>
                    </div>
                    
                    <!-- Step 4 -->
                    <div class="text-center">
                        <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                            4
                        </div>
                        <h3 class="text-xl font-bold mb-2">Launch & Support</h3>
                        <p class="text-gray-600">Deploying your solution and providing ongoing support</p>
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
</script>