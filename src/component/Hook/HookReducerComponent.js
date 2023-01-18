
const myReducer = (state, action) => {
    //action은 객체
    console.log(state);
    console.log(action);
    if(action.type === 'increase'){
        state = {value : state.value +1 };
    }else if(action.type === 'decrease'){
        state = {value : state.value -1 };
    }else if(action.type === 'reset'){
        state = {value : 0}
    }
    
    return state;
    // {value: state.value+1}; //아래의 useReducer의 두번째 매개변수값을 유지하기 위해 리턴값의 형식을 바꿔준다.
}



const nameReducer = (state, action) => {

    // console.log(action); //e.target

    if(action.name == "name"){
        state = {...state, ["name"]: action.value};
    }else if(action.name == "age"){
        state = {...state, ["age"]: action.value};
    }
    
    //위의 구문을 줄여서 표현하기
    state = {...state, [action.name] : action.value};
    
    
    return state;
}


//기본 default 모형
export {myReducer};
export {nameReducer};

