import { createContext } from "react";

export const CardContext = createContext();

const { Provider } = CardContext;

const CardProvider = () => {
    return (
        <Provider>

        </Provider>
    )
}

export default CardProvider;

// export const contexto = React.createContext();

// const contextoProvider = (props) => {
//     // Initial Provider State
//     const state = {};

//     return (
//         <contexto.Provider value={{ state: state }
//         }>
//             {props.children}
//         </contexto.Provider >
//     );
// }

// export default contextoProvider;