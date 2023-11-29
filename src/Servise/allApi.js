import { Base_url } from "./baseurl";
import { commonrequest } from "./commonrequest";

export const adminSinup=(body)=>{
    return commonrequest("POST",`${Base_url}/express/admin/login`,body)
}

export const userReg=(body)=>{
    return commonrequest("post",`${Base_url}/express/new/user`,body)
}

export const userLogin=(body)=>{
    return commonrequest("POST",`${Base_url}/express/login/user`,body)
}

export const carAddApi=(body,header)=>{
    return commonrequest("POST",`${Base_url}/express/car/adding`,body,header)
}

export const carBrant=()=>{
    return commonrequest("GET",`${Base_url}/express/car/Brant`,"")
}

export const getBrantCars=(carBrant)=>{
    return commonrequest("GET",`${Base_url}/express/all/cars/${carBrant}`,'')
}

export const searchCarsBrant=(carBrant,category)=>{
    return commonrequest("GET",`${Base_url}/express/Brant/cars?carBrant=${carBrant}&category=${category}`)
}

export const getSingleCarApi=(carId)=>{
    return commonrequest("GET",`${Base_url}/express/single/car/${carId}`,"")
}

export const RentCarApi = (body)=>{
    return commonrequest("POST",`${Base_url}/express/rent/user`,body)
}

export const getAllRentApi = ()=>{
    return commonrequest("GET",`${Base_url}/express/all/rent`,'')
}