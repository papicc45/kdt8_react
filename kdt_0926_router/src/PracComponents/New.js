import {useNavigate, useSearchParams} from "react-router-dom";

export default function New() {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get('name'));
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        <>
            <div>학생의 이름은 <span style={{ color : 'green' }}>new</span>입니다.</div>
            <div>실제 이름은 <span style={{ color : 'red' }}>{searchParams.get('name')}</span></div>
            <button onClick={goBack}>이전페이지로</button>
        </>
    )
}