import {createContext, useState} from "react"
import { getProducts } from "../helpers/getProducts"

export const ShopContext = createContext(null)
export const allproducts = await getProducts()

const getDefaultCart = () => {
    let cart = {}
    for(let i = 1; i < allproducts.length + 1; i++ ){
        cart[i] = 0
    }
    return cart
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart = (productId) => {
        setCartItems((prev) => ({...prev, [productId]: prev[productId] + 1 }))
    }

    const removeFromCart = (productId) => {
        setCartItems((prev) => ({...prev, [productId]: prev[productId] - 1 }))
    }

    const removeAllFromCart = (productId) => {
        setCartItems((prev) => ({...prev, [productId]: 0 }))
    }
    
    const cartTotal = () => {
        let total = 0;
        for(const productid in cartItems){
            total += allproducts[productid-1].price * cartItems[productid]
        }
        return total
    }

    const contextValue = {cartItems, addToCart, removeFromCart, removeAllFromCart, cartTotal}
    return(
        <ShopContext.Provider value={contextValue}> {props.children}</ShopContext.Provider>
    )
}