import {createContext} from "react";

const CartContext = createContext({
    carts : [],
    setCarts : ()=> {},
    total : 0,
    setTotal : ()=> {},
})

export default CartContext;