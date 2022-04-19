import { useContext } from "react"
import { Context } from "../storage/SharedStorage"

function MainTitle () {

    const [ store, ] = useContext(Context);

    return (
        <p>{store.saludo}, humano. El número es {store.cifra}.</p>
    )
}

export default MainTitle