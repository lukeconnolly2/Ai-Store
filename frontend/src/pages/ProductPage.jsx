import { useParams } from "react-router-dom"
import { TESTPRODUCTS } from "../../TESTPRODUCTS"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function ProductPage() {
    const {prodid} = useParams()
    const [prod] = TESTPRODUCTS.filter((product) => {return prodid == product.id})
    return (
        <motion.main
        className="main__container"
        initial={{ opacity: 0 }}
         animate={{ opacity: 100 }}
         exit={{ opacity: 0 }}
         transition={{ duration: .1 }}
        >
        <div className="flex flex-row justify-between h-screen">
            <div className="basis-1/12 p-4">
                <Link to="../../products">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </Link>
            </div>
            <div className="basis-4/12 pt-5 flex flex-col justify-evenly items-center">
                 <div><img src={prod.productImgUrl} /></div>
                 <div className="text-alt text-4xl">Price: €{prod.price}</div>
                 <div className="w-full h-16 bg-secondary text-white flex flex-row justify-center items-center rounded-md px-auto">Add to Cart</div>
            </div>
            <div className="basis-6/12 flex flex-col justify-start mt-20">{prod.description}</div>
        </div>
      </motion.main>
  )}
  