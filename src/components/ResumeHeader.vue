<script setup>
defineProps({
  id: String
})
</script>

<template>
  <div :id="id" class="text-2xl font-bold my-4 underline">
    <slot></slot>
  </div>
</template>

<style scoped>

</style>