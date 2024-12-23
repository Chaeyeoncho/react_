import {useState} from 'react'

const Bulb = () => {
  // 인수로는 초기값을 넣어주고 배열을 반환한다 , 
  // 배열의 첫번째는 상태값(ex. 0,1) 두번째는 상태값을 변경하는 함수이다
  const [light, setLight] = useState("OFF")

  console.log(light)

  return (
    <div>
      {light === "ON" ?(
        <h1 style ={{ backgroundColor : "yellow"}}>ON</h1>
      ): (
        <h1 style ={{ backgroundColor : "grey"}}>OFF</h1>
      )}

      <button onClick ={() => setLight(light ==="ON" ? "OFF" : "ON")} >
        {light === "ON" ? "끄기" : "켜기"}
      </button>
    </div>
  )
}

export default Bulb