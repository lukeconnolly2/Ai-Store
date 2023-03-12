import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { animated, useSpring } from '@react-spring/web'
import { useContext, useState, useEffect } from "react"
import { ShopContext } from "../context/ShopContext"
export default function ProductPage() {
    const [allproducts, setProducts] = useState([])
    const placeholderImgUrl = "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="


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
  
    const {prodid} = useParams()
    const [prod] = allproducts.filter((product) => {return prodid == product.id})
    const {addToCart, cartItems} = useContext(ShopContext)
    const cartItemsAmount = cartItems[prodid]    
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
                 <div><img src={productImgUrl ? productImgUrl : placeholderImgUrl} /></div>
                 <div className="text-alt text-4xl">Price: €{prod.price}</div>
                 <div className="w-full h-16 bg-secondary text-white flex flex-row justify-center items-center rounded-md px-auto cursor-pointer" onClick={() =>addToCart(prodid)}>Add to Cart {cartItemsAmount > 0 ? <> ({cartItemsAmount})</> : <></>}</div>
            </div>
            <div className="basis-6/12 flex flex-col justify-start mt-20">
                {prod.description}
                <div>{prod.type}</div>
            
            </div>
        </animated.div>
  )}
  