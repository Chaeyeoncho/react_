import './App.css'
import Header from './components/header'
import Main from './components/Main'
import Footer from './components/Footer'
import Button from './components/Button'

function App() {
  const buttonProps = {
    text: '메일',
    color: 'red',
  }
  return (
    <>
     {/* props로 전달 */}
      <Button {...buttonProps}/>
      <Button  text = {"카페"}/>
      <Button  text = {"블로그"}>
        <div>자식요소</div>
        </Button>
      <Header />
      <Main/>
      <Footer />

    </>
  )
}

export default App
