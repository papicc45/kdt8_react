import {useContext} from "react";
import CartContext from "../store/cart-context";

export default function ProductList() {

    const productList = [
        {
            id : 1,
            name : '상품1',
            price : 2000,
        },
        {
            id : 2,
            name : '상품2',
            price : 500,
        },
        {
            id : 3,
            name : '상품3',
            price : 9000,
        },
        {
            id : 4,
            name : '상품4',
            price : 1000,
        },
        {
            id : 5,
            name : '상품5',
            price : 800,
        }
    ]

    const cartContext = useContext(CartContext);
    const addCart = (id) => {
        const item = productList.filter((value) => value.id === id);
        console.log(item);
        cartContext.setCarts([...cartContext.carts, item[0]]);
        cartContext.setTotal(cartContext.total + Number(item[0].price));

    }
    return (
        <>
            {productList.map((value) => {
                return <div key={value.id}>
                    이름 : {value.name}, 가격 : {value.price}
                    <button onClick={()=> addCart(value.id)}>장바구니에 추가</button>
                </div>
            })}
        </>
    )
}