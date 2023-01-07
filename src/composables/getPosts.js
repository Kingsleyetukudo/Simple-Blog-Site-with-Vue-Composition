import { ref } from 'vue';
import { projectFirestore } from '../firebase/firebase-config';

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      // await new Promise((resolve) => {
      //   setTimeout(resolve, 2000);
      // });

      // let data = await fetch(' http://localhost:3000/posts');
      // console.log(data);
      // if (!data.ok) {
      //   throw Error('No data available for now!');
      // }
      // posts.value = await data.json();
      const res = await projectFirestore.collection('posts').get();

      posts.value = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
    } catch (err) {
      error.value = err.message;

      console.log(error.value);
    }
  };

  return {
    posts,
    error,
    load,
  };
};

export default getPosts;
