<template>
  <div class="uk-section uk-section-default .uk-margin-auto" id="signup">
    <form v-on:submit.prevent>
			<legend class="uk-legend">Signup</legend>
		<div class="uk-margin">
			<div class="uk-inline">  
				<label class="uk-form-label" for="form-stacked-text">name</label>
			<div class="uk-form-controls">
				<input type="text" v-model="name" class="uk-input uk-form-width-medium" placeholder="name here..">
			</div>	
			</div>
		</div>      
		<div class="uk-margin">
			<div class="uk-inline">  
				<label class="uk-form-label" for="form-stacked-text">email</label>
			<div class="uk-form-controls">
				<input type="text" v-model="email" class="uk-input uk-form-width-medium" placeholder="email here..">
			</div>		
			</div>
		</div>

		<div class="uk-margin">
			<div class="uk-inline">
				<label class="uk-form-label" for="form-stacked-text">password</label>
			<div class="uk-form-controls">	
				<input type="password" v-model="password" class="uk-input uk-form-width-medium" placeholder="password here...">
			</div>	
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
<style scoped>
  #signup{
	flex:1;
  }
  a.signuplink{
    margin: auto;
    padding: 20px;
  }
		
</style>