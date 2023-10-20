import { createContext } from "react";
import { useEffect, useState } from "react";

export const ProductsContext = createContext();

const ProductsProvider = ({children}) => {
    const [items, setItems] = useState([]);
    const [filterOption, setFilterOption] = useState(0);
    const [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);
    const [wishlist, setWishlist] = useState(localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : [])
    const [isLoading, setIsLoading] = useState(true);


    const addToCart = (product) => {
        let productInCart = cart.find(
        (productInCart) => productInCart.id === product.id
        );
        if (!productInCart) {
          setCart([...cart, product]);
          product.isInCart = true;
          setWishlist(wishlist.map((itemInWishlist) => {
            return itemInWishlist.id === product.id ? {...itemInWishlist, isInCart: true} : itemInWishlist
          }))
        } else {
          setCart(
            cart.map((item) =>
              item.id == product.id ? item = product : item))
        };
    }

    const addToWishlist = (product) => {
      let productInWishlist = wishlist.find(
      (productInWishlist) => productInWishlist.id === product.id
      );
      if (!productInWishlist) {
        setWishlist([...wishlist, product]);
      } else {
      setWishlist(
        wishlist.map((item) =>
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

    const deleteProduct = (id, point) => {
      if (point === '/cart') {
        setCart(cart.filter((itemInCart) => itemInCart.id !== id));
        setWishlist(wishlist.map((itemInWishlist) => {
        return itemInWishlist.id === id ? {...itemInWishlist, isInCart: false} : itemInWishlist
        }))
      } else if (point === '/wishlist') {
        setWishlist(wishlist.filter((itemInWishlist) => itemInWishlist.id !== id))
      }
    }

    const totalSum = (cart) => {
      const totalSum = cart.reduce((sum, item) => {
        return sum + item.count*Number(item.price)
      }, 0)
      return totalSum.toFixed(2);
    }

    const searchItem = (title) => {
      if (title !== undefined) {
      fetch(`https://spring-green-woodpecker-vest.cyclic.app/items?title_like=${title}`)
      .then((result) => result.json())
      .then((res) => setItems(res))}
      else return []
    }

    useEffect(() => {
        fetch(`https://spring-green-woodpecker-vest.cyclic.app/items?${(filterOption !== 0 && filterOption.length !== 0) ? `${filterOption.filteredBy}=${encodeURIComponent(filterOption.value)}` : '' }`)
        .then((result) => result.json())
        .then((data) => {
            setItems(data);
            setIsLoading(false)
          })
    }, [filterOption])

    useEffect (() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    useEffect (() => {
      localStorage.setItem('wishlist', JSON.stringify(wishlist))
    }, [wishlist])


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
                totalSum,
                searchItem,
                isLoading,
                setIsLoading,
                wishlist,
                addToWishlist,
              }}
            >
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsProvider;