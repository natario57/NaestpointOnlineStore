// const productItemGenerator = ({ imgSrc, title, amount}) => {
//     const parentDiv = document.createElement('div')
// parentDiv.classList = "col-6 col-sm-6 col-md-6 col-lg-3 product-card"

// const wrapperDiv = document.createElement('div')
// wrapperDiv.classList = "card card-design"

// const imageDiv = document.createElement('div')
// imageDiv.classList = "card-img"

// const imgTag = document.createElement('img')
// imgTag.classList = "card-img-top"
// imgTag.src = imgSrc
// imgTag.alt = "" 

// imageDiv.appendChild(imgTag)

// mainDiv = document.createElement('div')
// mainDiv.classList = "card-body product-body"

// const h3 = document.createElement('h3')
// h3.classList = 'product-title'
// h3.innerText = title

// const detailsDiv =  document.createElement('div')
// detailsDiv.classList = 'product-info'

// const pTag = document.createElement('p')
// pTag.classList = 'product-price'
// pTag.innerText = amount

// detailsDiv.appendChild(pTag)

// const bottomDiv = document.createElement('div')
// bottomDiv.classList = "option-button"

// const bottomImgTag1 = document.createElement('img')
// bottomImgTag1.src = "./images/Black-heart.svg"
// bottomImgTag1.classList = "nav-svg"
// bottomImgTag1.alt =""

// const bottomImgTag2 = document.createElement('img')
// bottomImgTag2.src = "./images/Wheel-cart.svg"
// bottomImgTag2.classList = "nav-svg"
// bottomImgTag2.alt =""

// bottomDiv.appendChild(bottomImgTag1)
// bottomDiv.appendChild(bottomImgTag2)

// detailsDiv.appendChild(bottomDiv)

// mainDiv.appendChild(h3)
// mainDiv.appendChild(detailsDiv)

// wrapperDiv.appendChild(imageDiv)
// wrapperDiv.appendChild(mainDiv)

// parentDiv.appendChild(wrapperDiv)

// return parentDiv
// }

window.addEventListener('DOMContentLoaded', () => {

  // Responsive Search button
    
let searchBtn = document.querySelector('.searchBtn');
let closeBtn = document.querySelector('.closeBtn');
let searchBox = document.querySelector('.searchBox');
let cartIcon = document.querySelector('.cartIcon');
let closeCart = document.querySelector('.closeCart');
let cartTab = document.querySelector('.cartTab');

    searchBtn.onclick = function () {
        searchBox.classList.add('active')
        closeBtn.classList.add('active')
        searchBtn.classList.add('active')
    }
    closeBtn.onclick = function () {
        searchBox.classList.remove('active')
        closeBtn.classList.remove('active')
        searchBtn.classList.remove('active')
    }

    cartIcon.onclick = function () {
        cartTab.classList.add('showcart')
    }
    closeCart.onclick = function () {
        cartTab.classList.remove('showcart')
    }

    // View Product thumbnail

    mainImg = document.getElementById('mainImg');

    thumb1 =document.getElementById('thumb1');
    thumb1Src = document.getElementById('thumb1').src;
    thumb2 =document.getElementById('thumb2');
    thumb2Src = document.getElementById('thumb2').src;
    thumb3 =document.getElementById('thumb3');
    thumb3Src = document.getElementById('thumb3').src;
    
    thumb1.addEventListener("click", function() {
      mainImg.src=thumb1Src
    })
    thumb2.addEventListener("click", function() {
      mainImg.src=thumb2Src
    })
    thumb3.addEventListener("click", function() {
      mainImg.src=thumb3Src
    })

// const productItemsContainer = document.getElementById('productItemsContainer')

// const produtItems = [
//     {
//         imgSrc: 'images/redblack-gown.png',
//         title: 'Italian Cotton Gown',
//         amount: "N23,000.00"
//     },
//     {
//         imgSrc: 'images/white-gown.png',
//         title: 'Canzo Seamless Stretch',
//         amount: "N23,000.00"
//     },
//     {
//         imgSrc: 'images/black-suit.png',
//         title: 'Cashmir Ethical Corron',
//         amount: "N23,000.00"
//     },
//     {
//         imgSrc: 'images/Pink-gown.png',
//         title: 'Golden Weave Gown',
//         amount: "N23,000.00"
//     },
//     {
//         imgSrc: 'images/Orangeblack-gown.png',
//         title: 'British Wool Gown',
//         amount: "N23,000.00"
//     },
//     {
//         imgSrc: 'images/Red-gown.png',
//         title: 'Canzo Seamless Stretch',
//         amount: "N23,000.00"
//     }
// ]

// produtItems.forEach(productItem => {
//     productItemsContainer.appendChild(productItemGenerator(productItem))

// });



}, false)


