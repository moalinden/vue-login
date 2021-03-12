import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD5ifrxGcyDoNo_GaLsTjDZdH9PKJ3QJVQ",
    authDomain: "vue-login-6bbb5.firebaseapp.com",
    projectId: "vue-login-6bbb5",
    storageBucket: "vue-login-6bbb5.appspot.com",
    messagingSenderId: "351337454999",
    appId: "1:351337454999:web:f6edf3840d7ef5f17ff8d2"
  };

  firebase.initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app')
