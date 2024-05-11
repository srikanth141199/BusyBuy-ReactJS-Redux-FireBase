import { BrowserRouter } from "react-router-dom";
import { CustomItemContext } from "./Context";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <CustomItemContext>
        <BrowserRouter>
          <Navbar/>
        </BrowserRouter>
      </CustomItemContext>
    </>
  );
}

export default App;
