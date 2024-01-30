import { FaShoppingCart } from "react-icons/fa";
import '../App.css';
import React from 'react'

function Shop() {
  return (
    <>
      <div className='title spacer'>
        <h1>Shop</h1>
        <small>Extraordinary art team & creative minimalism lover</small>
      </div>

      <section className="spacer">
        <div className='shopping-grid spacer'>
          <div>
            <div>
              <img src={require('../image/shop-prev-1.jpg')}/>
            </div>
            <div className="cart-text">
              <h3>G-Star Polo Applique Jersey</h3>
              <p color='grey'> <strike> $150.00</strike>  $94.75</p>
              <button className='cart-btn'><FaShoppingCart />ADD TO CART</button>
            </div>
          </div>
          <div>
            <div>
              <img src={require('../image/shop-prev-2.jpg')}/>
            </div>
            <div className="cart-text">
              <h3>G-Star Polo Applique Jersey</h3>
              <p color='grey'> <strike> $150.00</strike>  $94.75</p>
              <button className='cart-btn'><FaShoppingCart />ADD TO CART</button>
            </div>
          </div>
          <div>
            <div>
              <img src={require('../image/shop-prev-3.jpg')}/>
            </div>
            <div className="cart-text">
              <h3>G-Star Polo Applique Jersey</h3>
              <p color='grey'> <strike> $150.00</strike>  $94.75</p>
              <button className='cart-btn'><FaShoppingCart />ADD TO CART</button>
            </div>
          </div>
          <div>
            <div>
              <img src={require('../image/shop-prev-4.jpg')}/>
            </div>
            <div className="cart-text">
              <h3>G-Star Polo Applique Jersey</h3>
              <p color='grey'> <strike> $150.00</strike>  $94.75</p>
              <button className='cart-btn'><FaShoppingCart />ADD TO CART</button>
            </div>
          </div>
        </div>

        <div className='shopping-grid spacer'>
          <div>
            <div>
              <img src={require('../image/shop-prev-1.jpg')}/>
            </div>
            <div className="cart-text">
              <h3>G-Star Polo Applique Jersey</h3>
              <p color='grey'> <strike> $150.00</strike>  $94.75</p>
              <button className='cart-btn'><FaShoppingCart />ADD TO CART</button>
            </div>
          </div>
          <div>
            <div>
              <img src={require('../image/shop-prev-2.jpg')}/>
            </div>
            <div className="cart-text">
              <h3>G-Star Polo Applique Jersey</h3>
              <p color='grey'> <strike> $150.00</strike>  $94.75</p>
              <button className='cart-btn'><FaShoppingCart />ADD TO CART</button>
            </div>
          </div>
          <div>
            <div>
              <img src={require('../image/shop-prev-3.jpg')}/>
            </div>
            <div className="cart-text">
              <h3>G-Star Polo Applique Jersey</h3>
              <p color='grey'> <strike> $150.00</strike>  $94.75</p>
              <button className='cart-btn'><FaShoppingCart />ADD TO CART</button>
            </div>
          </div>
          <div>
            <div>
              <img src={require('../image/shop-prev-4.jpg')}/>
            </div>
            <div className="cart-text">
              <h3>G-Star Polo Applique Jersey</h3>
              <p color='grey'> <strike> $150.00</strike>  $94.75</p>
              <button className='cart-btn'><FaShoppingCart />ADD TO CART</button>
            </div>
          </div>
        </div>

        <div className='shopping-grid spacer'>
          <div>
            <div>
              <img src={require('../image/shop-prev-1.jpg')}/>
            </div>
            <div className="cart-text">
              <h3>G-Star Polo Applique Jersey</h3>
              <p color='grey'> <strike> $150.00</strike>  $94.75</p>
              <button className='cart-btn'><FaShoppingCart />ADD TO CART</button>
            </div>
          </div>
          <div>
            <div>
              <img src={require('../image/shop-prev-2.jpg')}/>
            </div>
            <div className="cart-text">
              <h3>G-Star Polo Applique Jersey</h3>
              <p color='grey'> <strike> $150.00</strike>  $94.75</p>
              <button className='cart-btn'><FaShoppingCart />ADD TO CART</button>
            </div>
          </div>
          <div>
            <div>
              <img src={require('../image/shop-prev-3.jpg')}/>
            </div>
            <div className="cart-text">
              <h3>G-Star Polo Applique Jersey</h3>
              <p color='grey'> <strike> $150.00</strike>  $94.75</p>
              <button className='cart-btn'><FaShoppingCart />ADD TO CART</button>
            </div>
          </div>
          <div>
            <div>
              <img src={require('../image/shop-prev-4.jpg')}/>
            </div>
            <div className="cart-text">
              <h3>G-Star Polo Applique Jersey</h3>
              <p color='grey'> <strike> $150.00</strike>  $94.75</p>
              <button className='cart-btn'><FaShoppingCart />ADD TO CART</button>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Shop;