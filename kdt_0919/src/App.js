

import Test from "./test";
import Test2 from "./test2";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import PropTypes from "prop-types";
import PropPrac from "./PropPrac";

function App() {
  return <>
      {/*<ClassComponent name="이동준"></ClassComponent>*/}
      {/*<ClassComponent></ClassComponent>*/}
      {/*<FunctionComponent name="kdt_8" age={12}>안녕</FunctionComponent>*/}
      {/*<FunctionComponent></FunctionComponent>*/}
      <PropPrac title="비가 오면 열리는 상점" author="김유진" price="13,500원" type="자기계발서"></PropPrac>

    </>
}

export default App;
