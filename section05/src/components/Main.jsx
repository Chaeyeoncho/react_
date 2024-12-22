
// jsx 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식을 넣어야 함 (if, for 문 사용 불가 ) 
// 2. 숫자 , 문자열, 배열 값만 렌더링 된다. ( 불리언 값, undefined, null , 객체 렌더링 되지 않음) 
// 3. 모든 태그는 닫혀있어야한다.  
// 4. 최상위 태그는 하나여야 한다.

import './Main.css'

function Main() {
    const user =  {
        name: 'mike',
        isLogin: true,
    }
    return (
        <>
            {user.isLogin ? <div className = "logout">로그아웃</div> : <div className='login'>로그인</div>}
        </>
    )
}

export default Main;