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
            globalPageIndex: 1,
            PageSize: 5,
            canLoadMore: true
        }
    }
    render(){
        let {banners,list} = this.state;
        return(
            <EatUI data = {{banners,list,loadMore:this.loadMore}}/>
        )
    }
    loadMore = ()=>{
        if(this.state.canLoadMore){
            this.state.canLoadMore = false;
            getEatGlobal(++this.state.globalPageIndex)
            .then(articleList=>{
                let canLoadMore = false;
                if(articleList.PageCount>articleList.PageIndex){
                    canLoadMore = true
                }
                this.setState({
                    list: [...this.state.list,...articleList.List],
                    canLoadMore
                });
            })
        }
    }
    componentDidMount(){
        getEatBanners()
        .then(banners=>{
            this.setState({
                banners
            })
        })
        getEatGlobal(this.state.globalPageIndex)
        .then(articleList=>{
            let canLoadMore = false;
            if(articleList.PageCount>articleList.PageIndex){
                canLoadMore = true
            }
            this.setState({
                list: articleList.List,
                canLoadMore
            });
        })
    }
}