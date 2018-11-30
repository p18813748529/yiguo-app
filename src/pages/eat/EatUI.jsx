import React from "react"
import prouctIMG from "../../assets/prouct260x260.png"
import Scroll from "../../components/scroll"
export default function(props){
    let {banners,list,refresh} = props.data;
    return (
        <Scroll refresh={refresh} style={{top:"0",bottom:"51px"}} dom={
            <div id="eat">
                <div className="title title-icon" id="divOtherCategoryBanner">
                    <div className="title-in title-pad">
                        <ul className="icon-list clear_fix">
                            {
                                banners.map(item=>{
                                    return (
                                        <li key={item.BannerId}>
                                            <a id={"ad_" + item.BannerId} title="">
                                                <img className="lazy icon1" src={item.PictureUrl}
                                                    id={"ArtPic_" + item.id} data-original={item.PictureUrl}
                                                    alt={item.BannerName}/>
                                                <i className="new"></i>
                                                {item.BannerName}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                {
                    list.map(item=>{
                        return (
                            <div key={item.EfruitArticleId} className="title open-article" id={'rptIndexArt_' + item.EfruitArticleId} pageindex="1" rownum={item.RowNum}>
                                <a className="border-color"
                                    categoryid={item.OtherCategoryId} title={item.EfruitArticleTitle}>
                                    <div className="title-in">
                                        <div className="img-box">
                                            <span className="txt know">{item.OtherCategoryName}</span>
                                            <span className="num"><i className="icon icon5"></i>{item.Hint}</span>
                                            <img className="lazy" src={item.PictureUrl}
                                                data-original={item.PictureUrl} alt={item.EfruitArticleTitle}
                                                />
                                        </div>
                                        <p className="tit1">
                                            {item.EfruitArticleTitle}
                                        </p>
                                        <p className="tit2"></p>
                                        <div className="time">
                                            <img className="lazy img-circle img-responsive" src={prouctIMG}
                                                data-original=""/>
                                            <span className="name">&nbsp;</span>
                                            <span className="time-new">{item.PublishedTimed}</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        }/>
    )
}