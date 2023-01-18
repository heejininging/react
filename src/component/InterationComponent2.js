import { useState } from "react";


const InterationComponent2 = () => {

    //5. 삭제기능 - 호이스팅으로 인해서 화살표함수는 위쪽에 선언해두어야 작동한다. ( 화살표함수는 호이스팅이 불가하다., 익명함수이기 때문에 )
    // const handleRemove = () => {
    //     console.log(1);
    // }


    //1. 반복할 데이터 (state로 관리)
    const arr = [
        { id: 1, topic: 'hello' },
        { id: 2, topic: 'bye' },
        { id: 3, topic: 'see you' }
    ];

    const [list, setList] = useState(arr);

    //2. 반복처리, map함수를 이용해서 li태그로 생성 //고유하게 식별할 값을 key에 넣어야한다.
    //key는 props이다.
    const newList = list.map((item) =>
        //함수를 전달하는게 아닌 호출시키기
        //특정함수 안에서 반환이 함수면 그 함수를 호출시켜서 실행해준다. 호출함수에는 매개변수를 줄 수 있다.
        <li key={item.id} onDoubleClick={() => { handleRemove(item.id) }}>
            {item.topic}
        </li>

        //이 구문은 실행시킨 함수의 연결이므로 사용이 어렵다.
        // <li key={item.id} onDoubleClick={handleRemove}>
        //     {item.topic}
        // </li>
    );


    //3. 인풋데이터 관리
    const [data, setData] = useState('');

    const handleChange = (e) => {
        setData(e.target.value);
    }

    //4. 추가하기 버튼 클릭시 input의 값을 list의 마지막에 추가
    const handleClick = () => {
        let obj = { id: list[list.length - 1].id + 1, topic: data } //추가할데이터(마지막요소의id+1, 인풋데이터)

        //list.push(obj) //state를 직접변경하면 안된다.
        let newArr = list.concat(obj); //list에 obj가 합쳐진 새로운 리스트를 반환한다.

        //state바꾸기
        setList(newArr);

        //사용자가 입력한 인풋데이터의 값 초기화
        setData('');
    }

    //5. 삭제기능 (화살표함수를 사용하는 방법)
    // function handleRemove() {
    //     console.log(1);
    // }

    //a는 2번에서 실행한 함수의 매개변수값을 그대로 가지고 사용할 수 있다.
    //이벤트 안에서 함수를 호출로 연결하는 방법
    //onClick={ () => 함수() }
    const handleRemove = (a) => {
        // console.log(a); //태그의 고유값 key

        //filtet - 콜백의 리턴이 true인 값을 가지고 새로운 배열생성
        // const ex = [1,2,3,4,5].filter((item) => item != 3);
        // console.log(ex); //[1,2,4,5]

        const newList = list.filter((item) => item.id !== a);
        setList(newList);
    }


    return (
        <>
            <h3>목록 추가하기</h3>
            <input type="text" onChange={handleChange} value={data}></input>
            <button type="button" onClick={handleClick}>추가하기</button>

            <ul>
                {newList}
            </ul>
        </>
    )
}

export default InterationComponent2;

