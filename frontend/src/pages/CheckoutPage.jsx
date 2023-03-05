import React, { useState } from "react";
import {Link} from "react-router-dom"
import {motion} from "framer-motion"




const CheckoutPage = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [isFormVisible2, setIsFormVisible2] = useState(false);
    const [showmodal, setShowModal] = useState(false);
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

    </div>
</motion.main>
      
    )
  }

  export default CheckoutPage;