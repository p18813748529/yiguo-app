export default function reducer(state, action) {
    console.log('reducer执行了:', action.type);
    // action.type 事件对象的类型，根据事件对象的类型处理state值
    // 将处理的结果，返回新的全局状态给项目使用
    /*
    1.state有变化需要返回一个新的state
    2.state不需要改变的其他情况，需要返回旧的state
    */ 

    if(action.type === 'change-value'){
        return {...state, value: action.value};
    }
    else if(action.type === 'change-name'){
        // return {...state, usernmae: action.value};
        return Object.assign({}, state, {usernmae: action.value});
    }
    else{
        return state;
    }
}