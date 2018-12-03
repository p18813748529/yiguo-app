import React,{Component} from "react"

import CityUI from "./CityUI.jsx"
import "./City.scss"
import {getCityList,getCityArea} from "../../../services/fruitService"
import store from "../../../store"
export default class City extends Component{
    constructor(props){
        super();
        this.state = {
            data: {
                cityList: [],
                hotCityList: [],
            },
            isMask: false,
            maskData: {city:"",id: "",list:[]}
        }
    }
    render(){
        let {data,isMask,maskData} = this.state;
        return (
            <CityUI data={{
                data,
                isMask,
                maskData,
                selectCity: this.selectCityAction.bind(this),
                selectArea: this.selectAreaAction.bind(this),
                closeMask: this.closeMaskAction.bind(this)
            }}/>
        )
    }
    componentDidMount(){
        getCityList()
        .then(data=>{
            this.setState({
                data
            })
        });
    }
    selectCityAction(city){
        getCityArea(city.AreaId)
        .then(list=>{
            let maskData = {
                list: list,
                city: city.AreaName,
                id: city.AreaId,
                areaCode: city.AreaCode
            }
            this.setState({
                isMask: true,
                maskData: maskData
            })
        })
    }
    selectAreaAction(area){
        store.dispatch({
            type: "selectArea",
            areaId: area.cityId,
            areaName: area.areaName,
            districtId: area.districtId,
            cityCode: area.cityCode,
        })
        this.props.history.push("/");
    }
    closeMaskAction(){
        this.setState({
            isMask: false
        })
    }
}