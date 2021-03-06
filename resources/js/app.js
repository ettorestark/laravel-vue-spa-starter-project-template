import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Default from './layouts/Default.vue'
Vue.component('default-layout', Default);

new Vue({
	router,
	render: function (h) { return h(App) }
}).$mount('#app')
