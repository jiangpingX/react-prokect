


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
