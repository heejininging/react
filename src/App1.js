import { Fragment } from "react";
import MyComponent from "./component/MyComponent";
import MyComponent2 from "./component/Mycomponent2";
import MyComponent3 from "./component/Mycomponent3";

const App = () => {
    return (
        <Fragment>
            <h3>나의 App.js</h3>
            {/* props */}
            <MyComponent /* name={""} */ age={20} email={"aa@naver.com"} />
            <MyComponent2 name={"이순신"} />
            <MyComponent2 name={"홍길자"} />

            {/* 클래스형 */}
            <MyComponent3 name={"강감찬"} />
        </Fragment>
    )
}

export default App; //내보내기