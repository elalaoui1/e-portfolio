<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Skill {
  name: string
  category: string
  icon: string
}

const skills = ref<Skill[]>([
  { name: 'Vue js', category: 'Frontend', icon:"/icons/vuejs.svg"},
  { name: 'React js', category: 'Frontend' , icon:"/icons/reactjs.svg"},
  { name: 'JavaScript', category: 'Frontend' , icon:"/icons/js.svg"},
  { name: 'Jquery', category: 'Frontend', icon:"/icons/jquery.svg" },
  { name: 'Tailwind CSS', category: 'Frontend', icon:"/icons/tailwind-css.svg" },
  { name: 'Bootstrap', category: 'Frontend', icon:"/icons/bootstrap.svg" },
  { name: 'Express js', category: 'Backend' ,icon:"/icons/express-js.svg"},
  { name: 'Laravel', category: 'Backend' ,icon:"/icons/laravel.svg"},
  { name: 'MySql', category: 'Backend' ,icon:"/icons/mysql.svg"},
  { name: 'MongoDB', category: 'Backend',icon:"/icons/mongodb.svg" },
  { name: 'Linux', category: 'Tools',icon:"/icons/linux.svg" },
  { name: 'Git', category: 'Tools' ,icon:"/icons/git.svg"},
  { name: 'Docker', category: 'Tools' ,icon:"/icons/docker.svg"},
  { name: 'Agile', category: 'Tools',icon:"/icons/agile1.svg" },
])

const categories = ['Frontend', 'Backend', 'Tools']

const handleMouseMove = (event: MouseEvent, element: HTMLElement) => {
  const rect = element.getBoundingClientRect()
  const x = ((event.clientX - rect.left) / rect.width) * 100
  const y = ((event.clientY - rect.top) / rect.height) * 100
  element.style.setProperty('--mouse-x', `${x}%`)
  element.style.setProperty('--mouse-y', `${y}%`)
}

onMounted(() => {
  const cards = document.querySelectorAll('.skill-card')
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => handleMouseMove(e as MouseEvent, card as HTMLElement))
  })
})
</script>

<template>
  <div class="section-container">
    <h2 class="text-2xl md:text-3xl font-bold mb-5 text-center bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
      Skills
    </h2>
    
    <div class="space-y-16">
      <div v-for="category in categories" :key="category" class="space-y-6">
        <h3 class="text-2xl font-semibold mb-6 text-purple-300">{{ category }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="skill in skills.filter(s => s.category === category)" 
               :key="skill.name" 
               class="skill-card">
            <div class="flex justify-between items-center mb-2">
              <h4 class="title text-lg font-medium text-white">{{ skill.name }}</h4>
              <!-- <span class="text-purple-400">{{ skill.level }}%</span> -->
              <span class="icon">
              <img :src="skill.icon" alt="Skill Icon" class="card-icon w-10 h-10" />
              </span>
            </div>
            <!-- <div class="skill-bar">
              <div class="skill-progress" :style="{ width: `${skill.level}%` }"></div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<style scoped>

.skill-card .icon{
  transition: all 0.3s ease-in-out 0.1s;

}

.skill-card:hover .icon{
  transform: scale(1.5) translateY(-5px);

}
.skill-card:hover .icon img{
  animation: bouncing 0.5s .3s; 

}
.skill-card .title{
  transition: all 0.3s ease-in-out 0.1s;

}
.skill-card:hover .title{
  letter-spacing: 2px;
}
.skill-card .icon img{
  object-fit: contain;

}
@keyframes bouncing {
  from, to { transform: scale(1, 1); }
  25% { transform: scale(0.9, 1.1); }
  50% { transform: scale(1.1, 0.9); }
  75% { transform: scale(0.95, 1.05); }
}

</style>