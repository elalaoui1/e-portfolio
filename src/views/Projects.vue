<template>
  <div class="section-container">
    <h2 class="text-2xl md:text-3xl font-bold mb-5 text-center bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
      Projects
    </h2>
    <div class="project_container container grid">
        <article v-for="(work, index) in works" :key="index" class="projects_cards" data-aos="fade-up" :data-aos-delay="work.cpt">
          <a :href="work.link" target="_blank" class="project_image">
            <img :src="work.img" alt="image" class="project_img">
          </a>
          <div class="projects_data">
            <h3 class="projects_name">{{work.name}}</h3>
            <p class="projects_description">{{ work.description }}</p>
            <div class="projects_skills">
              <img v-for="(skill, index) in work.skills" :key="index" :src="skill" alt="image" class="projects_skill">
            </div>
            <a :href="work.link" target="_blank" class="projects_button">
              <i class='bx bx-link-alt'></i>
              <span>Visit Project</span>
            </a>
          </div>
        </article>

      </div>
    
  </div>
</template>


<script>
export default {
  data() {
    return {
      works: [
        {
          id: 1,
          img: '/project_Img/defp.jpg',
          name: 'D-EFP SaaS',
          description: 'Manage your school effortlessly with tools for schedules, rooms, and trainers...',
          skills: ['/icons/laravel.svg', '/icons/bootstrap.svg','/icons/jquery.svg','/icons/mysql.svg'],
          link: 'https://etabhub.com/',
          cpt: 200
        },
        {
          id: 2,
          img: '/project_Img/moroccoglimpsee.png',
          name: 'Morocco Glimpse',
          description: 'Explore Morocco’s hidden gems with unique, unforgettable tours. and landscapes.',
          skills: ['/icons/laravel.svg', '/icons/Livewire.svg', '/icons/tailwind-css.svg','/icons/mysql.svg'],
          link: 'https://www.moroccoglimpse.com/',
          cpt:300
        },
        {
          id: 3,
          img: '/project_Img/medicareplusee.png',
          name: 'MedicarePlus',
          description: 'MedicarePlus: Your all-in-one solution for efficient, secure healthcare management.',
          skills: ['/icons/laravel.svg', '/icons/jquery.svg', '/icons/bootstrap.svg','/icons/mysql.svg'],
          link: 'https://medicareplus.ma/',
          cpt:400
        },
        {
          id: 3,
          img: '/project_Img/weeather-app.jpg',
          name: 'weeather-app',
          description: 'Real-time weather forecasts worldwide. Simple, fast, and beautifully designed for daily use.',
          skills: ['/icons/vuejs.svg','/icons/css.svg','/icons/openweather.png'],
          link: 'https://weeather-app.vercel.app/',
          cpt:400
        },
        {
          id: 3,
          img: '/project_Img/iFoods.png',
          name: 'iFoods',
          description: 'Your ultimate restaurant website for a seamless, modern, and engaging dining experience.',
          skills: ['/icons/wordpress.svg','/icons/elementor.svg','/icons/mysql.svg'],
          link: 'http://ifoods.atwebpages.com/',
          cpt:500
        },
        {
          id: 3,
          img: '/project_Img/hereAgency.png',
          name: 'HereAgency',
          description: 'Digital agency for innovative SEO solutions, strategic email marketing,content writing, and business growth strategies.',
          skills: ['/icons/wordpress.svg','/icons/elementor.svg','/icons/mysql.svg'],
          link: 'http://hereagency.byethost10.com/',
          cpt:550
        },
      ]
    }
  }
}
</script>

<style scoped>

/* Portfolio Section */
.project_container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  gap: 1rem; /* reduce the space between grid items */
}

/* Style for individual project cards */
.projects_cards {
  background-color: #121212;
  padding: 0.8rem; /* smaller padding */
  border-radius: 1rem; /* reduce border-radius */
  transition: transform 0.3s ease;
  max-width: 400px; /* limit the width of each card */
  margin: auto; /* center the cards */
}

/* Project image adjustments */
.project_image {
  display: block;
  overflow: hidden;
  border-radius: 0.8rem; /* smaller border-radius */
  margin-bottom: 0.8rem; /* less margin below the image */
}

.project_img {
  width: 100%;
  height: 180px; /* control image height */
  object-fit: cover; /* keep the aspect ratio but fill the box */
  transition: transform 0.4s;
}

/* Project name */
.projects_name {
  font-size: 17px; /* reduce font size */
  font-weight: 600; /* bolder text */
  margin-bottom: 0.4rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Project description */
.projects_description {
  font-size: 13px; /* smaller font size */
  color: #74797e;
  margin-bottom: 0.8rem; /* less margin below description */
}

/* Project skills */
.projects_skills {
  width: max-content;
  height: 28px; /* smaller skill container */
  background-color: black;
  padding-inline: 0.5rem; /* tighter padding */
  display: flex;
  align-items: center;
  column-gap: 0.4rem; /* tighter gap between skills */
  border-radius: 3rem; /* smaller border-radius */
  margin-bottom: 0.8rem; /* less margin below skills */
}

.projects_skill {
  width: 1rem; /* smaller skill icons */
  transition: transform 0.4s;
}

.projects_skill:hover {
  transform: translateY(-0.2rem);
}

/* Visit project button */
.projects_button {
  color: white;
  /* display: inline-flex; */

  /* align-items: center;  */
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.4rem;
  transition: color 0.4s;
  font-size: 13px; /* smaller button text */
}

.projects_button i {
  font-size: 1rem; /* smaller icon */
}

.projects_button:hover {
  color: #a855f7;
}

/* Hover effects for the project image */
.projects_cards:hover .project_img {
  transform: scale(1.05);
}
.projects_cards:hover {
box-shadow: 0 4px 20px rgba(98, 1, 110, 0.3);
}
/* Responsive for iPads (tablets) */
@media screen and (max-width: 1024px) {
  .project_container {
    grid-template-columns: repeat(2, 1fr); /* 2 columns */
  }
}

/* Responsive for phones */
@media screen and (max-width: 768px) {
  .project_container {
    grid-template-columns: 1fr; /* 1 column */
  }

  .projects_cards {
    padding: 0.5rem; /* smaller padding on mobile */
  }

  .projects_skills {
    height: 25px; /* adjust height of skills on mobile */
  }
  .projects_cards:last-child{
    margin-bottom: 55px;
  }
}


</style>