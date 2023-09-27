import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import {useEffect} from "react";

export default function NameKdt() {
    const { value } = useParams();

    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    console.log(searchParams);
    const goBack = () => {
        navigate(-1);
    }
    return (
        <>
            <div>학생의 이름은 <span style={{ color : 'green' }}>{value}</span>입니다.</div>
            <button onClick={goBack}>이전페이지로</button>
        </>
    )
}