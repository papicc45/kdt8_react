import {createContext} from "react";

const MyContext = createContext({
    language : '',
    setLanguage : () => {},
});

export default MyContext;