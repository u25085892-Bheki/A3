<template>
  <div>
  <div id="inputContainer">
    <h1>Blog Posts</h1>

      <select v-model="selectedCategory">
        <option value="">All Categories</option>
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
  </div>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Failed to load posts.</div>
    <div v-else>
      <Postcard
        v-for="post in filteredPosts"
        :key="post.documentId"
        :title="post.title"
        :author="post.author"
        :snippet="post.snippet"
        :documentId="post.documentId"
      />
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

const { data, pending, error } = await useFetch(`${config.public.strapiBase}/api/posts`)

const posts = computed(() => data.value?.data || [])

const selectedCategory = ref('')

const categories = computed(() => {
  return [...new Set(posts.value.map(post => post.category))]
})

const filteredPosts = computed(() => {
  if (!selectedCategory.value) return posts.value
  return posts.value.filter(post => post.category === selectedCategory.value)
})
</script>
<style lang="css" scoped>
    #inputContainer
    {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    h1
    {
      grid-column-start: 2;
    }
    select
    {
      justify-self: end;
      align-self: center;
      margin-right: 20px;
      padding: 10px;
    }
</style>