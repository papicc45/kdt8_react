import {Component} from "react";

class StatePrac2 extends Component {
    state = {
        str : '안녕하세요'
    }

    disableText = () => {
        this.setState((prevState) => ({ str : '' }));
    }
    render() {
        return (
            <>
                <button onClick={this.disableText}>사라져라</button>
                <h1>{this.state.str}</h1>
            </>
        )
    }
}

export default StatePrac2;