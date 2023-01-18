import { useRef, useState } from "react";


const HookQ2 = () => {

    /*
    실습 (할일목록 만들기)

    1. state는 {todo:'', list:[]} 로 관리하세요,

    2. 할일목록을 작성하고 클릭시, list의 인풋의 입력값을 추가하고 map을 통해서 화면을 그립니다.

    3. 등록된 이후에는 ref를 활용해서 input태그에 포커싱을 줍니다.

    */

    const [dolist, setDolist] = useState({ todo: '', list: [] });

    //등록 이후에 포커싱주기
    const inputTag = useRef();

    const allList = dolist.list.map((item, index) => <li key={index}>{item}</li>);
    
    
    const handleChange = (e) => {
        setDolist({ ...dolist, ["todo"]: e.target.value })
        
    }
    
    let newArr = dolist.list;
    
    const handleClick = (e) => {
        let newList = newArr.concat(dolist.todo);
        setDolist({ ...dolist, todo: '', list: newList })
        inputTag.current.focus();
    }

    return (

        <>
            <div>
                <h3>ref로 할일목록 만들기</h3>
                <input type="text" name="todo" placeholder="할일목록" ref={inputTag} onChange={handleChange} value={dolist.todo}/>
                <button onClick={handleClick}>등록하기</button>
                <ul>
                    {allList}
                </ul>
            </div>
        </>
    )
}

export default HookQ2;