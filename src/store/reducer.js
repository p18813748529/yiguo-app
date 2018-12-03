export default function reducer(state, action) {
    if(action.type=="selectArea"){
        return {
            ...state,
            AreaId: action.areaId,
            AreaName: action.areaName,
            DistrictId: action.districtId,
            CityCode: action.cityCode
        }
    }else{
        return state;
    }
}