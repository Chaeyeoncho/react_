import { useState } from "react";

function useInput(){
    const [input, setInput] = useState(0);

    const onChange = (e) =>{
        setInput(e.target.value);
    };
    
    return [input, onChange];
}
