import {useContext, useState} from "react";
import MyContext2 from "./store/theme-context";

export default function ThemeSelector() {
    const value = useContext(MyContext2);

    return <div style={{backgroundColor : value.theme}}>
        <select value={value.theme} onChange={e => value.setTheme(e.target.value)}>
            <option value="white">기본</option>
            <option value="black">다크모드</option>
        </select>
    </div>
}