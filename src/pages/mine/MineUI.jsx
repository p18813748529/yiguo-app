import React from "react"
import noPic from "../../assets/no-pic.jpg";
import unpaid from "../../assets/unpaid.png";
import take from "../../assets/take.png";
import evaluate from "../../assets/evaluate.png";
import changing from "../../assets/changing.png";
import coupons from "../../assets/coupons.png";
import yellowcard from "../../assets/yellowcard.png";
import delivery from "../../assets/delivery.png";
import address from "../../assets/address.png";
import help from "../../assets/help.png";
import box_3x from "../../assets/box_3x.png";
import service from "../../assets/service.png";
export default function(props){
    return (
        <div id="mine">
            <div class="loginNot">
                <div class="header clear_fix">
                    <div class="headerImg">
                        <span class="imgBorder">
                            <img alt=" 用户头像" src={noPic}/>
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
                                    <img src={unpaid}alt=""/>
                                </i>待支付
                            </a>
                        </li>
                        <li class="fourLi">
                            <a href="javascript:;">
                                <i class="icon">
                                    <img src={take}alt=""/>
                                </i>
                                待收货
                            </a>
                        </li>
                        <li class="fourLi">
                            <a href="javascript:;">
                                <i class="icon">
                                    <img src={evaluate}alt=""/>
                                </i>
                                评价送悠币
                            </a>
                        </li>
                        <li class="fourLi">
                            <a href="javascript:;">
                                <i class="icon">
                                    <img src={changing} alt=""/>
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
                            <img src={coupons} alt="" class="icon"/>优惠券
                        </a>
                    </div>
                    <div class="list line-bottom">
                        <a href="javascript:;">
                            <img src={yellowcard} alt="" class="icon"/>充值卡
                        </a>
                    </div>
                    <div class="list line-bottom">
                        <a href="javascript:;">
                            <img src={delivery} alt="" class="icon"/>礼品兑换券
                        </a>
                    </div>
                    <div class="list line-bottom">
                        <a href="javascript:;">
                            <img src={address} alt="" class="icon"/>收货地址
                        </a>
                    </div>
                    <div class="list line-bottom">
                        <a href="javascript:;">
                            <img src={help} alt="" class="icon"/>帮助中心
                        </a>
                    </div>
                    <div class="list line-bottom">
                        <a href="javascript:;">
                            <img src={box_3x} alt="" class="icon"/>我的团购
                        </a>
                    </div>
                    <div class="list line-bottom">
                        <a href="javascript:;">
                            <img src={service} alt="" class="icon"/>在线客服
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}