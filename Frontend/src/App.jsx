import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import Product from "./Pages/Product";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/products/:category" element={<ProductList/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/register" element={ user ? <Navigate to="/"/> : <Register/>}/>
        <Route path="/login" element= { user ? <Navigate to="/"/> : <Login/> } />
        <Route path="/cart" element={<Cart/>}/>
          
      </Routes>
    </Router>
  )
};

export default App;
