const SAT_HOST = 'http://localhost:3000';
const UAT_HOST = 'http://article.m.yiguo.com';
const PRO_HOST = 'http://article.m.yiguo.com';

// 首页数据
const HOME_API = "/api/home/TemplateComponent/GetTemplateComponentInfo";

const COMMODTYINFO_API = "/api/commodityapi/Commodity/GetCommodityInfo";

const FRUITE_LIST_API = "api/commodityapi/Commodity/GetSearchList";
// 吃饭吧
const EAT_BANNERS_API = "/Home/GetMainBanners";
const EAT_GLOBAL_API = "/Category/GetListByGlobalType";

// 购物车
const CAR_INFO_API = "/api/shopcart/CartInfo/GetCartInfo";
const GET_GUESS_API = "/api/commodityapi/Commodity/GetGuessRecommentCommodity";

//请求详情页
const PRATICULARS_API='/api/commodityapi/Commodity/GetAllCategory';
export default {
    SAT_HOST,
    UAT_HOST,
    PRO_HOST,
    HOME_API,
    COMMODTYINFO_API,
    FRUITE_LIST_API,
    EAT_BANNERS_API,
    EAT_GLOBAL_API,
    CAR_INFO_API,
    GET_GUESS_API,
    PRATICULARS_API
}