<template>
  <div class="details">
    <h2>Details</h2>
    <p v-if="error">{{ error }}</p>
    <div v-if="post" class="post">
      <h3>{{ post.title }}</h3>
      <p class="pre">{{ post.body }}</p>
      <button @click="handleClick" class="delete">Delete Post</button>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import getPost from "../composables/getPost";
import Spinner from "../components/Spinner.vue";
import { projectFirestore } from "@/firebase/firebase-config";
import { useRouter, useRoute } from "vue-router";
export default {
  props: ["id"],

  components: { Spinner },

  setup(props) {
    const route = useRoute();
    const router = useRouter();

    const { post, error, load } = getPost(route.params.id);

    load();

    const handleClick = async () => {
      await projectFirestore.collection("posts").doc(props.id).delete();

      router.push("/");
    };

    return {
      post,
      error,
      handleClick,
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

button.delete {
  margin: 10px auto;
}
</style>