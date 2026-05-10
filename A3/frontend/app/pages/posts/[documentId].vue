<!--Tumisho Matsiu u25085892-->
<template>
  <div id="container">
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Failed to load post.</div>
    <div v-else-if="post" id="postcard">
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