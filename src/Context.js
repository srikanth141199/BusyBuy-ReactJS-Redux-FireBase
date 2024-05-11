import { createContext, useContext } from "react";

const ItemContext = createContext();

function useValue(){
    const value = useContext(ItemContext);
    return value;
}

function CustomItemContext({children}){

    return(
        <ItemContext.Provider value = {{}}>
            {children}
        </ItemContext.Provider>
    )
}

export {useValue, CustomItemContext};