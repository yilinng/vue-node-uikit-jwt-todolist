<template>
	<div>
		
		Name:<input type="text" v-model="name"> <br/>

		Email:<input type="text" v-model="email"><br/>

		Password:<input type="password" v-model="password"><br/>

		<button @click="signup">signup</button>
		
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
				password:''
			}
		},
		methods:{
			signup() {
				let newUser = {
					name:this.name,
					email:this.email,
					password:this.password
				}
				
				axios.post('http://localhost:5000/signup' ,newUser)



			}
		}
	}
</script>