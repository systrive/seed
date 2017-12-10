import 'babel-polyfill'
import Vue from 'vue'
import Cube from 'cube-ui'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
// import VueLazyload from 'vue-lazyload'
import 'amfe-flexible'
import 'common/less/index.less'

Vue.config.productionTip = false

// Vue.use(VueLazyload, {
//     loading: require('common/image/default.png')
// })

/* 移动端所有点击没有300ms延迟 */
fastclick.attach(document.body)

Vue.use(Cube)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
