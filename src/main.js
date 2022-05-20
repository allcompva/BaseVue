import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
if (process.env.NODE_ENV == 'development') {
  // axios.defaults.baseURL = 'https://localhost:44337';
  axios.defaults.baseURL = 'http://localhost:5000';
  //axios.defaults.baseURL = '//apibeinfinitus.niufleex.com';
} 
//else {
  //axios.defaults.baseURL = 'https://apibeinfinitus.niufleex.com';
//}
axios.defaults.headers.common['Access-Control-Allow-Origin'] = window.location.origin;
axios.defaults.headers.common['Access-Control-Allow-Methods'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Credentials'] = '*';
new Vue({
  render: h => h(App),
  router,
  vuetify,
  axios,
}).$mount('#app')
