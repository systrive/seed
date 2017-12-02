<template>
    <div class="tab">
        <router-link tag="div" class="tab-item" to="/">
            <i class="tab-img tab-home"></i>
            <span class="tab-link">首页</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/classify">
            <i class="tab-img tab-classify"></i>
            <span class="tab-link">分类</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/cart">
            <i class="tab-img tab-cart"></i>
            <span class="tab-link">购物车</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/user">
            <i class="tab-img tab-user"></i>
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
                &.tab-home {
                background-image: url('./resource/home.png');
                }
                &.tab-classify {
                    background-image: url('./resource/classify.png');
                }
                &.tab-cart {
                    background-image: url('./resource/cart.png');
                }
                &.tab-user {
                    background-image: url('./resource/user.png');
                }
            }
            &.router-link-exact-active {
                color: @color-theme;
                .tab-img {
                    &.tab-home {
                        background-image: url('./resource/home-select.png');
                    }
                    &.tab-classify {
                        background-image: url('./resource/classify-select.png');
                    }
                    &.tab-cart {
                        background-image: url('./resource/cart-select.png');
                    }
                    &.tab-user {
                        background-image: url('./resource/user-select.png');
                    }
                }
            }
        }
    }
</style>
