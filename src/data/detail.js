const productsId = [
    'newest1', 'newest2', 'newest3', 'newest4', 'newest5', 'newest6',
    'select1', 'select2', 'select3',
    'slide1', 'slide2', 'slide3'
]

let list = {}

productsId.forEach((item) => {
    list[item] = {
        slide: [
            '/static/detail/img/1.png',
            '/static/detail/img/2.png',
            '/static/detail/img/3.png'
        ],
        title: 'This is the title',
        desc: 'This is the description,这里是商品信息',
        price: '1',
        state: {
            flag: 1,
            desc: '有货'
        },
        specifications: [
            { '10KG': '10KG' },
            { '20KG': '20KG' },
            { '50KG': '50KG' },
            { '100KG': '100KG' }
        ]
    }
})

export const detail = list
