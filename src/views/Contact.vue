<template>
  <div class=" bg-black text-white p-6 md:p-12">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      
      <!-- Contact Form -->
      <div class="bg-[#121212] p-6 rounded-xl shadow-sm shadow-purple-900/50" data-aos="fade-up" data-aos-duration="1000">
        <h2 class="text-2xl font-bold mb-6">Send Me a Message</h2>
        <form class="space-y-4" method="post" ref="formemail" @submit.prevent="handleSubmit">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block mb-1 text-sm font-medium">Name</label>
            <input
              v-model="form.name"
              type="text"
              placeholder="Your name..."
              required
              class="w-full p-3 rounded-lg bg-[#1f1f1f] text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label class="block mb-1 text-sm font-medium">Email</label>
            <input
              v-model="form.email"
              type="email"
              placeholder="Your email..."
              required
              class="w-full p-3 rounded-lg bg-[#1f1f1f] text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
          <div>
            <label class="block mb-1 text-sm font-medium">Subject</label>
            <input
              v-model="form.subject"
              type="text"
              placeholder="Your subject..."
              required
              class="w-full p-3 rounded-lg bg-[#1f1f1f] text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label class="block mb-1 text-sm font-medium">Message</label>
            <textarea
              v-model="form.message"
              rows="5"
              placeholder="Your message..."
              required
              class="w-full p-3 rounded-lg bg-[#1f1f1f] text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button
            type="submit"
            class="bg-purple-800 hover:bg-purple-700 w-full p-3 rounded-lg flex items-center justify-center gap-2"
          >
          <IconSend stroke={2} ref="send_icon"/>
          <span ref="send_text">Send Message</span>
          
          <span class="loading" ref="loading"><img src="/icons/lo.gif" width="25" alt=""></span>
          </button>
        </form>
      </div>

      <!-- Info -->
      <div class="flex flex-col gap-6">
        <!-- Contact Info -->
        <div class="bg-[#121212] p-6 py-7 rounded-xl shadow-sm shadow-purple-900/50" data-aos="fade-up" data-aos-duration="1300">
          <h3 class="text-xl font-bold mb-4">Contact Information</h3>
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <IconMail stroke={2} class="text-purple-500"/>
              <div>
                <p class="text-sm text-gray-400">Email</p>
                <a href="emailto:abdelkarimelalaoui3@gmail.com" class="text-white">abdelkarimelalaoui3@gmail.com</a>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <IconPhone stroke={2} class="text-purple-500" />
              <div>
                <p class="text-sm text-gray-400">Phone</p>
                <a href="tel:+212640748745" class="text-white">+212 640748745</a>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <IconMapPin stroke={2} class="text-purple-500" />
              <div>
                <p class="text-sm text-gray-400">Location</p>
                <p class="text-white">Marrakesh, MA</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Availability -->
        <div class="bg-[#121212] p-6 py-7 rounded-xl shadow-sm shadow-purple-900/50" data-aos="fade-up" data-aos-duration="1500">
          <h3 class="text-xl font-bold mb-4">Availability</h3>
          <p class="text-gray-300 mb-3">
            I'm currently available for freelance work and full-time positions.
            If you have a project that needs attention, don't hesitate to reach out!
          </p>
          <div class="flex items-center gap-2 text-sm text-purple-500">
            <span class="w-3 h-3 bg-purple-500 rounded-full inline-block" />
            Available for new projects
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive , ref } from 'vue'
import {IconSend, IconMail, IconPhone, IconMapPin } from '@tabler/icons-vue';
import emailjs from '@emailjs/browser';
import { createToast } from 'mosha-vue-toastify';
// import the styling for the toast
// import 'mosha-vue-toastify/dist/style.css'
emailjs.init('OgmFkH6ZVNdp5y6I2'); // Initialize EmailJS

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

// Define refs for the elements
const send_icon = ref(null);
const send_text = ref(null);
const loading = ref(null);
const formemail = ref(null);

const handleSubmit = () => {
  let paraams = {
        to_name: 'ABDELKARIM ELALAOUI',
        from_name: form.name,
        from_email: form.email,
        from_subject: form.subject,
        message: form.message,
        from_date: new Date().toLocaleString(),
      };
      loading.value.style.display = 'inline-block';
      send_icon.value.style.display = 'none';
      send_text.value.style.display = 'none';
      emailjs
        .send('service_276fkww', 'template_1kogxbq',paraams,'OgmFkH6ZVNdp5y6I2')
        .then(
          () => {
            formemail.value.reset();
            loading.value.style.display = 'none';
            send_icon.value.style.display = 'inline-block';
            send_text.value.style.display = 'inline-block';
            // Show success toast
            createToast('Message sent successfully!',{
                timeout: 3000,
                toastBackgroundColor: '#5b169b',
                position: 'bottom-right',
                type: 'success',
                showIcon: 'true',
                transition: 'slide',
                })
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
  // You can send the form data to your backend here
}
</script>


<style scoped>
.loading{
  display: none;
}

</style>