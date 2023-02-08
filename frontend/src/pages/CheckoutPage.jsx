import React from "react";
import {Link} from "react-router-dom"

export default function CheckoutPage() {
    return (
        
      <div> 
            <div>
                <h1 class=" text-center text-5xl">Checkout</h1>

                <form class="w-full">
                <h1>Contact Information</h1>
                    <div class="flex">
                    
                        <div class="w-full ">
                            <label class="block text-gray-600 text-xs" for="FirstName">
                                FIRST NAME
                            </label>

                            <input class="block w-full bg-gray-200 text-gray-600" id="FirstName" type="text" placeholder="Lucas"/>

                        </div>

                        <div class="w-full px-3">
                            <label class="block text-gray-600 text-xs" for="LastName">
                                LAST NAME
                            </label>
                            <input class="block w-full bg-gray-200 text-gray-600" id="LastName" type="text" placeholder="Linda"/>
                        </div>
                    </div>

                    <div class="flex pt-3">
                        <div class="w-full ">
                            <label class="block text-gray-600 text-xs" for="Email">
                                EMAIL
                            </label>

                            <input class="block w-full bg-gray-200 text-gray-600" id="Email" type="text" placeholder="lucas@ucd.ie"/>

                        </div>

                    </div>

                    <div class="flex pt-3">
                        <div class="w-full ">
                            <label class="block text-gray-600 text-xs" for="PhoneNumber">
                                PHONE NUMBER
                            </label>

                            <input class="block w-full bg-gray-200 text-gray-600" id="PhoneNumber" type="text" placeholder="+353*********"/>

                        </div>

                    </div>

                    <hr class="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700 "/>

                </form>

                <form class="w-full">
                <h1>Shipping Information</h1>
                    <div class="flex">
                    
                        <div class="w-full ">
                            <label class="block text-gray-600 text-xs" for="FirstName">
                                FIRST NAME
                            </label>

                            <input class="block w-full bg-gray-200 text-gray-600" id="FirstName" type="text" placeholder="Lucas"/>

                        </div>

                        <div class="w-full px-3">
                            <label class="block text-gray-600 text-xs" for="LastName">
                                LAST NAME
                            </label>
                            <input class="block w-full bg-gray-200 text-gray-600" id="LastName" type="text" placeholder="Linda"/>
                        </div>
                    </div>

                    <div class="flex pt-3">
                        <div class="w-full ">
                            <label class="block text-gray-600 text-xs" for="Address1">
                                Address Line 1
                            </label>

                            <input class="block w-full bg-gray-200 text-gray-600" id="Address1" type="text" placeholder="UCD ROAD"/>

                        </div>

                    </div>

                    <div class="flex pt-3">
                        <div class="w-full ">
                            <label class="block text-gray-600 text-xs" for="Address2">
                                Address Line 2
                            </label>

                            <input class="block w-full bg-gray-200 text-gray-600" id="Address2" type="text" placeholder="Address Line 2(Optional)"/>

                        </div>

                    </div>

                    <div class="relative pt-3">
                        <label class="block text-gray-600 text-xs" for="Country">
                            Country
                        </label>

                        <select id="Country" class=" m-2 block w-full bg-gray-200 text-gray-600">
                        <option selected>Choose a country</option>
                        <option value="IE">Ireland</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                        </select>
                        
                    </div>

                    <hr class="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700 "/>

                </form>
                
            </div>
      </div>
    )
  }