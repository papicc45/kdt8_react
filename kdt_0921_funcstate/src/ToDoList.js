import {useState} from "react";

export default function ToDoList() {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [checkList, setCheckList] = useState([]);
    const addTodo = () => {
        if(todoList.length >= 10) {
            alert("할일이 너무 많아요 !");
            return;
        }
        if(todo !== '') {
            setTodoList([...todoList, todo]);
            setTodo('');
        }
    }
    const deleteTodo = () => {
        let newList = [];
        for(let todo of todoList) {
            let boolCheck = false;
            for(let check of checkList) {
                if(todo === check) {
                    console.log(check);
                    boolCheck = true;
                }
            }
            if(!boolCheck) {
                newList.push(todo);
            }

        }
        setTodoList(newList);
        setCheckList([]);
    }

    const addCheckList = (e) => {
        if(e.target.checked) {
            setCheckList([...checkList, e.target.value]);
        } else {
            setCheckList(checkList.filter(value => {
                return value !== e.target.value;
            }));
        }
    }
    return <div>
        <input type="text" id="todo" placeholder="할 일 입력.." value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button onClick={addTodo}>추가</button>
        <br/>
        <ul>
            {todoList.map((value, index) => {
            return (
                <li key={index}>
                    <input type="checkbox" value={value} onChange={(e)=> addCheckList(e)} checked={checkList.includes(value)} />{value}
                </li>
            );
        })}
        </ul>
        <br/>
        <button onClick={deleteTodo}>완료된 할 일 삭제</button>
    </div>
}