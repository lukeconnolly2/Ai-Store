import {Route, Routes, useLocation} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavBar from './NavBar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import Login from "./pages/Login"
import { ShopContextProvider } from "./context/ShopContext";
import { AuthProvider, useAuth } from "./context/auth";
import { RequireAuth } from "./context/RequireAuth";
import  AdminDash from "./pages/AdminDash";
import { ImagePreviewContextProvider } from "./context/ImagePreviewContext";


function App() {
  const location = useLocation()
  return (
    <AuthProvider>
    <ShopContextProvider>
    <ImagePreviewContextProvider>
    <div className="bg-bgdark text-primary font-coolfont">
      <NavBar/>
      <div className="container mx- mt-2">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<RequireAuth> <Products /> </RequireAuth>} />
            <Route path="product/:prodid" element={<RequireAuth><ProductPage /></RequireAuth>}/>      
            <Route path="/cart" element={<RequireAuth><Cart /></RequireAuth>} />
            <Route path="/checkoutpage" element={<CheckoutPage />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/admindash" element={<AdminDash />}/>
          </Routes>
        </AnimatePresence>
      </div>
    </div>
    </ImagePreviewContextProvider>
    </ShopContextProvider>
    </AuthProvider>
)}

export default App
