<script setup>
import { ref } from 'vue'

defineProps({
  hp: Number
})

const count = ref(0)
</script>

<template>
  <p>{{ hp }}</p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
