import React, {useMemo, useState} from "react";

export default function UseMemo() {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');

    const calc = useMemo(()=> {
        console.log('calc...');
        for(let i=0 ; i<100000 ; i++) {
            return count * 2;
        }
    }, [count]);

  return (
      <>
          <input value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
          <button onClick={()=> setCount(count + 1)}>Increment Count</button>
          <p>Count : {count}</p>
          <p>Dobuled Count : {calc}</p>
      </>
  )
};