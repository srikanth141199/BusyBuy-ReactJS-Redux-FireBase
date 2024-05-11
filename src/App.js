import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CustomItemContext } from "./Context";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";

function App() {
  return (
    <>
      <CustomItemContext>
        <BrowserRouter basename="/BusyBuySrikanth">
          <Navbar/>
          <Routes>
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </CustomItemContext>
    </>
  );
}

export default App;
