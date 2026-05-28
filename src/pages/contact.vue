<template>
  <div class="bg-gray-50">
    <MyHeader />
    <MyHero title="Let's" title-high="Connect" content="Have a project in mind? We'd love to hear about it. Let's discuss how we can help bring your ideas to life." />
    
    <!-- Contact Form & Info Section -->
    <section class="py-20">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 lg:grid-cols-6 gap-12">
                <!-- Contact Information -->
                <div class="lg:col-span-2 lg:col-start-2 px-4">
                    <div class="mb-8">
                        <h2 class="text-3xl font-bold mb-6">Get in Touch</h2>
                        <p class="text-gray-600 mb-8">
                            Ready to start your next project? Contact us today and let's discuss how we can help you achieve your goals.
                        </p>
                    </div>
                    
                    <!-- Contact Cards -->
                    <div class="space-y-6">
                        <!-- Email -->
                        <div class="flex items-start space-x-4">
                            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold mb-1">Email Us</h3>
                                <p class="text-gray-600">hello@MUXEE.com</p>
                                <p class="text-gray-600">support@MUXEE.com</p>
                            </div>
                        </div>
                        
                        <!-- Phone -->
                        <div class="flex items-start space-x-4">
                            <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold mb-1">Call Us</h3>
                                <p class="text-gray-600">+1 (555) 123-4567</p>
                                <p class="text-gray-600">+1 (555) 987-6543</p>
                            </div>
                        </div>
                        
                        <!-- Office -->
                        <div class="flex items-start space-x-4">
                            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold mb-1">Visit Us</h3>
                                <p class="text-gray-600">123 Business Avenue</p>
                                <p class="text-gray-600">Suite 100</p>
                                <p class="text-gray-600">New York, NY 10001</p>
                            </div>
                        </div>
                        
                        <!-- Business Hours -->
                        <div class="flex items-start space-x-4">
                            <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-semibold mb-1">Business Hours</h3>
                                <p class="text-gray-600">Monday - Friday</p>
                                <p class="text-gray-600">9:00 AM - 6:00 PM EST</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Office Info Cards -->
                <div class="lg:col-span-2">
                    <!-- Main Office -->
                    <div class="bg-white rounded-xl p-6 mb-6 shadow-lg">
                        <h3 class="text-xl font-bold mb-4">Main Office</h3>
                        <div class="space-y-3">
                            <div class="flex items-start">
                                <svg class="w-5 h-5 text-purple-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <div>
                                    <p class="text-gray-600">123 Business Avenue</p>
                                    <p class="text-gray-600">New York, NY 10001</p>
                                </div>
                            </div>
                            <div class="flex items-center">
                                <svg class="w-5 h-5 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                <p class="text-gray-600">+1 (555) 123-4567</p>
                            </div>
                            <div class="flex items-center">
                                <svg class="w-5 h-5 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                <p class="text-gray-600">hello@MUXEE.com</p>
                            </div>
                        </div>
                        <button class="mt-4 w-full px-4 py-2 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 transition">
                            Get Directions
                        </button>
                    </div>
                    
                    <!-- Support Hours -->
                    <div class="bg-white rounded-xl p-6 shadow-lg">
                        <h3 class="text-xl font-bold mb-4">Support Hours</h3>
                        <div class="space-y-2">
                            <div class="flex justify-between">
                                <span class="text-gray-600">Monday - Friday</span>
                                <span class="font-semibold">9:00 AM - 6:00 PM</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Saturday</span>
                                <span class="font-semibold">10:00 AM - 4:00 PM</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Sunday</span>
                                <span class="font-semibold text-red-600">Closed</span>
                            </div>
                        </div>
                        <div class="mt-4 p-3 bg-green-50 rounded-lg">
                            <p class="text-sm text-green-800">24/7 Emergency Support Available for Premium Clients</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- FAQ Section -->
    <section class="py-20">
        <div class="container mx-auto px-4">
            <div class="max-w-3xl mx-auto">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p class="text-gray-600">Quick answers to common questions</p>
                </div>
                
                <div class="space-y-4">
                    <!-- FAQ Item 1 -->
                    <div class="bg-white rounded-lg shadow-md">
                        <button @click="handleClickFAQ" class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition">
                            <span class="font-semibold">What is your typical project timeline?</span>
                            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="px-6 pb-4 text-gray-600 hidden">
                            <p>Project timelines vary depending on scope and complexity. Typically, small projects take 2-4 weeks, medium projects 1-3 months, and large enterprise projects 3-6 months or more.</p>
                        </div>
                    </div>
                    
                    <!-- FAQ Item 2 -->
                    <div class="bg-white rounded-lg shadow-md">
                        <button class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition">
                            <span class="font-semibold">Do you work with international clients?</span>
                            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="px-6 pb-4 text-gray-600 hidden">
                            <p>Yes! We work with clients worldwide. Our team is experienced in remote collaboration and we use modern tools to ensure smooth communication across time zones.</p>
                        </div>
                    </div>
                    
                    <!-- FAQ Item 3 -->
                    <div class="bg-white rounded-lg shadow-md">
                        <button class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition">
                            <span class="font-semibold">What is your payment structure?</span>
                            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="px-6 pb-4 text-gray-600 hidden">
                            <p>We typically work with a 50% upfront deposit and 50% upon project completion. For larger projects, we can arrange milestone-based payments. We accept wire transfers, credit cards, and PayPal.</p>
                        </div>
                    </div>
                    
                    <!-- FAQ Item 4 -->
                    <div class="bg-white rounded-lg shadow-md">
                        <button class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition">
                            <span class="font-semibold">Do you provide ongoing support after project completion?</span>
                            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="px-6 pb-4 text-gray-600 hidden">
                            <p>Absolutely! We offer various maintenance and support packages to ensure your project continues to run smoothly. This includes bug fixes, updates, and ongoing improvements.</p>
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
function handleClickFAQ() {
    
}
</script>