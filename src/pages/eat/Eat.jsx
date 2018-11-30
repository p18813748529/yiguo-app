import React, {Component} from "react";
import EatUI from "./EatUI"
import "./Eat.scss"
import {getEatBanners,getEatGlobal} from "../../services/fruitService"
export default class Eat extends Component{
    constructor(){
        super();
        this.state = {
            banners: [],
            list: []
        }
    }
    render(){
        let {banners,list} = this.state;
        return(
            <EatUI data = {{banners,list}}/>
        )
    }
    componentDidMount(){
        getEatBanners()
        .then(banners=>{
            this.setState({
                banners
            })
        })
        getEatGlobal()
        .then(articleList=>{
            console.log(articleList.List)
            this.setState({
                list: articleList.List
            });
        })
    }
}