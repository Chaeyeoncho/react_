import { useState , useRef } from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import Exam from './components/Exam'
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

  const onCreate =(content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content,
      date: new Date().getTime(),
    }
    setTodos([newTodo,...todos])
  }

  const onUpdate =(targetId)=>{
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? {...todo, isDone: !todo.isDone} : todo
      )
    )
  }   

  const onDelete =(targetId)=>{
    setTodos(todos.filter((todo) => todo.id !== targetId))
  }

  return (
    <div className = "App">
      <Exam />
      {/* <Header />
      <Editor onCreate = {onCreate}/>
      <List todos ={todos} onUpdate = {onUpdate} onDelete = {onDelete}/> */}
    </div>
  )
}

export default App
