import React, {Component} from "react";
import HomeUI from "./HomeUI"
import "./Home.scss"
import {getHomeData} from "../../services/fruitService"
import store from "../../store"
export default class Home extends Component{
    constructor(props){
        super();
        this.state = {
            data: {},
            pageIndex: 0,
            canLoadMore: true,
        }
    }
    render(){
        let {data,canLoadMore} = this.state;
        let {AreaId,AreaName} = store.getState();
        return(
            <div id="home" ref="home">
                <HomeUI data={{
                    ...data,canLoadMore,
                    loadMore:this.loadMore,
                    searchAction:this.searchAction.bind(this),
                    cityAction: this.cityAction.bind(this),
                    AreaName
                }}/>
            </div>
        )
    }
    loadMore = ()=>{
        if(this.state.canLoadMore){
            this.setState({
                pageIndex: this.state.pageIndex+1,
                canLoadMore: false
            },()=>{
                let {AreaId,DistrictId,CityCode} = store.getState();
                getHomeData(AreaId,DistrictId,CityCode,this.state.pageIndex,this.state.data.commonInfo.publishTime)
                .then(data=>{
                    let stataData = this.state.data;
                    let canLoadMore = false;
                    if(data.commonInfo.pageCnt-1>this.state.pageIndex){
                        canLoadMore = true
                    }
                    let newData = {
                        bulletComponentList: [
                            ...stataData.bulletComponentList,
                            ...data.bulletComponentList
                        ],
                        templateComponentList: [
                            ...stataData.templateComponentList,
                            ...data.templateComponentList
                        ],
                        commonInfo: data.commonInfo
                    }
                    this.setState({
                        data: newData,
                        canLoadMore
                    })
                })
            })
        }
    }
    componentDidMount(){
        let {AreaId,DistrictId,CityCode} = store.getState();
        getHomeData(AreaId,DistrictId,CityCode)
        .then(data=>{
            this.setState({
                data: data
            },()=>{
                new window.Swiper('.swiper-container-banner', {
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false,
                    },//可选选项，自动滑动
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    loop: true
                })
                new window.Swiper('.swiper-container-news', {
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false,
                    },//可选选项，自动滑动
                    loop: true,
                    direction : 'vertical',
                })
            })
        })
    }
    searchAction(){
        this.props.history.push("/sort");
    }
    cityAction(){
        this.props.history.push("/city");
    }
}