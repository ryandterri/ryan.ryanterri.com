<script setup>
import { profile, work_history, interests, contact_links } from "./composables/profile.js";
import { InboxArrowDownIcon, ClockIcon, ChatBubbleBottomCenterTextIcon, LightBulbIcon } from '@heroicons/vue/24/solid'
import SideBar from "./components/SideBar.vue";
import GitHubIcon from "./components/icons/GitHubIcon.vue";
import LinkedInIcon from "./components/icons/LinkedInIcon.vue";
import MongoDbIcon from "./components/icons/MongoDbIcon.vue";
import VueJsIcon from "./components/icons/VueJsIcon.vue";
import NodeJsIcon from "./components/icons/NodeJsIcon.vue";
import TailwindIcon from "./components/icons/TailwindIcon.vue";
import GexaIcon from "./components/icons/GexaIcon.vue";
import WeatherfordIcon from "./components/icons/WeatherfordIcon.vue";
import ComparepowerIcon from "./components/icons/ComparepowerIcon.vue";
import ResumeHeader from "./components/ResumeHeader.vue";
</script>

<template>
  <div class="mx-auto container sm:my-10 sm:rounded-2xl border-slate-700 border">
    <div class="h-28 bg-slate-700 items-center flex px-8 gap-4 sm:rounded-t-2xl">
      <div class="hidden sm:block h-36 w-36">
        <img src="./assets/profile_alt.jpg" alt="profile" class="rounded-full mt-16 object-fill"/>
      </div>
      <div class="text-white w-full px-10 flex flex-col sm:flex-row gap-2 items-center justify-between">
        <div>
          <div class="text-2xl font-bold"> Patrick Ryan Purcell</div>
          <div>Software Developer / Architect</div>
        </div>
        <div class="flex items-center gap-6 text-white">
          <a href="mailto:patrick.ryan.purcell@gmail.com">
            <inbox-arrow-down-icon class="h-6 w-6 fill-current"></inbox-arrow-down-icon>
          </a>
          <a href="https://github.com/ryandterri" target="_blank">
            <git-hub-icon class="h-6 w-6 fill-current"></git-hub-icon>
          </a>
          <a href="https://www.linkedin.com/in/ryan-purcell-6ab1368/" target="_blank">
            <linked-in-icon class="h-6 w-6 fill-current"></linked-in-icon>
          </a>
        </div>
      </div>
    </div>
    <!--  <side-bar></side-bar>-->

    <div class="py-4 sm:my-10 bg-white text-black px-8">

      <img src="./assets/profile_alt.jpg" alt="profile" class="rounded-full sm:hidden h-32 w-32 object-fill"/>

      <resume-header id="about">About Me</resume-header>

      <div>{{ profile.name }}</div>
      <div>{{ profile.headline }}</div>
      <div>{{ profile.description }}</div>

      <resume-header id="experience">Experience</resume-header>

      <ol class="relative border-s border-gray-200 dark:border-gray-700 ml-4">
        <li class="mb-10 ms-4" v-for="history in work_history" :key="history.dates">
          <div
              class="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-500">{{ history.dates }}</time>
          <h3 class="text-lg font-semibold text-gray-900">{{ history.title }} at {{ history.company }}
            <!--          <gexa-icon class="h-10"></gexa-icon>-->
            <!--          <weatherford-icon class="h-10"></weatherford-icon>-->
            <!--          <comparepower-icon class="h-10"></comparepower-icon>-->
          </h3>
          <p class="mb-4 text-base font-normal text-gray-600">
            {{ history.description }}
          </p>
        </li>
      </ol>

      <resume-header id="skills">Skills</resume-header>

      <ul class="font-medium space-y-2 max-w-2xl">
        <li>
          <a href="https://vuejs.org/" target="_blank"
             class="flex items-center py-2 px-4 rounded-full bg-slate-700 gap-4 text-white">
            <vue-js-icon class="h-6 w-6"></vue-js-icon>
            <span>Vue.js</span>
          </a>
        </li>
        <li>
          <a href="https://nodejs.org" target="_blank"
             class="flex items-center py-2 px-4 rounded-full gap-4 bg-slate-700 text-white">
            <node-js-icon class="h-6 w-6"></node-js-icon>
            <span>Node.js</span>
          </a>
        </li>
        <li>
          <a class="flex items-center py-2 px-4 rounded-full gap-4 bg-slate-700 text-white">
            <tailwind-icon class="h-6 w-6"></tailwind-icon>
            <span>Tailwind CSS</span>
          </a>
        </li>
        <li>
          <a class="flex items-center py-2 px-4 rounded-full gap-4 bg-slate-700 text-white">
            <mongo-db-icon class="h-6 w-6"></mongo-db-icon>
            <span>MongoDb</span>
          </a>
        </li>
      </ul>

    </div>

  </div>

</template>

<style scoped>

</style>
