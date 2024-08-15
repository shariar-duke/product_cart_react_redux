import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Cart from "./comonents/Cart"
import Header from "./comonents/Header"
import Home from "./comonents/Home"
export default function App() {
  return (
    <Router>
      <Header/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cart" element={<Cart/>}  />
     </Routes>
    </Router>
  )
}