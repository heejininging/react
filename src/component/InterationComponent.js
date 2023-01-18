
const InterationComponent = () => {

    const arr = [1,2,3,4,5];

    //1. 반복처리
    //es5 문법
    // const newArr = arr.map(function(item,index,arr){
    //     return item * 10;
    // })


    //es6 문법
    // const newArr = arr.map((item,index,arr) => item * 10);
    // console.log(newArr);


    //2. 반복처리 (태그)
    const newArr = arr.map((item,index) => <li key={index}>{item}</li>);
    console.log(newArr);
    return (
        <>
            <ul>
                {newArr} 
                {/* 위에서 만들어서 변수로 넣어주거나, 아래쪽에 {}로 바로 출력해도된다. */}
                {arr.map((item,index) => <li key={index}>{item}</li>)}
            </ul>
        </>
    )
}
export default InterationComponent;