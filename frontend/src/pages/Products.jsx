import { TESTPRODUCTS } from "../../TESTPRODUCTS"
import { Product } from "./product"
import { motion } from "framer-motion"

export default function Products() {
  return (
    <motion.main
    className="main__container"
    initial={{ opacity: 0 }}
     animate={{ opacity: 100 }}
     exit={{ opacity: 0 }}
     transition={{ duration: .1 }}
    >
      <div id="products" className="grid grid-rows-auto w-100 gap-0 bg-bgdark object-cover">
        {TESTPRODUCTS.map((product) => (
            <Product data={product}/>
        ))}
      </div>
    </motion.main>
)}
