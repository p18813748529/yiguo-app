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


export function getFruiteList(){
    return(
        new Promise((resolve,reject)=>{
            http({
                url: API.FRUITE_LIST_API,
                method: 'POST',
                data: {
                    Body: {
                        CategoryCode: "",
                        CategoryId: "05_channelhome",
                        Keyword: "",
                        PageIndex: 1,
                        Sort: 4
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