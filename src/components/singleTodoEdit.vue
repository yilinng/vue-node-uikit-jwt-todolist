<template>
    <div id="single-todo">
    <div class="uk-section uk-section-default">
    <form v-on:submit.prevent>
    <label for="edit-todo">Edit a todo</label> <br>
    title:<input type="text" v-model="todo.title" required><br>
    content:<input type="text" v-model="todo.content" required><br>
    <button @click="editTodo">editTodo</button>
  </form>
  
    <router-link :to="`/todolist/${todo._id}`">back to single-todo</router-link>
   
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
			title:  '', 
            content: ''
			}
		},
	computed: {
		
		}, 
	
	methods: {
        editTodo(){
         axios.patch('http://localhost:5000/todolist/' + this.id, this.todo)
         .then((res) =>{
            alert('edit success');
            console.log(res)
         }).catch(error => {
            console.log(error)
         })
        }
		
		},
	created() {
        axios.get('http://localhost:5000/todolist/' + this.id)
        .then(response => {this.todo = response.data})
        .catch(error => { console.log(error)
        })
             
             
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