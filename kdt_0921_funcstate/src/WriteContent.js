import {useState} from "react";

export default function WriteContent() {
    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [comments, setComments] = useState([]);
    const [searchType, setSearchType] = useState('writer');
    const [inputSearch, setInputSearch] = useState("");
    const [searchList, setSearchList] = useState([]);

    const onChange = (e) => {
        if(e.target.id === 'writer') {
            setWriter(e.target.value);
        } else {
            setTitle(e.target.value);
        }
    }

    const addComments = () => {
        const newComment = {
            writer : writer,
            title : title,
        };
        setComments([...comments, newComment]);
    }

    const getSearchList = () => {
        const result = comments.filter((value) => {
            if(value[searchType].includes(inputSearch)) {
                return true;
            } else {
                return false;
            }
        })
        setSearchList(result);
    }
    return <div>
        <form>
            <label htmlFor="writer">작성자:</label>
            <input type="text" id="writer" value={writer} onChange={(e)=> onChange(e)} />
            <label htmlFor="title">제목:</label>
            <input type="text" id="title" onChange={(e) => onChange(e)} />
            <button type="button" onClick={addComments}>작성 </button>
        </form>
        <form>
            <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                <option value="writer">작성자</option>
                <option value="title">제목</option>
            </select>
            <input  type="text"  placeholder="검색어" value={inputSearch} onChange={(e) => setInputSearch(e.target.value)}/>
            <button type="button" onClick={getSearchList}> 검색 </button>
        </form>

        <table border={1} cellSpacing={0}>
            <thead>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
            </tr>
            </thead>
            <tbody>
            {comments.map((value, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{value.title}</td>
                        <td>{value.writer}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
        <h4>검색결과</h4>
        <table border={1} cellSpacing={0}>
            <thead>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
            </tr>
            </thead>
            <tbody>
            {searchList.map((value, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{value.title}</td>
                        <td>{value.writer}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    </div>
}