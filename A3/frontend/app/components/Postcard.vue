<template>
    
  <NuxtLink :to="`/posts/${documentId}`">
    <div class="post-card">
      <h2>{{ title }}</h2>
      <p class="author">{{ author }}</p>
      <p class="snippet">{{ snippet }}</p>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  title: String,
  author: String,
  snippet: String,
  documentId: String
})
</script>