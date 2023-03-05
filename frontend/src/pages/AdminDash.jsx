import {Link} from "react-router-dom"

export default function AdminDash() {
    return (
        <>
          <div className="px-5 md:px-10 pt-10">
            <h1 className="inline-block pb-8 font text-2xl font-bold text-alt sm:text-4xl">Admin Dashboard</h1>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
                  <div className="col-span-1 md:col-span-3">
                      <h2 className="inline-block pb-8 font text-xl font-bold text-alt sm:text-2xl">My Products</h2>
                      <div>A</div>
                      <div>B</div>
                      <div>C</div>
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
                      <Link to="/products" class="h-fit inline-block rounded-md border border-transparent bg-secondary py-3 px-8 text-center font-medium text-white hover:bg-secondary">View All Orders</Link>
                  </div>
                  {/* Name -> new-product-name
                      Price -> new-product-price 
                      Quantity -> new-product-quantity
                      Type -> new-product-type
                      Description -> new-product-description*/}
                  <div className="col-span-1 md:col-span-3">
                      <h2 className="inline-block pb-8 font text-xl font-bold text-alt sm:text-2xl">Add New</h2>
                      <form class="w-full">
                      <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                          <label class="block tracking-wide font-bold mb-2" for="new-product-name">
                            Product Name
                          </label>
                          <input class="appearance-none block w-full bg-gray-200 text-bgdark border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="new-product-name" type="text" placeholder="Name" />
                          <p class="text-alt text-xs italic">Please fill out this field.</p>
                        </div>
                      </div>
                      <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                          <label class="block tracking-wide font-bold mb-2" for="new-product-price">
                            Price
                          </label>
                          <input class="appearance-none block w-full bg-gray-200 text-bgdark border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="new-product-price" type="number" placeholder="£0.00" />
                          <p class="text-alt text-xs italic">Please fill out this field.</p>
                        </div>
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                          <label class="block tracking-wide font-bold mb-2" for="new-product-quantity">
                            Quantity
                          </label>
                          <input class="appearance-none block w-full bg-gray-200 text-bgdark border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="new-product-quantity" type="number" placeholder="0" />
                          <p class="text-alt text-xs italic">Please fill out this field.</p>
                        </div>
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                          <label class="block tracking-wide font-bold mb-2" for="new-product-type">
                            Type
                          </label>
                          <div class="relative">
                            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-bgdark py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="new-product-type">
                              <option>Trained</option>
                              <option>Untrained</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                          <label class="block tracking-wide  font-bold mb-2" for="new-product-description">
                            Product Description
                          </label>
                          <textarea class="appearance-none block w-full bg-gray-200 text-bgdark border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="new-product-description" rows="4" placeholder="Write your product description here..."></textarea>
                        </div>
                      </div>
                    </form>
                  </div>
              </div>
          </div>
        </>
    )};