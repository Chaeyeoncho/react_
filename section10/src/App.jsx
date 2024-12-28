import { useState , useRef, useCallback } from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import './App.css'

const modckData =[
  {
    id: 1,
    isDone: false,
    content: "React 공부하기",
    data : new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "빨래하기",
    data : new Date().getTime(),
  },
  {
    id: 3,
    isDone: false,
    content: "저녁 만들기",
    data : new Date().getTime(),
  },
]

function App() {

  const [todos, setTodos] = useState(modckData);
  const idRef = useRef(4);

  const onCreate =useCallback((content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      date: new Date().getTime(),
    }
    setTodos([newTodo,...todos])
  },[todos]); // 마운트 될때만 실행 하고 그 다음에는 실행하지 않음

  const onUpdate =useCallback((targetId)=>{
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? {...todo, isDone: !todo.isDone} : todo
      )
    )
  }  
,[todos]); // 마운트 될때만 실행 하고 그 다음에는 실행하지 않음 

  const onDelete = useCallback((targetId)=>{
    setTodos(todos.filter((todo) => todo.id !== targetId))
  },[todos]); // 마운트 될때만 실행 하고 그 다음에는 실행하지 않음

  return (
    <div className = "App">
      <Header/>
      <Editor onCreate = {onCreate}/>
      <List todos ={todos} onUpdate = {onUpdate} onDelete = {onDelete}/>
    </div>
  )
}

export default App
