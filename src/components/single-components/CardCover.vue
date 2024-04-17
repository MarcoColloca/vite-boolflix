<script>
  import { store } from '../../store';

  export default{

    props:{
      poster: String,
      cardIndex: Number,
    },

    data(){
      return{
        store,
        test: 'Hello!',
        posterUrl: 'https://image.tmdb.org/t/p/',
        sizeStandard: 'w342',
        hide: false,
      }     
    },


    methods: {
      toggleDescription(index){

        for(let i = 0; i < this.store.filmList.length; i++){
          if(i === index && this.hide === true){
            return 'hide'
          }
        }
      },

      toggleClassHide(){
        this.hide = !this.hide
      },
    }
  }
</script>

<template>
  <div class="cover-section" :class="toggleDescription(cardIndex)" @mouseover="toggleClassHide()" @mouseleave="toggleClassHide()">
    <img :src="posterUrl + sizeStandard + poster" alt="">    
  </div>
  
</template>

<style lang="scss">
  .cover-section{
    position: absolute;
    top: 0;    
  }
</style>