import 'babel-polyfill'
import Vue from 'vue'
import store from './store'
import App from './components/App.vue'
import Menu from "./components/elements/menu-dropdown/Menu.vue";
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate);

window.onload =  function () {
  if (document.querySelector('#vuePromo')) {
    new Vue({
      store, // inject store to all children
      el: '#vuePromo',
      Vuelidate,
      render: h => h(App)
    })
  }
  new Vue({
    el: '#dropdown',
    render: h => h(Menu)
  })

}