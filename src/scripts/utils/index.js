

import { Toast } from 'antd-mobile';

const url = require("url");


// 得到 query 
export function getQuery(search){
   return  url.parse(search,true).query;
}

export function getFormtime(){
   var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth();
      var day = date.getDate();
      var hour =date.getHours();
      var minute = date.getMinutes();
      minute=minute<10?"0"+minute:minute;
      var seconds = date.getSeconds();
      var time = year+"-"+month+"-"+day+" "+hour+":"+minute+":"+seconds;
      return time;
}

export function checkLogin(callback){
   if(localStorage.mobile){
      callback()
   }
   else{
      Toast.info("登陆后进行操作", 1);
      setTimeout(()=>{
         window.location.href = "http://101.132.73.191/xjp_react/#/login";
      },1000)
   }
}