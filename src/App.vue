<template>
  <div>

    <signup/>
       
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
//import login from './components/Login';
import Signup from './components/Signup';


export default { 

  name: 'App',
  components: {
   //'ShowAll': ShowAll,
   //'AddPost': AddPost,
    //'app-header': header,
    //'app-footer': footer
      Signup
  },
  data(){
    return{
      
    }
   
  },
  methods:{
    
  }
}
</script>
