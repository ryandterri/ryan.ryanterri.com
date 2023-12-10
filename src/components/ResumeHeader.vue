<script setup>
defineProps({
  id: String,
  text: String
})
</script>

<template>
  <div :id="id" class="text-2xl font-bold my-4">{{ text }}</div>
</template>

<style scoped>

</style>