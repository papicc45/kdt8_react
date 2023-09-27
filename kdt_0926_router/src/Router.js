import {createBrowserRouter, BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import NotFound from "./Components/NotFound";
import User from "./Components/User";
import Redirect from "./Components/Redirect";
import UserDetail from "./Components/UserDetail";
import App from "./App";
import Error from "./Components/Error";
import Comment from "./Components/Comment";

// export default function Router() {
//     return (
//         <>
//             <BrowserRouter>
//                 <Header></Header>
//                 <Routes>
//                     <Route path="/" element={<Home/>}></Route>
//                     <Route path="/about" element={<About/>}></Route>
//                     <Route path="/user" element={<User/>}></Route>
//                     <Route path="/user/:id" element={<UserDetail/>}></Route>
//                     <Route path="/redirect" element={<Redirect/>}></Route>
//                     <Route path="*" element={<NotFound/>}></Route>
//                 </Routes>
//             </BrowserRouter>
//         </>
//     )
// }

const Router = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        children : [
            {
                path : '',
                element : <Home/>,
                errorElement : <Error/>
            },
            {
                path : 'about',
                element : <About/>,
            },
            {
                path : 'redirect',
                element : <Redirect/>,
            }
        ],
        errorElement : <NotFound/>,
    },
    {
        path : '/user',
        element : <App/>,
        children : [
            {
                path: '',
                element: <User/>,
            },
            {
                path: ':id',
                element: <UserDetail/>,
                children : [
                    {
                        path : 'comment',
                        element : <Comment/>,

                    }
                ]
            }
        ]
    }
]);


export default Router;