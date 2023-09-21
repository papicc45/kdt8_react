import {Component} from "react";

class StatePrac1 extends Component {

    state = {
        str : '검정색 글씨',
        color : 'black',
    }


    changeRed = () => {
        this.setState((prevState) => ({
            str : '빨간색 글씨', color : 'red',
        }));
    }

    changeBlue = () => {
        this.setState((prevState) => ({
            str : '파란색 글씨', color : 'blue',
        }));
    }
    render() {
        return (
            <>
                <h1 style={{color : this.state.color}}>{this.state.str}</h1>
                <button onClick={this.changeRed}>빨간색</button>
                <button onClick={this.changeBlue}>파란색</button>
            </>
        )
    }
}

export default StatePrac1;