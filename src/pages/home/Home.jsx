import React, {Component} from "react";
import HomeUI from "./HomeUI"
import "./Home.scss"
import {getHomeData} from "../../services/fruitService"
export default class Home extends Component{
    constructor(props){
        super();
        this.state = {
            data: {}
        }
    }
    render(){
        let {data} = this.state;
        return(
            <HomeUI data={data} search={this.searchAction.bind(this)}/>
        )
    }
    componentDidMount(){
        getHomeData()
        .then(data=>{
            this.setState({
                data: data
            },()=>{
                new window.Swiper('.swiper-container', {
                    autoplay: true,//可选选项，自动滑动
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    loop: true
                })
            })
        })
        
    }
    searchAction(){
        console.log(this.props)
        this.props.history.push("/sort");
    }
}