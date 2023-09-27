import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function Redirect() {
    const navigate = useNavigate();
    useEffect(()=> {
        // 슬래시 '/' 사용 안할 경우 기존 url에 쌓여서 이동
        navigate('/user');
    }, []);
    return <div>Redirect</div>;
}