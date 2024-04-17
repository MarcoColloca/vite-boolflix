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
            changeTabFilm(){
                this.store.currentPage.tv = false;
                this.store.currentPage.film = true;
            },

            changeTabTv(){
                this.store.currentPage.tv = true;
                this.store.currentPage.film = false;
            }
        }
    }
</script>



<template>
  <div class="header-section">
    <div class="header-section__logo">        
        <h1>{{ logo }}</h1>
    </div>

    
    <ul class="header-section__navbar">
        
        <li @click="changeTabTv()">Serie Tv</li>

        <li @click="changeTabFilm()">Film</li>

    </ul>
   

    <div class="header-section__SearchBox">
        <input 
         type="text" 
         placeholder="Nome Film"
         v-model="this.store.searchBar"
         @keyup.enter="$emit('search')"
        >

        <button
         @click="$emit('search')"         
        >
            Cerca
        </button>
    </div>

  </div>
</template>



<style lang="scss">
    .header-section{
        background-color: coral;
        height: 70px;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }


    .header-section__navbar{
        display: flex;
        li{
            margin: 10px;
            font-weight: bold;
            color: white;
            cursor: pointer;
        }
    }

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