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

    const handleSignin = ()=>{
        setSignIn(false);
    }

    return(
        <ItemContext.Provider value = {{
            email, setEmail,
            password, setPassword,
            signIn, setSignIn,
            handleSignin
        }}>
            {children}
        </ItemContext.Provider>
    )
}

export {useValue, CustomItemContext};