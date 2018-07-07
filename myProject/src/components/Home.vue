<template>
    <div>
        <h1>Home</h1>
        <button @click="goToMenu" class="btn btn-success">Let's go  order</button>
    </div>
</template>

<script>
export default {
    methods:{
        goToMenu(){
            // this.$router.go(-1)
            this.$router.push('/menu')
        }
    }

}
</script>

<style>

</style>
