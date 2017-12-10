<template>
    <div class="detail">
        <scroll v-if="detailInfo && detailInfo.slide">
            <div class="back" @click="back">
                <i class="cubeic-back"></i>
            </div>
            <cube-slide>
                <cube-slide-item v-for="(item, index) in detailInfo.slide" :key="index" @click.native="clickHandler(item, index)">
                    <img :src="item">
                </cube-slide-item>
            </cube-slide>
            <div class="detail-head">
                <div class="title">{{ detailInfo.title }}</div>
                <div class="price">¥ {{ detailInfo.price }}元</div>
                <div class="state">{{ detailInfo.state.desc }}</div>
                <cube-button class="choose-Specifications" @click="chooseSpec">请选择</cube-button>
            </div>
        </scroll>
    </div>
</template>

<script>
    import { Slide, Scroll, Button } from 'cube-ui'
    import { getDetailById } from 'api/getDetailById'

    export default {
        created () {
            this.id = this.$route.query.id
            if (!this.id) {
                this.$router.push('/')
            }
            this._getDetailById()
        },
        methods: {
            chooseSpec () {
                console.log('aaaa')
                this.$createDialog({
                    type: 'alert',
                    title: this.detailInfo.title,
                    showClose: true,
                    content: '我是内容'
                }).show()
            },
            back () {
                this.$router.back()
            },
            _getDetailById () {
                this.detailInfo = getDetailById(this.id)
                console.log(this.detailInfo)
            }
        },
        components: {
            Slide,
            Scroll,
            'CubeButton': Button
        }
    }
</script>

<style lang="less">
    @import '../../common/less/variable';

    .detail {
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: @color-background;
        .back {
            position: absolute;
            top: 10px;
            left: 10px;
            font-size: 50px;
            z-index: 50;
        }
        .cube-slide {
            .cube-slide-dots {
                bottom: 200px;
            }
            .cube-slide-item {
                img {
                    width: 100%;
                }
            }
        }
        .detail-head {
            .cube-btn {
                background: @color-theme;
                font-size: @font-size-medium;
                width: auto;
                border-radius: 10px;
            }
        }
    }
</style>
