import styled from 'styled-components';
import {useState} from "react";

const _Input = styled.input`
    width: 100px;
  height: 20px;
  margin: 5px;
`;

const _Btn = styled.button`
  background-color: aqua;
  width: 40px;
  height: 20px;
  margin: 5px;
  border-radius: 4px;
`;

const _Lists = styled.div`
  width: 200px;
  height: 200px;
  overflow: auto;
`;

const _List = styled.div`
border-bottom: 1px solid black;
`;

export default function Prac4() {
    const [contents, setContents] = useState([]);
    const [content, setContent] = useState('');
    return (
        <div>
            <_Input onChange={(e)=> setContent(e.target.value)}></_Input>
                <_Btn onClick={()=> setContents([...contents, content])}>Add</_Btn>
                <_Lists>
                    {
                        contents.map((val) => {
                            return <_List>{val}</_List>
                        })
                    }
                </_Lists>
            </div>
    )
}