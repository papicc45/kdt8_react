import {useState} from "react";

export default function ShowAndHide() {
    const [display, setDisplay] = useState("");
    const [text, setText] = useState("사라져라");

    const changeStatus = () => {
        if(text === "사라져라") {
            setDisplay("none");
            setText("보여라");
        } else {
            setDisplay("");
            setText("사라져라");
        }
    }
    return <div>
        <button onClick={changeStatus}>{text}</button>
        <h1 style={{display : display}}>안녕하세요</h1>
    </div>
}