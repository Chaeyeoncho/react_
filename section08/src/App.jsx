import { useState , useRef } from 'react'
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
    content: "React 공부하기",
    data : new Date().getTime(),
  },
  {
    id: 3,
    isDone: false,
    content: "React 공부하기",
    data : new Date().getTime(),
  },
]

function App() {

  const [todos, setTodos] = useState([modckData]);
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

   
  return (
    <div className = "App">
      <Header />
      <Editor onCreate = {onCreate}/>
      <List todos ={todos}/>
    </div>
  )
}

export default App
