<template>
    <div class="classify">
        <cube-button @click="showPicker">Picker - multiple Columns</cube-button>
    </div>
</template>

<script>
    import { Picker, Button } from 'cube-ui'
    const col1Data = [{ text: '剧毒', value: '剧毒' }, { text: '蚂蚁', value: '蚂蚁' }, { text: '幽鬼', value: '幽鬼' }]
    const col2Data = [{ text: '输出', value: '输出' }, { text: '控制', value: '控制' }, { text: '核心', value: '核心' }, { text: '爆发', value: '爆发' }, { text: '辅助', value: '辅助' }, { text: '打野', value: '打野' }, { text: '逃生', value: '逃生' }, { text: '先手', value: '先手' }]
    const col3Data = [{ text: '梅肯', value: '梅肯' }, { text: '秘法鞋', value: '秘法鞋' }, { text: '假腿', value: '假腿' }, { text: '飞鞋', value: '飞鞋' }, { text: '辉耀', value: '辉耀' }, { text: '金箍棒', value: '金箍棒' }]

    export default {
        mounted () {
            console.log(this.$createPicker)
            this.picker = this.$createPicker({
                title: 'Picker选择器-多列',
                data: [col1Data, col2Data, col3Data],
                onSelect: (selectedText, selectedIndex) => {
                    this.$createDialog({
                        type: 'warn',
                        content: `选中的内容是：${selectedText.join(',')} <br/> 选中的索引是 ${selectedIndex.join(',')}`,
                        icon: 'cubeic-alert'
                    }).show()
                },
                onCancel: () => {
                    this.$createToast({
                        type: 'correct',
                        txt: 'Picker canceled',
                        time: 1000
                    }).show()
                }
            })
        },
        methods: {
            showPicker () {
                this.picker.show()
            }
        },
        components: {
            Picker,
            CubeButton: Button
        }
    }
</script>

<style lang="less">
</style>
