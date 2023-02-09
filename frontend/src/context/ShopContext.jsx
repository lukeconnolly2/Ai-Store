import {createContext, useState} from "react"
import { TESTPRODUCTS } from "../../TESTPRODUCTSALL"

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for(let i = 1; i < TESTPRODUCTS.length + 1; i++ ){
        cart[i] = {}
    }
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState()
    return(
        <ShopContextProvider> {props.children}</ShopContextProvider>
    )
}