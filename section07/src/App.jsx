import { useState, useEffect,useRef } from 'react'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/Even'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  const isMounted = useRef(false);

 // 1 . 마운트 : 탄생
 useEffect(()=>{
    console.log('componentDidMount')
 } , []);

 // 2. 업데이트 : 변화 , 리렌더링
  useEffect(()=>{
    if(!isMounted.current){
      isMounted.current = true;
    return;
  }
  console.log("update")
  });

  //3. 언마운트 : 죽음
 
  const onClickButton = (value) =>{
    setCount(count + value);
  };

  return (
    <>
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
      <Viewer count = {count} />
      {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
      <Controller onClickButton ={onClickButton}/>
      </section>
    </div>
    </>

  )
}

export default App
