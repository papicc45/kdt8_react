import styled from 'styled-components';

const _Btn = styled.button`
  background-color: blue;
  color: red;
&:active {
  background-color: red;
  color : blue;
}
`

export default function Prac3() {
    return (
        <>
            <_Btn>색상변경!</_Btn>
        </>
    )
}