import React, {Component} from "react";
import EatUI from "./EatUI"
import "./Eat.scss"
import {getEatBanners,getEatGlobal} from "../../services/fruitService"
export default class Eat extends Component{
    constructor(){
        super();
        this.state = {
            banners: [],
            list: [],
            refresh: false
        }
    }
    render(){
        let {banners,list,refresh} = this.state;
        return(
            <EatUI data = {{banners,list,refresh}}/>
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
            },()=>{
                this.setState({
                    refresh: !this.state.refresh
                })
            });
        })
    }
}