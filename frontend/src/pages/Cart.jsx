import { useContext } from "react"
import {Link} from "react-router-dom"
import { TESTPRODUCTSALL } from "../../TESTPRODUCTSALL"
import { ShopContext } from "../context/ShopContext"
import { ProductPreview } from "./ProductPreview"


export default function Cart() {
  const {cartItems, cartTotal} = useContext(ShopContext)
  return (
    <div className="h-screen md:h-[80vh] w-full px-5  md:px-10 pt-10">
      <div className="h-1/5">
        <h2 className="font text-2xl font-bold tracking-tight text-alt sm:text-4xl">My Cart</h2>
      </div>
      <div className="h-5/6 grid grid-cols-1 md:grid-cols-5 gap-5">
        <div className="h-full col-span-3 outline outline-offset-0 outline-3 p-5 outline-primary rounded"> {
          cartTotal() === 0? 
            <p className="font text-9xl text-center">:(</p> :
            TESTPRODUCTSALL.filter((prod) => (cartItems[prod.id] > 0)).map((prod) => (
              <ProductPreview product={prod} />
            ))
        } </div>
        <div className="h-full col-span-2 p-5">
          <div className="w-full h-5/6">
            <div> {
              cartTotal() === 0 ? 
                <div>Your cart is empty</div> : 
                <div>Your current total is:<div className="font text-4xl text-center">€{cartTotal()}</div></div>
              } </div>
          </div>
          <div className="w-full h-1/6 text-right align-bottom">{
            cartTotal() === 0 ?  
              <Link to="/products" class="inline-block rounded-md border border-transparent bg-secondary py-3 px-8 text-center font-medium text-white hover:bg-secondary">Go Back to Store</Link> : 
              <Link to="/checkout" class="inline-block rounded-md border border-transparent bg-secondary py-3 px-8 text-center font-medium text-white hover:bg-secondary">Go to Checkout</Link>
          }
          </div>
        </div>
      </div>
    </div>
  )
}