import React, {Component} from "react";
import HomeUI from "./HomeUI"
import "./Home.scss"
import {getHomeData} from "../../services/fruitService"
import Swiper from "swiper"
export default class Home extends Component{
    render(){
        return(
            <HomeUI/>
        )
    }
    componentDidMount(){
        getHomeData();
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: true,//可选选项，自动滑动
        })
    }
}