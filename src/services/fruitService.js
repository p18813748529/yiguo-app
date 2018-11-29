import http from "../utils/http"
import API from "../api"

export function getHomeData(){
    return new Promise((resolve,reject)=>{
        http({
            url: API.HOME_API,
            method: "POST",
            data: {
                body: {
                    operationType: 0,
                    previewTime: ""
                },
                head: {
                    cityCode: "2",
                    cityId: "eabbe02f-59e0-46e6-90e7-cd8a89dbb98f",
                    districtId: "c1153b9b-b21e-4761-9daf-99735a87f8d8",
                    loginToken: "",
                    token: "",
                    version: "h5"
                }
            }
        })
        .then(({data,status})=>{
            if(status===200){
                console.log(data.Data)
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
// import axios from "axios"
// axios({
//     url: "/api/commodityapi/Commodity/GetCommodityInfo",
//     method: "POST",
//     data: {
//         Body: {
//             CommodityCode: "1522580",
//             CommodityId: ""
//         },
//         Head: {
//             CityCode: "2",
//             CityId: "eabbe02f-59e0-46e6-90e7-cd8a89dbb98f",
//             DeviceId: "8993206abde1a662fc850c7d31a3007b",
//             DistrictId: "c1153b9b-b21e-4761-9daf-99735a87f8d8",
//             LoginToken: "",
//             MobileOS: "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
//             Token: ""
//         }
//     },
//     baseURL: "http://localhost:3000",
//     timeout: 8000,
//     headers: {
//         'appName': '3000025'
//     }
// });


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
            console.log(data.Data.CategoryList)
            
            
          })
          .catch((error) => {
            //请求失败
          });
    })
}