<script setup>
import { profile, work_history, interests, contact_links } from "./composables/profile.js";
import { InboxArrowDownIcon, ClockIcon, ChatBubbleBottomCenterTextIcon, LightBulbIcon } from '@heroicons/vue/24/solid'
import SideBar from "./components/SideBar.vue";
import GitHubIcon from "./components/icons/GitHubIcon.vue";
import LinkedInIcon from "./components/icons/LinkedInIcon.vue";
</script>

<template>
  <side-bar></side-bar>

  <div class="p-4 sm:ml-64 bg-white text-black h-screen">

    <div class="text-2xl font-bold mb-4">About Me</div>

    <div>{{ profile.name }}</div>
    <div>{{ profile.headline }}</div>
    <div>{{ profile.description }}</div>

    <div class="text-2xl font-bold my-4">Experience</div>

<!--    <div v-for="history in work_history" :key="history.dates" class="m-4 shadow p-5 rounded-lg shadow-gray-500">-->
<!--      <div class="flex items-center justify-between mb-4">-->
<!--        <div class="font-bold">{{ history.title }}</div>-->
<!--        <div class="italic">at {{ history.company }} {{ history.dates }}</div>-->
<!--      </div>-->
<!--      <hr class="mb-4">-->
<!--      <div>-->
<!--        {{ history.description }}-->
<!--      </div>-->
<!--    </div>-->


    <ol class="relative border-s border-gray-200 dark:border-gray-700 ml-4">
      <li class="mb-10 ms-4" v-for="history in work_history" :key="history.dates">
        <div
            class="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-500">{{ history.dates }}</time>
        <h3 class="text-lg font-semibold text-gray-900">{{ history.title }} at {{ history.company }}</h3>
        <p class="mb-4 text-base font-normal text-gray-600">
          {{ history.description }}
        </p>
      </li>
    </ol>

    <div class="text-2xl font-bold my-4">Contact Me</div>

    <div class="flex items-center justify-between">
      <inbox-arrow-down-icon class="h-12 w-12"></inbox-arrow-down-icon>
      <git-hub-icon class="h-6 w-6"></git-hub-icon>
      <linked-in-icon class="h-6 w-6"></linked-in-icon>
    </div>

  </div>

  <div>
    <div class="text-2xl font-bold mb-4">Experience</div>
  </div>

</template>

<style scoped>

</style>
