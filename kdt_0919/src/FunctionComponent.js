import PropTypes from "prop-types";

const functionComponent = (props) => {

    return (
        <>
            <div>반갑습니다 {props.name}에 오신것을 환영합니다.</div>
            <div>나이 : {props.age}</div>
            <div>{props.children}</div>
    </>
    );
}

functionComponent.defaultProps = {
    name : 'kdt',
    age : 10,
}

functionComponent.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
}

export default functionComponent;