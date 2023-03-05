import {Link} from "react-router-dom"
import { TESTPRODUCTSALL } from "../../TESTPRODUCTSALL"
import { AdminProductPreview } from "./AdminProductPreview"

export default function AdminDash() {
    return (
        <>
          <div className="px-5 md:px-10 pt-10">
            <h1 className="inline-block pb-8 font text-2xl font-bold text-alt sm:text-4xl">Admin Dashboard</h1>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
                  <div className="col-span-1 md:col-span-3">
                      <h2 className="inline-block pb-8 font text-xl font-bold text-alt sm:text-2xl">My Products</h2>
                      <div className="h-[50vh] outline outline-offset-0 outline-3 px-5 outline-primary rounded overflow-y-auto mb-8" id="products">
                        {TESTPRODUCTSALL.map((product) => (
                          <AdminProductPreview product={product} />
                      ))}
                      </div>
                  </div>
                          
                  <div className="col-span-1 md:col-span-2">
                      <h2 className="inline-block pb-8 font text-xl font-bold text-alt sm:text-2xl">My Orders</h2>
                      <div>
                          <span>Orders Today: </span>
                          <span>7</span>
                      </div>
                      <div>
                          <span>Orders This Week: </span>
                          <span>24</span>
                      </div>
                      <Link to="/products" className="h-fit inline-block rounded-md border border-transparent bg-secondary py-3 px-8 text-center font-medium text-white hover:bg-secondary">View All Orders</Link>
                  </div>

                  {/* Name -> new-product-name
                      Price -> new-product-price 
                      Quantity -> new-product-quantity
                      Type -> new-product-type
                      Description -> new-product-description*/}


                  <div className="col-span-5">
                    <h2 className="inline-block pb-8 font text-xl font-bold text-alt sm:text-2xl">Add New</h2>
                    <form className="grid grid-cols-1 md:grid-cols-5 gap-0 md:gap-5">
                      <div className="col-span-5 md:col-span-3">

                        <div className="flex flex-wrap -mx-3 mb-6">
                          <div className="w-full px-3">
                            <label className="block tracking-wide font-bold mb-2" forHTML="new-product-name">
                              Product Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-bgdark border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="new-product-name" type="text" placeholder="Name" required/>
                            <p className="text-alt text-xs italic">Please fill out this field.</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block tracking-wide font-bold mb-2" forHTML="new-product-price">
                              Price
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-bgdark border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="new-product-price" type="number" placeholder="£0.00" required/>
                            <p className="text-alt text-xs italic">Please fill out this field.</p>
                          </div>
                          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block tracking-wide font-bold mb-2" forHTML="new-product-quantity">
                              Quantity
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-bgdark border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="new-product-quantity" type="number" placeholder="0" required/>
                            <p className="text-alt text-xs italic">Please fill out this field.</p>
                          </div>
                          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block tracking-wide font-bold mb-2" forHTML="new-product-type">
                              Type
                            </label>
                            <div className="relative">
                              <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-bgdark py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="new-product-type">
                                <option>Trained</option>
                                <option>Untrained</option>
                              </select>
                              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-bgdark">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                          <div className="w-full px-3">
                            <label className="block tracking-wide font-bold mb-2" forHTML="new-product-description">
                              Product Description
                            </label>
                            <textarea className="appearance-none block w-full bg-gray-200 text-bgdark border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="new-product-description" rows="4" placeholder="Write your product description here..."></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-5 md:col-span-2">
                        <div className="mb-6">
                          <label className="block tracking-wide font-bold mb-2" forHTML="new-product-image">Upload Image</label>
                          <input className="block w-full text-bgdark border border-gray-300 rounded p-2 mb-3 cursor-pointer bg-gray-200 focus:outline-none" id="new-product-image" type="file" accept="image/*"/>
                        </div>
                        <input type="submit" className="h-fit inline-block rounded-md border border-transparent bg-secondary py-3 px-8 text-center font-medium text-white hover:bg-secondary" value={"Submit"}/>
                      </div>
                    </form>
                  </div>
              </div>
          </div>
        </>
    )};