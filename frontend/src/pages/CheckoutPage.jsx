import React, { useState } from "react";
import {Link} from "react-router-dom"
import {motion} from "framer-motion"




const CheckoutPage = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [isFormVisible2, setIsFormVisible2] = useState(false);
    const [showModal, setShowModal] = React.useState(false);
    return (

        
        
      <motion.main
        initial={{ opacity: 0}}
        animate={{ opacity: 100 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .2 }}
      > 
      <div className="grid grid-cols-2 gap-6">
            <div className="">
                <h1 className=" text-center text-5xl">Checkout</h1>
                

                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none" onClick={() => setIsFormVisible(!isFormVisible)}>Contact Information</button>
            {isFormVisible && (
                <form className="w-full mt-4">

                <div className="flex">
                    <div className="w-full ">
                    <label className="block text-gray-600 text-xs" htmlFor="FirstName">
                        FIRST NAME
                    </label>
                    <input
                        className="block w-full bg-gray-200 text-gray-600"
                        id="FirstName"
                        type="text"
                        placeholder="Lucas"
                    />
                    </div>
                    <div className="w-full px-3">
                    <label className="block text-gray-600 text-xs" htmlFor="LastName">
                        LAST NAME
                    </label>
                    <input
                        className="block w-full bg-gray-200 text-gray-600"
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
                        className="block w-full bg-gray-200 text-gray-600"
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
                        className="block w-full bg-gray-200 text-gray-600"
                        id="PhoneNumber"
                        type="text"
                        placeholder="+353*********"
                    />
                    </div>
                </div>
                
                </form>
        )}
        <hr className="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700 "/>


        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none" onClick={() => setIsFormVisible2(!isFormVisible2)}>Shipping</button>
      {isFormVisible2 && (
                <form className="w-full">
                <h1>Shipping Information</h1>
                    <div className="flex">
                    
                        <div className="w-full ">
                            <label className="block text-gray-600 text-xs" htmlFor="FirstName">
                                FIRST NAME
                            </label>

                            <input className="block w-full bg-gray-200 text-gray-600" id="FirstName" type="text" placeholder="Lucas"/>

                        </div>

                        <div className="w-full px-3">
                            <label className="block text-gray-600 text-xs" htmlFor="LastName">
                                LAST NAME
                            </label>
                            <input className="block w-full bg-gray-200 text-gray-600" id="LastName" type="text" placeholder="Linda"/>
                        </div>
                    </div>

                    <div className="flex pt-3">
                        <div className="w-full ">
                            <label className="block text-gray-600 text-xs" htmlFor="Address1">
                                Address Line 1
                            </label>

                            <input className="block w-full bg-gray-200 text-gray-600" id="Address1" type="text" placeholder="UCD ROAD"/>

                        </div>

                    </div>

                    <div className="flex pt-3">
                        <div className="w-full ">
                            <label className="block text-gray-600 text-xs" htmlFor="Address2">
                                Address Line 2
                            </label>

                            <input className="block w-full bg-gray-200 text-gray-600" id="Address2" type="text" placeholder="Address Line 2(Optional)"/>

                        </div>

                    </div>

                    <div className="relative pt-3">
                        <label className="block text-gray-600 text-xs" htmlFor="Country">
                            Country
                        </label>

                        <select defaultValue={"country"} id="Country" className=" m-2 block w-full bg-gray-200 text-gray-600">
                        <option selected>Choose a country</option>
                        <option value="IE">Ireland</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                        </select>
                        
                    </div>

                </form>
                          
                )}
                <hr className="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700 "/>

                {/* MasterCard Button to start Modal */} 
                <div className="flex pt-3 h-1/5 w-1/5">
                <button type="button" onClick={() => setShowModal(true)}>
                    <img src="https://www.dublin-insider.com/hs-fs/hubfs/visa-and-mastercard-blocked-the-cards-of-the-russian-bank-which-participated-in-the-launch-of-petro.jpg?width=860&height=520&name=visa-and-mastercard-blocked-the-cards-of-the-russian-bank-which-participated-in-the-launch-of-petro.jpg" alt="" />
                </button>

                {/* What Modal will show when clicked */} 
                {showModal ? (
                <>
                {/* Parent div (position of modal) */} 
                
                <div className="justify-center items-center flex fixed inset-0 z-10">
                    {/* Child div (behind the modal box) */}
                    <div className="relative w-2/4 inset-0 rounded-lg">
                        {/* Actual modal box */}
                        <div className="bg-white">
                            {/*  modal header */}
                            <div className="border-b border-solid">
                                <h3 className="text-2xl">Enter Card Details</h3>
                            </div>

                            <form className="w-full">
                                

                    <div className="flex pt-3">
                        <div className="w-full ">
                            <label className="block text-gray-600 text-xs" htmlFor="CardNumber">
                                Card Number
                            </label>

                            <input className="block w-full bg-gray-200 text-gray-600" id="CardNumber" type="text" placeholder="4319*********" required/>

                        </div>

                    </div>

                    <div className="flex pt-3">
                        <div className="w-full ">
                            <label className="block text-gray-600 text-xs" htmlFor="CVV">
                                CVV
                            </label>

                            <input className="block w-full bg-gray-200 text-gray-600" id="CVV" type="text" placeholder="123"/>

                        </div>

                    </div>

                    <div className="relative pt-3 w-auto">
                        <label className="block text-gray-600 text-xs" htmlFor="ExpiryDate">
                            Expiry Date
                        </label>

                        <select defaultValue={"03/23"} id="ExpiryDate" className=" w-auto m-2 block bg-gray-200 text-gray-600">
                        <option selected>Expiry Date</option>
                        <option value="0223">02/23</option>
                        <option value="0323">03/23</option>
                        <option value="0423">04/23</option>
                        </select>
                        
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
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
                    type="button"
                    onClick={() => setShowModal(false)}
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
                
                
                
            </div>
            <div class="absolute left-1/2 -ml-0.5 w-0.5 h-screen bg-gray-600"></div>
            <div className=" content-center">
                <h1 className=" content-center">Order Summary</h1>

            </div>
        </div>
      </motion.main>
      
    )
  }

  export default CheckoutPage;