import { useState } from "react";


const EventComponentQ2 = () => {
    
    // const [box,setBox] = useState(''); //인풋데이터
    // const [result,setResult] = useState(''); //결과데이터

    const [data,setData] = useState({name:'', result:''});
    
    // const handleBox = (e) => {
    //     setBox(e.target.value);
    // }

    // const handleResult = () => {
    //     setResult(box);
    //     setBox('');
    // }

    const handleChange = (e) => {
        const copy = {...data, [e.target.name] : e.target.value}
        setData(copy);
    }


    const handleResult = () => {
        setData({name:'', result:data.name});

    }

    return (
        <>
            <hr/>
            <h3>인풋데이터 핸들링</h3>
            {/* <input type="text" name="name" onChange={handleBox} value={box}/>
            <button type="button" onClick={handleResult}>추가하기</button> */}
            <input type="text" name="name" onChange={handleChange} value={data.name}/>
            <button type="button" onClick={handleResult} value={data.result}>추가하기</button>

            <h3>결과</h3>
            {data.result}
            {/* {result} */}

        </>
    )
}

export default EventComponentQ2;