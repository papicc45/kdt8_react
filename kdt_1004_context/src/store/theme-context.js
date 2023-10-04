import {createContext} from "react";

const MyContext2 = createContext({
    theme : 'white',
    setTheme : () => {},
});

export default MyContext2;