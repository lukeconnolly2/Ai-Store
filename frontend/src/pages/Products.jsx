import { useState, useEffect } from "react"
import { Product } from "./product"
import { motion } from "framer-motion"
import { getProducts } from "../helpers/getProducts"

export default function Products() {
  const [allproducts, setProducts] = useState([])

  useEffect(() => {
    let mounted = true;
    getProducts()
      .then(items => {
        if(mounted) {
          setProducts(items)
        }
      })
    return () => mounted = false;
  }, [])
  
  return (
    <motion.main
    className="main__container"
    initial={{ opacity: 100 }}
     animate={{ opacity: 100 }}
     exit={{ opacity: 0 }}
     transition={{ duration: .1 }}
    >
      <div id="products" className="grid grid-rows-auto w-100 gap-0 bg-bgdark object-cover">
        {allproducts.filter(product => product.visibility === "visible").map((product) => (
            <Product product={product} />
        ))}
      </div>
    </motion.main>
)}
