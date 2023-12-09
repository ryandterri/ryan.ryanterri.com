<script setup>

import TailwindIcon from "../components/icons/TailwindIcon.vue";
import NodeJsIcon from "../components/icons/NodeJsIcon.vue";
import VueJsIcon from "../components/icons/VueJsIcon.vue";
import MongoDbIcon from "../components/icons/MongoDbIcon.vue";
</script>

<template>
  <aside class="fixed top-0 left-0 h-screen w-64">
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-700 text-white">
      <div class="flex flex-col items-center justify-center">
        <img src="../assets/profile.jpg" alt="profile" class="rounded-full h-28 w-28"/>
        <div class="font-bold">Patrick Ryan Purcell</div>
        <div class="">Software Developer / Architect</div>
      </div>
      <hr class="mb-4 mt-4">
      <div class="font-bold text-xl ml-2 mb-4">Skills</div>
      <ul class="space-y-2 font-medium">
        <li>
          <a class="flex items-center p-2 rounded-lg gap-4">
            <vue-js-icon class="h-6 w-6"></vue-js-icon>
            <span>Vue.js</span>
          </a>
        </li>
        <li>
          <a class="flex items-center p-2 rounded-lg gap-4">
            <node-js-icon class="h-6 w-6"></node-js-icon>
            <span>Node.js</span>
          </a>
        </li>
        <li>
          <a class="flex items-center p-2 rounded-lg gap-4">
            <tailwind-icon class="h-6 w-6"></tailwind-icon>
            <span>Tailwind CSS</span>
          </a>
        </li>
        <li>
          <a class="flex items-center p-2 rounded-lg gap-4">
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