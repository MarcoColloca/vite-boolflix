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
        sizeStandard: 'w342'
      }     
    },

    methods: {
    }
  }
</script>

<template>
  <div class="cover-section">
    <img :src="posterUrl + sizeStandard + poster" alt="">
  </div>
  
</template>

<style lang="scss">
  .cover-section{
    position: absolute;
  }
</style>