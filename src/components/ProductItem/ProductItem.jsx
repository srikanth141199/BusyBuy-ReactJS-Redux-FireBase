import { useNavigate } from "react-router-dom";
import { useValue } from "../../Context";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseInit";
import { toast } from "react-toastify";
import "./ProductItems.css"
import { useSelector } from "react-redux";
import { authSelector } from "../../redux/Reducers/authReducer";
import { productSelecter, updateCartItems, updateTotalAmount } from "../../redux/Reducers/poductReducer";
import { useDispatch } from "react-redux";

export default function ProductItem({ item }) {

    // const {  cartItems, setCartItems, totalAmt, setTotalAmt } = useValue();
    const {isLoggedIn} = useSelector(authSelector);
    const {cartItems, totalAmt} = useSelector(productSelecter)
    const navigate = useNavigate();
    console.log("item : ", item);
    const dispatch = useDispatch();

    const handleAddToCart = async()=>{
        if(isLoggedIn){

            const itemCart = cartItems.find((cartItem) => item.id === cartItem.id );

            //adding the item to Cart
            if(itemCart){
                const updatedCartItems = cartItems.map((cartItem) =>
                    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                    
                  );
                //   setCartItems(updatedCartItems);
                //   setTotalAmt(totalAmt + item.price);
                  dispatch(updateCartItems(updatedCartItems));
                  dispatch(updateTotalAmount(item.price))
            }
            else{
                //setCartItems([...cartItems, {...item, quantity : 1}]);
                //setTotalAmt(totalAmt + item.price);
                dispatch(updateCartItems([...cartItems, {...item, quantity : 1}]));
                dispatch(updateTotalAmount(item.price))

            }

            //adding cart details in DB

            try {

                await addDoc(collection(db, "cart"), {
                    name: item.name,
                    price: item.price,
                    img: item.img,
                    quantity: itemCart ? itemCart.quantity + 1 : 1,
                })
                toast.success(`${item.name} added to cart`);
            } catch (error) {
                console.error('Error adding item to cart:', error);
                toast.error('Failed to add item to cart');
            }

        }
        else{
            navigate("/signIn")
        }
        
    }

    return (
        <>
            <div className="productItem">
                <img src={item.img} alt="productimg" />
                <p>{item.name}</p>
                <h3>&#8377; {item.price}</h3>
                <button className="btn" onClick={handleAddToCart}>
                    Add To Cart
                </button>
            </div>
        </>
    )
}