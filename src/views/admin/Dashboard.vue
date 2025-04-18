<template>
  <div class="section-container">
    <h2 class="text-3xl font-bold mb-8">Admin Dashboard</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <router-link to="/admin/skills" 
        class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
        <h3 class="text-xl font-semibold mb-2">Skills Management</h3>
        <p class="text-gray-600 dark:text-gray-300">Add, edit, or remove skills</p>
      </router-link>
      
      <router-link to="/admin/projects" 
        class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
        <h3 class="text-xl font-semibold mb-2">Projects Management</h3>
        <p class="text-gray-600 dark:text-gray-300">Manage your project portfolio</p>
      </router-link>
      
      <router-link to="/admin/education" 
        class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
        <h3 class="text-xl font-semibold mb-2">Education Management</h3>
        <p class="text-gray-600 dark:text-gray-300">Update your educational background</p>
      </router-link>
    </div>
  </div>
</template>