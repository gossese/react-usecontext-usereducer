import { createContext } from "react";

export const CartContext = createContext({  //CartContext is capitalized because we use it as a React component 
    items: [],
    addItemToCart: () => {},
});
