<script>
    import { store } from '../store';

    export default{
        data(){
        return{
            store,
            logo: 'Boolflix',
        }
        }
    }
</script>



<template>
  <div class="header-section">
    <div class="header-section__logo">        
        <h1>{{ logo }}</h1>
    </div>

    <div class="header-section__SearchBox">
        <input 
         type="text" 
         placeholder="Nome Film"
         v-model="this.store.searchBar"
        >


        <button>Cerca</button>
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