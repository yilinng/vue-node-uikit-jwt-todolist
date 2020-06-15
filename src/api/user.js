import axios from '../libs/ajaxRequest'
// 用戶相關的接口
// 調獲取用戶信息的接口  向外暴露一個getUser方法  這個方法中調了接口
// 在組件中，就可以使用getUser，就相當於調用接口
export const getUser = ()=>{
return axios.request({
url:'/user',
method:'get'
})
}
// 再向外暴露一個登錄的方法，方法內部也是調接口
// 在登錄組件中就可以調用Login方法，需要給方法傳遞一個用戶名
export const login = (username)=>{
return axios.request({
url:'/login',
method:'post',
data:{
username
}
})
}
//驗證token方法  
export const validate = ()=>{
return axios.request({
url:'/validate',
method:'get'
})
}