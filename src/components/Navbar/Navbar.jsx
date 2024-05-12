import { NavLink, Outlet } from "react-router-dom";
import { useValue } from "../../Context";
import "./Navbar.css"
import house from "../../assets/Navbar/house.png"
import order1 from "../../assets/Navbar/order (1).png"
import order from "../../assets/Navbar/order.png"
import cart from "../../assets/Navbar/shopping-cart.png"
import login from "../../assets/Navbar/account-login.png"

function Navbar(){

    const {signIn, handleSignin} = useValue();



    return(
        <>
            <div className="nav">
                <h3>BusyBusy</h3>
                <div className="right">
                    <img src={house} alt="home" className='icon-style' />
                    <NavLink to="/" style={({ isActive }) => isActive ? { color: "blue" } : { color: "black" }}>
                        <span>Home</span>
                    </NavLink>

                    {signIn && (
                        <>
                            <img src={order} alt="cart" className='icon-style' />
                            <NavLink to="/myorder" style={({ isActive }) => isActive ? { color: "blue" } : { color: "black" }}>
                                <span>Myorder</span>
                            </NavLink>
                        </>
                    )}

                    {signIn && (
                        <>
                            <img src={cart} alt="cart" className='icon-style' />
                            <NavLink to="/cart" style={({ isActive }) => isActive ? { color: "blue" } : { color: "black" }}>
                                <span>Cart</span>
                            </NavLink>
                        </>
                    )}

                    <img src={login} alt="signin" className='icon-style' />
                    <NavLink to="/signin" style={({ isActive }) => isActive ? { color: "blue" } : { color: "black" }}>
                        <span onClick={handleSignin}>{signIn ? "Log Out" : "Sign In"}</span>
                    </NavLink>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar;