<template>
  <div class="bg-gray-50 h-screen flex flex-col items-center justify-center text-center px-4">
    <div class="max-w-md">
        <h1 class="text-9xl font-bold text-gray-200">404</h1>
        <h2 class="text-3xl font-bold text-gray-900 mt-[-50px]">Page Not Found</h2>
        <p class="text-gray-500 mt-4 mb-8">The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.</p>
        <RouterLink to="/"
            class="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition">
            Back to Home
        </RouterLink>
    </div>
  </div>
</template>