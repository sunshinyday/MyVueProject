<template>
<div>admin</div>

</template>

<script>
export default {
data(){
    return{
        name:"harry"
    }
},
// beforeRouteEnter: (to, from, next) => {
//     // alert("hello" + this.name)
//     next(
//         vm=>{
//             alert("hello " + vm.name )
//         }
//     )
// }
beforeRouteLeave (to, from, next) {
    if(confirm("确认离开吗？")==true){
        next()
    }
    else{
        next(false)
    }
}
}
</script>

<style>

</style>
