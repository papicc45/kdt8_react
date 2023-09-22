import {useState} from "react";

export default function Toggle() {
    const [status, setStatus] = useState(false);

    const handleToggle = () => {
        if(status) {
            setStatus(false);
        } else {
            setStatus(true);
        }
    };
    return <div>
        <p>{status && '보여라'}</p>
        <button onClick={handleToggle}>토글</button>
    </div>
}