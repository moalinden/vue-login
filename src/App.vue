<template>
  <router-view/>
</template>

<script>
import { onBeforeMount } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import firebase from 'firebase';

export default {
  setup () {
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          router.replace('/login');
        } else if (route.path == "/login" || route.path == "/register") {
          router.replace('/');
        }
      });
    });
  }
}
</script>

<style lang="scss">
body {
  height: 900px;
  background-repeat: no-repeat;
  background-image: linear-gradient(rgb(0, 195, 255) 0%,rgb(234, 0, 255) 100%);
  background-blend-mode:color;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

a {
  color: inherit;
}
</style>
