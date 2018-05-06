import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */'components/home/home')
const Classify = () => import(/* webpackChunkName: "classify" */'components/classify/classify')
const Cart = () => import(/* webpackChunkName: 'cart' */'components/cart/cart')
const User = () => import(/* webpackChunkName: "user" */'components/user/user')
const Detail = () => import(/* webpackChunkName: "detail" */'components/detail/detail')
const Sudoku = () => import(/* webpackChunkName: "sudoku" */ 'components/sudoku/sudoku')

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/classify',
            name: 'Classify',
            component: Classify
        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart
        },
        {
            path: '/user',
            name: 'User',
            component: User
        },
        {
            path: '/detail',
            name: 'Detail',
            component: Detail
        },
        {
            path: '/sudoku',
            name: 'Sudoku',
            component: Sudoku
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
