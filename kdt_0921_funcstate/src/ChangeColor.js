import {useState} from "react";

export default function ChangeColor() {
 const [text, setText] = useState("검정");
 const [color, setColor] = useState('black');

 const changeRed = () => {
     setText("빨간");
     setColor('red');
 }

 const changeBlue = () => {
     setText("파란");
     setColor('blue');
 }
 return <div>
   <h1 style={{color : color}}>{text}색 글씨</h1>
     <button onClick={changeRed}>빨간색</button>
     <button onClick={changeBlue}>파란색</button>
 </div>
};