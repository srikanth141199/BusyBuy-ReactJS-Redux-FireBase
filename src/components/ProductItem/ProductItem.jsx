import { useNavigate } from "react-router-dom";
import { useValue } from "../../Context";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseInit";
import { toast } from "react-toastify";
import "./ProductItems.css"

export default function ProductItem({ item }) {

    const { signIn, cartItems, setCartItems, totalAmt, setTotalAmt } = useValue();
    const navigate = useNavigate();
    console.log("item : ", item);

    const handleAddToCart = async()=>{
        if(signIn){

            const itemCart = cartItems.find((cartItem) => item.id === cartItem.id );

            //adding the item to Cart
            if(itemCart){
                const updatedCartItems = cartItems.map((cartItem) =>
                    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                    
                  );
                  setCartItems(updatedCartItems);
                  setTotalAmt(totalAmt + item.price);
            }
            else{
                setCartItems([...cartItems, {...item, quantity : 1}]);
                setTotalAmt(totalAmt + item.price);
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