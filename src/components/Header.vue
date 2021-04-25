<template>
  <nav class="uk-navbar-container" uk-navbar>       
    <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
            <li><router-link to="/" exact>SEVENTEEN</router-link></li>          
        </ul>
    </div>
   
    <div class="uk-navbar-right">
<!--show navbar when  device widths of 960px and larger.(uikit--visibility)
    =>https://getuikit.com/docs/visibility -->
        <ul class="uk-navbar-nav uk-visible@m">
            <li><router-link to="/" exact>Homepage</router-link></li>
            <li><router-link to="/todolist" exact>todolist</router-link></li>            
            <li v-if="token !== null">
                <a href="#">Hi!{{name}}</a>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li><button class="uk-button uk-button-primary" @click="logout">logout</button></li>
                    </ul>
                </div>
            </li>
            <li v-else>
                <router-link to="/login" exact>login</router-link>
            </li>

        </ul>
<!-- Hide right-floated links on small screens and replace them with a menu icon(uikit--visibility) -->

        <button type="button" class="uk-button uk-button-default uk-margin-small-right uk-hidden@m" uk-toggle="target: #offcanvas-usage"  uk-icon="list">                      
        </button>          
            <div id="offcanvas-usage" uk-offcanvas>
                <div class="uk-offcanvas-bar">
                <button class="uk-offcanvas-close" type="button" uk-close></button>
                <ul class="uk-list uk-list-divider">
                    <li><router-link to="/" exact>Homepage</router-link></li>
                    <li><router-link to="/todolist" exact>todolist</router-link></li>                     
                    <li v-if="token !== null">
                        <a href="#">Hi!{{name}}</a>
                    <div>                            
                        <li><button class="uk-button uk-button-default" @click="logout">logout</button></li>
                    </div>                                  
                    </li>
                    <li v-else>
                        <router-link to="/login" exact>login</router-link>
                    </li>
                </ul>
                </div>
            </div>
    </div>
    </nav>
</template>

<script>
import axios from 'axios';

  export default {
    data(){
     return {
        name:'',
        email:'',
        get token (){
            return localStorage.getItem('token')
        }
      }
    

    },   
    mounted() {
       axios.get('http://localhost:5000/user', { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        this.name = res.data.user.name;
        this.email = res.data.user.email;
      })
    },
    methods: {
     logout(){
      if (window.confirm("Do you want to logout??")) {
        localStorage.clear();
        this.$router.push('/login');

      }  
    
     }
    }
   
  }
</script>

<style scoped>
nav{
	width: 100%;
}
.router-link-active{
    font-weight:bold;
}
</style>
