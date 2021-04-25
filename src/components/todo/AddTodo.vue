<template>
    <form v-on:submit.prevent class="uk-form-stacked">
            <legend class="uk-legend">Add a todo</legend>
        <div class="uk-margin">
            <label class="uk-form-label" for="form-stacked-text">Title</label>
            <div class="uk-form-controls">
            <input class="uk-input" v-model="title" type="text" @blur="vaildText" placeholder="Some title...">
            <span class="alert">{{ alertTitle }}</span>
            </div>
        </div>
        <div class="uk-margin">
            <label class="uk-form-label" for="form-stacked-text">Content</label>
            <div class="uk-form-controls">
                <input class="uk-input" v-model="content" type="text" @blur="vaildContent" placeholder="Some content...">
            <span class="alert">{{alertContent }}</span>
            </div>
        </div>		
        <button class="uk-button uk-button-primary" @click="addNew">addnew</button>
    </form>
</template>

<script>
import axios from 'axios';

export default {
 data(){
     return {
         todos:[],
         title:'',
         content:'',
         alertTitle:'',
         alertContent:'',
         addOne: true
    }
 },
 methods: {
     vaildText(){
        if(!this.title.length){
          this.alertTitle = 'you have to input some title!';  
        }else{
            this.alertTitle = '';
        }
     },
     vaildContent(){
        if(!this.content.length){
            this.alertContent ='you have to input some content!';
        }else{
            this.alertContent = '';
        } 
     },
     addNew(){
        if(this.title.length && this.content.length){
            let newTodo = {
                    title:this.title,
                    content:this.content
                }
                axios.post('http://localhost:5000/todolist', newTodo)
                .then(res =>{
                this.todos.push({title:this.title,content:this.content})
                //this.todos.push({content:this.content})
                alert('add success!!');
                return res;
                }, err => {
                    console.log(err.response)
                    this.error = err.response.data.error
                    alert('add failed, please try again!');
                }
            )
            //emit props to Todolist.vue
            this.addOne = true;
            console.log('before',this.addOne);
            this.$emit('clicked', this.addOne);
            this.addOne = false;
            console.log('after', this.addOne);
            this.title = '';
            this.content = '';
        }else{
            this.vaildText();
            this.vaildContent();
        } 
    }
 }
}
</script>

<style scoped>
 .uk-margin {
     height: 98px;
 }

 .alert{
    color:red;
 }
</style>