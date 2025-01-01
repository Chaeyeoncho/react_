import {Routes, Route, Link , useNavigate } from 'react-router-dom'
import Diary from './pages/Diary'
import Home from './pages/Home'
import New from './pages/New'
import NotFound from './pages/NotFound'

import emotion1 from './assets/emotion1.png'
import emotion2 from './assets/emotion2.png'
import emotion3 from './assets/emotion3.png'
import emotion4 from './assets/emotion4.png'
import emotion5 from './assets/emotion5.png'

function App() {
  const nav = useNavigate()

  const onClick = () => {
    nav('/new')
  }

  return (
  <>
  <div>
    <img src = {emotion1} alt = "emotion1" />
    <img src = {emotion2} alt = "emotion2" />
    <img src = {emotion3} alt = "emotion3" />
    <img src = {emotion4} alt = "emotion4" />
    <img src = {emotion5} alt = "emotion5" />
  </div>
  <div>
    <Link to="/">Home</Link>
    <Link to="/diary">Diary</Link>
    <Link to="/new">New</Link>
  </div>
  <button onClick={onClick}>Go to New</button>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/diary/:id" element={<Diary />} />
      <Route path="/new" element={<New />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
)
}

export default App
