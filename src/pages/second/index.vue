<template>
  <h1>这是 second 页面</h1>
  <button @click="go">去first页面</button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const go = () => {
  router.push('/')
}
</script>

<style scoped></style>