// Navbar disappear



let prevScrollpos = window.pageYOffset;

window.addEventListener('scroll', () => {
    
    const header = document.querySelector('header');

    let currentScrollPos = window.pageYOffset;


    if (prevScrollpos < currentScrollPos) {
        header.classList.add('hide');
    } else {
        header.classList.remove('hide');
    }

    prevScrollpos = currentScrollPos
})


// Dynamic Header and Footer 

class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header id="header">
          <section class="navbar-one">
            <nav class="navbar navbar-expand-lg navbar-dark">
              <div class="container-fluid nav-container">
                <div class="logo">
                <a class="navbar-brand" href="#"><img class="main-logo" src="images/naest-point-logo.svg" alt="Logo"></a>
                </div>
                <div class="search-bar">
                  <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search entire store" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit"><i class="fa-solid fa-magnifying-glass" style="color: #ffffff;"></i></button>
                  </form>
                </div>
                <div class="profile-link">
                  <li class="nav-item link-socials">
                    <a href="profile.html"><img src="./images/Avatar.svg" class="nav-svg profile-icon" alt="..."></a>
                    <a href="register.html"><img src="./images/Heart.svg" class="nav-svg favourite-icon" alt="..."></a>
                    <a href="login.html"><img src="./images/Bag.svg" class="nav-svg cart-icon" alt="..."></a>
                    <div class="search">
                      <span class="ikon">
                        <img src="./images/Search-icon.svg" class="nav-svg searchBtn" alt="...">
                        <img src="./images/Close-icon.svg" class="nav-svg closeBtn" alt="...">
                      </span>
                    </div>
                  </li>
                </div>
                <div class="searchBox">
                  <input type="text" placeholder="Serach entire store">
                </div>
              </div>
            </nav>
          </section>
          <section class="navbar-two">
            <nav class="navbar navbar-expand-lg navbar-dark">
              <div class="container-fluid nav-container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <i class="fa-solid fa-bars fa-lg" style="color: #111111;"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <div class="category-option">
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa-solid fa-list"></i>  
                        All Category
                        <i class="bi bi-chevron-down"></i></a>
                      <ul class="dropdown-menu category">
                        <li><a class="dropdown-item" href="#">Men's Fahion</a></li>
                        <li><a class="dropdown-item" href="#">Women's Fashion</a></li>
                        <li><a class="dropdown-item" href="#">Kids Fashion</a></li>
                        <li><a class="dropdown-item" href="#">Accessories</a></li>
                      </ul>
                    </li>
                  </div>
                  <div class="navigation-option">
                    <ul class="navbar-nav ms-auto">
                      <li class="nav-item">
                        <a class="nav-link" href="/index.html">HOME</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/whats-hot.html">WHAT'S HOT</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="shop-all.html">SHOP ALL</a>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link nav-shopall" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          COLLECTIONS
                          <i class="bi bi-chevron-down"></i></a>
                        <ul class="dropdown-menu collection">
                          <div class="collection-list">
                            <li><a class="dropdown-item" href="top-rose.html" onmouseenter="changeImg('images/toprose-collection.svg')">TOPROSE CLOTHING</a></li>
                            <li><a class="dropdown-item" href="cart.html" onmouseenter="changeImg('images/Shopnow2.svg')">SEAMLESS COUTURE</a></li>
                            <li><a class="dropdown-item" href="login.html" onmouseenter="changeImg('images/Leo-design.png')">LEO DESIGN</a></li>
                            <li><a class="dropdown-item" href="#" onmouseenter="changeImg('images/Shopnow4.svg')">SOPHIE LINE</a></li>
                          </div>
                          <div class="collection-image">
                          <img src="images/Shopnow.svg" class="img-hover hover1" alt="" id="slider">
                          </div>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/single-product.html">SINGLE PRODUCT</a>
                      </li>
                    </ul>
                  </div>
                  <div class="small-board">
                    <h6 class="board-title">BLACK FRIDAYS</h3>
                    <p class="board-text">26th May 2024</p>
                  </div>
                </div>
              </div>
            </nav>
          </section>
        </header>
        `
    }
}

customElements.define('special-header', SpecialHeader)

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer id="footer">

            <div class="row">
            <div class="col-lg-3 last-message">
                <div class="services-top">
                  <a class="navbar-brand" href="#"><img class="footer-logo" src="images/Naest-point-logo.svg" alt="Logo"></a>
                </div>
            </div>

            <!-- Footer Page Links -->

            <div class="col-lg-2 col-md-6 col-sm-6 first-link">
                <div class="footer-link">
                <h6 class="link-title">HELP</h6>
                <p class="link-main">About us</p>
                <p class="link-main">Contact us</p>
                <p class="link-main">My account</p>
                <p class="link-main">Size guide</p>
                <p class="link-main">FAQs</p>
                </div>
            </div>
            <div class="col-lg-2 col-md-6 col-sm-6 second-link">
                <div class="footer-link2">
                <h6 class="link-title">SERVICES</h6>
                <p class="link-main">What's hot</p>
                <p class="link-main">Shop all</p>
                <p class="link-main">Collection</p>
                <p class="link-main">Single product</p>
                <p class="link-main">Favourite</p>
                </div>
            </div>

            <!-- Footer Subscribe & Contact -->

            <div class="col-lg-5">
                <div class="newsletter">
                <h6 class="link-title">SUBSCRIBE TO NEWSLETTER</h6>
                <P class="link-main newsletter-text">Get the lates stories, highlights, products to love and recomendations that are chosen for you</P>
                <form class="newsletter-form">
                    <input class="email-input" type="email" placeholder="Enter your email" required>
                    <button class="newsletter-button" type="submit"><i class="bi bi-arrow-right"></i></button>
                </form>
                </div>
                <div class="social-media">
                <div class=" socials twitter">
                    <div class="twitter-icon">
                    <a href="#"><i class="fa-brands fa-twitter fa-lg"></i></a>
                    </div>
                </div>
                <div class="socials facebook">
                    <div class="facebook-icon">
                    <a href="#"><i class="fa-brands fa-facebook-f fa-lg"></i></a>
                    </div>
                </div>
                <div class="socials instagram">
                    <div class="instagram-icon">
                    <a href="#"><i class="fa-brands fa-instagram fa-lg"></i></a>
                    </div>
                </div>
                <div class="socials linked-in">
                    <div class="linked-in-icon">
                    <a href="#"><i class="fa-brands fa-linkedin-in fa-lg"></i></a>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <!-- Terms and Copyrights -->

            <div class="down-footer">
            <div class="address-design">
                <div class="address-info">
                <i class="fa-sharp fa-solid fa-location-dot" style="color: #ffffff;"></i>
                <p class="link-main">14 Osborne Road Ikoyi, Lagos. Nigeria</p>
                </div>
            </div>
            <hr class="footer-divider">
            <div class="terms-copy">
                <div class="terms-privacy">
                <p class="terms-text">Terms</p>
                <p class="terms-text privacy">Privacy</p>
                </div>
                <small class="terms-text">Naest point store © 2024 All rights reserved</small>
            </div>
            </div>

        </footer>
        `
    }
}

customElements.define('special-footer', SpecialFooter)

// Collection Nav image change

function changeImg(imgchanger) {
  document.getElementById('slider').src = imgchanger;
}

// Scroll reveal

const sr = ScrollReveal({
  origin: 'top',
  distance: '40px',
  duration: '2500',
  reset: true
})

sr.reveal ('.about-container',{delay:100});
sr.reveal ('.product-top',{delay:200});
sr.reveal ('.carousel-inner',{delay:100});
sr.reveal ('.promotion-image',{delay:100});
sr.reveal ('.main-advert',{delay:100});


