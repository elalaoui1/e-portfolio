<script setup lang="ts">
import { ref } from 'vue'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
}

const projects = ref<Project[]>([
  {
    id: 1,
    title: 'Project 1',
    description: 'Description of project 1',
    image: 'https://placehold.co/600x400',
    technologies: ['Vue.js', 'TypeScript']
  }
])

const newProject = ref({
  title: '',
  description: '',
  image: '',
  technologies: ''
})

const editingProject = ref<Project | null>(null)

const addProject = () => {
  if (newProject.value.title.trim()) {
    projects.value.push({
      id: Math.max(0, ...projects.value.map(p => p.id)) + 1,
      title: newProject.value.title,
      description: newProject.value.description,
      image: newProject.value.image || 'https://placehold.co/600x400',
      technologies: newProject.value.technologies.split(',').map(t => t.trim())
    })
    newProject.value = { title: '', description: '', image: '', technologies: '' }
  }
}

const startEdit = (project: Project) => {
  editingProject.value = {
    ...project,
    technologies: project.technologies.join(', ')
  } as any
}

const saveEdit = () => {
  if (editingProject.value) {
    const index = projects.value.findIndex(p => p.id === editingProject.value?.id)
    if (index !== -1) {
      projects.value[index] = {
        ...editingProject.value,
        technologies: (editingProject.value.technologies as string).split(',').map(t => t.trim())
      }
    }
    editingProject.value = null
  }
}

const deleteProject = (id: number) => {
  projects.value = projects.value.filter(p => p.id !== id)
}
</script>

<template>
  <div class="section-container">
    <div class="flex justify-between items-center mb-8">
      <h2 class="text-3xl font-bold">Projects Management</h2>
      <router-link to="/admin" class="text-blue-500 hover:text-blue-600">Back to Dashboard</router-link>
    </div>

    <!-- Add New Project -->
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-8">
      <h3 class="text-xl font-semibold mb-4">Add New Project</h3>
      <div class="space-y-4">
        <input v-model="newProject.title" type="text" placeholder="Project title"
          class="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600" />
        <textarea v-model="newProject.description" placeholder="Project description"
          class="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600" rows="3"></textarea>
        <input v-model="newProject.image" type="text" placeholder="Image URL"
          class="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600" />
        <input v-model="newProject.technologies" type="text" placeholder="Technologies (comma-separated)"
          class="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600" />
        <button @click="addProject"
          class="w-full bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
          Add Project
        </button>
      </div>
    </div>

    <!-- Projects List -->
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h3 class="text-xl font-semibold mb-4">Current Projects</h3>
      <div class="space-y-6">
        <div v-for="project in projects" :key="project.id" 
          class="border rounded-lg p-6 dark:border-gray-600">
          <div v-if="editingProject?.id === project.id">
            <div class="space-y-4">
              <input v-model="editingProject.title" type="text"
                class="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600" />
              <textarea v-model="editingProject.description"
                class="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600" rows="3"></textarea>
              <input v-model="editingProject.image" type="text"
                class="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600" />
              <input v-model="editingProject.technologies" type="text"
                class="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600" />
              <button @click="saveEdit"
                class="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
                Save Changes
              </button>
            </div>
          </div>
          <div v-else>
            <div class="flex justify-between items-start mb-4">
              <div>
                <h4 class="text-lg font-semibold">{{ project.title }}</h4>
                <p class="text-gray-600 dark:text-gray-300">{{ project.description }}</p>
              </div>
              <img :src="project.image" :alt="project.title" class="w-24 h-24 object-cover rounded" />
            </div>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tech in project.technologies" :key="tech"
                class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                {{ tech }}
              </span>
            </div>
            <div class="flex gap-2">
              <button @click="startEdit(project)"
                class="text-blue-500 hover:text-blue-600">Edit</button>
              <button @click="deleteProject(project.id)"
                class="text-red-500 hover:text-red-600">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>