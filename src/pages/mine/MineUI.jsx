import React from "react"
export default function(props){
    return (
        <div id="mine">
            <div class="loginNot">
                <div class="header clear_fix">
                    <div class="headerImg">
                        <span class="imgBorder">
                            <img alt=" 用户头像" src="//img02.yiguo.com/e/web/150703/00781/140145/no-pic.jpg"/>
                        </span>
                        <a href="javascript:;">
                            <p class="name">登录/注册</p>
                        </a>
                    </div>
                    <i class="setting"></i>
                    <div class="account">
                        <p class="list">
                            <span class="num">0<em>.00</em></span>
                            <span class="txt">账户余额</span>
                        </p>
                        <p class="list">
                            <span class="num">0<em></em></span>
                            <span class="txt">悠币</span>
                        </p>
                    </div>
                </div>
                <div class="list-tab line-top">
                    <ul class="line-bottom">
                        <li class="fourLi">
                            <a href="javascript:;">
                                <i class="icon">
                                    <img src="https://img07.yiguoimg.com/d/web/180608/01261/105825/unpaid.png"alt=""/>
                                </i>待支付
                            </a>
                        </li>
                        <li class="fourLi">
                            <a href="javascript:;">
                                <i class="icon">
                                    <img src="https://img07.yiguoimg.com/d/web/180608/01261/105825/take.png"alt=""/>
                                </i>
                                待收货
                            </a>
                        </li>
                        <li class="fourLi">
                            <a href="javascript:;">
                                <i class="icon">
                                    <img src="http://img05.yiguoimg.com/d/web/180608/01261/105825/evaluate.png"alt=""/>
                                </i>
                                评价送悠币
                            </a>
                        </li>
                        <li class="fourLi">
                            <a href="javascript:;">
                                <i class="icon">
                                    <img src="https://img06.yiguoimg.com/d/web/180608/01261/105825/changing.png"alt=""/>
                                </i>
                                在线退换货
                            </a>
                        </li>
                        <li class="border-left fourLi">
                            <span class="pointRight"></span>
                            <a href="javascript:;">
                                <i class="icon"></i>
                                全部订单
                                <i class="goPage"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="testList clear_fix">
                    <div class="list line-bottom">
                        <a href="javascript:;">
                            <img src="https://img07.yiguoimg.com/d/web/181029/00591/155051/coupons.png"
                                alt="" class="icon"/>优惠券
                        </a>
                    </div>
                    <div class="list line-bottom">
                        <a href="javascript:;">
                            <img src="https://img06.yiguoimg.com/d/web/181029/00591/155051/yellowcard.png"
                                alt="" class="icon"/>充值卡
                        </a>
                    </div>
                    <div class="list line-bottom">
                        <a href="javascript:;">
                            <img src="https://img07.yiguoimg.com/d/web/181029/00591/155051/delivery.png"
                                alt="" class="icon"/>礼品兑换券
                        </a>
                    </div>
                    <div class="list line-bottom">
                        <a href="javascript:;">
                            <img src="https://img07.yiguoimg.com/d/web/181029/00591/155051/address.png"
                                alt="" class="icon"/>收货地址
                        </a>
                    </div>
                    <div class="list line-bottom">
                        <a href="javascript:;">
                            <img src="https://img06.yiguoimg.com/d/web/181029/00591/155051/help.png"
                                alt="" class="icon"/>帮助中心
                        </a>
                    </div>
                    <div class="list line-bottom">
                        <a href="javascript:;">
                            <img src="https://img02.yiguo.com/e/web/130101/app/icon/usercenter/box@3x.png"
                                alt="" class="icon"/>我的团购
                        </a>
                    </div>
                    <div class="list line-bottom">
                        <a href="javascript:;">
                            <img src="https://img07.yiguoimg.com/d/web/181029/00591/155051/service.png"
                                alt="" class="icon"/>在线客服
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}