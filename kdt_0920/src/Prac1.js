import {Component} from "react";

class Prac1 extends Component {

    showMessage = (msg) => {
        alert(msg);
    }

    render() {
        return <>
            <button onClick={()=> this.showMessage(this.props.message)}>show Message</button>
        </>
    }

}

export default Prac1;