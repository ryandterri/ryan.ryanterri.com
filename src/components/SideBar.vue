<script setup>

import { UserCircleIcon, ClockIcon, ChatBubbleBottomCenterTextIcon, LightBulbIcon } from '@heroicons/vue/24/solid'
import TailwindIcon from "../components/icons/TailwindIcon.vue";
import NodeJsIcon from "../components/icons/NodeJsIcon.vue";
import VueJsIcon from "../components/icons/VueJsIcon.vue";
import MongoDbIcon from "../components/icons/MongoDbIcon.vue";
import { ref } from "vue";
import detect_outside_click from "../composables/detect_outside_click.js";
import { Bars3Icon } from "@heroicons/vue/24/solid/index.js";

const show = ref(false)
const sidebar = ref(null);
const button = ref(null);
detect_outside_click([button, sidebar], () => {
  show.value = false
})
</script>

<template>
  <button @click="show = !show" type="button" ref="button"
          class="inline-flex items-center p-2 mt-2 ms-3 text-sm rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
    <span class="sr-only">Open sidebar</span>
    <bars3-icon class="h-6 w-6"></bars3-icon>
  </button>

  <aside id="sidebar" ref="sidebar" :class="{'-translate-x-full': !show}"
         class="fixed top-0 left-0 h-screen w-64 transition-transform sm:translate-x-0 z-40">
    <div class="h-full px-3 py-4 overflow-y-auto bg-slate-700 text-white">
      <div class="flex flex-col items-center justify-center">
        <img src="../assets/profile_alt.jpg" alt="profile" class="rounded-full h-28 w-28 object-fill"/>
        <div class="text-xl font-bold">Patrick Ryan Purcell</div>
        <div class="text-sm">Software Developer / Architect</div>
      </div>
      <hr class="my-4">

      <ul class="pt-8 space-y-6 font-medium">
        <li>
          <a href="#about"
             class="flex items-center p-2 rounded-lg gap-4 bg-white hover:bg-slate-200 text-slate-700">
            <user-circle-icon class="h-6 w-6"></user-circle-icon>
            <span>About Me</span>
          </a>
        </li>
        <li>
          <a href="#experience" class="flex items-center p-2 rounded-lg gap-4 bg-white text-slate-700">
            <clock-icon class="h-6 w-6"></clock-icon>
            <span>Experience</span>
          </a>
        </li>
        <li>
          <a href="#skills" class="flex items-center p-2 rounded-lg gap-4 bg-white text-slate-700">
            <light-bulb-icon class="h-6 w-6"></light-bulb-icon>
            <span>Skills</span>
          </a>
        </li>
        <li>
          <a href="#get_in_touch" class="flex items-center p-2 rounded-lg gap-4 bg-white text-slate-700">
            <chat-bubble-bottom-center-text-icon class="h-6 w-6"></chat-bubble-bottom-center-text-icon>
            <span>Get in touch</span>
          </a>
        </li>
      </ul>

    </div>
  </aside>
</template>

<style scoped>

</style>