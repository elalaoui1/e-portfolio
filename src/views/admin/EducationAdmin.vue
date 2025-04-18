<script setup lang="ts">
import { ref } from 'vue'

interface Education {
  id: number
  degree: string
  institution: string
  year: string
  description: string
}

const educations = ref<Education[]>([
  {
    id: 1,
    degree: 'Computer Science',
    institution: 'University Name',
    year: '2020 - 2024',
    description: 'Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems'
  }
])

const newEducation = ref({
  degree: '',
  institution: '',
  year: '',
  description: ''
})

const editingEducation = ref<Education | null>(null)

const addEducation = () => {
  if (newEducation.value.degree.trim() && newEducation.value.institution.trim()) {
    educations.value.push({
      id: Math.max(0, ...educations.value.map(e => e.id)) + 1,
      ...newEducation.value
    })
    newEducation.value = { degree: '', institution: '', year: '', description: '' }
  }
}

const startEdit = (education: Education) => {
  editingEducation.value = { ...education }
}

const saveEdit = () => {
  if (editingEducation.value) {
    const index = educations.value.findIndex(e => e.id === editingEducation.value?.id)
    if (index !== -1) {
      educations.value[index] = { ...editingEducation.value }
    }
    editingEducation.value = null
  }
}

const deleteEducation = (id: number) => {
  educations.value = educations.value.filter(e => e.id !== id)
}
</script>

<template>
  <div class="section-container">
    <div class="flex justify-between items-center mb-8">
      <h2 class="text-3xl font-bold">Education Management</h2>
      <router-link to="/admin" class="text-blue-500 hover:text-blue-600">Back to Dashboard</router-link>
    </div>

    <!-- Add New Education -->
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-8">
      <h3 class="text-xl font-semibold mb-4">Add New Education</h3>
      <div class="space-y-4">
        <input v-model="newEducation.degree" type="text" placeholder="Degree/Certificate"
          class="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600" />
        <input v-model="newEducation.institution" type="text" placeholder="Institution"
          class="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600" />
        <input v-model="newEducation.year" type="text" placeholder="Year(s)"
          class="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600" />
        <textarea v-model="newEducation.description" placeholder="Description"
          class="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600" rows="3"></textarea>
        <button @click="addEducation"
          class="w-full bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
          Add Education
        </button>
      </div>
    </div>

    <!-- Education List -->
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h3 class="text-xl font-semibold mb-4">Current Education</h3>
      <div class="space-y-6">
        <div v-for="education in educations" :key="education.id"
          class="border rounded-lg p-6 dark:border-gray-600">
          <div v-if="editingEducation?.id === education.id">
            <div class="space-y-4">
              <input v-model="editingEducation.degree" type="text"
                class="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600" />
              <input v-model="editingEducation.institution" type="text"
                class="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600" />
              <input v-model="editingEducation.year" type="text"
                class="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600" />
              <textarea v-model="editingEducation.description"
                class="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600" rows="3"></textarea>
              <button @click="saveEdit"
                class="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
                Save Changes
              </button>
            </div>
          </div>
          <div v-else>
            <div class="flex justify-between items-start">
              <div>
                <h4 class="text-lg font-semibold">{{ education.degree }}</h4>
                <p class="text-gray-600 dark:text-gray-300">{{ education.institution }}</p>
                <p class="text-gray-500">{{ education.year }}</p>
                <p class="text-gray-600 dark:text-gray-300 mt-2">{{ education.description }}</p>
              </div>
              <div class="flex gap-2">
                <button @click="startEdit(education)"
                  class="text-blue-500 hover:text-blue-600">Edit</button>
                <button @click="deleteEducation(education.id)"
                  class="text-red-500 hover:text-red-600">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>