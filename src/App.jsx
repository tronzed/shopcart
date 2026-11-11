import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>

      <>
        <header className="header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 col-lg-2">
                <div className="header__logo">
                  <a href="./index.html">
                    <img src="public/img/logo.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-xl-6 col-lg-7">
                <nav className="header__menu">
                  <ul>
                    <li className="active">
                      <a href="./index.html">Home</a>
                    </li>
                    <li>
                      <a href="#">Women’s</a>
                    </li>
                    <li>
                      <a href="#">Men’s</a>
                    </li>
                    <li>
                      <a href="./shop.html">Shop</a>
                    </li>
                    <li>
                      <a href="#">Pages</a>
                      <ul className="dropdown">
                        <li>
                          <a href="./product-details.html">Product Details</a>
                        </li>
                        <li>
                          <a href="./shop-cart.html">Shop Cart</a>
                        </li>
                        <li>
                          <a href="./checkout.html">Checkout</a>
                        </li>
                        <li>
                          <a href="./blog-details.html">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="./blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="./contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-3">
                <div className="header__right">
                  <div className="header__right__auth">
                    <a href="#">Login</a>
                    <a href="#">Register</a>
                  </div>
                  <ul className="header__right__widget">
                    <li>
                      <span className="icon_search search-switch" />
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon_heart_alt" />
                        <div className="tip">2</div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon_bag_alt" />
                        <div className="tip">2</div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="canvas__open">
              <i className="fa fa-bars" />
            </div>
          </div>
        </header>
        {/* Header Section End */}
        {/* Categories Section Begin */}
        <section className="categories">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 p-0">
                <div
                  className="categories__item categories__large__item set-bg"
                  data-setbg="public/img/categories/category-1.jpg"
                  style={{backgroundImage:'url(/img/categories/category-1.jpg)'}}
                >
                  <div className="categories__text">
                    <h1>Women’s fashion</h1>
                    <p>
                      Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
                      incidid-unt labore edolore magna aliquapendisse ultrices
                      gravida.
                    </p>
                    <a href="#">Shop now</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                    <div
                      className="categories__item set-bg"
                      data-setbg="public/img/categories/category-2.jpg"
                  style={{backgroundImage:'url(/img/categories/category-2.jpg)'}}
                    >
                      <div className="categories__text">
                        <h4>Men’s fashion</h4>
                        <p>358 items</p>
                        <a href="#">Shop now</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                    <div
                      className="categories__item set-bg"
                      data-setbg="public/img/categories/category-3.jpg"
                  style={{backgroundImage:'url(/img/categories/category-3.jpg)'}}
                    >
                      <div className="categories__text">
                        <h4>Kid’s fashion</h4>
                        <p>273 items</p>
                        <a href="#">Shop now</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                    <div
                      className="categories__item set-bg"
                      data-setbg="public/img/categories/category-4.jpg"
                  style={{backgroundImage:'url(/img/categories/category-4.jpg)'}}
                    >
                      <div className="categories__text">
                        <h4>Cosmetics</h4>
                        <p>159 items</p>
                        <a href="#">Shop now</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                    <div
                      className="categories__item set-bg"
                      data-setbg="public/img/categories/category-5.jpg"
                  style={{backgroundImage:'url(/img/categories/category-5.jpg)'}}
                    >
                      <div className="categories__text">
                        <h4>Accessories</h4>
                        <p>792 items</p>
                        <a href="#">Shop now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Categories Section End */}
        {/* Product Section Begin */}
        <section className="product spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="section-title">
                  <h4>New product</h4>
                </div>
              </div>
              <div className="col-lg-8 col-md-8">
                <ul className="filter__controls">
                  <li className="active" data-filter="*">
                    All
                  </li>
                  <li data-filter=".women">Women’s</li>
                  <li data-filter=".men">Men’s</li>
                  <li data-filter=".kid">Kid’s</li>
                  <li data-filter=".accessories">Accessories</li>
                  <li data-filter=".cosmetic">Cosmetics</li>
                </ul>
              </div>
            </div>
            <div className="row property__gallery">
              <div className="col-lg-3 col-md-4 col-sm-6 mix women">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                  style={{backgroundImage:'url(public/img/product/product-1.jpg)'}}
                  >
                    <div className="label new">New</div>
                    <ul className="product__hover">
                      <li>
                        <a href="public/img/product/product-1.jpg" className="image-popup">
                          <span className="arrow_expand" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon_heart_alt" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon_bag_alt" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <h6>
                      <a href="#">Buttons tweed blazer</a>
                    </h6>
                    <div className="rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="product__price">$ 59.0</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mix men">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="public/img/product/product-2.jpg"
                  style={{backgroundImage:'url(public/img/product/product-2.jpg)'}}

                  >
                    <ul className="product__hover">
                      <li>
                        <a href="public/img/product/product-2.jpg" className="image-popup">
                          <span className="arrow_expand" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon_heart_alt" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon_bag_alt" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <h6>
                      <a href="#">Flowy striped skirt</a>
                    </h6>
                    <div className="rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="product__price">$ 49.0</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mix accessories">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="public/img/product/product-3.jpg"
                  style={{backgroundImage:'url(public/img/product/product-3.jpg)'}}

                  >
                    <div className="label stockout">out of stock</div>
                    <ul className="product__hover">
                      <li>
                        <a href="public/img/product/product-3.jpg" className="image-popup">
                          <span className="arrow_expand" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon_heart_alt" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon_bag_alt" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <h6>
                      <a href="#">Cotton T-Shirt</a>
                    </h6>
                    <div className="rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="product__price">$ 59.0</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mix cosmetic">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="public/img/product/product-4.jpg"
                  style={{backgroundImage:'url(public/img/product/product-4.jpg)'}}

                  >
                    <ul className="product__hover">
                      <li>
                        <a href="public/img/product/product-4.jpg" className="image-popup">
                          <span className="arrow_expand" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon_heart_alt" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon_bag_alt" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <h6>
                      <a href="#">Slim striped pocket shirt</a>
                    </h6>
                    <div className="rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="product__price">$ 59.0</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mix kid">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="public/img/product/product-5.jpg"
                  style={{backgroundImage:'url(public/img/product/product-5.jpg)'}}

                  >
                    <ul className="product__hover">
                      <li>
                        <a href="public/img/product/product-5.jpg" className="image-popup">
                          <span className="arrow_expand" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon_heart_alt" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon_bag_alt" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <h6>
                      <a href="#">Fit micro corduroy shirt</a>
                    </h6>
                    <div className="rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="product__price">$ 59.0</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
                <div className="product__item sale">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="public/img/product/product-6.jpg"
                  style={{backgroundImage:'url(public/img/product/product-6.jpg)'}}

                  >
                    <div className="label sale">Sale</div>
                    <ul className="product__hover">
                      <li>
                        <a href="public/img/product/product-6.jpg" className="image-popup">
                          <span className="arrow_expand" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon_heart_alt" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon_bag_alt" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <h6>
                      <a href="#">Tropical Kimono</a>
                    </h6>
                    <div className="rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="product__price">
                      $ 49.0 <span>$ 59.0</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="public/img/product/product-7.jpg"
                  style={{backgroundImage:'url(public/img/product/product-7.jpg)'}}

                  >
                    <ul className="product__hover">
                      <li>
                        <a href="public/img/product/product-7.jpg" className="image-popup">
                          <span className="arrow_expand" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon_heart_alt" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon_bag_alt" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <h6>
                      <a href="#">Contrasting sunglasses</a>
                    </h6>
                    <div className="rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="product__price">$ 59.0</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
                <div className="product__item sale">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="public/img/product/product-8.jpg"
                    style={{backgroundImage:'url(public/img/product/product-8.jpg)'}}
                  >
                    <div className="label">Sale</div>
                    <ul className="product__hover">
                      <li>
                        <a href="public/img/product/product-8.jpg" className="image-popup">
                          <span className="arrow_expand" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon_heart_alt" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon_bag_alt" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <h6>
                      <a href="#">Water resistant backpack</a>
                    </h6>
                    <div className="rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="product__price">
                      $ 49.0 <span>$ 59.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Product Section End */}
        {/* Banner Section Begin */}
        <section className="banner set-bg" data-setbg="public/img/banner/banner-1.jpg"

                    style={{backgroundImage:'url(public/img/banner/banner-1.jpg)'}}
        
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-8 m-auto">
                <div className="banner__slider owl-carousel">
                  <div className="banner__item">
                    <div className="banner__text">
                      <span>The Chloe Collection</span>
                      <h1>The Project Jacket</h1>
                      <a href="#">Shop now</a>
                    </div>
                  </div>
                  <div className="banner__item">
                    <div className="banner__text">
                      <span>The Chloe Collection</span>
                      <h1>The Project Jacket</h1>
                      <a href="#">Shop now</a>
                    </div>
                  </div>
                  <div className="banner__item">
                    <div className="banner__text">
                      <span>The Chloe Collection</span>
                      <h1>The Project Jacket</h1>
                      <a href="#">Shop now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Banner Section End */}
        {/* Trend Section Begin */}
        <section className="trend spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="trend__content">
                  <div className="section-title">
                    <h4>Hot Trend</h4>
                  </div>
                  <div className="trend__item">
                    <div className="trend__item__pic">
                      <img src="public/img/trend/ht-1.jpg" alt="" />
                    </div>
                    <div className="trend__item__text">
                      <h6>Chain bucket bag</h6>
                      <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <div className="product__price">$ 59.0</div>
                    </div>
                  </div>
                  <div className="trend__item">
                    <div className="trend__item__pic">
                      <img src="public/img/trend/ht-2.jpg" alt="" />
                    </div>
                    <div className="trend__item__text">
                      <h6>Pendant earrings</h6>
                      <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <div className="product__price">$ 59.0</div>
                    </div>
                  </div>
                  <div className="trend__item">
                    <div className="trend__item__pic">
                      <img src="public/img/trend/ht-3.jpg" alt="" />
                    </div>
                    <div className="trend__item__text">
                      <h6>Cotton T-Shirt</h6>
                      <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <div className="product__price">$ 59.0</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="trend__content">
                  <div className="section-title">
                    <h4>Best seller</h4>
                  </div>
                  <div className="trend__item">
                    <div className="trend__item__pic">
                      <img src="public/img/trend/bs-1.jpg" alt="" />
                    </div>
                    <div className="trend__item__text">
                      <h6>Cotton T-Shirt</h6>
                      <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <div className="product__price">$ 59.0</div>
                    </div>
                  </div>
                  <div className="trend__item">
                    <div className="trend__item__pic">
                      <img src="public/img/trend/bs-2.jpg" alt="" />
                    </div>
                    <div className="trend__item__text">
                      <h6>
                        Zip-pockets pebbled tote <br />
                        briefcase
                      </h6>
                      <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <div className="product__price">$ 59.0</div>
                    </div>
                  </div>
                  <div className="trend__item">
                    <div className="trend__item__pic">
                      <img src="public/img/trend/bs-3.jpg" alt="" />
                    </div>
                    <div className="trend__item__text">
                      <h6>Round leather bag</h6>
                      <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <div className="product__price">$ 59.0</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="trend__content">
                  <div className="section-title">
                    <h4>Feature</h4>
                  </div>
                  <div className="trend__item">
                    <div className="trend__item__pic">
                      <img src="public/img/trend/f-1.jpg" alt="" />
                    </div>
                    <div className="trend__item__text">
                      <h6>Bow wrap skirt</h6>
                      <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <div className="product__price">$ 59.0</div>
                    </div>
                  </div>
                  <div className="trend__item">
                    <div className="trend__item__pic">
                      <img src="public/img/trend/f-2.jpg" alt="" />
                    </div>
                    <div className="trend__item__text">
                      <h6>Metallic earrings</h6>
                      <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <div className="product__price">$ 59.0</div>
                    </div>
                  </div>
                  <div className="trend__item">
                    <div className="trend__item__pic">
                      <img src="public/img/trend/f-3.jpg" alt="" />
                    </div>
                    <div className="trend__item__text">
                      <h6>Flap cross-body bag</h6>
                      <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <div className="product__price">$ 59.0</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Trend Section End */}
        {/* Discount Section Begin */}
        <section className="discount">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 p-0">
                <div className="discount__pic">
                  <img src="public/img/discount.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6 p-0">
                <div className="discount__text">
                  <div className="discount__text__title">
                    <span>Discount</span>
                    <h2>Summer 2019</h2>
                    <h5>
                      <span>Sale</span> 50%
                    </h5>
                  </div>
                  <div className="discount__countdown" id="countdown-time">
                    <div className="countdown__item">
                      <span>22</span>
                      <p>Days</p>
                    </div>
                    <div className="countdown__item">
                      <span>18</span>
                      <p>Hour</p>
                    </div>
                    <div className="countdown__item">
                      <span>46</span>
                      <p>Min</p>
                    </div>
                    <div className="countdown__item">
                      <span>05</span>
                      <p>Sec</p>
                    </div>
                  </div>
                  <a href="#">Shop now</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Discount Section End */}
        {/* Services Section Begin */}
        <section className="services spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="services__item">
                  <i className="fa fa-car" />
                  <h6>Free Shipping</h6>
                  <p>For all oder over $99</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="services__item">
                  <i className="fa fa-money" />
                  <h6>Money Back Guarantee</h6>
                  <p>If good have Problems</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="services__item">
                  <i className="fa fa-support" />
                  <h6>Online Support 24/7</h6>
                  <p>Dedicated support</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="services__item">
                  <i className="fa fa-headphones" />
                  <h6>Payment Secure</h6>
                  <p>100% secure payment</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Services Section End */}
        {/* Instagram Begin */}
        <div className="instagram">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                <div
                  className="instagram__item set-bg"
                  data-setbg="public/img/instagram/insta-1.jpg"
                  style={{backgroundImage:'url(public/img/instagram/insta-1.jpg)'}}

                >
                  <div className="instagram__text">
                    <i className="fa fa-instagram" />
                    <a href="#">@ ashion_shop</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                <div
                  className="instagram__item set-bg"
                  data-setbg="public/img/instagram/insta-2.jpg"
                  style={{backgroundImage:'url(public/img/instagram/insta-2.jpg)'}}

                >
                  <div className="instagram__text">
                    <i className="fa fa-instagram" />
                    <a href="#">@ ashion_shop</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                <div
                  className="instagram__item set-bg"
                  data-setbg="public/img/instagram/insta-3.jpg"
                  style={{backgroundImage:'url(public/img/instagram/insta-3.jpg)'}}

                >
                  <div className="instagram__text">
                    <i className="fa fa-instagram" />
                    <a href="#">@ ashion_shop</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                <div
                  className="instagram__item set-bg"
                  data-setbg="public/img/instagram/insta-4.jpg"
                  style={{backgroundImage:'url(public/img/instagram/insta-4.jpg)'}}

                >
                  <div className="instagram__text">
                    <i className="fa fa-instagram" />
                    <a href="#">@ ashion_shop</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                <div
                  className="instagram__item set-bg"
                  data-setbg="public/img/instagram/insta-5.jpg"
                  style={{backgroundImage:'url(public/img/instagram/insta-5.jpg)'}}

                >
                  <div className="instagram__text">
                    <i className="fa fa-instagram" />
                    <a href="#">@ ashion_shop</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                <div
                  className="instagram__item set-bg"
                  data-setbg="public/img/instagram/insta-6.jpg"
                  style={{backgroundImage:'url(public/img/instagram/insta-6.jpg)'}}
                >
                  <div className="instagram__text">
                    <i className="fa fa-instagram" />
                    <a href="#">@ ashion_shop</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Instagram End */}
        {/* Footer Section Begin */}
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-7">
                <div className="footer__about">
                  <div className="footer__logo">
                    <a href="./index.html">
                      <img src="public/img/logo.png" alt="" />
                    </a>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt cilisis.
                  </p>
                  <div className="footer__payment">
                    <a href="#">
                      <img src="public/img/payment/payment-1.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="public/img/payment/payment-2.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="public/img/payment/payment-3.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="public/img/payment/payment-4.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="public/img/payment/payment-5.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-5">
                <div className="footer__widget">
                  <h6>Quick links</h6>
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Blogs</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4">
                <div className="footer__widget">
                  <h6>Account</h6>
                  <ul>
                    <li>
                      <a href="#">My Account</a>
                    </li>
                    <li>
                      <a href="#">Orders Tracking</a>
                    </li>
                    <li>
                      <a href="#">Checkout</a>
                    </li>
                    <li>
                      <a href="#">Wishlist</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-8 col-sm-8">
                <div className="footer__newslatter">
                  <h6>NEWSLETTER</h6>
                  <form action="#">
                    <input type="text" placeholder="Email" />
                    <button type="submit" className="site-btn">
                      Subscribe
                    </button>
                  </form>
                  <div className="footer__social">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-youtube-play" />
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fa fa-pinterest" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                <div className="footer__copyright__text">
                  <p>
                    Copyright © All rights reserved | This template is made with{" "}
                    <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                    <a href="https://colorlib.com" target="_blank">
                      Colorlib
                    </a>
                  </p>
                </div>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </div>
            </div>
          </div>
        </footer>
      </>


    </>
  )
}

export default App
