import {useCallback, useState} from "react";

export default function UseCallback() {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');

    const incrementCount = useCallback(()=> {
        setCount((prevCount)=> prevCount + 1);
    }, []);
    return (
        <>
            <input value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
            <ChildComponent onClick={incrementCount}></ChildComponent>
            <ChildComponent2></ChildComponent2>
            <p> Count : {count}</p>
        </>
    )
}

function ChildComponent({onClick}) {
    console.log('child component render');
    return <button onClick={onClick}>Increment </button>
}

function ChildComponent2() {
    return <button>button</button>
}