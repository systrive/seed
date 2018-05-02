/*
 *** 通用方法
 */

// 浅拷贝
export function shallowCopy (obj) {
    if (!obj) {
        throw new Error('shallowCopy param error')
    }
    if (typeof obj !== 'object') {
        return obj
    }
    return Array.isArray(obj) ? obj.slice() : Object.assign({}, obj)
}

// 深拷贝
export function deepCopy (obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj
    }
    let temp
    if (obj instanceof Date) {
        temp = new obj.constructor() // or new Date(obj);
    } else {
        temp = obj.constructor()
    }
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            temp[key] = deepCopy(obj[key])
        }
    }

    return temp
}

function sortByNum (a, b) {
    return b.value - a.value
}

export function findRelativedRank (arr) {
    if (!arr || !Array.isArray(arr)) {
        return
    }
    let tmpArr = []
    let len = arr.length
    let modalArr = ['Gold Medal', 'Silver Medal', 'Bronze Medal']
    let result = new Array(len).fill(0)
    for (let idx = 0; idx < len; idx++) {
        tmpArr[idx] = {
            key: idx,
            value: arr[idx]
        }
    }
    tmpArr.sort(sortByNum)
    for (let idx = 0; idx < len; idx++) {
        result[tmpArr[idx].key] = idx < 3 ? modalArr[idx] : idx + 1 + ''
    }
    return result
}
