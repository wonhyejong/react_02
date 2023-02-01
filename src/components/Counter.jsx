import React, { useCallback } from 'react';
import { useState , useEffect} from 'react';
const Counter = () => {
    console.log('시작')
    const [value , setValue] = useState(0);
    useEffect(() => {
        console.log("컴포넌트가 마운트 될 때, 한 번만!")
        return () => {
            console.log("컴포넌트가 언마운트할때!")
        }
    },[])

    const increaseValue = useCallback(() => {
        setValue(value + 1)
    },[value])

    return (
        <div>
        <h1>값은 {value} </h1>
        <button onClick={increaseValue}>증가+</button> 
        </div>
    );
};

export default Counter; 
// npx create-react-app 폴더명  콜백 함수와 Dependency 의존 
//useEffect  무조건 한번은 랜더링 후 실행 됨 
//useEffect(()=>{});  어떤 useState값이던 변화가 있을 때 다시 실행 된다.
//useEffect(()=>{},[]); 단한번 실행하고 다시 실행 하지 않는다. 
//useEffect(()=>{},[value]) Dependency 로 지정한 값의 변할때 만 실행 
//컴포넌트가 렌더링 될 때, 특정 작업을 실행 