import  React from "react"

export default function(props){
    let {cityList,hotCityList} = props.data.data;
    let {isMask,selectCity,maskData,selectArea,closeMask} = props.data;
    return (
        <div id="city">
            <h3>热门城市</h3>
            <div className="hot clear_fix">
                {
                    hotCityList.map(item=>{
                        return <span key={item.AreaId} className="line-all">{item.AreaName}</span>
                    })
                }
            </div>
            {
                cityList.map((item,index)=>{
                    return [
                        <h4 key="item.FirstLetter">{item.FirstLetter}</h4>,
                        <div key={index} className="list clear_fix">
                        {
                            item.CityList.map((list,index)=>{
                                return <span key={index} onClick={selectCity.bind(this,list)}>{list.AreaName}</span>
                            })
                        }
                        </div>
                    ]
                })
            }
            <div className="mask" style={{display: isMask?"":"none"}}>
                <div className="bg" onClick={closeMask}></div>
                <div className="box">
                    <h3>{maskData.city}</h3>
                    <div className="lists">
                    {
                        maskData.list.map((item,index)=>{
                            return (
                                <span key={index} className="line-top" 
                                    onClick={selectArea.bind(this,{
                                        districtId: item.AreaId,
                                        areaName: maskData.city,
                                        cityId: maskData.id,
                                        cityCode: maskData.areaCode
                                    })}>
                                    {item.AreaName}
                                </span>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}