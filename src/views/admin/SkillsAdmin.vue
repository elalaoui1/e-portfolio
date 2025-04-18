<script setup lang="ts">
import { ref } from 'vue'

interface Skill {
  id: number
  name: string
  category: string
}

const skills = ref<Skill[]>([
  { id: 1, name: 'Vue.js', category: 'Frontend' },
  { id: 2, name: 'React', category: 'Frontend' },
  { id: 3, name: 'Node.js', category: 'Backend' }
])

const newSkill = ref({ name: '', category: 'Frontend' })
const editingSkill = ref<Skill | null>(null)

const addSkill = () => {
  if (newSkill.value.name.trim()) {
    skills.value.push({
      id: Math.max(0, ...skills.value.map(s => s.id)) + 1,
      name: newSkill.value.name,
      category: newSkill.value.category
    })
    newSkill.value = { name: '', category: 'Frontend' }
  }
}

const startEdit = (skill: Skill) => {
  editingSkill.value = { ...skill }
}

const saveEdit = () => {
  if (editingSkill.value) {
    const index = skills.value.findIndex(s => s.id === editingSkill.value?.id)
    if (index !== -1) {
      skills.value[index] = { ...editingSkill.value }
    }
    editingSkill.value = null
  }
}

const deleteSkill = (id: number) => {
  skills.value = skills.value.filter(s => s.id !== id)
}
</script>

<template>
  <div class="section-container">
    <div class="flex justify-between items-center mb-8">
      <h2 class="text-3xl font-bold">Skills Management</h2>
      <router-link to="/admin" class="text-blue-500 hover:text-blue-600">Back to Dashboard</router-link>
    </div>

    <!-- Add New Skill -->
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-8">
      <h3 class="text-xl font-semibold mb-4">Add New Skill</h3>
      <div class="flex gap-4">
        <input v-model="newSkill.name" type="text" placeholder="Skill name"
          class="flex-1 px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600" />
        <select v-model="newSkill.category"
          class="px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600">
          <option>Frontend</option>
          <option>Backend</option>
          <option>Tools</option>
        </select>
        <button @click="addSkill"
          class="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
          Add Skill
        </button>
      </div>
    </div>

    <!-- Skills List -->
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h3 class="text-xl font-semibold mb-4">Current Skills</h3>
      <div class="space-y-4">
        <div v-for="skill in skills" :key="skill.id" 
          class="flex items-center justify-between p-4 border rounded-lg dark:border-gray-600">
          <div v-if="editingSkill?.id === skill.id">
            <input v-model="editingSkill.name" type="text"
              class="px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 mr-2" />
            <select v-model="editingSkill.category"
              class="px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600">
              <option>Frontend</option>
              <option>Backend</option>
              <option>Tools</option>
            </select>
          </div>
          <div v-else>
            <span class="font-medium">{{ skill.name }}</span>
            <span class="text-gray-500 ml-2">({{ skill.category }})</span>
          </div>
          <div class="flex gap-2">
            <button v-if="editingSkill?.id === skill.id" @click="saveEdit"
              class="text-green-500 hover:text-green-600">Save</button>
            <button v-else @click="startEdit(skill)"
              class="text-blue-500 hover:text-blue-600">Edit</button>
            <button @click="deleteSkill(skill.id)"
              class="text-red-500 hover:text-red-600">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>