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
        let _this = this;
        this.scroll = new window.IScroll(this.refs.scroll,{
            bounce: true,
            click: true,
            tap: true,
        });
        // 滚动停止
        this.scroll.on('scrollEnd', function(){
            if(_this.props.loadMore){
                // 滚动到最底部执行加载更多
                if(this.y==this.maxScrollY){
                    _this.props.loadMore();
                }
            }
        })
        this.scroll.on('beforeScrollStart', function(){
            this.refresh();
        })
    }
    refresh(){
        this.scroll.refresh();
    }
    scrollTo(x,y,time){
        time = time || 100
        this.scroll.scrollTo(x, y, time);
    }
    // shouldComponentUpdate(newProps, newState){
    //     if(newProps.refresh!==this.props.state){
    //         this.refresh();
    //     }
    //     return true;
    // }
}