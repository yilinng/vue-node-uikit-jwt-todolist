<template>
  <div class="uk-section uk-section-default .uk-margin-auto">
    <form v-on:submit.prevent>
      <legend class="uk-legend">Signup</legend>
<div class="uk-margin">
  <div class="uk-inline">  
  <label class="uk-form-label" for="form-stacked-text">name</label>
 <a class="uk-form-icon" href="#" uk-icon="icon: pencil"></a>
    <input type="text" v-model="name" class="uk-input" placeholder="name here..">
  </div>
</div>      
  <div class="uk-margin">
  <div class="uk-inline">  
  <label class="uk-form-label" for="form-stacked-text">email</label>
 <a class="uk-form-icon" href="#" uk-icon="icon: pencil"></a>
    <input type="text" v-model="email" class="uk-input" placeholder="email here..">
  </div>
</div>

<div class="uk-margin">
  <div class="uk-inline">
      <label class="uk-form-label" for="form-stacked-text">password</label>
  <a class="uk-form-icon uk-form-icon-flip" href="#" uk-icon="icon: link"></a>  
    <input type="password" v-model="password" class="uk-input" placeholder="password here...">
  </div>
</div>
    <button class="uk-button uk-button-primary" @click="signup">signup</button>

    <a class="signuplink"><router-link to="/login" exact>login</router-link></a>
    <div class="uk-alert-danger" uk-alert v-if="error">
        <p>{{error}}</p>
    </div>

  </form>  
</div>

</template>

<script>
	import axios from 'axios';

	export default{
		name:'Signup',

		data() {
			return {
				name:'',
				email:'',
				password:'',
				error:''
			}
		},
		methods:{
			signup() {
				let newUser = {
					name:this.name,
					email:this.email,
					password:this.password
				}
			axios.post('http://localhost:5000/signup', newUser)
        .then(res => {
		this.error = '';
		this.$router.push('/login');
		return res
		}, err => {
		console.log(err.response)
		this.error = err.response.data.error
		})
	
				
			}
		}
	}
</script>
<style>
	
  a.signuplink{
    margin: auto;
    padding: 20px;
  }
</style>