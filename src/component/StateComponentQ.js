import { useState } from "react";

const StateComponentQ = () => {
    // let zero = 0;
    let [num, changeNum] = useState(0);

    let plus = () => changeNum(++num);
    let minus = () => changeNum(--num);
    let reset = () => changeNum(0);
    
    
    return (
        <>
            <h3>실습</h3>
            카운트 : {num}
            <br />
            <button onClick={plus}>증가</button>
            <button onClick={minus}>감소</button>
            <button onClick={reset}>초기화</button>
        </>
    )
}

export default StateComponentQ;