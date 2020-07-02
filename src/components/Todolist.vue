<template>
	<div class="todo">
	<form v-on:submit.prevent class="uk-form-stacked">
			<legend class="uk-legend">Add a todo</legend>
	<div class="uk-margin">
        <label class="uk-form-label" for="form-stacked-text">Title</label>
        <div class="uk-form-controls">
            <input class="uk-input" v-model="title" type="text" placeholder="Some title...">
        </div>
    </div>
     <div class="uk-margin">
        <label class="uk-form-label" for="form-stacked-text">Content</label>
        <div class="uk-form-controls">
            <input class="uk-input" v-model="content" type="text" placeholder="Some content...">
        </div>
    </div>		
    <button class="uk-button uk-button-primary" @click="addnew">addnew</button>


  </form>

<hr class="uk-divider-icon">

  <div v-for="(todo, index) in todos"
   v-bind:key="todo._id" v-bind:title="todo.title" v-bind:index="index" v-bind:content="todo.content" class="uk-list uk-list-striped">
	<router-link :to="`/todolist/${todo._id}`">{{todo.title}}</router-link>
	<p>{{todo.content}}</p>
		
    <button @click.prevent="deleteone(todo._id)" class="uk-button uk-button-danger">deleteone</button>
		
	
  </div>

  {{error}}
	</div>
</template>
<script>
import axios from 'axios';

	export default{
	
	data() {
			return { 
			todos: [],
			title:  '', 
			content: '',
			error: ''
			}
		},
	computed: {
		todotitle: function(){
			return this.todo.title
			
		}
	},
	methods: {
		addnew() {
			
				let newTodo = {
					title:this.title,
					content:this.content
				}
			axios.post('http://localhost:5000/todolist', newTodo)
			.then(res =>{
			this.error = '';
			this.todos.push({title:this.title});
			this.todos.push({content:this.content});
			alert('add new post');
			return res
			}, err => {
				console.log(err.response)
				this.error = err.response.data.error
				alert('add failed, please try again!');

			}
			)

			
			},
		deleteone(id) {
			let apiURL = `http://localhost:5000/todolist/${id}`;
			let indexOfArrayItem = this.todos.findIndex(i => i._id === id);
			if(window.confirm("Do you want to delete?")){
			axios.delete(apiURL).then(() => {
				this.todos.splice(indexOfArrayItem, 1);

			}).catch(error =>{
				console.log(error)
			});	
			}
		
		}
		
			},
	created(){
		axios.get('http://localhost:5000/todolist').then(response =>this.todos = response.data)
		}

	}


</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	div.todo{
		margin: auto;
		float: right;
		width: 70%;
		padding: 20px;
	}	
</style>