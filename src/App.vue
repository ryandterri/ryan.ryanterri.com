<script setup>
import { profile, work_history, interests, contact_links } from "./composables/profile.js";
import { UserIcon, ClockIcon, ChatBubbleBottomCenterTextIcon, LightBulbIcon } from '@heroicons/vue/24/solid'
import SideBar from "./components/SideBar.vue";
</script>

<template>
  <side-bar></side-bar>

  <div class="p-4 sm:ml-64 bg-white text-black h-screen">
    <div>{{profile.name}}</div>
    <div>{{profile.headline}}</div>
    <div>{{profile.description}}</div>
  </div>

</template>

<style scoped>

</style>
