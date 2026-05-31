<template>
  <div class="bg-gray-50">
    <MyHeader />
    <MyHero
      :title="$t('Contact.title_pre')"
      :title-high="$t('Contact.title')"
      :content="$t('Contact.title_desc')"
    />
    
    <!-- Contact Form & Info Section -->
    <section class="py-20">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 lg:grid-cols-6 gap-12 animate-fadeInUp">
                <!-- Contact Information -->
                <div class="lg:col-span-4 lg:col-start-2 px-4">
                    <div class="mb-8">
                        <h2 class="text-3xl font-bold mb-6">{{ $t('Contact.title_card') }}</h2>
                        <p class="text-gray-600 mb-8">{{ $t('Contact.title_card_desc') }}</p>
                    </div>
                    
                    <!-- Contact Cards -->
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <!-- Email -->
                        <div class="flex items-start space-x-4 animate-fadeInLeft">
                            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold mb-1">{{ $t('Contact.title_cell1') }}</h3>
                                <p class="text-gray-600">{{ $t('Contact.title_cell1_desc') }}</p>
                            </div>
                        </div>
                        
                        <!-- Phone -->
                        <div class="flex items-start space-x-4 animate-fadeInRight">
                            <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold mb-1">{{ $t('Contact.title_cell2') }}</h3>
                                <p class="text-gray-600">{{ $t('Contact.title_cell2_desc') }}</p>
                            </div>
                        </div>
                        
                        <!-- Office -->
                        <div class="flex items-start space-x-4 animate-fadeInRight">
                            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold mb-1">{{ $t('Contact.title_cell3') }}</h3>
                                <p class="text-gray-600">{{ $t('Footer.addrDetail') }}</p>
                                <p class="text-gray-600">{{ $t('Footer.addr') }}</p>
                            </div>
                        </div>
                        
                        <!-- Business Hours -->
                        <div class="flex items-start space-x-4 animate-fadeInLeft">
                            <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold mb-1">{{ $t('Contact.title_cell4') }}</h3>
                                <p class="text-gray-600">{{ $t('Contact.title_cell4_desc') }}</p>
                                <p class="text-gray-600">9:00 AM - 6:00 PM UTC+8</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <MyFooter />
  </div>
</template>
<script setup>
</script>