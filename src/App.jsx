import React, {Component} from 'react'
import {BrowserRouter as Router, Route, NavLink as Link, Redirect, Switch} from 'react-router-dom'

import Home from './pages/home/Home.jsx'
import Sort from './pages/sort/Sort.jsx'
import Eat from './pages/eat/Eat.jsx'
import Car from './pages/car/Car.jsx'
import Mine from './pages/mine/Mine.jsx'
import NotFind from './pages/NotFind.jsx'

import './App.css'

export default class App extends Component{

    render(){
        return (
            <Router>
            <div className="app">

                <Switch>

                    <Route path="/" exact render={()=>{
                        //重定向
                        return <Redirect to="/home"/>
                    }}/>

                    <Route path="/home" component={Home}/>
                    
                    <Route path="/sort"  component={Sort}/>

                    <Route path="/eat"  component={Eat}/>

                    <Route path="/car"  component={Car}/>

                    <Route path="/mine"  component={Mine}/>

                    <Route path="/404"  component={NotFind}/>

                    <Route render={()=>{
                        //重定向
                        return <Redirect to="/404"/>
                    }}/>
                </Switch>
                <nav className="tabs">
                    <Link className="tab" to="/home">首页</Link>
                    <Link className="tab" to="/sort">分类</Link>
                    <Link className="tab" to="/eat">吃饭吧</Link>
                    <Link className="tab" to="/car">购物车</Link>
                    <Link className="tab" to="/mine">我的易果</Link>
                </nav>
            </div>
            </Router>
        )

    }
}

