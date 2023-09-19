import {Component} from "react";
import PropTypes from "prop-types";

//class형 컴포넌트
//class 컴포넌트명 extends Component

class ClassComponent extends Component {
    //클래스형 컴포넌트에서는 render 함수 필수

    render() {
    const { name } = this.props;
        return <>
            <h1>Hello {name}</h1>
            <p>여기는 클래스형 컴포넌트입니다.</p>
            <h4>{this.props.name}</h4>
        </>
    }
}

ClassComponent.defaultProps = {
    name : '홍길동',
}

ClassComponent.propTypes = {
    name : PropTypes.string.isRequired,
}

export default ClassComponent;