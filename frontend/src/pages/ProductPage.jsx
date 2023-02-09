import { useParams } from "react-router-dom"
import { TESTPRODUCTSDISPLAY } from "../../TESTPRODUCTSDISPLAY"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { animated, useSpring } from '@react-spring/web'

export default function ProductPage() {
    const {prodid} = useParams()
    const [prod] = TESTPRODUCTSDISPLAY.filter((product) => {return prodid == product.id})

    const springs = useSpring({
        from:{ 
            x: 1000,
            opacity:0,
        },
        to: { 
            x: 0,
            opacity: 1,
        },
        config: {duration: 500},
      })
    return (
        <animated.div style={springs} className="flex flex-row justify-between h-[80vh]">
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
                 <Link to="/checkoutpage"><div className="w-full h-16 bg-secondary text-white flex flex-row justify-center items-center rounded-md px-auto">Add to Cart</div></Link>
            </div>
            <div className="basis-6/12 flex flex-col justify-start mt-20">{prod.description}</div>
        </animated.div>
  )}
  