import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const ItemContext = createContext();

function useValue(){
    const value = useContext(ItemContext);
    return value;
}

function CustomItemContext({children}){

    const [email, setEmail]= useState("");
    const [password, setPassword] = useState("");
    const [signIn, setSignIn] = useState(false);
    const [amt, setAmt] = useState(5000);
    const [cartItems, setCartItems] = useState([]);
    const [totalAmt, setTotalAmt] = useState(0);
    const [isMyorder, setIsMyOrder] = useState(false);
    const [myorder, setMyOrder] = useState([])

    const handleSignin = ()=>{
        setSignIn(false);
    }

    const increaseQuantity = ({ id, price, name })=>{
        const ind = cartItems.findIndex((item) => item.id === id)

        if(ind === -1){
            setCartItems([{price : price, name : name, quantity : 1}]);
            
        }
        else{
            const updatedCartItem = [...cartItems];
            updatedCartItem[ind].quantity++;
            setCartItems(updatedCartItem);
        }
        setTotalAmt(totalAmt + price)
    }

    const decreaseQuantity = ({id, price}) => {
        const ind = cartItems.findIndex((item) => item.id === id);

        if(ind !== -1){
            const updatedCartItem = [...cartItems];
            updatedCartItem[ind].quantity--;
            setCartItems(updatedCartItem);
            setTotalAmt(totalAmt - price)
            if(updatedCartItem[ind].quantity === 0){
                const id = updatedCartItem[ind].id
                const price = updatedCartItem[ind].price
                const name = updatedCartItem[ind].name 
                handleRemoveToCart({id, price, name})
            }
        }
    }

    const handleRemoveToCart =({id, price, name})=>{
        const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== id);
        setCartItems(updatedCartItems);
        setTotalAmt(totalAmt - price)
        toast.success(`${name} remove to cart`);
    }

    return(
        <ItemContext.Provider value = {{
            email, setEmail,
            password, setPassword,
            signIn, setSignIn,
            handleSignin,
            amt, setAmt,
            cartItems, setCartItems,
            totalAmt, setTotalAmt,
            isMyorder, setIsMyOrder,
            myorder, setMyOrder,
            increaseQuantity,
            decreaseQuantity,
            handleRemoveToCart
        }}>
            {children}
        </ItemContext.Provider>
    )
}

export {useValue, CustomItemContext};