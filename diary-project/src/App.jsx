import {Routes, Route, Link , useNavigate } from 'react-router-dom'
import Diary from './pages/Diary'
import Home from './pages/Home'
import New from './pages/New'
import NotFound from './pages/NotFound'
function App() {
  const nav = useNavigate()

  const onClick = () => {
    nav('/new')
  }

  return (
  <>
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
