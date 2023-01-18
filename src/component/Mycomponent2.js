import { Component, Fragment } from "react";

const MyComponent2 = ( {name} ) => {
    return (
    <>
        <div>나의 두번째 컴포넌트</div>
        props값 : {name}
    </>
    )
};

export default MyComponent2;