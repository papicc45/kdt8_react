import {createBrowserRouter} from "react-router-dom";
import Prac from "./App";
import NameKdt from "./PracComponents/NameKdt";
import New from "./PracComponents/New";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Prac/>,
    },
    {
        path : 'student',
        children : [
            {
                path : ':value',
                element : <NameKdt/>,
            },
            {
                path : 'new',
                element : <New/>,
            }
        ]
    }
]);

export default router;