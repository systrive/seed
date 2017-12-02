let list = []
for (let i = 1; i <= 6; i++) {
    list.push({
        id: `newest${i}`,
        url: `/detail?id=newest${i}`,
        img: `/static/newest/img/${i}.png`,
        price: `¥${i}元`,
        desc: '商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述id',
        name: `名称newest${i}`
    })
}
export const newest = list
