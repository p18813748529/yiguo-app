import React, {Component} from "react";
import HomeUI from "./HomeUI"
import "./Home.scss"
import {getHomeData} from "../../services/fruitService"
export default class Home extends Component{
    constructor(props){
        super();
        this.state = {
            data: {},
            refresh: false,
            pageIndex: 0
        }
    }
    render(){
        let {data,refresh} = this.state;
        let dom = (<HomeUI data={data} search={this.searchAction.bind(this)}/>);
        return(
            <div id="home" ref="home">
                <HomeUI data={data} loadMore={this.loadMore} refresh={refresh} search={this.searchAction.bind(this)}/>
            </div>
        )
    }
    loadMore = ()=>{
        this.setState({
            pageIndex: this.state.pageIndex+1
        },()=>{
            getHomeData(this.state.pageIndex)
            .then(data=>{
                let stataData = this.state.data;
                let newData = {
                    bulletComponentList: [
                        ...stataData.bulletComponentList,
                        ...data.bulletComponentList
                    ],
                    templateComponentList: [
                        ...stataData.templateComponentList,
                        ...data.templateComponentList
                    ],
                }
                this.setState({
                    data: newData
                },()=>{
                    this.setState({
                        refresh: !this.state.refresh
                    })
                })
            })
        })
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
                this.setState({
                    refresh: !this.state.refresh
                })
            })
        })
    }
    searchAction(){
        this.props.history.push("/sort");
    }
}