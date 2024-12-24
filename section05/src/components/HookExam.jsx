import useInput from '../hooks/useInput';

function HookExam() {
    const [input, onChange] = useInput();
    const [input2, onChange2] = useInput();

   return (
    <div>
        <input value = {input} onChange ={onChange} />
        <br />
        <input value = {input2} onChange ={onChange2} />
    </div>
   )
}

export default HookExam;