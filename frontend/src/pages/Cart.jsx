import { useContext } from "react"
import { TESTPRODUCTSALL } from "../../TESTPRODUCTSALL"
import { ShopContext } from "../context/ShopContext"
import { ProductPreview } from "./ProductPreview"


export default function Cart() {
  const {cartItems} = useContext(ShopContext)
  return (
    <div className="h-screen md:h-[80vh] w-full px-5  md:px-10 pt-10">
      <div className="h-1/5">
        <h2 className="font text-2xl font-bold tracking-tight text-alt sm:text-4xl">My Cart</h2>
      </div>
      <div className="h-5/6 grid grid-cols-1 md:grid-cols-5 gap-5">
        <div className="h-full col-span-3 outline outline-offset-0 outline-3 p-5 outline-primary rounded"> {
          TESTPRODUCTSALL.filter((prod) => (cartItems[prod.id] > 0)).map((prod) => (
            <ProductPreview product={prod} />
          ))
        } </div>
        <div className="h-full col-span-2 p-5">{}</div>
      </div>
    </div>
  )
}