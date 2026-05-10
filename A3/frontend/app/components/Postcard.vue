<template>
<div id="container">
  <NuxtLink :to="`/posts/${documentId}`">
    <div id="postcard">
      <h2>{{ title }}</h2>
      <p class="author">By: {{ author }}</p>
      <p class="snippet">{{ snippet }}</p>
    </div>
  </NuxtLink>
</div>      
</template>

<script setup>
defineProps({
  title: String,
  author: String,
  snippet: String,
  documentId: String
})
</script>

<style scoped>
#container
{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#postcard
{
  background-color: #231942;
  margin: 20px 0 20px 0;
  width: 720px;
  padding: 30px;
  border-radius: 20px;
}
</style>