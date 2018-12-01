import React from "react"
import Scroll from "../../components/scroll"
export default function(props){
    let {bulletComponentList,commonInfo,templateComponentList,loadMore,search} = props.data;
    if(!templateComponentList){
        templateComponentList = []
    }
    return (
        <div className="content">
            <div className="first-screen-top" onClick={search}>
                <div className="first-screen-search">
                    <a href="javascript:;" className="btn"></a>
                </div>
                <a className="first-screen-adress">
                    北京
                    <i className="arrow"></i>
                </a>
            </div>
            <Scroll loadMore={loadMore} style={{top:"42px",bottom:"51px"}} dom={(
                <div>
                    {
                        templateComponentList.map((item,index)=>{
                            if(item.componentBase.checkCodeName=="firstscreen"){
                                return (
                                    [
                                        <div className="first-screen-banner">
                                            <div className="swiper-container swiper-container-banner">
                                                <div className="swiper-wrapper">
                                                    {
                                                        item.carouselPictures.map((item,index)=>{
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
                                        </div>,
                                        <div className="first-screen-ad">
                                            <img src={item.adPictures[0]&&item.adPictures[0].pictureUrl}/>
                                        </div>,
                                        <div className="first-screen-menu clear_fix">
                                            {
                                                item.navComponentList.map((item,index)=>{
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
                                        </div>,
                                        <div className="first-screen-news"><i className="title"></i>
                                            <div className="swiper-container swiper-container-news">
                                                <div className="swiper-wrapper">
                                                    {
                                                        item.fastReportsList.map((item,index)=>{
                                                            return (
                                                                <div key={index} className="swiper-slide">{item.fastReportTitle}</div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    ]
                                )
                            }else if(item.componentBase.checkCodeName=="onelineoneimg"){
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
                                        {item.adPictures&&(<a href="javascript:;" className="floor-img">
                                            <img src={item.adPictures[0].pictureUrl+"?w=1125&amp;h=652"}/>
                                        </a>)}
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
                            }else if(item.componentBase.checkCodeName=="onelineoneproduct"){
                                return (
                                    item.commoditysComponentList.map((proitem,index)=>{
                                        return (
                                            <div key={index} className="prolist pt">
                                                <div className="blockwrap">
                                                    <ul>
                                                        <li>
                                                            <div className="proitem">
                                                                <div className="pic"><a href="javascript:;"><img src={proitem.pictureUrl}/></a></div>
                                                                <div className="info">
                                                                    <p className="name elli"><a href="javascript:;">{proitem.commodityName}</a></p>
                                                                    <p className="sub  elli">{proitem.subTitle}</p>
                                                                    <div className="saletip"><span>{proitem.saleSlogan}</span></div>
                                                                    <div className="price"><strong>¥{proitem.commodityPrice}</strong>{proitem.commoditySpec}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )
                                    })
                                    
                                )
                            }
                            else if(item.componentBase.checkCodeName=="onelinetwoproduct"){
                                return (
                                    <div key={index} className="prolist2 pt">
                                    <div className="blockwrap">
                                        <div className="tt">
                                            <h3>{item.componentBase.customComponentName}</h3>
                                        </div>
                                        <ul>
                                            {
                                                item.commoditysComponentList.map((proitem,index)=>{
                                                    return (
                                                        <li key={index}>
                                                            <div className="proitem">
                                                                <div className="pic">
                                                                    <a href="javascript:;">
                                                                        <img src={proitem.pictureUrl}/>
                                                                    </a>
                                                                </div>
                                                                <div className="info">
                                                                    <p className="name"><a href="javascript:;">{proitem.commodityName}</a></p>
                                                                    <div className="saletip"><span>{proitem.saleSlogan}</span></div>
                                                                    <div className="price"><strong>¥{proitem.commodityPrice}</strong>{proitem.commoditySpec}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                                )
                            }
                        })
                    }
                    {
                        commonInfo?(
                            commonInfo.pageCnt-1>commonInfo.pageIndex ? 
                            <p className="pagefooter pt pb">数据加载中...</p>
                            :
                            (<div className="pagefooter pt pb">
                                <p>沪IPC备09008015号</p><p>上海易果电子商务有限公司</p>
                            </div>)
                        )
                        : ""
                    }
                </div>
            )}/>
        </div>
    )
}