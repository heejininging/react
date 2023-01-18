/*
이미지를 가져오는 방법
1. 외부 서버에서 경로를 참조받음 ( 가장 일반적인 방법 )

2. src폴더 밑에 img파일 참조가능 ( 선호 x )
import img1 from '../img/img1.png';

3. public폴더 밑에 넣는경우 이미지를 바로 참조가능
*/

import { useState } from "react";


const InterationComponentQ = () => {

    //데이터 - public폴더 밑에 예시로 사용하기 위해 넣습니다.
    const arr = [
        { src: '/img/img1.png', title: '아이폰10', price: 1000 },
        { src: '/img/img2.png', title: '아이폰11', price: 2000 },
        { src: '/img/img3.png', title: '아이폰12', price: 3000 },
        { src: '/img/img4.png', title: '아이폰13', price: 4000 },
    ]

    //1. state로 arr를 관리
    const [list, setList] = useState(arr);

    //2. 반복처리
    const newArr = list.map((item) =>
        <div key={item.src} onClick={() => { handleImg(item.src) }}>
            <img src={item.src} alt={item.title} width="100" />
            <p>상품: {item.title}</p>
            <p>가격: {item.price}</p>
        </div>
    );
    // console.log(newArr);

    //3. 클릭시 화면에 그려질 내용을 state로 관리
    // const [data, setData] = useState('');
    const [content, setContent] = useState({src:'/img/img1.png'});

    const handleImg = (a) => {
        // setData(<img src={a} alt="이미지 선택하세요." width="300" />);
        setContent({src: a.target.src});
    }

    return (
        <>
            <h3>이미지 데이터 반복하기</h3>
            {/*  1,2번 예시
            <img src="https://raw.githubusercontent.com/yopy0817/data_example/master/img/img1.png" alt="제목" width="100" />
            <img src={img1} alt='제목' width='100'></img> 
            */}

            {/* 3번 예시 */}
            {/* <img src="/img/img1.png" alt="제목" width="100"/> */}


            {/*  반복할 요소의 모형 */}
            {/* {data} */}
            {content.src}
            <div style={{ display: "flex", justifyContent: "space-around", textAlign: "center" }}>
                {newArr}
            </div>
        </>
    )
}

export default InterationComponentQ;