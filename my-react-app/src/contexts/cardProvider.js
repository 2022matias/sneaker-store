import { createContext } from "react";
import { useState } from "react";
export const CardContext = createContext();

const { Provider } = CardContext;

const CardProvider = ({ children }) => {
    const [cantidadEnElCarrito, setCantidadEnElCarrito] = useState(0);
    function sumarAlCarrito(cantidad) {
        setCantidadEnElCarrito(cantidadEnElCarrito + cantidad);
    }

    const valorContexto = { sumarAlCarrito, cantidadEnElCarrito }
    return (
        <Provider value={valorContexto}>
            {children}
        </Provider>
    )
}

export default CardProvider;

