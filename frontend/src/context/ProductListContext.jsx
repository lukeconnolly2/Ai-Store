import {createContext, useState} from "react"
import { TESTPRODUCTSALL } from "../../TESTPRODUCTSALL"

export const ProductListContext = createContext(null)

const getDefaultProductList = () => {
    let productList = {}
    for(let i = 1; i < TESTPRODUCTSALL.length + 1; i++ ){
        productList[i] = 0
    }
    return productList
}

export const ShopContextProvider = (props) => { 
    const [productList, setProductList] = useState(getDefaultCart())

    const contextValue = {productList, setProductList}
    console.log(productList)
    return(
        <ProductListContext.Provider value={contextValue}> {props.children}</ProductListContext.Provider>
    )
}