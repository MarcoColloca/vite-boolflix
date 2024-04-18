<script>
    export default {
        props:{
            open: Boolean,
        },

        data(){
            return{
                test: 'test'
            }
        }
    }
</script>





<template>
    <div v-show="open === true">
        <h1 class="test">{{ test }}</h1>
    </div>
</template>





<style lang="scss" scoped>
    .test{
        color: crimson;
    }
</style>