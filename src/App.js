import { Fragment } from "react";

//Css파일 경로 임포트
import './css/App.css';

//Css모듈 파일링크
import styled from './css/App.module.css';

const App = () => {

    //직접 스타일주기 : -은 카멜표기법으로 변경됩니다.
    const myStyle = {
        color: "green",
        textAlign: "center",

    }



    return (
        <Fragment>
            <header style={{ backgroundColor: "black" }} className="app_header">
                <p style={myStyle}>헤더입니다.(태그에 직접 디자인)</p>
            </header>

            <article className="app_article">

            </article>

            <section className={styled.app_wrap}>
                <div className={styled.app_item}>
                    <p>CSS디자인</p>
                    <input type="text" className="input_control"></input>
                    <input type="password" className="input_control"></input>
                </div>
            </section>
        </Fragment>
    )
}

export default App;