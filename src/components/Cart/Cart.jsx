import { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext';

const Cart = () => {
    const { error, loading , cart , removeFromCart} = useContext(ProductContext);
    

    if (error) {
        return <h3>Error: {error}</h3>;
      }
    
    
      if (loading) {
        return <h3>Loading....</h3>
      }
    

    return (
        <div>
        <h1> Your Cart</h1>
               {cart.length === 0 ? "Cart is empty" : (
                <ul>
                {cart.map((e) => {
                    return   <li key={e.id}>
                    <h4>{e.title} </h4>
                    <h5>{e.price}</h5>  
                    <button onClick={() => removeFromCart(e.id)}>remove</button>
                    </li>
                })}
                </ul>
               )}
        </div>
    )
}

export default Cart
