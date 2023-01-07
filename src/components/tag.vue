<template>
  <div class="tag">
    <p v-if="error">{{ error }}</p>
    <div v-if="posts.length" class="layout">
      <PostList :posts="postsWithSameTag" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import PostList from "./PostList.vue";
import TagCloud from "./TagCloud.vue";
import getPosts from "../composables/getPosts";
import { computed } from "@vue/runtime-core";
import Spinner from "./Spinner.vue";
export default {
  components: { PostList, Spinner, TagCloud },

  setup() {
    const route = useRoute();

    const { posts, error, load } = getPosts();

    load();

    const postsWithSameTag = computed(() => {
      return posts.value.filter((tag) => tag.tags.includes(route.params.tag));
    });

    return { posts, error, postsWithSameTag };
  },
};
</script>

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>