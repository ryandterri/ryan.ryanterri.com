<script setup>

import TailwindIcon from "../components/icons/TailwindIcon.vue";
import NodeJsIcon from "../components/icons/NodeJsIcon.vue";
import VueJsIcon from "../components/icons/VueJsIcon.vue";
import MongoDbIcon from "../components/icons/MongoDbIcon.vue";
import { ref } from "vue";
import detect_outside_click from "../composables/detect_outside_click.js";
import {Bars3Icon} from "@heroicons/vue/24/solid/index.js";

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
         class="fixed top-0 left-0 h-screen w-64 transition-transform sm:translate-x-0">
    <div class="h-full px-3 py-4 overflow-y-auto bg-slate-700 text-white">
      <div class="flex flex-col items-center justify-center">
        <img src="../assets/profile.jpg" alt="profile" class="rounded-full h-28 w-28"/>
        <div class="text-xl font-bold">Patrick Ryan Purcell</div>
        <div class="text-sm">Software Developer / Architect</div>
      </div>
      <hr class="mb-4 mt-4">
      <div class="font-bold text-xl ml-2 mb-4">Skills</div>
      <ul class="space-y-2 font-medium">
        <li>
          <a href="https://vuejs.org/" target="_blank" class="flex items-center p-2 rounded-lg gap-4 bg-white hover:bg-slate-200 text-slate-700">
            <vue-js-icon class="h-6 w-6"></vue-js-icon>
            <span>Vue.js</span>
          </a>
        </li>
        <li>
          <a class="flex items-center p-2 rounded-lg gap-4 bg-white text-slate-700">
            <node-js-icon class="h-6 w-6"></node-js-icon>
            <span>Node.js</span>
          </a>
        </li>
        <li>
          <a class="flex items-center p-2 rounded-lg gap-4 bg-white text-slate-700">
            <tailwind-icon class="h-6 w-6"></tailwind-icon>
            <span>Tailwind CSS</span>
          </a>
        </li>
        <li>
          <a class="flex items-center p-2 rounded-lg gap-4 bg-white text-slate-700">
            <mongo-db-icon class="h-6 w-6"></mongo-db-icon>
            <span>MongoDb</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>

</style>