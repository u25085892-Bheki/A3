<template>
  <div>
    <h1>Search</h1>
    <div id="inputContainer">
        <input 
        v-model="searchQuery" 
        type="text" 
        placeholder="Search by title or author..."
        />       
    </div>

    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Failed to load posts.</div>
    <div v-else>
      <p v-if="searchResults.length === 0 && searchQuery">No results found.</p>
      <Postcard
        v-for="post in searchResults"
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
const config = useRuntimeConfig()

const { data, pending, error } = await useFetch(`${config.public.strapiBase}/api/posts`)

const posts = computed(() => data.value?.data || [])

const searchQuery = ref('')

const searchResults = computed(() => {
  if (!searchQuery.value) return posts.value
  const query = searchQuery.value.toLowerCase()
  return posts.value.filter(post => 
    post.title.toLowerCase().includes(query) ||
    post.author.toLowerCase().includes(query)
  )
})
</script>
<style lang="css" scoped>
    #inputContainer
    {
        display: flex;
        justify-content: space-evenly;
    }
    input
    {
        width: 720px;
        padding: 10px 30px 10px 30px;
    }
</style>