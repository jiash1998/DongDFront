import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入element npm i element-ui -S
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
//引入sass 
//npm install --save-dev sass-loader
//npm install --save-dev node-sass

//引入querystring POST请求
import qs from "querystring";

//引入axios cnpm install axios/cnpm install vue-axios
import axios from "axios"; //axios
import VueAxios from "vue-axios"; //axios

//
import apiConfig from "../api.config";


Vue.use(ElementUI);
Vue.use(VueAxios, axios);
axios.defaults.baseURL = apiConfig.baseUrl;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
