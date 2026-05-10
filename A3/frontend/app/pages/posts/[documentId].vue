<template>
  <div>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Failed to load post.</div>
    <div v-else-if="post">
      <h1>{{ post.title }}</h1>
      <p class="author">By {{ post.author }}</p>
      <p class="category">{{ post.category }}</p>
      <MDC :value="post.content" />
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const config = useRuntimeConfig()

const { data, pending, error } = await useFetch(
  `${config.public.strapiBase}/api/posts/${route.params.documentId}`
)

const post = computed(() => data.value?.data || null)
</script>