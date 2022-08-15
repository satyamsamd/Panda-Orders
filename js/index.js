let slide_index = 0
let slide_play = true
let slides = document.querySelectorAll('.slide')

hideAllSlide = () => {
    slides.forEach(e => {
        e.classList.remove('active')
    })
}

showSlide = () => {
    hideAllSlide()
    slides[slide_index].classList.add('active')
}

nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1

prevSlide = () => slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1

// pause slide when hover slider

document.querySelector('.slider').addEventListener('mouseover', () => slide_play = false)

// enable slide when mouse leave out slider
document.querySelector('.slider').addEventListener('mouseleave', () => slide_play = true)

// slider controll

document.querySelector('.slide-next').addEventListener('click', () => {
    nextSlide()
    showSlide()
})

document.querySelector('.slide-prev').addEventListener('click', () => {
    prevSlide()
    showSlide()
})

showSlide()

// setInterval(() => {
//     if (!slide_play) return
//     nextSlide()
//     showSlide()
// }, 3000);

// render products

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

let product_list = document.querySelector('#latest-products')
let best_product_list = document.querySelector('#best-products')

products.forEach(e => {
    let prod = `
        <div class="col-3 col-md-6 col-sm-12">
            <div class="product-card">
                <div class="product-card-img">
                    <img src="${e.image1}" alt="">
                    <img src="${e.image2}" alt="">
                </div>
                <div class="product-card-info">
                    <div class="product-btn">
                        <button class="btn-flat btn-hover btn-shop-now">shop now</button>
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
    best_product_list.insertAdjacentHTML("afterbegin", prod)
})

