import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import 'amfe-flexible'
import 'common/less/index.less'

Vue.config.productionTip = false

/* 移动端所有点击没有300ms延迟 */
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
