<template>
  <div class="uk-section uk-section-default .uk-margin-auto" id="login">
    <form v-on:submit.prevent>
      <legend class="uk-legend">Login</legend>

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
    <div class="uk-margin">
      <div class="uk-inline">
          <button class="uk-button uk-button-primary" @click="login">login</button>
          <a class="signuplink"><router-link to="/signup" exact>signup</router-link></a>
        <div class="uk-alert-danger" uk-alert v-if="error">
          <p>{{error}}</p>
        </div>
      </div>
      </div>
  </form>  
</div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'Login',
  data() {
    return {
      email: 'test@test.com',
      password: 'testtest',
      error: '',
    }
  },
  methods: {
    login() {
      let user = {
        email: this.email,
        password: this.password
      }
      axios.post('http://localhost:5000/login', user)
        .then(res => {
          //if successfull
          if (res.status === 200) {
            localStorage.setItem('token', res.data.token);
            this.$router.push('/');
            return res                    
          }
        }, err => {
          console.log(err.response);
          this.error = err.response.data.error
        })
    }
  }
}
</script>
<style scoped>
  #login{
    flex: 1;
  }
  a.signuplink{
    margin: auto;
    padding: 20px;
  }

</style>