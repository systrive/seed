<template>
    <div class="tab">
        <router-link tag="div" class="tab-item" to="/">
            <span class="tab-link">首页</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/classify">
            <span class="tab-link">分类</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/cart">
            <span class="tab-link">购物车</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/user">
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
        width: 100%;
        position: fixed;
        bottom: 0;
        display: flex;
        line-height: 44px;
        font-size: @font-size-medium;
        .tab-item {
            flex: 1;
            text-align: center;
            &.router-link-exact-active {
                color: @select-color;
            }
        }
    }
</style>
