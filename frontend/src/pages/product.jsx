import { Link } from "react-router-dom";

export const Product = (props) => {
    const {id, productName, price, productImgUrl} = props.data;
    const placeholderImgUrl = "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
    return (
        <div className="text-slate-900 bg-primary h-[40vh] col-span-2 translate-x-0 duration-300 border-black border-y-2 m-y-auto flex flex-row hover:h-[50vh] hover:bg-secondary place-items-center"> 
            <div className=" h-auto max-w-xs object-contain p-2"> <img className="h-fit w-fit" src={productImgUrl ? productImgUrl : placeholderImgUrl} /> </div>
            <div className="basis-5/12 p-3 text-x"> {productName}</div>
            <div className="basis-2/12 p-3 justify-end absolute right-10"> 
                <Link
                to={`../product/${id}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-12 w-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </Link>
             </div>
        </div>
)}