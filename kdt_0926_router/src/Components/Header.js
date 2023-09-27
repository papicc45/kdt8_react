import {Link, useNavigate} from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    const navigation = () => {
      navigate('redirect');
    };
    //Link - 유저가 클릭했을 때
    return (
        <div>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/user">User</Link>
                </li>
                <li>
                    <button onClick={navigation}>Redirect</button>
                </li>
            </ul>
        </div>
    );
}