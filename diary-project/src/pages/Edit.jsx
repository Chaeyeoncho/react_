import {useParams} from 'react-router-dom';

function Edit() {
    const params = useParams();
    return (
        <div>
            <h1>{params.id}번 일기 수정페이지입니다</h1>
        </div>
    )
}

export default Edit
