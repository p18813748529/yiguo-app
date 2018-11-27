import React from 'react';
import ReactDOM from 'react-dom';
import App  from './App'

import {getCommodityInfo} from "./services/fruitService"
getCommodityInfo();
ReactDOM.render(
    <App/>, 
    document.getElementById('root')
);