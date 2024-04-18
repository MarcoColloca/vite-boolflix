<script>
  import { store } from '../../store';

  export default{

    props:{
      poster: String,
      originalTitle: String,
    },

    data(){
      return{
        store,
        test: 'Hello!',
        posterUrl: 'https://image.tmdb.org/t/p/',
        sizeStandard: 'w342',
        
      }     
    },
  }
</script>

<template>
  <!-- Sezione della Cover -->
  <div class="cover-section" v-if="poster !== null">
    <img :src="posterUrl + sizeStandard + poster" alt="">    
  </div>
  
  <!-- Sezione alternativa della Cover (nel caso non ci sia l'immagine di copertina)-->
  <div class="cover-section--alternative" v-else>
    <h2>{{ originalTitle }}</h2>
    <h3> No Cover</h3>
  </div>
</template>

<style lang="scss">

  img{
    max-height: 513px;
  }

  // Cover Alternativa
  .cover-section--alternative{
    background-color: transparent;
    border: 2px solid white;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    h2, h3{
      color: white;
    }
    h2{
      margin: 20px 20px;
      padding-bottom: 35%; 
      font-size: 18px;
    }
    h3{
      font-size: 30px;
    }
  }
</style>