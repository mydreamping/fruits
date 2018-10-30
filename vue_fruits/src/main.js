import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'

import vant from 'vant';
import 'vant/lib/vant-css/index.css';
import { Loading } from 'vant';

Vue.use(Loading);

Vue.use(vant);

// axios的引入及使用
import axios from 'axios'
// Vue.use(axios);
Vue.prototype.$http=axios;


import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

Vue.use(MuseUI);

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
