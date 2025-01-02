import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';

function onBack() {
    window.history.back();
}

function New() {
    return (
        <div>
           <Header title="새 일기 쓰기" leftChild={<Button onClick = {onBack} text={"<"} />} />
           <Editor />
        </div>
    );
}

export default New;