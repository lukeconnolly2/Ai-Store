import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

export const ProductPreview = (props) => {
  const {id, productName, price, productImgUrl, type} = props.product;
  const {removeAllFromCart, cartItems, addToCart, removeFromCart} = useContext(ShopContext)

  const minus = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )
  const plus = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg> 
                      )

  const placeholderImgUrl = "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="

  return (
    <div className="text-slate-900 bg-primary h-[35vh] lg:h-[25vh] col-span-2 rounded my-5">
      <div className="px-3 pt-10 lg:pt-3 text-3xl lg:text-xl box-border h-[5vh] font-bold">
        <span>{productName}</span>
      </div>
      <div className="flex place-items-center justify-evenly h-[30vh] lg:h-[20vh]">
      <Link to={`../product/${id}`}>
         <div className="h-auto w-fit object-contain p-3 basis-6/12 lg:basis-3/12 rounded"> <img className="h-[17vh] w-fit rounded-sm" src={productImgUrl ? productImgUrl : placeholderImgUrl} /> </div>
      </Link>
      <div className="grid sm:grid-flow-row sm:grid-cols-1 lg:grid-flow-col lg:grid-rows-1 basis-5/12 lg:basis-8/12 gap-x-1 lg:gap-x-5">
        <div className="p-2 italic">Trained</div>
        <div className="text-xl text-bglight p-2">€{price}</div>
        <div className="text-3xl text-center p-0 flex flex-rows">
          <span className="p-2 text-right" onClick={() => {removeFromCart(id)}}>{minus()}</span>
          <span className="text-3xl text-center p-0">  {cartItems[id]} </span>
          <span className="p-2" onClick={() => {addToCart(id)}}>{plus()}</span>
        </div>
      </div>
      <div className="basis-1/12 text-3xl grid px-4" >
          <svg onClick={() => {removeAllFromCart(id)}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 scale-150 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
    </div>
    </div>
  )
}
