const snackbar = {
 namespaced: true,
 status:{
 	msg:'',
 	visible: false,
 	showClose: true,
 	timeout: 6000,
 	color: 'pink'
 },
 mutations:{
  OPEN_SNACKBAR(state, options){
  	state.visible = true;
  	state.msg = options.msg;
  },
  CLOSE_SNACKBAR(status){
  	state.visible = false;
  },
  //set snackbar
  setShowClose(state, isShow){
  	state.showClose = isShow;
  },
  setTimeout(state, timeout){
  	state.timeout = time;
  },
  setColor(state, color){
    state.color = color;
  }
 },
 actions:{
   openSnackbar(context, options){
     let timeout = context.state.timeout;

     context.commit('OPEN_SNACKBAR', {
       msg: options.msg
     });
     setTimeout(() =>{
       context.commit('CLOSE_SNACKBAR')
     },timeout);
   }
 }
}

export default snackbar;