import { TESTPRODUCTS } from "../../TESTPRODUCTS"
import { Product } from "./product"

export default function Products() {
  return (
    <>
      <div id="products" className="grid grid-rows-auto w-100 gap-0 bg-bgdark object-cover">
        {TESTPRODUCTS.map((product) => (
            <Product data={product}/>
        ))}
      </div>
    </>
)}
