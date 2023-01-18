import { useState } from "react";
import HookEffect from "./component/Hook/HookEffect";
import HookQ from "./component/Hook/HookQ";
import HookQ2 from "./component/Hook/HookQ2";
import HookReducer from "./component/Hook/HookReducer";
import HookReducer2 from "./component/Hook/HookReducer2";
import HookRef from "./component/Hook/HookRef";


const App = () => {

    /*
        223p
        1. 필수 훅
        usestate()
        컴포넌트에서 상대값을 제어하는 가장 기본이 되는 hook

        useEffect()
        컴포넌트의 라이프사이클(생명주기)를 다룹니다.
        mount, mount이후, state변경될 때, umount이전에 특정작업을 수행할 수 있습니다.

        useRef()
        태그의 이름달기

        2. 부가적인 훅
        useReducer()
        useState의 사용을 외부에서 사용할 수 있게 해주는 훅 (state의 변경을 외부에서 제어할 수 있습니다.)
        
        const [현재값, 리듀서를 업데이트할 수 있는 함수] = useReducer( 외부에서 사용할 리듀서 함수, 리듀서의 초기값 )
    */

    //데이터가 오기 전까지 다른 화면을 구현해주는것 (로딩화면)

    const [visible, setVisible] = useState(true);

    const handleClick = () => {
        // console.log(visible);
        setVisible(!visible); //visible 이 가진 값의 반대

    }

    return (
        <>
            {/* effecter훅 */}
            <button onClick={handleClick}>{visible ? "숨기기" : "보이기" }</button>
            <br />
            {visible ? <HookEffect/> : null}

            <hr />
            {/* ref훅 */}
            <HookRef />

        
            <hr />
            {/* 훅 실습 */}
            <HookQ />
            <hr />
            <HookQ2 />

            {/* 리듀서 훅 */}
            <hr />
            <HookReducer />
            
            <hr />
            <HookReducer2 />
        </>
    )
}

export default App;