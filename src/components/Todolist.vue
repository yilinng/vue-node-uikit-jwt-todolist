<template>
	<div id="todo">
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


<table class="uk-table uk-table-justify uk-table-divider"> 
    <thead>
        <tr>
            <th class="uk-width-small">Table Title</th>
            <th>Table Content</th>
            <th>Table Edit</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(todo, index) in todos" :key="todo.id" v-bind:index="index">

            <td><router-link :to="`/todolist/${todo._id}`">{{todo.title}}</router-link>
</td>
            <td>{{todo.content}}</td>
            <td><button @click.prevent="deleteone(todo._id)" class="uk-button uk-button-danger">deleteone</button></td>
        </tr>
       
    </tbody>
</table>    

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
			}
		},
	computed: {
		todotitle(){
			return this.todo
			
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
			this.todos.push({title:this.title,content:this.content})
			//this.todos.push({content:this.content})
			alert('add success!!');
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
	#todo{
		margin: auto;
		float: right;
		width: 70%;
		padding: 20px;
	}	
</style>