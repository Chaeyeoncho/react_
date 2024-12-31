import "../components/TodoItem.css"; 
import {memo} from 'react';   
import {useContext} from 'react';
import {TodoDispatchContext} from '../App';

function TodoItem({id, isDone, content, date }) {    
    const {onUpdate, onDelete} = useContext(TodoDispatchContext);

    const onChangeCheckbox =() =>{
        onUpdate(id);
    }

    const onClickDelete =() =>{
        onDelete(id);
    }

        return (
        <div className="TodoItem">
            <input onChange = {onChangeCheckbox}readOnly checked ={isDone} type="checkbox" />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick = {onClickDelete}>삭제</button>
        </div>
    )
}

export default memo(TodoItem); 