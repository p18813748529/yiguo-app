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
            setIndex:0
        }
    }
    render(){
        let {tabArr,pageArr,setIndex}=this.state;
    
        return(
          
            
            <SortUI data={tabArr}  su={pageArr}   list={this.steAction.bind(this)} arrindex={setIndex}  paget={this.setClick.bind(this)}/>
   

           
               
            
        )
        
    }
    steAction(index){
        
         this.setState({
              setIndex:index
            
         })
    }
    setClick(item){
        console.log(item);
        this.props.history.push("/list?"+item.CategoryId);
    }
    componentDidMount(){
      
        getParticulars().then((result)=>{
            this.setState({tabArr: result});
            this.setState({pageArr:result})
          })
    
        
    }
}