import { createContext } from "react";
import { useEffect, useState } from "react";

export const ProductsContext = createContext();

const ProductsProvider = ({children}) => {
    const [items, setItems] = useState([]);
    const [filterOption, setFilterOption] = useState(0);
    const [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);

    const addToCart = (product) => {
        let productInCart = cart.find(
        (productInCart) => productInCart.id === product.id
        );
        if (!productInCart) {
        setCart([...cart, product]);
        } else {
        setCart(
        cart.map((item) =>
        item.id == product.id ? item = product : item))
        };
    }

    const dec = (id) => {
        const productInCart = cart.find((productInCart) => productInCart.id === id);
        if (productInCart.count > 1) {
        setCart(
            cart.map((product) =>
            product.id === id ? { ...product, count: product.count - 1 } : product
            )
        );
        } else {
        setCart(cart.filter((productInCart) => productInCart.id !== id));
        }
    }

    const inc = (id) => {
      setCart(
        cart.map((product) =>
          product.id === id ? { ...product, count: product.count + 1 } : product
        )
      );
    };

    const deleteProduct = (id) => {
      const updatedCart = cart.filter((product) => product.id !== id)
      setCart(updatedCart)
    }

    const totalSum = (cart) => {
      const totalSum = cart.reduce((sum, item) => {
        return sum + item.count*Number(item.price)
      }, 0)
      return totalSum.toFixed(2);
    }

    useEffect(() => {
        fetch(`http://localhost:3001/items?${(filterOption !== 0 && filterOption.length !== 0) ? `${filterOption.filteredBy}=${encodeURIComponent(filterOption.value)}` : '' }`)
        .then((result) => result.json())
        .then((data) => setItems(data))
    }, [filterOption])

    useEffect (() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return (
        <ProductsContext.Provider
            value = {{
                setFilterOption,
                items,
                addToCart,
                cart,
                inc,
                dec,
                deleteProduct,
                totalSum
            }}
            >
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsProvider;