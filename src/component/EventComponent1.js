import { useState } from "react";

const EventComponent1 = () => {
    
    const [menu, setMenu] = useState('메뉴를 선택하세요.');

    const handleMenu = (e) => {
        setMenu(e.target.value);
    }
    
    return (
        <>
            <hr />
            <h3>셀렉트 태그 핸들링</h3>
            <select onChange={handleMenu}>
                <option>햄버거</option>
                <option>피자</option>
                <option>치킨</option>
            </select>

            <h3>선택한 결과</h3>
            {menu}
            
        </>
    )
}

export default EventComponent1;