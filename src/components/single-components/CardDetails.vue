<script>
    import { store } from '../../store';

    export default {
        props:{
            open: Boolean,
        },

        data(){
            return{
                store,
                test: 'test',
            }
        },

        methods:{
            printActors(array){

                let myActors = []

                for(let i = 0; i < array.length; i++){
                    const actor = array[i]

                    myActors.push(actor)
                }
                
                if(myActors.length > 5){
                    myActors.length = 5
                }

                return myActors
            },

        }
    }
</script>





<template>
    <div  class="details-section"
     v-show="open === true"
     @mouseleave="$emit('closeModal')"
    >
        <ul class="film-actor-list" v-if="store.currentPage.film === true">
            <li v-for="actor in printActors(this.store.filmActors)">
                {{ actor }}
            </li>
        </ul>

        <ul class="film-actor-list" v-else>
            <li v-for="actor in printActors(this.store.tvActors)">
                {{ actor }}
            </li>
        </ul>
        <span class="close-modal" @click="$emit('closeModal')">X</span>
    </div>
</template>





<style lang="scss" scoped>
    .test{
        color: crimson;
    }

    // Sezione Dettagli
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