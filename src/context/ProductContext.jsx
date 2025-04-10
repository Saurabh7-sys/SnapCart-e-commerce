import { createContext, useState, useEffect } from 'react';

const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart , setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const alreadyInCart = prevCart.some(item => item.id === product.id);
      if (alreadyInCart) {
        return prevCart; 
      }
      return [...prevCart, product];
    });
  };
    const removeFromCart = (id) => {
        setCart(cart.filter((e) => e.id !== id));
    }

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/category/smartphones');
        if (!response.ok) {
          throw new Error("Something went wrong while fetching products.");
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, error  , cart , addToCart , removeFromCart}}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductContextProvider };
