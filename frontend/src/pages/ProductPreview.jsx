import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

export const ProductPreview = (props) => {
  const {id, productName, price, productImgUrl, description} = props.product;
  const {removeAllFromCart, cartItems, addToCart, removeFromCart} = useContext(ShopContext)

  const minus = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )
  const plus = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg> 
                      )

  return (
        <div className="text-slate-900 bg-primary h-[20vh] col-span-2 translate-x-0 duration-300 border-black border-y-2 m-y-auto flex flex-row hover:h-[50vh place-items-center justify-evenly rounded-md"> 
            <div className="h-auto max-w-xs object-contain p-3 basis-3/12"> <img className="h-[17vh] w-fit rounded-sm" src={productImgUrl ? productImgUrl : placeholderImgUrl} /> </div>
            <div className="basis-2/12 p-3"> {productName}</div>
            <div className="basis-2/12 text-xl text-center text-bglight">{price}</div>
            <span className="p-2" onClick={() => {removeFromCart(id)}}>{minus()}</span>
            <div className="basis-1/12 text-3xl text-center p-0">  {cartItems[id]} </div>
            <span className="p-2" onClick={() => {addToCart(id)}}>{plus()}</span>
            <div className="basis-1/12 text-3xl" >
              <svg onClick={() => {removeAllFromCart(id)}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 scale-150 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
      </div>
  )
}
