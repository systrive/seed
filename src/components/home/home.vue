<template>
    <div class="home">
        <scroll>
            <cube-slide @change="changePage">
                <cube-slide-item v-for="(item, index) in slide" :key="index" @click.native="clickHandler(item, index)">
                    <router-link :to="{path: item.url}">
                        <img :src="item.img">
                    </router-link>
                </cube-slide-item>
            </cube-slide>
            <div class="select-list">
                <div class="select-title">精选种子</div>
                <div class="select-top">
                    <div v-for="(item, index) in selectTop" class="item">
                        <router-link :to="{path: item.url}">
                            <img :src="item.img">
                        </router-link>
                    </div>
                </div>
                <div class="select-bottom">
                    <div v-for="(item, index) in selectBottom" class="item">
                        <router-link :to="{path: item.url}">
                            <img :src="item.img">
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="newest-list">
                <div class="newest-title">最近新品</div>
                <ul>
                    <li class="newest-item" @click="selectItem(item, index)" v-for="(item, index) in newest">
                        <div class="icon">
                            <img :src="item.img" />
                        </div>
                        <div class="text">
                            <h2 class="name" v-html="item.name"></h2>
                            <p class="desc" v-html="item.desc"></p>
                            <p class="price" v-html="item.price"></p>
                            <div class="cart-icon">
                                <img src="../tab/resource/cart-select.png" />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </scroll>
    </div>
</template>

<script>
    import { Slide, Scroll } from 'cube-ui'
    import { slide } from 'data/slide'
    import { selectTop, selectBottom } from 'data/select'
    import { newest } from 'data/newest'

    export default {
        created () {
            this.slide = slide
            this.selectTop = selectTop
            this.selectBottom = selectBottom
            this.newest = newest
        },
        methods: {
            selectItem (item, index) {
                console.log(item)
                this.$router.push(`/detail?id=${item.id}`)
            },
            changePage (current) {
                // console.log('current page is ', current)
            },
            clickHandler (item, index) {
                console.log(item, index)
            }
        },
        components: {
            'CubeSlide': Slide,
            Scroll
        }
    }
</script>

<style lang="less">
    @import '../../common/less/variable';

    .home {
        position: fixed;
        top: 0;
        bottom: 112px;
        width: 100%;
        .select-title, .newest-title {
            height: 80px;
            line-height: 80px;
            text-align: center;
            font-size: @font-size-medium-x;
            color: @color-theme;
        }
        .select-list {
            .select-title {
                margin: 30px 0;
            }
            .select-top {
                display: flex;
                .item {
                    flex: 1;
                    img {
                        width: 350px;
                    }
                }
            }
            .select-bottom {
                img {
                    width: 100%;
                }
            }
        }
        .newest-list {
            .newest-title {
                margin: 20px 0 50px 0;
            }
            .newest-item {
                display: flex;
                align-items: center;
                padding: 10px 50px 10px 20px;
                border-bottom: 0.5px solid #eee;
                .icon {
                    // flex: 0 0 80px;
                    padding-right: 20px;
                    img {
                        width: 250px;
                        height: 250px;
                    }
                }
                .text {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    flex: 1;
                    overflow: hidden;
                    .name, .desc, .price {
                        .no-wrapper();
                        -webkit-line-clamp: 2;
                    }
                    .name {
                        margin-bottom: 20px;
                        color: @color-text-t;
                        text-align: left;
                        font-size: @font-size-large;
                    }
                    .desc {
                        color: @color-text-ll;
                        margin-bottom: 40px;
                        text-align: left;
                        font-size: @font-size-small;
                    }
                    .price {
                        color: @color-sub-theme;
                        text-align: left;
                        font-size: @font-size-medium;
                    }
                    .cart-icon {
                        height: 20px;
                        img {
                            float: right;
                            position: relative;
                            bottom: 50px;
                            right: 0;
                            width: 50px;
                            height: 50px;
                        }
                    }
                }
            }
        }
    }
</style>
