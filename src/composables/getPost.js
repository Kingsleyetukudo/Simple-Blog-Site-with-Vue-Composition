import { projectFirestore } from '@/firebase/firebase-config';
import { ref } from 'vue';

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      // await new Promise((resolve) => {
      //   setTimeout(resolve, 2000);
      // });
      // let data = await fetch(' http://localhost:3000/posts/' + id);
      // console.log(data);
      // if (!data.ok) {
      //   throw Error('That post dosenot exist again!');
      // }
      // post.value = await data.json();

      const res = await projectFirestore.collection('posts').doc(id).get();

      if (!res.exists) {
        throw Error('That post does not exist!');
      }

      post.value = { ...res.data(), id: res.id };
    } catch (err) {
      error.value = err.message;

      console.log(error.value);
    }
  };

  return {
    post,
    error,
    load,
  };
};

export default getPost;
