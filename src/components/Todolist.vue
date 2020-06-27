<template>
	<div>
	<form v-on:submit.prevent>
    <label for="new-todo">Add a todo</label> <br>
    <input type="text" v-model="title"  placeholder="input title"><br>
	<input type="text" v-model="content"  placeholder="input content"><br>
    <button @click="addnew">addnew</button>
  </form>
  <div v-for="(todo, index) in todos"
   v-bind:key="todo._id" v-bind:title="todo.title" v-bind:index="index" v-bind:content="todo.content">
	<router-link :to="`/todolist/${todo._id}`">{{todo.title}}</router-link>
	<p>{{todo.content}}</p>

	<button @click.prevent="deleteone(todo._id)">deleteone</button>

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
