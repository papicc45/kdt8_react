import {Link, Outlet, useParams} from "react-router-dom";
import { users } from './User';
export default function UserDetail() {

    const { id } = useParams();

    return (
        <>
            <div>사용자 {id}는 {users[Number(id) - 1].name}</div>
            <Link to="comment">Comment</Link>
            {/*comment 자식 컴포넌트 Outlet으로 추가*/}
            <Outlet context={{comment : users[Number(id) - 1].comment}}/>
        </>
    )
}