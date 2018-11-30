import React, {Component} from "react";
import CarUI from "./CarUI"
import "./Car.scss"
import {getCarInfo,getGuess} from "../../services/fruitService"
export default class Car extends Component{
    constructor(){
        super();
        this.state = {
            carInfo: {},
            commodityList: []
        }
    }
    render(){
        let {carInfo,commodityList} = this.state;
        return(
            <CarUI data={{carInfo,commodityList}}/>
        )
    }
    componentDidMount(){
        getCarInfo()
        .then(carInfo=>{
            this.setState({
                carInfo
            })
        })
        getGuess()
        .then(commodityList=>{
            this.setState({
                commodityList
            })
        })
    }
}