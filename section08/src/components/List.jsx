import "./List.css";
import "../components/TodoItem";
import TodoItem from "../components/TodoItem";
import {useState , useMemo} from 'react';

function List({todos , onUpdate , onDelete}) {
    const [search, setSearch] = useState("");

    const onSearch =(e)=>{
        setSearch(e.target.value);
    }

    const getFilteredTodos =()=>{
        if(search === ""){
            return todos;
        }
        return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()));
    }

    const filteredTodos = getFilteredTodos();

  
    const {totalCount , doneCount, notDoneCount} = useMemo(()=>{
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;
        return {totalCount, doneCount, notDoneCount};},[todos]);
    // deps가 변경될때만 실행됨

    return(
        <div className = "List">
            <h4>Todo List 🌱</h4>
            <div className="List-stats">
                <div>전체 : {totalCount}개</div>
                <div>완료 : {doneCount}개</div>
                <div>미완료 : {notDoneCount}개</div>
            </div>
            <input value ={search} onChange ={onSearch} placeholder="검색어를 입력하세요" />
            <div className="List-header">
            {filteredTodos.map((todo) =>{
                return <TodoItem key = {todo.id} {...todo} onUpdate = {onUpdate} onDelete = {onDelete}/> 
            })}
            </div>
        </div>
    )
}

export default List;