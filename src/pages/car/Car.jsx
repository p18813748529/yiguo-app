import React, {Component} from "react";
import CarUI from "./CarUI"
import "./Car.scss"
import {getCarInfo,getGuess} from "../../services/fruitService"
export default class Car extends Component{
    constructor(){
        super();
        this.state = {
            carInfo: {},
            commodityList: [],
            refresh: false
        }
    }
    render(){
        let {carInfo,commodityList,refresh} = this.state;
        return(
            <CarUI data={{carInfo,commodityList,refresh}}/>
        )
    }
    componentDidMount(){
        getCarInfo()
        .then(carInfo=>{
            this.setState({
                carInfo
            },()=>{
                this.setState({
                    refresh: !this.state.refresh
                })
            })
        })
        getGuess()
        .then(commodityList=>{
            this.setState({
                commodityList
            },()=>{
                this.setState({
                    refresh: !this.state.refresh
                })
            })
        })
    }
}