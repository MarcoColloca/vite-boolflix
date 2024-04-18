<script>
    import { store } from '../../store';

    export default {
        props:{
            open: Boolean,
            loading: Boolean,
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


            toggleClassAppear(){
                
                if(this.loading === false){
                    return 'appear'
                }
            }
        }
    }
</script>





<template>
    <!-- Sezione dei Dettagli-->
    <div  class="details-section "
     v-show="open === true"
     @mouseleave="$emit('closeModal')"
    >
        <!-- Sezione Loader -->
        <div class="loader" v-show="loading === true">
            <h1> <font-awesome-icon :icon="['fas', 'spinner']" class="spin" /> </h1>
        </div>

        <!-- Sezione dei Dettagli - Lista attori del Film -->
        <div :class="toggleClassAppear()" class="details-section__film appear" v-if="store.currentPage.film === true">
            <ul class="film-actor-list">
                <h2>Lista Attori: </h2>
                <li v-for="actor in maximumActors(this.store.actors, 5)">
                    {{ actor }}
                </li>
            </ul>
            <ul class="film-genre-list">
                <h2>Lista Generi: </h2>
                <li v-for="genre in this.store.genres">
                    {{ genre }} 
                </li>
            </ul>
        </div>


        <!-- Sezione dei Dettagli - Lista attori della Serie Tv -->
        <div :class="toggleClassAppear()" class="details-section__tv" v-else>
            <ul class="tv-actor-list" >
                <h2>Lista Attori: </h2>
                <li v-for="actor in maximumActors(this.store.actors, 5)">
                    {{ actor }}
                </li>
            </ul>
            <ul class="tv-genre-list">
                <h2>Lista Generi: </h2>
                <li v-for="genre in this.store.genres">
                    {{ genre }}
                </li>
            </ul>

        </div>

        <!-- icona che permette di chiudere il modale -->
        <span class="close-modal" @click="$emit('closeModal')"><font-awesome-icon :icon="['fas', 'x']" /></span>
    </div>
</template>





<style lang="scss" scoped>
    .test{
        color: crimson;
    }


    .spin{
        animation-name: spin;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: ease;
    }

    @keyframes spin {
        0% {
            transform: rotate(0);  
        }
        25% {
            transform: rotate(45deg);
        }
        50% {
            transform: rotate(90deg);
        }
        75% {
            transform: rotate(135deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }


    .appear{
        animation-name: appear;
        animation-duration: 1s;
        animation-iteration-count: 1;
        animation-timing-function: linear;
    }

    @keyframes appear {
        0% {
            opacity: 0;
        }
        25% {
            opacity: 0;
        }
        50% {
            opacity: 0.5;
        }
        100% {
            opacity: 1;
        }
    }

    // Sezione Dettagli
    .details-section{        
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: coral;
        border: 2px solid rgb(255, 255, 255);
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
        }
        
        .tv-genre-list,
        .film-genre-list{
            h2{
                margin-top: 50px;
                margin-bottom: 5px;
            }
            li{
                margin: 0;
                margin-left: 20px;
                list-style: circle;
            }
        }


        .loader{
            position: absolute;
            top: 0;
            left: 0;
            color: rgb(255, 255, 255);
            background-color: coral;
            border: 2px solid white;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            z-index: 999;
        }

    }
</style>