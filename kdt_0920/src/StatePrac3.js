import {Component} from "react";

class StatePrac3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            idx : 1,
            select : '',
            allList : [],
            viewList : [],
        }

        this.writeContent = this.writeContent.bind(this);
        this.changeSelect = this.changeSelect.bind(this);
        this.searchContent = this.searchContent.bind(this);
    }

    writeContent()  {
        this.setState((prevState) => {
            const writer = document.getElementById('writer').value;
            const title = document.getElementById('title').value;

            // this.state.allList.push({writer : writer, title : title, idx : this.state.idx});
            const arr = {writer : writer, title : title, idx : this.state.idx};
            return ({
                idx : prevState.idx + 1,
                allList : [...prevState.allList, arr],
                viewList : this.state.allList,
            });
        });
    }

    changeSelect() {
        this.setState(() => {
            const select = document.getElementById('select');
            const opt = select.options[select.selectedIndex].value;

            return ({ select : opt });
        })
    }

    searchContent() {
        this.setState((prevState) => {
            const val = document.getElementById('search').value;
            let newList = this.state.allList.filter((idx)=> {
                if(this.state.select === 'writer')
                    return idx.writer.includes(`${val}`);
                else
                    return idx.title.includes(`${val}`);
            })

            return ({ viewList : newList });
        })
    }

    render() {
        return (
            <>
                <fieldset>
                    작성자 : <input type="text" placeholder="작성자" id="writer"/>
                    &nbsp;&nbsp; 제목 : <input type="text" id="title"/>
                    <button onClick={this.writeContent}>작성</button>
                </fieldset>
                <select name="" id="select" onChange={this.changeSelect}>
                    <option value="writer">작성자</option>
                    <option value="title">제목</option>
                </select>
                &nbsp;&nbsp; <input type="text" placeholder="검색어" id="search"/>
                &nbsp;&nbsp;
                <button onClick={this.searchContent}>검색</button>
                <br/>
                <table>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                    {this.state.viewList.map((value, idx) => {
                        return (
                            <tr>
                                <td>{value.idx}</td>
                                <td>{value.title}</td>
                                <td>{value.writer}</td>
                            </tr>
                            )
                    })}
                </table>
            </>
        )
    }
}

export default StatePrac3;