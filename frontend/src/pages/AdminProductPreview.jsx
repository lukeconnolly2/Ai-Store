import { Link } from "react-router-dom";
import React, { useState } from "react";


export const AdminProductPreview = (props) => {
    const [modal, setModal] = useState(false);
    const {id, productName, price, productImgUrl, type, description, quantity} = props.product;
    const placeholderImgUrl = "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="

    return (
    <>
        <div className="text-slate-900 bg-primary h-[40vh] lg:h-[25vh] col-span-2 rounded my-5">
            <div className="px-3 pt-10 lg:pt-3 text-3xl lg:text-xl box-border h-[5vh] font-bold">
                <span>{productName}</span>
                <span className="italic text-xs lg:mx-10 block mt-[20vh] lg:mt-0 lg:inline"> {type}</span>
            </div>
            <div className="flex place-items-center justify-evenly h-[30vh] lg:h-[20vh]">
                <Link to={`../product/${id}`}>
                    <div className="h-auto w-fit object-contain p-3 basis-6/12 lg:basis-3/12 rounded"> <img className="h-[17vh] w-fit rounded-sm" src={productImgUrl ? productImgUrl : placeholderImgUrl} /> </div>
                </Link>
                <div className="grid sm:grid-flow-row sm:grid-cols-1 lg:grid-flow-col lg:grid-rows-1 basis-5/12 lg:basis-8/12 gap-x-1 lg:gap-x-5">
                    <div className="outline outline-offset-0 outline-3 p-2 outline-bgdark rounded h-28 text-xs overflow-y-auto">{description}</div>
                    <div>
                        <div className="my-10">Price: €{price}</div>
                        <div>Quantity: {quantity}</div>
                    </div>
                </div>
                <div className="basis-1/12 text-3xl px-4" >
                    <button onClick={() => setModal(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        {modal ? (
            <div className="justify-center items-center flex fixed inset-0 z-10">
                <div className="h-[75vh] w-[75vw] bg-secondary rounded p-10 overflow-y-auto md:overflow-hidden text-bgdark">
                    <h2 className="inline-block pb-8 font text-xl font-bold  sm:text-2xl">Edit Product ID: {id}</h2>
                    <form className="grid grid-cols-1 md:grid-cols-5 gap-0 md:gap-5" action="post">
                      <div className="col-span-5 md:col-span-3">

                        <div className="flex flex-wrap -mx-3 mb-6">
                          <div className="w-full px-3">
                            <label className="block tracking-wide font-bold mb-2" htmlFor="edit-product-name">
                              Product Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-bgdark border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="edit-product-name" type="text" defaultValue={productName}/>
                          </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block tracking-wide font-bold mb-2" htmlFor="edit-product-price">
                              Price
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-bgdark border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="edit-product-price" type="number" defaultValue={price}/>
                          </div>
                          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block tracking-wide font-bold mb-2" htmlFor="edit-product-quantity">
                              Quantity
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-bgdark border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="edit-product-quantity" type="number" defaultValue={quantity}/>
                          </div>
                          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block tracking-wide font-bold mb-2" htmlFor="edit-product-type">
                              Type
                            </label>
                            <div className="relative">
                              <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-bgdark py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="edit-product-type">
                                <option defaultValue={type === "Trained"}>Trained</option>
                                <option defaultValue={type === "Untrained"}>Untrained</option>
                              </select>
                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-bgdark">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                          <div className="w-full px-3">
                            <label className="block tracking-wide font-bold mb-2" htmlFor="edit-product-description">
                              Product Description
                            </label>
                            <textarea className="appearance-none block w-full bg-gray-200 text-bgdark border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="new-product-description" rows="4" defaultValue={description}></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-5 md:col-span-2">
                        <div className="mb-6">
                          <label className="block tracking-wide font-bold mb-2" htmlFor="new-product-image">Upload Image</label>
                          <input className="block w-full text-bgdark border border-gray-300 rounded p-2 mb-3 cursor-pointer bg-gray-200 focus:outline-none" id="new-product-image" type="file" accept="image/*"/>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2">
                            <div>
                                <input type="submit" className="h-fit inline-block rounded-md border border-transparent bg-bgdark py-3 px-8 text-center font-medium text-white" value={"Submit"} onClick={() => setModal(false)}/>
                            </div>
                            <div>
                                <button onClick={() => setModal(false)} className="h-fit inline-block rounded-md border border-transparent bg-bgdark py-3 px-8 text-center font-medium text-white">Close</button>
                                <p className=" text-xs italic ml-50">Any changes will not be saved</p>
                            </div>
                        </div>
                      </div>
                    </form>
                </div>
            </div>
        ):null}
    </>
    )
}