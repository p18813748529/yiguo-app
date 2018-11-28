import React, {Component} from 'react'
import {BrowserRouter as Router, Route, NavLink as Link, Redirect, Switch} from 'react-router-dom'

import Home from './pages/home/Home.jsx'
import Sort from './pages/sort/Sort.jsx'
import Eat from './pages/eat/Eat.jsx'
import Car from './pages/car/Car.jsx'
import Mine from './pages/mine/Mine.jsx'
import NotFind from './pages/NotFind.jsx'

import './App.scss'

export default class App extends Component{

    render(){
        return (
            <Router>
            <div id="app">

                <Switch>

                    <Route path="/" exact render={()=>{
                        return <Redirect to="/home"/>
                    }}/>

                    <Route path="/home" component={Home}/>
                    
                    <Route path="/sort"  component={Sort}/>

                    <Route path="/eat"  component={Eat}/>

                    <Route path="/car"  component={Car}/>

                    <Route path="/mine"  component={Mine}/>

                    <Route path="/404"  component={NotFind}/>

                    <Route render={()=>{
                        return <Redirect to="/404"/>
                    }}/>
                </Switch>
                <div className="tabs-wrap">
                    <nav className="tabs">
                        <Link className="tab" to="/home">
                            <i className="icon icon-home"></i>
                            <span>首页</span>
                        </Link>
                        <Link className="tab" to="/sort">
                            <i className="icon icon-sort"></i>
                            <span>分类</span>
                        </Link>
                        <Link className="tab" to="/eat">
                            <i className="icon icon-eat"></i>
                            <span>吃饭吧</span>
                        </Link>
                        <Link className="tab" to="/car">
                            <i className="icon icon-car"></i>
                            <span>购物车</span>
                        </Link>
                        <Link className="tab" to="/mine">
                            <i className="icon icon-mine"></i>
                            <span>我的易果</span>
                        </Link>
                    </nav>
                </div>
            </div>
            </Router>
        )

    }
}

