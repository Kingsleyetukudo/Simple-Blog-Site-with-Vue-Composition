<template>
  <div class="details">
    <h2>Details</h2>
    <p v-if="error">{{ error }}</p>
    <div v-if="post" class="post">
      <h1>{{ post.title }}</h1>
      <p class="pre">{{ post.body }}</p>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import getPost from "../composables/getPost";
import Spinner from "../components/Spinner.vue";
export default {
  props: ["id"],

  components: { Spinner },

  setup(props) {
    const { post, error, load } = getPost(props.id);

    load();

    return {
      post,
      error,
    };
  },
};
</script>

<style>
.post {
  max-width: 1200px;
  margin: 0 auto;
}

.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}

.pre {
  white-space: pre-wrap;
}
</style>