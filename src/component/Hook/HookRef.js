import { useRef, useState } from "react";

const HookRef = () => {
    //사용자 입력값 data, 회면에 출력값 result
    const [form, setForm] = useState({data: '', result: ''});

    //인풋
    const handleChange = (e) => {
        setForm({...form, ["data"]: e.target.value})
    }

    console.log(form);

    //등록
    const handleClick = () => {
        setForm({data : '', result : form.data})

        //Ref의 사용
        // console.log(inputTag); //{current: input}
        // console.log(inputTag.current); //<input type="text" value="">
        // console.log(inputTag.current.value); //인풋에서 입력한 값의 출력
        
        inputTag.current.focus(); //결과를 등록하고 원하는 태그의 부분에 focus주기
    }

    //특정태그에 이름달기 useRef()
    //반환될 이름을 사용할 태그에 ref속성에 넣습니다.
    const inputTag = useRef();
    // console.log(inputTag); //{current: undefined}
    
    return (
        <>
             내용 : <input type="text" onChange={handleChange} value={form.data} ref={inputTag}></input>
             <button onClick={handleClick}>등록하기</button>
             <br />
             결과 : {form.result}
        </>
    )
}

export default HookRef;