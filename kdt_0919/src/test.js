import {Component} from "react";

class test extends Component {
    render() {
        const name = '이동준';
        const my_style = {
            backgroundColor : 'blue',
            color : "orange",
            fontSize : "40px",
            padding : "12px",
        }
        return <>
            <div style={my_style}>{name}</div>
        </>
    }
}

export default test;