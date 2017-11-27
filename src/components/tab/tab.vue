<template>
    <div class="tab">
        <router-link tag="div" class="tab-item" to="/">
            <i class="tab-img home"></i>
            <span class="tab-link">首页</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/classify">
            <i class="tab-img classify"></i>
            <span class="tab-link">分类</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/cart">
            <i class="tab-img cart"></i>
            <span class="tab-link">购物车</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/user">
            <i class="tab-img user"></i>
            <span class="tab-link">我的</span>
        </router-link>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="less">
    @import '../../common/less/variable';
    .tab {
        border-top: 1px solid #eee;
        width: 100%;
        position: fixed;
        bottom: 0;
        display: flex;
        font-size: @font-size-medium;
        background: @color-background;
        .tab-item {
            text-align: center;
            flex: 1;
            display: flex;
            flex-direction: column;
            .tab-img, .tab-link {
                flex: 1;
            }
            .tab-img {
                padding-top: 25px;
                height: @image-size-icon;
                background-repeat: no-repeat;
                background-size: @image-size-icon @image-size-icon;
                background-position: left 50% bottom 0px;
                &.home {
                background-image: url('./resource/home.png');
                }
                &.classify {
                    background-image: url('./resource/classify.png');
                }
                &.cart {
                    background-image: url('./resource/cart.png');
                }
                &.user {
                    background-image: url('./resource/user.png');
                }
            }
            &.router-link-exact-active {
                color: @color-theme;
                .tab-img {
                    &.home {
                        background-image: url('./resource/home-select.png');
                    }
                    &.classify {
                        background-image: url('./resource/classify-select.png');
                    }
                    &.cart {
                        background-image: url('./resource/cart-select.png');
                    }
                    &.user {
                        background-image: url('./resource/user-select.png');
                    }
                }
            }
        }
    }
</style>
