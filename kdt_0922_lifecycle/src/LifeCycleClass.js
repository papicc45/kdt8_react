import {Component} from "react";

class MyComponent extends Component {
    state = {
        childNumber : 0,
    }
    //생성될 때
    componentDidMount() {
        console.log('Mount');
    }

    //업데이트 될 때
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Update');
        console.log('prevProps ', prevProps);
        console.log('prevState ', prevState);
        console.log('snapshot ', snapshot);

    }
    //삭제될 때, 자식 컴포넌트의 state값은 초기화됨
    componentWillUnmount() {
        console.log('Unmount');
    }

    changeChildNumberState = () => {
        this.setState({ childNumber : this.state.childNumber + 1 });
    }
    render() {
        return <>
            <div>My Component {this.props.number}</div>
            <button onClick={this.changeChildNumberState}>PLUS Child</button>
        </>
    }
}

class LifeCycleClass extends Component {
    state = {
        number : 0,
        visible : true,
    };

    changeNumberState = () => {
        this.setState({ number : this.state.number + 1} );
    }

    changeVisibleState = () => {
        this.setState({ visible : !this.state.visible });
    }
    render() {
        return <>
            <button onClick={this.changeNumberState}>PLUS</button>
            <button onClick={this.changeVisibleState}>ON/OFF</button>
            {this.state.visible && <MyComponent number={this.state.number}/>}
        </>
    }
}

export default LifeCycleClass;