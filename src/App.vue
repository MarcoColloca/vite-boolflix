<script>
  import {store} from './store'
  import axios from 'axios'

  /* componenti importati */
  import AppHeader from './components/AppHeader.vue'
  import AppContent from './components/AppContent.vue'


  export default{
    components:{
      AppHeader,
      AppContent,
    },

    data(){
      return{
        store,
        /* fallinento
        apiParam: {
          key: '4f9eb075064279ac9303fb02f9122eca',
          query: store.searchBar,
        },
        */
        key: '4f9eb075064279ac9303fb02f9122eca',
        test: 'Hello!',
      }
    },

    mounted(){
      
    },


    methods: {
      fetchData(){       

        const promise1 = axios.get('https://api.themoviedb.org/3/search/movie',{
          params:{
            api_key: this.key,
            query: this.store.searchBar
          }                   
        })

        const promise2 = axios.get('https://api.themoviedb.org/3/search/tv',{
          params:{
            api_key: this.key,
            query: this.store.searchBar
          }
        })

        const promises = [promise1, promise2];

        Promise.all(promises)
        .then((results) => {
          
          console.log(this.store.filmList);
          console.log(this.store.tvList);
          
          this.store.filmList = results[0].data.results;
          this.store.tvList = results[1].data.results;
          
        })
      },
      
      testFunction(){
        console.log('test')
      }
    },
  }
</script>



<template>

  <AppHeader
   @search="fetchData()"
  ></AppHeader>
  
  <AppContent></AppContent>

</template>



<style lang="scss">
  h1{
    color: white;
  }
</style>
