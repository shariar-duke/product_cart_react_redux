import { Provider } from "react-redux"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Cart from "./comonents/Cart"
import Header from "./comonents/Header"
import Home from "./comonents/Home"
import store from "./redux/store"
export default function App() {
  return (

    <Provider store={store}>
       <Router>
      <Header/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cart" element={<Cart/>}  />
     </Routes>
    </Router>
    </Provider>
   
  )
}