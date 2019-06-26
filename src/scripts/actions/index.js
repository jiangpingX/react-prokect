


import  axios from "../utils/axios";
export function updatepersondata({url,params}){
    return axios.get(url,{
        params
    })
    .then(res=>{
        console.log(res);
        return{
            type:"updatepersondata",
        }
    })
}

export const changePath = (path)=>{
    return{
        type:"changePath",
        path
    }
}

export function getBa(url){
    return axios.get(url).then(res=>{
        // console.log(res);
        return{
            type:"getBa",
            ba:res.data.result
        }
    })
}
export function getUserInfo({url,params}){
   return axios.get(url,{
       params
   })
   .then(res=>{
       console.log(res);
       return{
        type:"getUserInfo",
        userInfo:res.data.result
    }
   })
}