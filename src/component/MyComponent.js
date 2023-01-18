
/*
교재 87p 참조
컴포넌트 선언방법은 크게 2가지 (함수형, 클래스)
컴포넌트는 여러개 일 수 있습니다.

모듈 내보내기 export default
모듈 가져오기 import ~~ from 경로

*/

import PropTypes from 'prop-types';
import { Fragment } from "react";

const MyComponent = (/* props */ {name,age,email,addr}) => {

    // console.log(props);
    // const a = props.name;
    // const b = props.age;
    // const c = props.email;

    return (
        <Fragment>
            <div>props.name 값 : {name}</div>
            <div>props.name 값 : {age}</div>
            <div>props.name 값 : {email}</div>
        </Fragment>
        
        //     <div>나의 첫번째 컴포넌트</div>
        //     <div>props 이름값 : {a}</div>
        //     <div>props 나이값 : {b}</div>
        //     <div>props 이메일값 : {c}</div>
    
    )
    };

    // props의 기본값 지정하기 컴포넌트명.defaultProps = {}
    MyComponent.defaultProps = {
        name : "이름없음",
        age : 0,
        // email : "지정안됌",
        addr : "서울시" //addr은 전달되지 않지만 기본값
    };
    
    // props의 타입검증 컴포넌트명.propTypes={}
    MyComponent.propTypes = {
        name : PropTypes.string,
        age : PropTypes.number,
        email : PropTypes.string.isRequired //문자열타입, 반드시 전달
    
    };


export default MyComponent;