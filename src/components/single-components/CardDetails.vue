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
    <div  class="details-section"
     v-show="open === true"
    >
        <h1 class="test">{{ test }}</h1>

        <span class="close-modal" @click="$emit('closeModal')">X</span>
    </div>
</template>





<style lang="scss" scoped>
    .test{
        color: crimson;
    }
    .details-section{
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: coral;
        top: 0;
        left: 0;
        .close-modal{
            position: absolute;
            color: crimson;
            top: 5px;
            right: 10px;
            font-size: 24px;
            cursor: pointer;
            &:hover{
                text-decoration: underline;
                font-weight: bolder;
            }
        }        
    }
</style>