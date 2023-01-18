import { useState } from "react";


const StateComponent = () => {

    // state란 컴포넌트에서 변화하는 값을 의미합니다.
    // state가 변경되면 컴포넌트 리렌더링 시킵니다.
    //함수형 컴포넌트에서 useState()를 사용합니다.
    

    //1st
    // let data = useState(' 초기값 ');
    // console.log(data);
    // let a = data[0];
    // let b = data[1];

    //2nd
    let [a, b] = useState('초기값');
    console.log(a); //state값
    // console.log(b); //state setter 함수
    let func = () =>  b('값 바꾸기'); 
    let enter = () =>  b('입장'); 
    let exit = () =>  b('퇴장'); 
    
    // state값을 바꾸지 않고 아래의 setter를 이용해 바꾼다.
    // a = 1; (x)

    // state는 여러개일수 있다.
    let [color,setColor] = useState('black');
    
    return (
        <>
            <h3 style={{color:color}}>state값 : {a}</h3>
            <button onClick={func}>값 변경</button>

            <button onClick={enter}>입장</button>
            <button onClick={exit}>퇴장</button>

            <hr />
            <button onClick={()=>setColor('red')}>붉은색</button>
            <button onClick={()=>setColor('blue')}>푸른색</button>
            <button onClick={()=>setColor('yellow')}>그 사이 3초 그 짧은색</button>
        </>
    )
}

export default StateComponent;