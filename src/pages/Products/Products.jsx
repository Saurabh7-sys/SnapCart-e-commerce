import React, { useContext } from 'react'
import './products.css'
import { ProductContext } from '../../context/ProductContext';

const Products = () => {
  const {products , error , loading  , addToCart} = useContext(ProductContext) 

  if (error) {
    return <h3>Error: {error}</h3>;
  }


  if (loading) {
    return <h3>Loading....</h3>
  }

  return (
    <>
      <div className='product-container'>
        {products.map((e) => {
          return <div key={e.id}>
            <div className="product-card">
              <img src={e.thumbnail} alt={e.title} />
              <h2>{e.title}</h2>
              <p>{e.description}</p>
              <h2>${e.price}</h2>
              <section className='rating-stock'>
                <p>Rating : {e.rating} ★</p>
                <p>In Stock: {e.stock}</p>
                
              </section>
              <div className="cart-buttons">
                  <button id='cart-btn' onClick={() => addToCart(e)}>
                    Add to Cart
                  </button>
                  <button id='buy-btn'>
                    Buy Now
                  </button>
                </div>

            </div>
          </div>
        })}
      </div>
    </>
  )
}

export default Products
