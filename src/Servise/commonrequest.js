import axios from 'axios'

export const commonrequest=async(method,url,body,header)=>{
   const config={
    method,
    url,
    headers:header?header:'application/json',
    data:body
   }
   return await axios (config).then(Response=>{
    return Response
   }).catch(Response=>
    {return Response})
}