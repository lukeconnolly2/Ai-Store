import { Link } from "react-router-dom";
import React, { useState } from "react";


export const AdminProductPreview = (props) => {
    const [modal, setModal] = useState(false);
    const handleShowModal = () => setModal(true);
    const handleHideModal = () => setModal(false);
    const {id, productName, price, productImgUrl, type, description, quantity} = props.product;
    const placeholderImgUrl = "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="

    return (
        <div className="text-slate-900 bg-primary h-[40vh] lg:h-[25vh] col-span-2 rounded my-5">
            <div className="px-3 pt-10 lg:pt-3 text-3xl lg:text-xl box-border h-[5vh] font-bold">
                <span>{productName}</span>
                <span className="italic text-xs mx-10"> {type}</span>
            </div>
            <div className="flex place-items-center justify-evenly h-[30vh] lg:h-[20vh]">
                <Link to={`../product/${id}`}>
                    <div className="h-auto w-fit object-contain p-3 basis-6/12 lg:basis-3/12 rounded"> <img className="h-[17vh] w-fit rounded-sm" src={productImgUrl ? productImgUrl : placeholderImgUrl} /> </div>
                </Link>
                <div className="grid sm:grid-flow-row sm:grid-cols-1 lg:grid-flow-col lg:grid-rows-1 basis-5/12 lg:basis-8/12 gap-x-1 lg:gap-x-5">
                    <div className="outline outline-offset-0 outline-3 p-2 outline-bgdark rounded h-28 text-xs overflow-y-auto">{description}</div>
                    <div>
                        <div className="text-xl text-bglight mb-10">€{price}</div>
                        <div>Quantity: {quantity}</div>
                    </div>
                </div>
                <div className="basis-1/12 text-3xl px-4" >
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

    )
}