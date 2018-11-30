import React from "react"
import Scroll from "../../components/scroll"
export default function(props){
    let {bulletComponentList,commonInfo,templateComponentList} = props.data;
    let carouselPictures = [],
        adPictures = [],
        navComponentList = [],
        fastReportsList = []
    if(templateComponentList){
        carouselPictures = templateComponentList[0].carouselPictures || [];
        adPictures = templateComponentList[0].adPictures || [];
        navComponentList = templateComponentList[0].navComponentList || [];
        fastReportsList = templateComponentList[0].fastReportsList || [];
    }else{
        templateComponentList = []
    }
    // let dom = (<div>
    //     <div className="first-screen-banner">
    //             <div className="swiper-container swiper-container-banner">
    //                 <div className="swiper-wrapper">
    //                     {
    //                         carouselPictures.map((item,index)=>{
    //                             return (
    //                                 <div key={index} className='swiper-slide'>
    //                                     <img src={item.pictureUrl}/>
    //                                 </div>
    //                             )
    //                         })
    //                     }
    //                 </div>
    //                 <div className="swiper-pagination swiper-pagination-bullets">
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="first-screen-ad">
    //             <img src={adPictures[0]&&adPictures[0].pictureUrl}/>
    //         </div>
    //         <div className="first-screen-menu clear_fix">
    //             {
    //                 navComponentList.map((item,index)=>{
    //                     return (
    //                         <a key={index} href="javascript:;" className="one">
    //                             <i>
    //                                 <img src={item.pictureUrl}/>
    //                             </i>
    //                             <p>{item.navName}</p>
    //                         </a>
    //                     )
    //                 })
    //             }
    //         </div>
    //         <div className="first-screen-news"><i className="title"></i>
    //             <div className="swiper-container swiper-container-news">
    //                 <div className="swiper-wrapper">
    //                     {
    //                         fastReportsList.map((item,index)=>{
    //                             return (
    //                                 <div key={index} className="swiper-slide">{item.fastReportTitle}</div>
    //                             )
    //                         })
    //                     }
    //                 </div>
    //             </div>
    //         </div>
    //         {
    //             templateComponentList.map((item,index)=>{
    //                 if(item.componentBase.checkCodeName=="onelineoneimg"){
    //                     let arr = item.adPictures.map((item,index)=>{
    //                         return (
    //                             <div key={index} className="one-image pb pt">
    //                                 <a href="javascript:;" className="link-img">
    //                                     <img src={item.pictureUrl+"?w=1125&amp;h=274"}/>
    //                                 </a>
    //                             </div>
    //                         )
    //                     })
    //                     return arr;
    //                 }else if(item.componentBase.checkCodeName=="onelinetwoimg"){
    //                     return (
    //                         <div key={index} className="two-image clear_fix">
    //                             {
    //                                 item.adPictures.map((item,index)=>{
    //                                     return (
    //                                         <div key={index} className="link-img1">
    //                                             <a href="javascript:;">
    //                                                 <img src={item.pictureUrl+"?w=658&amp;h=419"}/>
    //                                             </a>
    //                                         </div>
    //                                     )
    //                                 })
    //                             }
    //                         </div>
    //                     )
    //                 }else if(item.componentBase.checkCodeName=="floor"){
    //                     return (
    //                         <div key={index} className="group-floor">
    //                             <a href="javascript:;" className="floor-img">
    //                                 <img  src={item.adPictures[0].pictureUrl+"?w=1125&amp;h=652"}/>
    //                             </a>
    //                             <div className="product-list clear_fix">
    //                                 <div className="product-list-in">
    //                                     {
    //                                         item.commoditysComponentList.map((proitem,index)=>{
    //                                             return (
    //                                                 <div key={index} className="proitem">
    //                                                     <div className="pic">
    //                                                         <a href="javascript:;">
    //                                                             <img src={proitem.pictureUrl}/>
    //                                                         </a>
    //                                                     </div>
    //                                                     <div className="info">
    //                                                         <p className="name"><a href="javascript:;">{proitem.commodityName}</a></p>
    //                                                         <div className="saletip"><span>{proitem.saleSlogan}</span></div>
    //                                                         <div className="price"><strong>¥{proitem.commodityPrice}</strong>{proitem.commoditySpec}</div>
    //                                                     </div>
    //                                                 </div>
    //                                             )
    //                                         })
    //                                     }
    //                                     <a href="javascript:;" className="more">
    //                                         <p className="hot">查看更多
    //                                             <i></i>
    //                                         </p>
    //                                     </a>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     )
    //                 }
    //             })
    //         }
    // </div>)
    return (
        <div className="content">
            <div className="first-screen-top" onClick={props.search}>
                <div className="first-screen-search">
                    <a href="javascript:;" className="btn"></a>
                </div>
                <a className="first-screen-adress">
                    北京
                    <i className="arrow"></i>
                </a>
            </div>
            <Scroll refresh={props.refresh} style={{top:"42px",bottom:"51px"}} dom={(
                <div>
                    <div className="first-screen-banner">
                        <div className="swiper-container swiper-container-banner">
                            <div className="swiper-wrapper">
                                {
                                    carouselPictures.map((item,index)=>{
                                        return (
                                            <div key={index} className='swiper-slide'>
                                                <img src={item.pictureUrl}/>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="swiper-pagination swiper-pagination-bullets">
                            </div>
                        </div>
                    </div>
                    <div className="first-screen-ad">
                        <img src={adPictures[0]&&adPictures[0].pictureUrl}/>
                    </div>
                    <div className="first-screen-menu clear_fix">
                        {
                            navComponentList.map((item,index)=>{
                                return (
                                    <a key={index} href="javascript:;" className="one">
                                        <i>
                                            <img src={item.pictureUrl}/>
                                        </i>
                                        <p>{item.navName}</p>
                                    </a>
                                )
                            })
                        }
                    </div>
                    <div className="first-screen-news"><i className="title"></i>
                        <div className="swiper-container swiper-container-news">
                            <div className="swiper-wrapper">
                                {
                                    fastReportsList.map((item,index)=>{
                                        return (
                                            <div key={index} className="swiper-slide">{item.fastReportTitle}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    {
                        templateComponentList.map((item,index)=>{
                            if(item.componentBase.checkCodeName=="onelineoneimg"){
                                let arr = item.adPictures.map((item,index)=>{
                                    return (
                                        <div key={index} className="one-image pb pt">
                                            <a href="javascript:;" className="link-img">
                                                <img src={item.pictureUrl+"?w=1125&amp;h=274"}/>
                                            </a>
                                        </div>
                                    )
                                })
                                return arr;
                            }else if(item.componentBase.checkCodeName=="onelinetwoimg"){
                                return (
                                    <div key={index} className="two-image clear_fix">
                                        {
                                            item.adPictures.map((item,index)=>{
                                                return (
                                                    <div key={index} className="link-img1">
                                                        <a href="javascript:;">
                                                            <img src={item.pictureUrl+"?w=658&amp;h=419"}/>
                                                        </a>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            }else if(item.componentBase.checkCodeName=="floor"){
                                return (
                                    <div key={index} className="group-floor">
                                        <a href="javascript:;" className="floor-img">
                                            <img  src={item.adPictures[0].pictureUrl+"?w=1125&amp;h=652"}/>
                                        </a>
                                        <div className="product-list clear_fix">
                                            <div className="product-list-in">
                                                {
                                                    item.commoditysComponentList.map((proitem,index)=>{
                                                        return (
                                                            <div key={index} className="proitem">
                                                                <div className="pic">
                                                                    <a href="javascript:;">
                                                                        <img src={proitem.pictureUrl}/>
                                                                    </a>
                                                                </div>
                                                                <div className="info">
                                                                    <p className="name"><a href="javascript:;">{proitem.commodityName}</a></p>
                                                                    <div className="saletip"><span>{proitem.saleSlogan}</span></div>
                                                                    <div className="price"><strong>¥{proitem.commodityPrice}</strong>{proitem.commoditySpec}</div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                                <a href="javascript:;" className="more">
                                                    <p className="hot">查看更多
                                                        <i></i>
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            )}/>
        </div>
    )
}