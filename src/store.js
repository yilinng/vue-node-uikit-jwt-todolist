import Vue from 'vue'

import Vuex from 'vuex'
import {login,validate} from './api/user'   //必須用這種方式引入
import {setLocal} from './libs/local'   //引入lib文件夾下的local.js文件中的setLocal方法（往localStorage裡存放token）

Vue.use(Vuex)


export default new Vuex.Store({
state: {
//定義動畫是否顯示
isShowLoading:false,
username:'wangcai'
},
mutations: {
//使動畫顯示
showLoading(state){
state.isShowLoading = true;
},
//使動畫隱藏
hideLoading(state){
state.isShowLoading = false;
},
//定義修改用戶名的方法
setUser(state,username){
state.username = username
}
},
// actions存放接口的調用  dispatch actions裡面放方法
actions: {
//這裡面所有的方法都是異步的
//登錄方法
async toLogin({commit},username){
let r = await login(username) //調用user.js中的login方法，也就是調用登錄接口
// console.log(r);
if(r.code === 0){   //登錄成功後會給你返回json數據，裡面有code
//登錄成功了
commit('setUser',r.username)  //修改用戶名
setLocal('token',r.token)   //把得到的token存到localStorage裡
}else{
// console.log('............');
return Promise.reject(r.data);  //如果失敗，返回一個promise失敗態
}
},
//驗證token方法
async validate({commit}){
let r = await validate(); //調用user.js中的validate方法，也就是調用驗證接口
if(r.code === 0){
commit('setUser',r.username)
setLocal('token',r.token) //我們說了，驗證通過，或者每次切換路由時，都要重新生成token
}
return r.code === 0;  //返回token是否失效,true或者false
}
}
})
