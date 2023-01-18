import { useEffect, useRef, useState } from "react";


const HookQ = () => {
    /*
    1. 컴포넌트가 마운트 된 이후 한번만 id태그에 포커스를 줍니다.

    2. id,pw는 state로 관리합니다.
    로그인버튼 클릭 시 공백이라면 공백인 태그에 포커스를 주세요.
    로그인버튼 클릭 시 공백이 아니라면 경고창으로 id와 pw를 출력해주세요.
    */
    
    //state에 입력한 값 저장해두기
    // const [id, setId] = useState('');
    // const [pw, setPw] = useState('');
    const [data, setData] = useState({id:'', pw:''});

    //인풋태그의 핸들링
    // const handleId = (e) => {
    //     setId(e.target.value);
    // }

    // const handlePw = (e) => {
    //     setPw(e.target.value);
    // }

    //위처럼 데이터를 나눠서 저장할 수도 있지만 아래처럼 한번에도 name으로
    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    //태그에
    const IdTag = useRef();
    const PwTag = useRef();

    //처음에 실행될 때 id태그에 포커스 한번만 주기
    useEffect(() => {
        IdTag.current.focus();
    }, []);
    
    const handleClick = () => {
        if(IdTag.current.value === ''){
            IdTag.current.focus();
        }else if(PwTag.current.value === ''){
            PwTag.current.focus();
        }else {
            alert(`${data.id} , ${data.pw}`)
        }
    }

    return (
        <>
            <div>
                <h3>훅 실습</h3>
                <input type="text" name="id" placeholder="아이디" ref={IdTag} onChange={handleChange}/>
                <input type="password" name="pw" placeholder="비밀번호" ref={PwTag} onChange={handleChange}/>
                <button onClick={handleClick}>로그인</button>
            </div>
        </>
    )
}

export default HookQ;