## state 와 props
리렌더링이 되는 조건 
1. state 가 변경 되었을 때
2. props 가 변경 되었을 때
3. 부모 컨포넌트가 변경 되었을 때 

그러면 자식을 눌렀을 때 부모가 계속 재렌더링이 된다면 성능이 저하된다
정리하자면 state가 한 컴포넌트에 여러개가 있으면 state는 불필요하게 재랜더링이 되기에
하나의 컴포넌트에 하나의 state문이 있어야한다 !

## useRef와 javascript의 변수로 저장의 차이
register.jsx를 보게 되면 ref를 사용하지 않고 수정 숫자를 바꿀 수 있지 않을까 ?
정답은 못한다 !

let count = 0; 내부에서 할때
onChange컴포넌트에서 setInput의 상태값을 변경해주고 이는 재렌더링이라는 결과를 발생시킨다
따라서 count라는 변수를 0으로 설정했다면 0>수정시 1 , 또 다시 0이 되고 수정시 1 이런식에 결과를 발생시키게 된다. 

let count = 0;을 외부에서 할때
수정 숫자를 변경할 수 있지만
app.jsx에서 register컴포넌트를 받아서 사용한다면 한개의 변수를 두 컴포넌트에서 공유하게 된다
따라서 이는 치명적인 오류가 난다 ..!

결국 useRef를 통해서 하는 것이 가장 바람직함!

## React HOOKS
# 2017년도 이전의 react.js
class 컴포넌트 : 모든 기능을 이용할 수 있었음 but, 문법이 복잡하다는 문제 0
function 컴포넌트 : ui 렌더링만 할 수 있음 

따라서 function 컴포넌트로 쓰고 class 컴포넌트의 기능을 낚아채오게 됨 ! 낚아채다 영어로 hook이니까

따라서 react hooks에는
1. useState
2. useRef
3. useEffect
4. useReducer

약 20개 존재

함수 컴포넌트 내부에서만 가능 , 조건문이나 반복문에서는 불가능 ! 


