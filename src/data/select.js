let top = []
for (let i = 1; i <= 2; i++) {
    top.push({
        id: `select${i}`,
        url: `/detail?id=select${i}`,
        img: `/static/select/img/${i}.png`,
        price: `¥${i}元`,
        desc: '商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述id',
        name: `名称select${i}`
    })
}
export const selectTop = top

let bottom = []
for (let i = 3; i <= 3; i++) {
    bottom.push({
        id: `select${i}`,
        url: `/detail?id=select${i}`,
        img: `/static/select/img/${i}.png`,
        price: `¥${i}元`,
        desc: '商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述id',
        name: `名称select${i}`
    })
}
export const selectBottom = bottom
