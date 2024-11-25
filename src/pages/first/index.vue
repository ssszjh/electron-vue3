<template>
  <h1>这是 first 页面</h1>
  <button @click="go">去second页面</button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const go = () => {
  console.log(1)
  router.push('/second')
}
</script>

<style scoped></style>
