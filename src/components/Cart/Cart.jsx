import { Link } from "react-router-dom";
import { useValue } from "../../Context"
import CartItem from "../CartItem/CartItem";
import "./Cart.css"
import { useDispatch, useSelector } from "react-redux";
import { productSelecter, updateCartItems, updateIsMyOrder, updateMyOder, updateTotalAmount } from "../../redux/Reducers/poductReducer";

export default function Cart() {
    //const { cartItems, setCartItems, totalAmt, setTotalAmt, setIsMyOrder, setMyOrder } = useValue();
    const {cartItems, totalAmt} = useSelector(productSelecter)
    const dispatch = useDispatch();
    console.log("cartItems : ", cartItems);

    const handlepurchase = () => {
        //setIsMyOrder(true);
        //setMyOrder(cartItems);
        //setCartItems([]);
        //setTotalAmt(0);
        dispatch(updateIsMyOrder(true));
        dispatch(updateMyOder(cartItems)); 
        dispatch(updateCartItems([]));
        dispatch(updateTotalAmount(0))
        
    }

    return (
        <>
            {cartItems.length > 0 ?
                (
                    <div className="cartaside">
                        <h3 className="totalPrice">
                            TotalPrice &#8377; {totalAmt}/-
                        </h3>
                        <Link to="/myorder">
                            <button className="purchasebtn" onClick={handlepurchase} >Purchase</button>
                        </Link>
                    </div>
                ) : 
            ""}
            <div className="cart">
                {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <CartItem key={item.id} name={item.name} img={item.img} price={item.price} id={item.id} quantity={item.quantity} cartItems = {cartItems}/>
                    ))
                ) : (
                    <p className='empty'>Your cart is empty😊😊</p>
                )}
            </div>
        </>
    )
}