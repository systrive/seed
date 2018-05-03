<template>
    <div class="sudoku">
        <div class="title">
            <h1>数独游戏</h1>
        </div>
        <!-- 九宫格 -->
        <div ref="gridContainer" id="container" class="container grid">
            <div class="row" :class="rowGroupClass[rowsIndex % 3]" v-for="(rows, rowsIndex) in matrix" :key="rowsIndex">
                <span
                    :class="[focusMatrix[rowsIndex ][colIndex] ? 'focus-cell': '',
                        relatedMatrix[rowsIndex ][colIndex] ? 'related-cell': '',
                        errorMatrix[rowsIndex][colIndex] ? 'error-cell': '',
                        newNumMatrix[rowsIndex][colIndex] ? 'fill-cell': '',
                        colGroupClass[colIndex % 3]]"
                    ref="gridCell"
                    @click="focusCell(rowsIndex, colIndex)"
                    v-for="(cell, colIndex) in rows" :key="colIndex"
                >{{ cell !== '.' ? cell : '&nbsp;' }}</span>
            </div>
        </div>
        <!-- 按钮组 -->
        <div id="dashboard" class="dashboard">
            <!-- 选择数字 -->
            <div class="number">
                <div @click="setNum(num)" class="text" v-for="(num, index) in 9" :key="index">
                    {{ num }}
                </div>
            </div>
            <!-- 按钮设置 -->
            <div class="buttons">
                <button type="button" id="check" @click="gradepicker">{{ gradeSelectedText }}</button>
                <button type="button" id="reset" @click="reset">重置</button>
                <button type="button" id="clear" @click="clear">清理</button>
                <button type="button" id="restart" @click="_initMatrix">重建</button>
            </div>
        </div>
    </div>
</template>

<script>
// import Sudoku from 'common/js/sudoku/sudoku'
import { Picker } from 'cube-ui'
import { deepCopy } from 'common/js/util'
const Sudoku = require('../../common/js/sudoku')

export default {
    components: {
        Picker
    },
    data () {
        return {
            sudoku: Sudoku.sudoku,
            matrix: [],
            orignMatrix: [],
            rowGroupClass: ['row-g-top', 'row-g-middle', 'row-g-bottom'],
            colGroupClass: ['col-g-top', 'col-g-middle', 'col-g-bottom'],
            grade: [
                { text: '入门', value: 'easy' },
                { text: '进阶', value: 'medium' },
                { text: '困难', value: 'hard' },
                { text: '很困难', value: 'very-hard' },
                { text: '疯狂', value: 'insane' },
                { text: '非人类', value: 'inhuman' }
            ],
            selectedGrade: 'easy',
            gradeSelectedText: '入门',
            focusAxis: [],
            errorMatrix: [],
            relatedMatrix: [],
            newNumMatrix: [],
            sameCellMatrix: []
        }
    },
    watch: {
        errorMatrix () {
        }
    },
    mounted () {
        this._initMatrix()
        this.gradePicker = this.$createPicker({
            title: '游戏等级',
            data: [this.grade],
            onSelect: (selectedGrade, selectedIndex) => {
                this.gradeSelectedText = this.grade[selectedIndex].text
                this.selectedGrade = selectedGrade[0]
                this._initMatrix(this.selectedGrade)
            },
            onCancel: () => {}
        })
    },
    methods: {
        gradepicker () {
            // 选择难度等级
            this.gradePicker.show()
        },
        reset () {
            // 重置
            this.matrix = deepCopy(this.orignMatrix)
        },
        clear () {
            // 清理
            if (this.focusAxis && this.focusAxis.length === 2) {
                this.matrix[this.focusAxis[0]][this.focusAxis[1]] = '.'
                this.matrix = deepCopy(this.matrix)
                this._reSetErrorMatrix()
            }
        },
        makeMatrix () {
            // 制作数独数组
            let sudoku = this.sudoku.generate(this.selectedGrade)
            let matrix = this.sudoku.board_string_to_grid(sudoku)
            this.matrix = matrix
            this.orignMatrix = deepCopy(matrix)
        },
        makeRow (v = 0) {
            const array = new Array(9)
            array.fill(v)
            return array
        },
        focusCell (rowIndex, colIndex) {
            // 设置聚焦坐标
            this.focusAxis = [rowIndex, colIndex]
            // 设置聚焦矩阵
            this._setFocusMatrix(rowIndex, colIndex)
            // 关联矩阵
            this._setRelatedMatrix(rowIndex, colIndex)
        },
        _setRelatedMatrix (rowIndex, colIndex) {
            // 设置关联矩阵
            this.relatedMatrix = Array.from({length: 9}, () => this.makeRow(0))
            for (let i = 0; i < 9; i++) {
                this.relatedMatrix[rowIndex][i] = 1
                this.relatedMatrix[i][colIndex] = 1
                if (this.orignMatrix[rowIndex][colIndex] !== '.') {
                    for (let j = 0; j < 9; j++) {
                        if (this.matrix[i][j] === this.matrix[rowIndex][colIndex]) {
                            this.relatedMatrix[i][j] = 1
                        }
                    }
                }
            }
            let rowStart = Math.floor(rowIndex / 3)
            let colStart = Math.floor(colIndex / 3)
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    this.relatedMatrix[rowStart * 3 + i][colStart * 3 + j] = 1
                }
            }
        },
        _setFocusMatrix (rowIndex, colIndex) {
            // 设置聚焦矩阵
            let tmp = Array.from({length: 9}, () => this.makeRow(0))
            tmp[rowIndex][colIndex] = 1
            this.focusMatrix = tmp
        },
        setNum (num) {
            // 设置当前位置数字
            if (this.focusAxis && this.focusAxis.length === 2 && this.orignMatrix[this.focusAxis[0]][this.focusAxis[1]] === '.') {
                this.matrix[this.focusAxis[0]][this.focusAxis[1]] = num
                this.matrix = deepCopy(this.matrix)
                this.newNumMatrix[this.focusAxis[0]][this.focusAxis[1]] = num
                console.log(this.checkNum(num))
                if (this.checkNum(num)) {
                    alert('success')
                }
            }
        },
        checkNum (num) {
            // 检查是否符合标准
            let rowIndex = this.focusAxis[0]
            let colIndex = this.focusAxis[1]
            let checkPos = false
            this._reSetErrorMatrix()
            this.errorMatrix[rowIndex][colIndex] = 0
            for (let i = 0; i < 9; i++) {
                if (i !== colIndex && this.matrix[rowIndex][i] === num) {
                    this.errorMatrix[rowIndex][i] = 1
                    this.errorMatrix[rowIndex][colIndex] = 1
                    checkPos = true
                } else if (i !== rowIndex && this.matrix[i][colIndex] === num) {
                    this.errorMatrix[i][colIndex] = 1
                    this.errorMatrix[rowIndex][colIndex] = 1
                    checkPos = true
                }
            }
            let rowStart = Math.floor(rowIndex / 3)
            let colStart = Math.floor(colIndex / 3)
            for (let m = 0; m < 3; m++) {
                for (let n = 0; n < 3; n++) {
                    if (rowStart * 3 + m !== rowIndex && colStart * 3 + n !== colIndex && this.matrix[rowStart * 3 + m][colStart * 3 + n] === num) {
                        this.errorMatrix[rowStart * 3 + m][colStart * 3 + n] = 1
                        checkPos = true
                    }
                }
            }
            this.errorMatrix[rowIndex][colIndex] = checkPos ? 1 : 0
            let result = true
            for (let i = 0; i < 9; i++) {
                for (let j = 0; j < 9; j++) {
                    if (this.matrix[i][j] === '.' || (this.errorMatrix[i][j] && this.orignMatrix[i][j] === '.')) {
                        result = false
                    }
                }
            }
            return result
        },
        _reSetErrorMatrix () {
            let errorMatrix = Array.from({length: 9}, () => this.makeRow(0))
            for (let i = 0; i < 9; i++) {
                for (let j = 0; j < 9; j++) {
                    if (!this.orignMatrix[i][j]) {
                        errorMatrix[i][j] = 0
                    }
                }
            }
            this.errorMatrix = errorMatrix
        },
        _initMatrix () {
            // 初始化
            // focus 矩阵
            this.focusMatrix = Array.from({length: 9}, () => this.makeRow(0))
            // 错误矩阵
            this.errorMatrix = Array.from({length: 9}, () => this.makeRow(0))
            // 关联矩阵
            this.relatedMatrix = Array.from({length: 9}, () => this.makeRow(0))
            // 新添加的值
            this.newNumMatrix = Array.from({length: 9}, () => this.makeRow(0))
            // 检查目前相同的值
            this.sameCellMatrix = Array.from({length: 9}, () => this.makeRow(0))
            this.makeMatrix(this.selectedGrade)
        }
    }
}
</script>

