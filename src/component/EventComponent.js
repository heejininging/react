import { useState } from "react";



const EventComponent = () => {

    //name을 저장할 useState생성
    const [name,setName] = useState('');
    const [topic,setTopic] = useState('');

    //이벤트 함수의 첫번째 매개변수에 이벤트에 대한 정보를 넣어줍니다.
    const handleName = (e) => {
        // console.log(e.target.value);
        setName(e.target.value); //state체인지
    }
    const handleTopic = (e) => {
        setTopic(e.target.value);
    }

    //클릭이벤트
    const hadleClick = () => {
        alert(`${name}님의 주제는 ${topic}입니다.`);
        // input  데이터 초기화
        setName('');
        setTopic('');
    }

    //엔터키의 처리 : 클릭대신에 사용할 수 있다.
    const handlePress = (e) => {
        // console.log(e);
        if(e.keyCode === 13){
            hadleClick();
        }
    }

    return (
        <>
            <h3>리액트의 이벤트 핸들링 (인풋데이터)</h3>
            <input type="text" name="name" onChange={handleName} value={name}></input>
            <div>체인지 된 결과 : {name}</div>

            <input type="text" name="topic" onChange={handleTopic} onKeyUp={handlePress} value={topic}></input>
            <div>체인지 된 결과 : {topic}</div>

            <button type="button" onClick={hadleClick}>클릭</button>
        </>
    )
}

export default EventComponent;