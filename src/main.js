import Vue from 'vue'
import Header from './Header.vue'
import Footer from './Footer.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Header),
}).$mount('#rv-renault-header-v1')

new Vue({
  render: h => h(Footer),
}).$mount('#rv-renault-footer-v1')
