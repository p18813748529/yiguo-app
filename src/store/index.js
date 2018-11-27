import { createStore } from "redux";
// reducer函数，操作全局数据状态的函数。在这个函数根据事件名字，提供全局的状态
import reducer from './reducer'
//全局默认的状态
import state from './state'



// createStore创建仓库对象
// 创建时，会调用reducer函数，对state进行初始化
export default createStore(reducer,state);

