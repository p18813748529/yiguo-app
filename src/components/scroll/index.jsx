import React,{Component} from "react";
import "./Scroll.scss";
export default class Scroll extends Component{
    constructor(props){
        super();
    }
    render(){
        let {dom,style} = this.props;
        return (
            <div id="scroll" ref="scroll" style={style}>
                <div className="scroll-wrap">
                    {dom}
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.scroll = new window.IScroll(this.refs.scroll,{
            bounce: true,
            click: true,
            tap: true,
        });
    }
    refresh(){
        this.scroll.refresh();
    }
    shouldComponentUpdate(newProps, newState){
        if(newProps.refresh!==this.props.state){
            this.refresh();
        }
        return true;
    }
}