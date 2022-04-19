import { useState, createContext } from "react";

export const Context = createContext(); 

export function ContextProvider ( {children} ) {

    const store = useState({
        saludo: "Hola",
        cifra: 43,
    });

    return (
        <Context.Provider value={store}>
            {children}
        </Context.Provider>
    )
}