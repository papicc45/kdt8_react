import {useContext} from "react";
import { useSelector, useDispatch } from "react-redux";
import { REMOVE_CART } from "../store/pracStore";

export default function CartItem() {

    const carts = useSelector(state => state);
    const dispatch = useDispatch();

    const totalPrice = carts.reduce((acc, val) => acc + val.price, 0);
    const removeItem = (id) => {
        dispatch({ type : REMOVE_CART, id});
    }
    return (
        <div>
            <h1>장바구니 목록</h1>
            {carts.map((value)=> (
                <div key={value.id}>
                    <span>이름 : {value.name}</span>
                    <span>가격 : {value.price}</span>
                    <button onClick={()=> removeItem(value.id)}>삭제</button>
                </div>
            ))}
            <h2>총 금액 : {totalPrice}</h2>
        </div>
    )
}