<style scoped lang="less">
    @import '../../common/less/variable';
    @import '../../common/less/cube-ui.less';
    .sudoku {
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: #fff;
    }
    .title {
        padding: 50px 5%;
        background: @color-theme-d;
        color: white;
        margin-bottom: 50px;
        box-shadow: @shadowBottom;
        h1 {
            margin: 0;
            padding: 0;
            font-weight: normal;
            font-size: @font-size-large-x;
        }
    }

    .hide {
        display: none;
    }

    .container {
        margin: 0 5%;
        .row {
            display: flex;
            >span {
                flex: 1;
                line-height: 10vw;
                font-size: @font-size-medium-x;
                text-align: center;
                border: 1px solid #ccc;
                border-right-width: 0;
                border-bottom-width: 0;
                background: white;
                &.related-cell {
                    background-color: #eee;
                }
                &.focus-cell {
                    background-color: @color-theme-d;
                }
                &.fill-cell {
                    color: @color-theme;
                }
                &.error-cell {
                    color: @color-sub-theme;
                }

                &:first-child {
                    border-left-width: 2px;
                }
                &:last-child {
                    border-right-width: 2px;
                }
            }

            &.row-g-bottom {
                >span {
                    border-bottom-width: 1px;
                }
            }
            .col-g-bottom {
                border-right-width: 1px;
            }
            &:first-child {
                >span {
                    border-top-width: 2px;
                }
            }
            &:last-child {
                >span {
                    border-bottom-width: 2px;
                }
            }
        }
    }

    .number {
        margin: 10px 30px 30px 30px;
        display: flex;
        .text {
            flex: 1;
            font-size: @font-size-large;
            line-height: 50px;
            color: @color-theme;
        }
    }

    .dashboard {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        .buttons {
            padding: 20px 30px;
            background: @color-theme-d;
            box-sizing: border-box;
            box-shadow: @shadowTop;
            display: flex;
            button {
                flex: 1;
                line-height: 30px;
                font-size: @font-size-medium-x;
                font-family: "微软雅黑";
                color: white;
                background: transparent;
                &:not(:last-child) {
                    border-right: 1px solid #ccc;
                }
            }
        }
    }
</style>
