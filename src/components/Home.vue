<template>
<div class="uk-container">
    <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match grid" uk-grid>
    <div>
        <div class="uk-card uk-card-default uk-card-body">
            <h3 class="uk-card-title">HELLO {{ name }} welcome!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
    <div>
        <div class="uk-card uk-card-primary uk-card-body">
            <h3 class="uk-card-title"><router-link to="/todolist" exact>todolist</router-link></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
    <div>
        <div class="uk-card uk-card-secondary uk-card-body">
            <h3 class="uk-card-title" @click="logout">logOut</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
</div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'Home',
  data() {
    return {
      name: '',
      email: '',
    }
  },
  created() {
    //user is not authorized
    if (localStorage.getItem('token') === null) {
      this.$router.push('/login');
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
  .uk-card-title{
    cursor: pointer;
  }

  .grid{
    margin: 10px 0px;
  }
</style>