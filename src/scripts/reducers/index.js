


const defaultState = {
    touxiang:"https://imgsa.baidu.com/forum/abpic/item/82025aafa40f4bfbae113bae0d4f78f0f6361802.jpg",
    ba:[],
    userInfo:{}
    
}


export const reducers = (state=defaultState,action)=>{


    switch(action.type){
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