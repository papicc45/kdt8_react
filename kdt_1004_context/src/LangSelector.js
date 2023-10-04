import MyContext from "./store/lang-context";
import {useContext} from "react";

export default function LanguageSelector() {
    //두번쨰 방법 - useContext 이용
    const value = useContext(MyContext);

        return (
            <div>
            <h2>현재 선택된 언어 : {value.language}</h2>
            <select value={value.language} onChange={e => value.setLanguage(e.target.value)}>
                <option value="ko">한국어</option>
                <option value="eng">영어</option>
            </select>
        </div>
        );

    //첫번재 방법 - Consumer 이용
    // return <MyContext.Consumer>
    //     {value => {
    //     return <div>
    //         <h2>현재 선택된 언어 : {value.language}</h2>
    //         <select value={value.language} onChange={e => value.setLanguage(e.target.value)}>
    //             <option>한국</option>
    //             <option>일본</option>
    //             <option>미국</option>
    //         </select>
    //     </div>
    //         }
    //     }
    // </MyContext.Consumer>
}