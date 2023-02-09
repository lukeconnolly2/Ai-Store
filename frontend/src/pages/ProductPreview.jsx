import { Link } from "react-router-dom";

export const ProductPreview = (props) => {
  const {id, productName, price, productImgUrl, description} = props.product;
  return (
        <div className="text-slate-900 bg-primary h-[40vh] col-span-2 translate-x-0 duration-300 border-black border-y-2 m-y-auto flex flex-row hover:h-[50vh place-items-center justify-evenly rounded-md"> 
            <div className="h-auto max-w-xs object-contain p-3 basis-5/12"> <img className=" h-fit w-fit rounded-sm" src={productImgUrl ? productImgUrl : placeholderImgUrl} /> </div>
            <div className="basis-3/12 p-3"> {productName}</div>
            <div className="basis-3/12 text-xl text-center text-bglight">{price}</div>
            <div className="basis-1/12 text-3xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 scale-150">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
      </div>
  )
}
