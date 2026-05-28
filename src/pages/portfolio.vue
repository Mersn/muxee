<template>
  <div class="bg-gray-50">
    <MyHeader />
    <MyHero title="Our" title-high="Portfolio" content="Explore our collection of innovative projects that showcase our expertise in creating digital excellence." />
    
    <!-- Filter Section -->
    <section class="py-10 bg-white sticky top-16 z-40 shadow-sm">
        <div class="container mx-auto px-4">
            <div class="flex flex-wrap justify-center gap-4">
                <button class="filter-btn active px-6 py-2 rounded-full border-2 border-purple-600">
                    All Projects
                </button>
                <button class="filter-btn px-6 py-2 rounded-full border-2 border-gray-300 hover:border-purple-600">
                    Web Design
                </button>
                <button class="filter-btn px-6 py-2 rounded-full border-2 border-gray-300 hover:border-purple-600">
                    Development
                </button>
                <button class="filter-btn px-6 py-2 rounded-full border-2 border-gray-300 hover:border-purple-600">
                    Mobile Apps
                </button>
                <button class="filter-btn px-6 py-2 rounded-full border-2 border-gray-300 hover:border-purple-600">
                    Branding
                </button>
                <button class="filter-btn px-6 py-2 rounded-full border-2 border-gray-300 hover:border-purple-600">
                    Marketing
                </button>
            </div>
        </div>
    </section>
    
    <!-- Portfolio Grid -->
    <section class="py-20">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Portfolio Item 1 -->
                <div class="portfolio-item animate-scaleIn">
                    <div class="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer group">
                        <div class="relative overflow-hidden h-64">
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800" 
                                 alt="E-Commerce Platform" 
                                 class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                            <div class="absolute inset-0 portfolio-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <div class="text-white">
                                    <span class="text-sm font-medium text-purple-300">E-Commerce</span>
                                    <h3 class="text-2xl font-bold">Modern Shopping Platform</h3>
                                </div>
                            </div>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold mb-2">E-Commerce Platform</h3>
                            <p class="text-gray-600 mb-4">Complete online shopping solution with payment integration and inventory management.</p>
                            <div class="flex flex-wrap gap-2">
                                <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">React</span>
                                <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Node.js</span>
                                <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">MongoDB</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Portfolio Item 2 -->
                <div class="portfolio-item animate-scaleIn" style="animation-delay: 0.1s">
                    <div class="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer group">
                        <div class="relative overflow-hidden h-64">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800" 
                                 alt="Analytics Dashboard" 
                                 class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                            <div class="absolute inset-0 portfolio-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <div class="text-white">
                                    <span class="text-sm font-medium text-purple-300">Analytics</span>
                                    <h3 class="text-2xl font-bold">Data Analytics Dashboard</h3>
                                </div>
                            </div>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold mb-2">Analytics Dashboard</h3>
                            <p class="text-gray-600 mb-4">Real-time data visualization and business intelligence platform for enterprises.</p>
                            <div class="flex flex-wrap gap-2">
                                <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Vue.js</span>
                                <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">D3.js</span>
                                <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Python</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Portfolio Item 3 -->
                <div class="portfolio-item animate-scaleIn" style="animation-delay: 0.2s">
                    <div class="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer group">
                        <div class="relative overflow-hidden h-64">
                            <img src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=800" 
                                 alt="Mobile Banking App" 
                                 class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                            <div class="absolute inset-0 portfolio-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <div class="text-white">
                                    <span class="text-sm font-medium text-purple-300">Mobile App</span>
                                    <h3 class="text-2xl font-bold">Banking Mobile App</h3>
                                </div>
                            </div>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold mb-2">Mobile Banking App</h3>
                            <p class="text-gray-600 mb-4">Secure and intuitive mobile banking application with biometric authentication.</p>
                            <div class="flex flex-wrap gap-2">
                                <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">React Native</span>
                                <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Firebase</span>
                                <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">AWS</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Portfolio Item 4 -->
                <div class="portfolio-item animate-scaleIn" style="animation-delay: 0.3s">
                    <div class="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer group">
                        <div class="relative overflow-hidden h-64">
                            <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800" 
                                 alt="Corporate Website" 
                                 class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                            <div class="absolute inset-0 portfolio-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <div class="text-white">
                                    <span class="text-sm font-medium text-purple-300">Web Design</span>
                                    <h3 class="text-2xl font-bold">Corporate Website</h3>
                                </div>
                            </div>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold mb-2">Corporate Website</h3>
                            <p class="text-gray-600 mb-4">Professional corporate website with modern design and seamless user experience.</p>
                            <div class="flex flex-wrap gap-2">
                                <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">WordPress</span>
                                <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">PHP</span>
                                <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">MySQL</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Portfolio Item 5 -->
                <div class="portfolio-item animate-scaleIn" style="animation-delay: 0.4s">
                    <div class="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer group">
                        <div class="relative overflow-hidden h-64">
                            <img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800" 
                                 alt="Learning Platform" 
                                 class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                            <div class="absolute inset-0 portfolio-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <div class="text-white">
                                    <span class="text-sm font-medium text-purple-300">EdTech</span>
                                    <h3 class="text-2xl font-bold">Online Learning Platform</h3>
                                </div>
                            </div>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold mb-2">Learning Platform</h3>
                            <p class="text-gray-600 mb-4">Interactive e-learning platform with video streaming and progress tracking.</p>
                            <div class="flex flex-wrap gap-2">
                                <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Angular</span>
                                <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Django</span>
                                <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">PostgreSQL</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Portfolio Item 6 -->
                <div class="portfolio-item animate-scaleIn" style="animation-delay: 0.5s">
                    <div class="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer group">
                        <div class="relative overflow-hidden h-64">
                            <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800" 
                                 alt="Social Media Campaign" 
                                 class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                            <div class="absolute inset-0 portfolio-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <div class="text-white">
                                    <span class="text-sm font-medium text-purple-300">Marketing</span>
                                    <h3 class="text-2xl font-bold">Social Media Campaign</h3>
                                </div>
                            </div>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold mb-2">Social Media Campaign</h3>
                            <p class="text-gray-600 mb-4">Comprehensive social media marketing campaign with brand identity design.</p>
                            <div class="flex flex-wrap gap-2">
                                <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Branding</span>
                                <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Design</span>
                                <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Strategy</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Portfolio Item 7 -->
                <div class="portfolio-item animate-scaleIn" style="animation-delay: 0.6s">
                    <div class="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer group">
                        <div class="relative overflow-hidden h-64">
                            <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800" 
                                 alt="Financial Dashboard" 
                                 class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                            <div class="absolute inset-0 portfolio-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <div class="text-white">
                                    <span class="text-sm font-medium text-purple-300">FinTech</span>
                                    <h3 class="text-2xl font-bold">Financial Dashboard</h3>
                                </div>
                            </div>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold mb-2">Financial Dashboard</h3>
                            <p class="text-gray-600 mb-4">Advanced financial analytics and portfolio management dashboard.</p>
                            <div class="flex flex-wrap gap-2">
                                <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">React</span>
                                <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Chart.js</span>
                                <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">API</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Portfolio Item 8 -->
                <div class="portfolio-item animate-scaleIn" style="animation-delay: 0.7s">
                    <div class="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer group">
                        <div class="relative overflow-hidden h-64">
                            <img src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?w=800" 
                                 alt="Brand Identity" 
                                 class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                            <div class="absolute inset-0 portfolio-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <div class="text-white">
                                    <span class="text-sm font-medium text-purple-300">Branding</span>
                                    <h3 class="text-2xl font-bold">Brand Identity Design</h3>
                                </div>
                            </div>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold mb-2">Brand Identity</h3>
                            <p class="text-gray-600 mb-4">Complete brand identity package including logo, guidelines, and marketing materials.</p>
                            <div class="flex flex-wrap gap-2">
                                <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Illustrator</span>
                                <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Photoshop</span>
                                <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">InDesign</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Portfolio Item 9 -->
                <div class="portfolio-item animate-scaleIn" style="animation-delay: 0.8s">
                    <div class="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer group">
                        <div class="relative overflow-hidden h-64">
                            <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800" 
                                 alt="Restaurant App" 
                                 class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                            <div class="absolute inset-0 portfolio-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <div class="text-white">
                                    <span class="text-sm font-medium text-purple-300">Mobile App</span>
                                    <h3 class="text-2xl font-bold">Restaurant Ordering App</h3>
                                </div>
                            </div>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold mb-2">Restaurant App</h3>
                            <p class="text-gray-600 mb-4">Food ordering app with real-time tracking and payment integration.</p>
                            <div class="flex flex-wrap gap-2">
                                <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Flutter</span>
                                <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Firebase</span>
                                <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Maps API</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Load More Button -->
            <div class="text-center mt-12">
                <button class="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition">
                    Load More Projects
                </button>
            </div>
        </div>
    </section>
    
    <StartProject />
    <MyFooter />
  </div>
</template>