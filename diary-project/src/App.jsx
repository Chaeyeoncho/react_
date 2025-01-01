import {Routes, Route, useNavigate } from 'react-router-dom'
import { useRef , createContext} from 'react'
import Diary from './pages/Diary'
import Home from './pages/Home'
import New from './pages/New'
import Edit from './pages/Edit'
import NotFound from './pages/NotFound'
import { useReducer } from 'react'


const mockData =[
  {
    id :1,
    createDate: new Date("2025-01-01").getTime(),
    emotionId: 1,
    content: "1번 일기입니다."
  },
  {
    id :2,
    createDate: new Date("2024-12-31").getTime(),
    emotionId: 1,
    content: "2번 일기입니다."
  },
  {
    id :3,
    createDate: new Date("2024-12-30").getTime(),
    emotionId: 2,
    content: "3번 일기입니다."
  }
]

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext(); 

function App() {

  function reducer(state, action){
    switch(action.type){
      case 'CREATE':
        return [action.data, ...state];
      case 'UPDATE':
        return state.map((item) => String(item.id) === String(action.data.id)
         ? action.data : item);
      case 'DELETE':
        return state.filter((item) => String(item.id) !== String(action.data.id));
      default:
        return state;
  }
}

  const[data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 새로운 일기 추가하는 기능
  function onCreate(createdDate, emotionId, content){
   dispatch({
      type: 'CREATE',
      data: {
      id: idRef.current++,
      createdDate,
      emotionId,
      content
      }
   })
  }
  // 새로운 일기를 수정하는 기능
  function onUpdate (id, createDate, emotionId, content){
    dispatch({
      type: 'UPDATE',
      data: {
        id,
        createDate,
        emotionId,
        content
      }
    })
  }

  // 새로운 일기를 삭제 하는 기능
  function onDelete(id){
    dispatch({
      type: 'DELETE',
      data: {
        id
      }
    })
  }

  return (
  <>
    <DiaryStateContext.Provider value={data}>
    <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/diary/:id" element={<Diary />} />
      <Route path="/new" element={<New />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

    </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  </>
)
}

export default App
