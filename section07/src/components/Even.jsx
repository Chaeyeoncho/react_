import {useEffect} from 'react';

function Even() {
    useEffect(()=>{

        return ()=>{
            console.log("unmount");
        };

},[]);


    return <h1>짝수입니다</h1>;
}

export default Even;