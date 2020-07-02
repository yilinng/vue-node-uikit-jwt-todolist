<template>
    <div id="single-todo">
        <div class="uk-section uk-section-default">
        <section v-if="errored">
            <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
        </section>

        <section v-else>
        <div v-if="loading">Loading...</div>

        <div v-else>

        <h1 style="text-align: center;">{{ todo.title }}</h1>
        <article>{{ todo.content }}</article>

        </div>
            <router-link :to="`/todolist`">back to todolist</router-link>
            <router-link :to="`/todolist/${todo._id}/edit`">edit</router-link>

         </section>
    </div>
</div>
</template>
<script>
import axios from 'axios';

	export default{
	
	data() {
			return { 
			todo: [],
			id: this.$route.params.id,		
			loading: true,
            errored: false
			}
		},
	computed: {
		
		},
	
	methods: {
		
		},
	created() {
        axios.get('http://localhost:5000/todolist/' + this.id)
        .then(response => {this.todo = response.data})
        .catch(error => { console.log(error)
        this.errored = true
        })
              
        .finally(() => this.loading = false)
             
        }

	}


</script>

<style>
    div.todo{
        margin: auto;
        float: right;
        width: 70%;
    }   
</style>




