<template>
	<div>
		
		Name:<input type="text" v-model="name"> <br/>

		Email:<input type="text" v-model="email"><br/>

		Password:<input type="password" v-model="password"><br/>

		<button @click="signup">signup</button>

		{{error}}
		
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
