import {useState} from "react";
import MyContext2 from "./store/theme-context";

export default function ThemeProvider(props) {
    const [theme, setTheme] = useState('');
    return <MyContext2.Provider value={{theme, setTheme}}>
        {props.children}
    </MyContext2.Provider>
}