<script>
    import { store } from '../store';

    export default{
        data(){
            return{
                store,
                logo: 'Boolflix',
            }
        },

        methods:{
            /* Funzione che permette di passare alla Tab dei film,
            all'effettivo cambia due variabili booleane nello store */
            changeTabFilm(){
                this.store.currentPage.tv = false;
                this.store.currentPage.film = true;
            },

            /* Funzione che permette di passare alla Tab dele serie tv,
            all'effettivo cambia due variabili booleane nello store */
            changeTabTv(){
                this.store.currentPage.tv = true;
                this.store.currentPage.film = false;
            }
        }
    }
</script>



<template>
    <!-- Sezione dell'header-->
    <div class="header-section">
        <!-- Header - Logo -->
        <div class="header-section__logo">        
            <h1>{{ logo }}</h1>
        </div>

        <!-- Header - Navbar -->
        <ul class="header-section__navbar">
            
            <li @click="changeTabTv()">Serie Tv</li>

            <li @click="changeTabFilm()">Film</li>

        </ul>
    
        <!-- Header - Barra di Ricerca  -->
        <div class="header-section__SearchBox">
            <!-- L'imput è collegato ad una variabile dinamica dello store permettendo di modificarla, inoltre
            tramite un emit è possibile eseguire una chiamata API nel componente App.vue al rilascio del pulsante Invio -->
            <input 
             type="text" 
             placeholder="Nome Film o Serie Tv"
             v-model="this.store.searchBar"
             @keyup.enter="$emit('search')"
            >
            
            <!-- Questo bottone invia un emit che viene ripreso dal componente App.vue per eseguire la stessa ricerca API
            che viene eseguita con l'invio nell'input di ricerca -->
            <button
             @click="$emit('search')"         
            >
                Cerca
            </button>
        </div>
    </div>
</template>



<style lang="scss">

    // Header
    .header-section{
        background-color: coral;
        height: 70px;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    // Header - Navbar
    .header-section__navbar{
        display: flex;
        li{
            margin: 0 25px;
            font-weight: bold;
            color: white;
            cursor: pointer;
            font-size: 24px;
        }
    }

    // Hedear - Search Box
    .header-section__SearchBox{
        display: flex;
        input{
            margin-right: 15px;
            padding: 5px 11px;
        }

        button{
            padding: 5px 11px;
            background-color: black;
            color: coral;
            font-size: 18px;
            border: none;
            cursor: pointer;
        }
    }

</style>