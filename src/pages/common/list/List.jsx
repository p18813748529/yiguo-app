import React, {Component} from "react";
import ListUI from "./ListUI"
import "./List.scss"
import {getFruiteList} from '../../../services/fruitService'
export default class List extends Component{
    constructor(){
        super();
        this.state = {
            fruitData: []
        }
    }
    render(){
        let {fruitData} = this.state;

        return(
            <ListUI data={fruitData}/>
        )
    }
    componentDidMount(){
        
        let id=this.props.location.search.slice(1)
        getFruiteList(id).then(data=>{
            console.log(data.CommodityList)
            this.setState({
                fruitData: data.CommodityList
            })
        })
    }
}