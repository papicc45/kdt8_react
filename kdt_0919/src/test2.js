import {Component} from "react";
import jenkins from './image/jenkins.png';

class test2 extends Component {

    render() {
        const style = {
            color : 'orange',
            fontSize : '40px',
            marginTop : '20px',
        }
        return <div style={style}>
                <h2>안녕하세요</h2>
                <img src={jenkins} alt=""/>
            </div>

    }
}

export default test2;