<template>
    <div>
        <h1>Page not found</h1>
        <p>Whatever...</p>
    </div>
</template>

<script>
    export default {
        name: 'Page not found',
     created() {
     this.$router.push('/');
    }
    }
</script>