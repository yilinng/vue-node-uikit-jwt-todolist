<template>
	<div>
	<form v-on:submit.prevent="addNewTodo">
    <label for="new-todo">Add a todo</label>
    <input
      v-model="newTodoText"
      id="new-todo"
      placeholder="input something"
    >
    <button>Add</button>
  </form>
  <ul>
    <li
   
      v-for="(todo, index) in todos"
      v-bind:key="todo.id"
      v-bind:title="todo.title"
      v-on:remove="todos.splice(index, 1)"
    >{{ todo.title }}
    <button v-on:click="$emit('remove')">Remove</button>
</li>

  </ul>
	</div>
</template>
<script>
	export default{
	name: 'todo-item',
	
	
	data() {
			return {
			newTodoText: '',
			todos: [
			{
			id: 1,
			title: 'Do the dishes',
			},
			{
			id: 2,
			title: 'Take out the trash',
			},
			{
			id: 3,
			title: 'Mow the lawn'
			}
			],
			nextTodoId: 4
			}
				},
	methods: {
			addNewTodo: function () {
			this.todos.push({
			id: this.nextTodoId++,
			title: this.newTodoText
			})
			this.newTodoText = ''
			},
			

				},

	}


	
</script>
