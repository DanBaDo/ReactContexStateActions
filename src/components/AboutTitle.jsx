import { useContext } from "react"
import { Context } from "../storage/SharedStorage"

function AboutTitle () {

    const [ store, setStore ] = useContext(Context);

    function clickHandler () {
        //setStore({...store, cifra: cifra+1})
        const newStore = {...store};
        newStore.cifra++;
        setStore(newStore);
    }

    return (
        <>
            <p>El número es {store.cifra}.</p>
            <button onClick={clickHandler}>Suma 1</button>
        </>
    )
}

export default AboutTitle