import React from "react"
export default function(props){
    let {carInfo,commodityList} = props.data;
    let OperationShopCartGroups = [],
        ShopCartGroups = [];
    if(carInfo.OperationShopCartGroups){
        OperationShopCartGroups = carInfo.OperationShopCartGroups;
    }
    if(carInfo.ShopCartGroups){
        ShopCartGroups = carInfo.ShopCartGroups;
    }
    return (
        <div id="car">
            <div className="cart-login line-bottom">
                登录可同步购物车内商品
                <a href="javascript:;" className="line-all">登录</a>
            </div>
            <div className="cart-express sale-top line-bottom elli pd padTop">
                全场满100元包邮,已包邮
                <span className="red"></span>
            </div>
            <div className="goods">
                <div className="group line-bottom">
                    {
                        ShopCartGroups.map(item=>{
                            let commodity = item.Commoditys[0];
                            return (
                                <div key={item.GroupId} className="saleGroup line-top">
                                    <div className="one line-bottom">
                                        <div className="check"><i className="active"></i></div>
                                        <div className="img"><img src={commodity.PicUrl}/></div>
                                        <div className="text">
                                            <h2 className="elli2">{commodity.CommodityName}</h2>
                                            <div className="tag">
                                            </div>
                                            <p><strong className="red">￥<b>{commodity.OriginalPrice}</b></strong>
                                            </p>
                                        </div>
                                        <div className="del"><i></i></div>
                                        <div className="limit red"></div>
                                        <div className="num">
                                            <span className="cut line-all active"><i></i></span>
                                            <span className="input line-bottom">{commodity.CommodityAmount}</span>
                                            <span className="add line-all"><i></i></span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="saleall line-top">
                {
                    OperationShopCartGroups.map((item,index)=>{
                        return (
                            <dl key={index} className="line-bottom">
                                <dt><span className="tag">全网满赠</span></dt>
                                <dd>{item.GroupTitle}</dd>
                                {
                                    item.Commoditys.map((commodity,index)=>{
                                        return (
                                            <dd key={index} className="pd"><span>× {commodity.CommodityAmount}</span>
                                                <p className="elli">{commodity.CommodityName}</p>
                                            </dd>
                                        )
                                    })
                                
                                }
                                <dd className="ri">随订单发出（以结算金额为准）</dd>
                            </dl>
                        )
                    })
                }
            </div>
            <div className="guess line-bottom">
                <div className="title line-top">
                    <h2>猜你喜欢</h2>
                </div>
                <div className="list clear_fix">
                    {
                        commodityList.map(item=>{
                            return (
                                <div key={item.CommodityId} className="one">
                                    <div className="img"><img src={item.SmallPic}/></div>
                                    <div className="text">
                                        <h2 className="elli2">{item.CommodityName}</h2>
                                        <p><strong className="red">￥<b>{item.OriginalPrice}</b></strong></p>
                                    </div>
                                    <div className="btn"><a href="javascript:;"></a></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}