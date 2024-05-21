import { useDispatch } from "react-redux";
//import { useValue } from "../../Context"
import "./CartItem.css"
import { RemoveCartThunk, decreaseQuantityThunk, increaseQuantityThunk } from "../../redux/Reducers/poductReducer";

export default function CartItem({ name, id, price, img, quantity, cartItems }) {

    //const {increaseQuantity, decreaseQuantity, handleRemoveToCart } = useValue(); 
    const dispatch = useDispatch();

    // decreaseQuantity({id, price, cartItems}) 
    //increaseQuantity({ id, price, name, cartItems })
    //handleRemoveToCart({id, price, name, cartItems})
    
    return (
        <>
            <div className="cartitem">
                <img src={img} alt="" />
                <div className="productdetails">
                    <p>{name}</p>
                    <div className="price">
                        <h2>&#8377; {price}</h2>
                        <img className="actionButtons" src="https://cdn-icons-png.flaticon.com/128/1828/1828899.png" alt="" onClick={() => dispatch(decreaseQuantityThunk({ id, price, cartItems }))} />
                        <div>{quantity}</div>
                        <img className="actionButtons" src="https://cdn-icons-png.flaticon.com/128/1828/1828919.png" alt="" onClick={() => dispatch(increaseQuantityThunk({ id, price, name, cartItems }))} />
                    </div>
                </div>
                <button onClick={() => dispatch(RemoveCartThunk({ id, price, name, cartItems }))}>Remove From Cart</button>
            </div>

        </>
    )
}