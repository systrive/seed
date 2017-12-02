let list = []
for (let i = 1; i <= 3; i++) {
    list.push({
        id: `slide${i}`,
        url: `/detail?id=slide${i}`,
        img: `/static/slide/img/${i}.png`,
        price: `¥${i}元`,
        desc: '商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述id',
        name: `名称slide${i}`
    })
}
export const slide = list
