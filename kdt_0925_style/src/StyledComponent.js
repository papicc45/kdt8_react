import styled from 'styled-components';

const _Box = styled.div`
  background-color: blue;
  width: 100px;
  height: 100px;
`

//props 이용가능
const _Box2 = styled.div`
  background-color: ${props => props.color};
  width: 200px;
  height: 200px;
`

//다른 스타일컴포넌트 속성 상속
const _Circle = styled(_Box2)`
  border-radius: 100px;
`

//기존 태그를 이름만 바꿔서 사용하는 방법 = as 키워드 사용
const _Btn = styled.button`
  background-color: blue;
  color: pink;
  padding: 10px 15px;
  border-radius: 4px;
`

//태그의 속성값 접근 = attrs 사용
const _Input = styled.input.attrs({ required : true })`
`

//중첩
const _Box3 = styled.div`
  width: 200px;
  height: 100px;
  background-color: aqua;
  line-height: 100px;
  text-align: center;
  
  //해당 컴포넌트 내부의 다른 컴포넌트 css 지정
  ${_Input} {
    background-color: purple;
  }
  
  //해당 컴포넌트 내부의 태그 css 지정
  .ptag {
    color : indianred;
    font-weight: bold;
    
    &:hover {
      font-size: 32px;
    }
  }
`
export default function StyledComponent() {
    return (
        <div>
            <_Box3>
                <p className="ptag">Hello Styled</p>
                <_Input></_Input>
            </_Box3>
            <_Box></_Box>
            <_Box2 color="green" as="header"></_Box2>
            <_Circle color="red"></_Circle>
            <_Btn as="a">클릭</_Btn>
            <_Input></_Input>
        </div>
    )
}