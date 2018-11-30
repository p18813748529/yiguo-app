import React from "react"
import aa  from "../../assets/search.png"
export default function(props){
    return (
        <div id="sort">
             <div className="nav">
              <div className="nav-left">
                  <img src={aa}/>
                  <input type="text" placeholder='请输入商品名称'/>
              </div>
              <div className="nav-right">
                  <div className="search">搜索</div>
              </div>
             </div>
             <div className="banner">
             <div className="swiper-wrapper">
                    {
                        props.data.map((item, index)=>{
                            return (
                                <div key={item.CategoryId} className="swiper-slide" onClick={props.list.bind(this,index)}  style={{color:props.arrindex==index? '#11b57c' : "" ,height:props.arrindex==index? '42px' : "" ,background:props.arrindex==index? '#ffffff' : "",borderLeft:props.arrindex==index? '3px solid #11b57c' : ""}}> 
                                 <div className='CategoryName'>{item.CategoryName}</div>
                                </div>
                            )
                        })
                    }
                    </div>
                 <div className="banner-right">
                   <div className="arr-page">

                   {
                      
                        props.su.map((item, index)=>{
                            return (
                                <div key={item.HighId} className="item-Cate" style={{display:props.arrindex==index? '' : "none"}} >
                                
                                 <div className='item-Childs' >
                                       { 
                                           
                                          item.Childs.map((item,index)=>{
                                            
                                                  return (
                                                         <div className="name" key={index}   onClick={props.paget.bind(this,item)} >
                                                       
                                                      
                                                          <img src={item.PictureUrl}/>
                                                         
                                                        <div className="it-name">  {item.CategoryName}</div>
                                                         </div>
                                                         
                                                    
                                                  )
                                          })
                                       }
                                 </div>
                                </div>
                            )
                        })
                    }

                     </div>
                 </div>

           </div>
  
                    
                    
            
        </div>
    )
}