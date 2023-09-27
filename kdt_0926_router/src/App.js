import Header from "./Components/Header";
import {Link, Outlet} from "react-router-dom";
import PracNavbar from "./PracComponents/PracNavbar";
// import Router from "./Router";

// function App() {
//   return (
//     <>
//         <Header></Header>
//         {/*컴포넌트의 내용들을 가져옴*/}
//         <Outlet></Outlet>
//         {/*<Router></Router>   버전 1*/}
//     </>
//   );
// }

function Prac() {
    return (
        <>
            <PracNavbar></PracNavbar>
        </>
    );
}

export default Prac;
