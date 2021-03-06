import http from "../utils/http"
import API from "../api"

export function getHomeData(cityId,districtId,cityCode,pageIndex,publishTime){
    let time = new Date();
    time = time.toLocaleString();
    time = time.replace(/[\u4e00-\u9fa5]{2}/,"");
    return new Promise((resolve,reject)=>{
        http({
            url: API.HOME_API,
            method: "POST",
            data: {
                body: {
                    previewTime: "",
                    pageIndex: pageIndex || 0,
                    homePageId: "55a2d0a1-98ab-43e9-90c8-825a54c6f06b",
                    operationType: pageIndex>0?1:0,
                    publishTime: publishTime || ""
                },
                head: {
                    cityCode,
                    cityId,
                    districtId,
                    version: "h5"
                }
            }
        })
        .then(({data,status})=>{
            if(status===200){
                resolve(data.Data);
            }
        });
    })
}

export function getCommodityInfo(){
    new Promise((resolve,reject)=>{
        http({
            url: API.COMMODTYINFO_API,
            method: "POST",
            data: {
                Body: {
                    CommodityCode: "1522580",
                    CommodityId: ""
                },
                Head: {
                    CityCode: "2",
                    CityId: "eabbe02f-59e0-46e6-90e7-cd8a89dbb98f",
                    DeviceId: "8993206abde1a662fc850c7d31a3007b",
                    DistrictId: "c1153b9b-b21e-4761-9daf-99735a87f8d8",
                    LoginToken: "",
                    MobileOS: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
                    Token: ""
                }
            },
            headers: {
                'appName': '3000025'
            }
        })
    })
}


export function getFruiteList(CategoryId){
    return(
        new Promise((resolve,reject)=>{
            http({
                url: API.FRUITE_LIST_API,
                method: 'POST',
                data: {
                    Body: {
                        CategoryCode: "",
                        Keyword: "",
                        PageIndex: 1,
                        Sort: 4,
                        CategoryId:CategoryId
                    },
                    Head: {
                        CityCode: "512",
                        CityId: "0540d74e-0ffb-4a3a-ab79-ec590dd49947",
                        DeviceId: "2747d6bf37e8910bf6c36993c2570212",
                        DistrictId: "29f9cd72-a77e-4fe1-b613-3af4298380a9",
                        LoginToken: "",
                        Token: ""
                        
                    }
                }
            })
            
            .then(({data,status})=>{
                if(status===200){
                    resolve(data.Data);

                }
              
            });
        })
    )
}
export function getEatBanners(){
    return new Promise((resolve,reject)=>{
        http({
            url: API.EAT_BANNERS_API,
            method: "POST"
        })
        .then(({data,status})=>{
            if(status==200){
                let {Banners} = data.RspData.data.AdCategory37;
                resolve(Banners);
            }
        })
    })
}

export function getEatGlobal(PageIndex,PageSize){
    return new Promise((resolve,reject)=>{
        http({
            url: API.EAT_GLOBAL_API,
            method: "POST",
            data: {
                PageIndex: PageIndex||1,
                PageSize: PageSize||5,
                Refresh: 1543484640692
            }
        })
        .then(({data,status})=>{
            if(status==200){
                resolve(data.RspData.ArticleList);
            }
        })
    })
}

export function getCarInfo(){
    return new Promise((resolve,reject)=>{
        http({
            url: API.CAR_INFO_API,
            method: "POST",
            data: {
                Body: {
                    CouponId: ""
                },
                Head: {
                    CityCode: "2",
                    CityId: "eabbe02f-59e0-46e6-90e7-cd8a89dbb98f",
                    DeviceId: "8993206abde1a662fc850c7d31a3007b",
                    DistrictId: "c1153b9b-b21e-4761-9daf-99735a87f8d8",
                    LoginToken: "",
                    MobileOS: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
                    Token: ""
                }
            }
        }).then(({data,status})=>{
            if(status==200){
                let {OperationShopCartGroups,ShopCartGroups} = data.Data;
                resolve({OperationShopCartGroups,ShopCartGroups})
            }
        })
    })
}

export function getGuess(){
    return new Promise((resolve,reject)=>{
        http({
            url: API.GET_GUESS_API,
            method: "POST",
            data: {
                Body: {
                    GuessRecommendType: 1
                },
                Head: {
                    CityCode: "2",
                    CityId: "eabbe02f-59e0-46e6-90e7-cd8a89dbb98f",
                    DeviceId: "8993206abde1a662fc850c7d31a3007b",
                    DistrictId: "c1153b9b-b21e-4761-9daf-99735a87f8d8",
                    LoginToken: "",
                    MobileOS: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
                    Token: ""
                }
            }
        }).then(({data,status})=>{
            if(status==200){
                resolve(data.Data.CommodityList)
            }
        })
    })
}

export function getCityList(){
    return new Promise((resolve,reject)=>{
        http({
            url: API.CITY_LIST_API,
            method: "POST",
            data: {
                Body: {

                },
                Head: {
                    DeviceId: "8993206abde1a662fc850c7d31a3007b",
                    LoginToken: "",
                    Token: ""
                }
            }
        })
        .then(({data,status})=>{
            let {CityList,HotCityList} = data.Data;
            resolve({cityList: CityList,hotCityList: HotCityList[0].CityList});
        })
    })
}

export function getCityArea(CityId){
    return new Promise((resolve,reject)=>{
        http({
            url: API.CITY_AREA_API,
            method: "POST",
            data: {
                Body: {
                    CityId
                },
                Head: {
                    DeviceId: "8993206abde1a662fc850c7d31a3007b",
                    LoginToken: "",
                    Token: ""
                }
            }
        })
        .then(({data,status})=>{
            if(status===200){
                resolve(data.Data.DistrictList);
            }
        })
    })
}

//请求详情页数据
export function getParticulars(){
   return new Promise((resolve,reject)=>{
           http({
               url:API.PRATICULARS_API,
               method:"POST",
               data:{
                   Body:'',
                   Head:{
                    
                    CityCode: "512",
                   
                    CityId: "0540d74e-0ffb-4a3a-ab79-ec590dd49947",
                    DeviceId: "6f9db822fa0ebdb1265ef4d40cad71ab",
                    DistrictId: "3d93cd33-6973-4590-a95d-1669d31eb6fd",
                    LoginToken: "",
                    MobileOS: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
                    Token: ""
                   }
               },
               headers: {  
                'appName': '3000025'
              }
           })
           .then(({ data, status }) => {
            if (status != 200)
              //请求失败
              return;
            //请求成功
           
            resolve(data.Data.CategoryList);
          
            
          })
          .catch((error) => {
            //请求失败
          });
    })
}