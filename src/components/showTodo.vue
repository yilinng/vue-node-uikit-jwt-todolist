<template>
    <div id="show-todos">
        <h1>All Todo Articles</h1>
 <div v-for="(todo, index) in todos"
   v-bind:key="todo.id" v-bind:title="todo.title" v-bind:index="index" v-bind:content="todo.content">            
   <router-link v-bind:to="'/todolist/' + todo.id"><h2>{{ todo.title }}</h2></router-link>
            <article>{{ todo.content }}</article>
        </div>
    </div>
</template>

<script>
// Imports
//import searchMixin from '../mixins/searchMixin';

export default {
    data () {
        return {
            todos: []
        }
    },
    created(){
       this.axios.
       get('http://localhost:5000/todolist/').then(response => this.todos = response.data);
                                                                                                            
        },
   
    
}
</script>

<style>
#show-todos{
    max-width: 800px;
    margin: 0px auto;
}
.single-todo{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
#show-todo a{
    color: #444;
    text-decoration: none;
}
</style>