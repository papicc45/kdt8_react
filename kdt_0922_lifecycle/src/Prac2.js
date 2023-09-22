import {useState, useEffect} from "react";
import axios from 'axios';


export default function Prac2() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect( ()=> {
        //비동기 함수 직접적으로 지원하지 않음
        //비동기함수 사용하려면 내부에 비동기함수 정의하고 호출
        const getUser = async () => {
            const result = await axios({
                method : 'GET',
                url : 'https://jsonplaceholder.typicode.com/users'
            });
            setUsers(result.data);
            setLoading(true);
        }

        getUser();
    }, []);
    return (
        <>
            {loading ?  (
                <ul>
                {
                    users.map((value, index) => {
                        return <li key={index}>
                            {value.name} - {value.email}
                        </li>
                    })
                }
            </ul>
            ) : (
                <div>loading</div>
            )}
    </>
    )
}