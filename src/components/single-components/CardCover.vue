<script>
  import { store } from '../../store';

  export default{

    props:{
      poster: String,
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
  <div class="cover-section" v-if="poster !== null">
    <img :src="posterUrl + sizeStandard + poster" alt="">    
  </div>
  
  <div class="cover-section--alternative" v-else>
    <h2> No Cover</h2>
  </div>
</template>

<style lang="scss">
  .cover-section--alternative{
    background-color: transparent;
    border: 2px solid white;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    h2{
      color: white;
      margin-top: -200px;
    }
  }
</style>