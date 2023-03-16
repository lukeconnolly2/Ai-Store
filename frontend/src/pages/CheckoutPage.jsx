import React, { useState, useEffect } from "react";
import {motion} from "framer-motion"
import { useContext } from "react";
import { getProducts } from "../helpers/getProducts";
import { ShopContext } from "../context/ShopContext"
import { ProductPreview } from "./ProductPreview"




const CheckoutPage = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [isFormVisible2, setIsFormVisible2] = useState(false);
    const [isFormVisible3, setIsFormVisible3] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const {cartItems} = useContext(ShopContext)
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
<>
        
        
<motion.main
        initial={{ opacity: 0}}
        animate={{ opacity: 100 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .2 }}
> 
      <div className="grid grid-cols-2 gap-6">
        <div className="">
                <h1 className=" text-center text-5xl text-alt">Checkout</h1>
                

                <button className="bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none" onClick={() => setIsFormVisible(!isFormVisible)}>Contact Information</button>
                {isFormVisible && (
                    <form className="w-full mt-4">

                        <div className="flex flex-row">
                            <div className="w-1/5 pr-3">
                                <label className="block text-gray-600 text-xs" htmlFor="FirstName">
                                FIRST NAME
                                </label>
                                <input
                                className="block w-full pl-1 bg-gray-200 text-gray-600"
                                id="FirstName"
                                type="text"
                                placeholder="Lucas"
                                />
                            </div>

                            <div className="w-1/5 pl-3">
                                <label className="block text-gray-600 text-xs" htmlFor="LastName">
                                LAST NAME
                                </label>
                                <input
                                className="block w-full pl-1 bg-gray-200 text-gray-600"
                                id="LastName"
                                type="text"
                                placeholder="Linda"
                                />
                            </div>
                        </div>

                        <div className="flex pt-3">
                            <div className="w-full ">
                                <label className="block text-gray-600 text-xs" htmlFor="Email">
                                    EMAIL
                                </label>
                                <input
                                    className="block pl-1 w-1/3 bg-gray-200 text-gray-600"
                                    id="Email"
                                    type="text"
                                    placeholder="lucas@ucd.ie"
                                />
                            </div>
                        </div>

                        <div className="flex pt-3">
                            <div className="w-full ">
                                <label className="block text-gray-600 text-xs" htmlFor="PhoneNumber">
                                    PHONE NUMBER
                                </label>
                                <input
                                    className="block pl-1 w-1/4 bg-gray-200 text-gray-600"
                                    id="PhoneNumber"
                                    type="text"
                                    placeholder="+353*********"
                                />
                            </div>
                        </div>
                    
                    </form>
                )}
                
                <hr className="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700 "/>


            <button className="bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none" onClick={() => setIsFormVisible2(!isFormVisible2)}>Shipping</button>
            {isFormVisible2 && (
                <form className="w-full">
                <h1>Shipping Information</h1>
                    <div className="flex flex-row">
                            <div className="w-1/5 pr-3">
                                <label className="block text-gray-600 text-xs" htmlFor="FirstName">
                                FIRST NAME
                                </label>
                                <input
                                className="block w-full pl-1 bg-gray-200 text-gray-600"
                                id="FirstName"
                                type="text"
                                placeholder="Lucas"
                                />
                            </div>

                            <div className="w-1/5 pl-3">
                                <label className="block text-gray-600 text-xs" htmlFor="LastName">
                                LAST NAME
                                </label>
                                <input
                                className="block w-full pl-1 bg-gray-200 text-gray-600"
                                id="LastName"
                                type="text"
                                placeholder="Linda"
                                />
                            </div>
                    </div>

                    <div className="flex pt-3">
                        <div className="w-full ">
                            <label className="block text-gray-600 text-xs" htmlFor="Address1">
                                Address Line 1
                            </label>

                            <input className="block pl-1 w-1/3 bg-gray-200 text-gray-600" id="Address1" type="text" placeholder="UCD ROAD"/>

                        </div>

                    </div>

                    <div className="flex pt-3">
                        <div className="w-full ">
                            <label className="block text-gray-600 text-xs" htmlFor="Address2">
                                Address Line 2
                            </label>

                            <input className="block pl-1 w-1/3 bg-gray-200 text-gray-600" id="Address2" type="text" placeholder="Address Line 2(Optional)"/>

                        </div>

                    </div>

                    <div className="relative pt-3">
                        <label className="block text-gray-600 text-xs" htmlFor="Country">
                            Country
                        </label>

                        <select defaultValue={"country"} id="Country" className=" block pl-1 w-1/3 bg-gray-200 text-gray-600">
                        <option selected>Choose a country</option>
                        <option value="IE">Ireland</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                        </select>
                        
                    </div>

                </form>
                          
                )}
                
                <hr className="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700 "/>

                <button className="bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none" onClick={() => setIsFormVisible3(!isFormVisible3)}>Payments</button>
            {isFormVisible3 && (
                <div className="grid grid-cols-2">                    
            <div className="flex pt-3 w-11/12">
                <button type="button" onClick={() => setShowModal(true)}>
                    <img src="https://www.dublin-insider.com/hs-fs/hubfs/visa-and-mastercard-blocked-the-cards-of-the-russian-bank-which-participated-in-the-launch-of-petro.jpg?width=860&height=520&name=visa-and-mastercard-blocked-the-cards-of-the-russian-bank-which-participated-in-the-launch-of-petro.jpg" alt="" />
                </button>

                {showModal ? (
                <>
                
                <div className="justify-center items-center flex fixed inset-0 z-10">
                    
                    <div className="relative w-2/4 inset-0 rounded-lg">
                        
                        <div className=" bg-secondary">
                            
                            <div className="border-b border-solid">
                                <h3 className="mx-4 text-2xl">Enter Card Details</h3>
                            </div>

                            <form className="w-full">
                                        
                                <div className="flex pt-3">
                                    <div className="w-full ">
                                        <label className="block mx-4 text-gray-600 text-xs" htmlFor="CardNumber">
                                            Card Number
                                        </label>

                                        <input className="block w-1/6 mx-4 text-center bg-gray-200 text-gray-600" id="CardNumber" type="text" placeholder="4319*********" required/>

                                    </div>

                                </div>
                                
                                <div className=" grid-cols-2 flex">
                                    <div className="flex pt-3">
                                        <div className="w-full ">
                                            <label className="block mx-4 text-gray-600 text-xs" htmlFor="CVV">
                                                CVV
                                            </label>

                                            <input className="block w-12 mx-4 text-center bg-gray-200 text-gray-600" id="CVV" type="text" placeholder="123"/>

                                        </div>

                                    </div>

                                    <div className="relative pt-3 w-auto">
                                        <label className="block mx-4 text-gray-600 text-xs" htmlFor="ExpiryDate">
                                            Expiry Date
                                        </label>

                                        <select defaultValue={"03/23"} id="ExpiryDate" className=" w-auto mx-4 text-center mb-2 block bg-gray-200 text-gray-600">
                                        <option selected>Expiry Date</option>
                                        <option value="0223">02/23</option>
                                        <option value="0323">03/23</option>
                                        <option value="0423">04/23</option>
                                        </select>
                                        
                                    </div>

                                </div>

                                

                            </form>
                

                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Cancel
                                </button>

                                <button
                                    className="bg-bglight text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
                                    type="button"
                                    onClick={href}
                                    
                                >
                                    Pay
                                </button>
                            </div>
              




                        

                        </div>
                    
                    </div>
            
                </div>
                

                <div className="opacity-25 fixed inset-0 bg-black"></div>
                    </>
                    ):null}
                
    
            </div>

            <div className="flex pt-3 w-11/12">
                <button type="button" onClick={() => setShowModal2(true)}>
                    <img src="https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15..v1602794215.png" alt="" />
                </button>

                {showModal2 ? (
                <>
                
                <div className="justify-center items-center flex fixed inset-0 z-10">
                    
                    <div className="relative w-2/4 inset-0 rounded-lg">
                        
                        <div className=" bg-secondary">
                            
                            <div className="border-b border-solid">
                                <h3 className="mx-4 text-2xl">Enter Paypal details</h3>
                            </div>

                            <form className=" w-full">
                                        
                                <div className="flex pt-3">
                                    <div className="w-full ml-2 ">
                                        <label className="block mx-4 text-gray-600 text-xs" htmlFor="Emailaddress">
                                            Email address
                                        </label>

                                        <input className="block pl-1 w-1/3 bg-gray-200 text-gray-600" id="Email" type="text" placeholder="payment@paypal.com"
                                />

                                    </div>

                                </div>
                                
                                <div className="flex pt-3">
                                    <div className="w-full ml-2 ">
                                        <label className="block mx-4 text-gray-600 text-xs" htmlFor="Password">
                                            Password
                                        </label>

                                        <input className="block mb-3 pl-1 w-1/3 bg-gray-200 text-gray-600" id="Email" type="text" placeholder="keanano"
                                />

                                    </div>

                                </div>
                                

                                

                            </form>
                

                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal2(false)}
                                >
                                    Cancel
                                </button>

                                <button
                                    className="bg-bglight text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 z-30"
                                    type="button"
                                    onClick={() => window.location.href='/paymentsuccess' }
                                >
                                    Pay
                                </button>
                            </div>
              




                        

                        </div>
                    
                    </div>
            
                </div>
                

                <div className="opacity-25 fixed inset-0 bg-black"></div>
                    </>
                    ):null}
                
    
            </div>
            </div>)}
                
                
                
        
            </div>
            <div class="absolute left-1/2 -ml-0.5 w-0.5 h-screen bg-gray-600"></div>
            <div className="content-center">
                <h1 className=" text-center text-5xl text-alt">Order Summary</h1>

                {allproducts.filter((prod) => (cartItems[prod.id] > 0)).map((prod) => (
                    <ProductPreview product={prod}/>
                ))
            }

            </div>

    
    </div>
</motion.main>
      </>
    )
  }

  export default CheckoutPage;