import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { CustomItemContext } from "./Context";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Order from "./components/Order/Order";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            {/* <Route path="/cart" element={<Cart />} />
            <Route path="/myorder" element={<Order />} /> */}
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
