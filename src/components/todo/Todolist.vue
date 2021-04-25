<template>
	<div id="todo">
		<!--clicked value from add todo-->
	<add-todo @clicked="onClickChild"/>
	<hr class="uk-divider-icon">
		<div class="uk-overflow-auto" v-if="todos.length">
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
					<td><router-link :to="`/todolist/${todo._id}`">{{todo.title}}</router-link></td>
					<td class="uk-text-truncate">{{todo.content}}</td>
					<td><button @click.prevent="deleteone($event,todo._id)" class="uk-button uk-button-danger uk-button-small">delete</button></td>
				</tr>       
			</tbody>
		</table>    
		</div>
		<div class="uk-overflow-auto" v-else>
			<span class="uk-margin-small-right" uk-spinner="ratio: 3"></span>
		</div>
	</div>
</template>
<script>
import axios from 'axios';
import AddTodo from './AddTodo.vue';
	export default{
	
	components :{
		AddTodo
	},	
	data() {
			return { 
			todos: [],
			title:  '', 
			content: '',
			todoChange: false
			}
		},
	created(){
	//user is not authorized
    if (localStorage.getItem('token') === null) {
      this.$router.push('/login');
    }
	axios.get('http://localhost:5000/todolist').then(response =>this.todos = response.data);
	},	
	mounted: function () {
		this.$nextTick(function () {
			// Code that will run only after the
			// entire view has been rendered
			this.$store.commit('increment');
			console.log(this.$store.state.count);
		})
	},
	methods: {
		getData(){
			axios.get('http://localhost:5000/todolist').then(response =>this.todos = response.data)
		},
		removeFadeOut( el, speed) {
			const seconds = speed/1000;
			el.style.transition = "opacity "+seconds+"s ease";

			el.style.opacity = 0;
			setTimeout(function() {
				el.parentNode.removeChild(el);
			}, speed);
		},
		deleteone(event, id) {
		console.log(id, event.target.parentNode.parentNode);
			let apiURL = `http://localhost:5000/todolist/${id}`;
			let indexOfArrayItem = this.todos.findIndex(i => i._id === id);
			if(window.confirm("Do you want to delete?")){
				axios.delete(apiURL).then(() => {
				this.todos.splice(indexOfArrayItem, 1);
				}).catch(error =>{
				console.log(error);
				});	
			}
		},		
	//emit event	
		onClickChild (value) {
      this.todoChange = value;
	console.log(this.todoChange,'emit from child');
    }		
	},
	watch:{
		// whenever todoChange changes, this function will run
		todoChange: function(){
			console.log(this.todoChange,'watch1');
			this.getData();
		},
		todos : function(){
			console.log('watch', this.todos);
		}
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