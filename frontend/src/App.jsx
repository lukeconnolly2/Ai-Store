import {Route, Routes} from "react-router-dom"
import NavBar from './NavBar'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from "./pages/Cart"
import ProductPage from "./pages/ProductPage"
import { TESTPRODUCTS } from "../TESTPRODUCTS"
function App() {
  return (
    <div className="bg-bgdark text-primary font-coolfont">
      <NavBar/>
      <div className="container mx-auto mt-2">
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route
            element={<ProductPage />}
            path="product/:prodid"
          />      
          <Route path="/cart" element={<Cart />} />
        </Routes> 
      </div>
    </div>
)}

export default App
