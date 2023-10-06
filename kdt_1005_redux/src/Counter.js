import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "./store/divide/counter";

export default function Counter() {

    const number = useSelector(state => state.counter.counter);
    const dispatch = useDispatch();

    return (
        <>
            <h2>{number}</h2>
            <button onClick={()=> dispatch(counterAction.increment())}>PLUS</button>
            <button onClick={()=> dispatch(counterAction.decrement())}>MINUS</button>
            <button onClick={()=> dispatch(counterAction.addValue({ten : 10}))}>+++</button>
        </>
    )
}