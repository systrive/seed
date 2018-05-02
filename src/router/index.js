import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('components/home/home')
const Classify = () => import('components/classify/classify')
const Cart = () => import('components/cart/cart')
const User = () => import('components/user/user')
const Detail = () => import('components/detail/detail')
const Sudoku = () => import('components/sudoku/sudoku')

Vue.use(Router)

export default new Router({
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
        }
    ]
})
