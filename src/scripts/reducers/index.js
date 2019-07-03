


const defaultState = {
    touxiang:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561738157953&di=a093be2201853cf5fb97bb8364650a1b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F21%2F20180421134937_creUP.thumb.700_0.jpeg",
    ba:[],
    userInfo:{},
    searchCon:[],
    gzdb:[],//关注的吧
    fbtz:[],//发布的帖子
    
}


export const reducers = (state=defaultState,action)=>{


    switch(action.type){
        case "getFtsl":
        return {...state,...{fbtz:action.fbtz}};
        break;
        case "getGzdb":
        return {...state,...{gzdb:action.gzdb}};
        break;
        case "getSerachCon":
        return {...state,...{searchCon:action.searchCon}};
        break;
        case "getUserInfo":
        return {...state,...{userInfo:action.userInfo}};
        break;
        case "changePath":
        return {...state,...{touxiang:action.path}};
        break;
        case "getBa":
        return{...state,...{ba:action.ba}}
        default:
        return state;
        break;
    }
}