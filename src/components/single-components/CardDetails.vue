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

            /* Funzione riceve due parametri, un array ed un numero. Da questi parametri fornisce un nuovo array che
            contiene gli stessi elementi del primo, ma la cui lunghezza massima è quella impostata dal secondo parametro.
            Viene usato per decidere il numero massimo di attori che verranno stampati in pagina nel template. */
            maximumActors(array, maxLength){

                let myActors = []

                for(let i = 0; i < array.length; i++){
                    const actor = array[i]

                    myActors.push(actor)
                }
                
                if(myActors.length > maxLength){
                    myActors.length = maxLength
                }

                return myActors
            },

        }
    }
</script>





<template>
    <!-- Sezione dei Dettagli-->
    <div  class="details-section"
     v-show="open === true"
     @mouseleave="$emit('closeModal')"
    > 
        <h1>Lista attori:</h1>
        <!-- Sezione dei Dettagli - Lista attori del Film -->
        <ul class="film-actor-list" v-if="store.currentPage.film === true">
            <li v-for="actor in maximumActors(this.store.filmActors, 5)">
                {{ actor }}
            </li>
        </ul>

        <!-- Sezione dei Dettagli - Lista attori della Serie Tv -->
        
        <ul class="film-actor-list" v-else>
            <li v-for="actor in maximumActors(this.store.tvActors, 5)">
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
        padding: 10px 20px;
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