import { createContext, useContext, useState } from "react";

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
            myorder, setMyOrder
        }}>
            {children}
        </ItemContext.Provider>
    )
}

export {useValue, CustomItemContext};