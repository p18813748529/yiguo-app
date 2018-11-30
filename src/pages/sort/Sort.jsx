import React, {Component} from "react";
import SortUI from "./SortUI"
import "./Sort.scss"
import {getParticulars}  from "../../services/fruitService"



export default class Sort extends Component{
    constructor(){
        super();
        this.state={
            tabArr:[],
            pageArr:[],
            setIndex:''
        }
    }
    render(){
        let {tabArr,pageArr,setIndex}=this.state;
    
        return(
          
            
            <SortUI data={tabArr}  su={pageArr}   list={this.steAction.bind(this)} arrindex={setIndex}/>

            
        )
        
    }
    steAction(index){
        
         this.setState({
              setIndex:index
            
         })
    }
    componentDidMount(){
      
        getParticulars().then((result)=>{
            this.setState({tabArr: result});
            this.setState({pageArr:result})
          })
    
        
    }
}