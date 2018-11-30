import React from "react"
export default function(props){
    let {bulletComponentList,commonInfo,templateComponentList} = props.data;
    let carouselPictures = [],
        adPictures = [],
        navComponentList = [],
        fastReportsList = []
    if(templateComponentList){
        carouselPictures = templateComponentList[0].carouselPictures;
        adPictures = templateComponentList[0].adPictures;
        navComponentList = templateComponentList[0].navComponentList;
        fastReportsList = templateComponentList[0].fastReportsList;
    }
    return (
        <div id="home">
            <div className="first-screen-top" onClick={props.search}>
                <div className="first-screen-search">
                    <a href="javascript:;" className="btn"></a>
                </div>
                <a className="first-screen-adress">
                    北京
                    <i className="arrow"></i>
                </a>
            </div>
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
            <div class="one-image pb pt">
                <a href="javascript:;" class="link-img">
                    <img src="https://img14.yiguoimg.com/d/items/2018/181128/9288734637794684_1125x274.jpg?w=1125&amp;h=274"/>
                </a>
            </div>
            <div class="two-image clear">
                <div class="link-img1">
                    <a href="javascript:;">
                        <img src="https://img09.yiguoimg.com/d/items/2018/181120/9288734293960052_658x419.jpg?w=658&amp;h=419"/>
                    </a>
                </div>
                <div class="link-img1">
                    <a href="javascript:;">
                        <img src="https://img09.yiguoimg.com/d/items/2018/181120/9288734293992820_658x419.jpg?w=658&amp;h=419"/>
                    </a>
                </div>
            </div>
        </div>
    )
}