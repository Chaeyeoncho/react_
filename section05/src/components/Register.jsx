import {useState} from 'react';


function Register() {
    const[input, setInput] = useState({
        name : "",
        date : "",
        country : "",
        introduce : ""
    });
    console.log(input);

    
    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });
    };

    return (
    <div>
        <div>
            <input name = "name" value = {input.name} onChange = {onChange} placeholder = "이름" />
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
     </div>
    );
}

export default Register;