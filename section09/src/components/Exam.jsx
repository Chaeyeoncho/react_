import { useReducer } from "react";

function reducer(state, action) {
    // 상태를 실제로 변환시키는 변환기 역할
    console.log(state, action);
    if(action.type === "INCREASE"){
        return state + action.data;
    }
    else if(action.type === "DECREASE"){
        return state - action.data;
    }
    else{
        return state;
    }
}

function Exam() {
    //dispatch : 발송하다 , 급송하다
    // 상태변화가 있어야한다는 사실을 알리는 함수
    const [state, dispatch] = useReducer(reducer , 0);

    const onClickPlus = () =>{
        // 액션 객체 
        dispatch({type: "INCREASE" , data :1});
    }

    const onClickMinus = () =>{
        dispatch({type: "DECREASE" , data :1});

    }

    return (
        <div>
            <h1>{state}</h1>
            <button onClick = {onClickPlus}> + </button>
            <button onClick = {onClickMinus}> - </button>
        </div>
    );
}

export default Exam;