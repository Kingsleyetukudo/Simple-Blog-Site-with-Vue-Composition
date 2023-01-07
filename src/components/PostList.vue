<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import SinglePost from "./SinglePost.vue";
import { computed, onMounted, onUnmounted, onUpdated } from "vue";
export default {
  props: ["posts"],
  components: { SinglePost },
  setup() {
    onMounted(() => console.log("component mounted"));
    onUnmounted(() => console.log("component unmounted"));
    onUpdated(() => console.log("compou=nent updated"));

    return {};
  },
};
</script>

<style>
</style>