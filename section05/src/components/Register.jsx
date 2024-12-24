import {useState , useRef} from 'react';


function Register() {
    const[input, setInput] = useState({
        name : "",
        date : "",
        country : "",
        introduce : ""
    });
    console.log(input);
    const countRef = useRef(0);
    const inputRef = useRef();
    
    const onChange = (e) => {
        countRef.current ++;
        console.log(countRef.current);
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });
    };

    const onSubmit =() =>{
        if(input.name === ""){
            inputRef.current.focus();
        }
    }

    return (
    <div>
        <div>
            <button onClick = {() => {
                countRef.current = countRef.current + 1;
                console.log(countRef.current);
            }
            }>증가</button>
        </div>
        <div>
            <input ref = {inputRef} name = "name" value = {input.name} onChange = {onChange} placeholder = "이름" />
        </div>

        <div>
            <input name = "date" value = {input.date} type = "date" onChange = {onChange} />
        </div>

        <div>
            <select name ="country" value = {input.country} onChange = {onChange}>
                <option value = "kr">한국</option>
                <option value = "us">미국</option>
                <option value = "ch">중국</option>
            </select>
            {input.country}
        </div>

        <div>
            <textarea name ="introduce" value = {input.introduce} onChange = {onChange} />
        </div>

        <div>
            <button onClick = {onSubmit}>제출</button>
        </div>
     </div>
    );
}

export default Register;