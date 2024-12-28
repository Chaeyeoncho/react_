import "./List.css";
import "../components/TodoItem";
import TodoItem from "../components/TodoItem";
import {useState} from 'react';

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

    return(
        <div className = "List">
            <h4>Todo List 🌱</h4>
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