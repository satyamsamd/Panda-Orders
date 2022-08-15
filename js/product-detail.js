document.querySelectorAll('.product-img-item').forEach(e => {
    e.addEventListener('click', () => {
        let img = e.querySelector('img').getAttribute('src')
        document.querySelector('#product-img > img').setAttribute('src', img)
    })
})

document.querySelector('#view-all-description').addEventListener('click', () => {
    let content = document.querySelector('.product-detail-description-content')
    content.classList.toggle('active')
    document.querySelector('#view-all-description').innerHTML = content.classList.contains('active') ? 'view less' : 'view all'
})

let products = [
    {
        name: 'Red Lemon Case for MacbookPro',
        image1: './images/redlemonfront1.webp',
        image2: './images/redlemonfront2.webp',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'kalakari laptop skin',
        image1: './images/kalakarilaptop1.webp',
        image2: './images/kalakarilaptop2.webp',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'finearts Hd Laptop SKin',
        image1: './images/fineartshd1.webp',
        image2: './images/fineartshd2.webp',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'costura Laptop Bag',
        image1: './images/costuralaptop1.webp',
        image2: './images/costuralaptop2.webp',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Fur Jaden Laptop Bag',
        image1: './images/furjaden1.webp',
        image2: './images/furjaden2.webp',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Fur Jaden 30 Liter ',
        image1: './images/furjaden3.webp',
        image2: './images/furjaden4.webp',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'costura New ',
        image1: './images/costuralaptop2.webp',
        image2: './images/costuralaptop1.webp',
        old_price: '400',
        curr_price: '300'
    },
]

let product_list = document.querySelector('#related-products')

renderProducts = (products) => {
    products.forEach(e => {
        let prod = `
            <div class="col-4 col-md-6 col-sm-12">
                <div class="product-card">
                    <div class="product-card-img">
                        <img src="${e.image1}" alt="">
                        <img src="${e.image2}" alt="">
                    </div>
                    <div class="product-card-info">
                        <div class="product-btn">
                            <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">shop now</a>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-cart-add'></i>
                            </button>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-heart'></i>
                            </button>
                        </div>
                        <div class="product-card-name">
                            ${e.name}
                        </div>
                        <div class="product-card-price">
                            <span><del>${e.old_price}</del></span>
                            <span class="curr-price">${e.curr_price}</span>
                        </div>
                    </div>
                </div>
            </div>
        `
        product_list.insertAdjacentHTML("beforeend", prod)
    })
}

renderProducts(products)