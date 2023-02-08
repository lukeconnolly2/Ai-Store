import {Route, Routes, useLocation} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavBar from './NavBar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";


function App() {
  const location = useLocation()
  return (
    <div className="bg-bgdark text-primary font-coolfont">
      <NavBar/>
      <div className="container mx- mt-2">
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="product/:prodid" element={<ProductPage />}/>      
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkoutpage" element={<CheckoutPage />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
)}

export default App
