import { NavLink, Outlet } from "react-router-dom";
import "./Navbar.css"
import house from "../../assets/Navbar/house.png"
//import order1 from "../../assets/Navbar/order (1).png"
import order from "../../assets/Navbar/order.png"
import cart from "../../assets/Navbar/shopping-cart.png"
import login from "../../assets/Navbar/account-login.png"
import {  useSelector } from "react-redux";
import { authSelector } from "../../redux/Reducers/authReducer";

function Navbar(){

    //const {signIn, handleSignin} = useValue();

    const {isLoggedIn} = useSelector(authSelector)


    return(
        <>
            <div className="nav">
                <h3>BusyBusy</h3>
                <div className="right">
                    <img src={house} alt="home" className='icon-style' />
                    <NavLink to="/" style={({ isActive }) => isActive ? { color: "#41cdece3" } : { color: "black" }}>
                        <span>Home</span>
                    </NavLink>

                    {isLoggedIn && (
                        <>
                            <img src={order} alt="cart" className='icon-style' />
                            <NavLink to="/myorder" style={({ isActive }) => isActive ? { color: "#41cdece3" } : { color: "black" }}>
                                <span>Myorder</span>
                            </NavLink>
                        </>
                    )}

                    {isLoggedIn && (
                        <>
                            <img src={cart} alt="cart" className='icon-style' />
                            <NavLink to="/cart" style={({ isActive }) => isActive ? { color: "#41cdece3" } : { color: "black" }}>
                                <span>Cart</span>
                            </NavLink>
                        </>
                    )}

                    <img src={login} alt="signin" className='icon-style' />
                    <NavLink to="/signin" style={({ isActive }) => isActive ? { color: "#41cdece3" } : { color: "black" }}>
                        {/* <span onClick={dispatch(userLoggedIn(false))}>{isLoggedIn ? "Log Out" : "Sign In"}</span> */}
                        <span >{isLoggedIn ? "Log Out" : "Sign In"}</span>
                    </NavLink>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar;