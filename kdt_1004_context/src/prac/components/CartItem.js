import {useContext} from "react";
import CartContext from "../store/cart-context";

export default function CartItem() {
    const cartContext = useContext(CartContext);

    const deleteItem = (id, price) => {
        const item = cartContext.carts.filter((value) => value.id !== id);
        cartContext.setCarts(item);
        cartContext.setTotal(cartContext.total - Number(price));
    }
    return (
        <div>
            <h1>장바구니 목록</h1>
            {cartContext.carts.map((value) => {
                return <div key={value.id}>
                    이름 : {value.name}, 가격 : {value.price}
                    <button onClick={()=> deleteItem(value.id, value.price)}>제거</button>
                </div>
            })}
            <h2>총 금액 : {cartContext.total}</h2>
        </div>
    )
}