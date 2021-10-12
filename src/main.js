import Vue from 'vue'
import Header from './Header.vue'
import Footer from './Footer.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Header),
}).$mount('#rna-header')

new Vue({
  render: h => h(Footer),
}).$mount('#rna-footer')
