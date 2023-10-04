import {useContext, useState} from "react";
import CartContext from "../store/cart-context";

export default function Cart(props) {
    const [carts, setCarts] = useState([]);
    const [total, setTotal] = useState(0);

    return (
        <>
            <CartContext.Provider value={{carts, setCarts, total, setTotal}}>
                {props.children}
            </CartContext.Provider>
        </>
    )
}