import http from "../utils/http"
import API from "../api"

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