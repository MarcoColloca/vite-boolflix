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
        axios.get('https://api.themoviedb.org/3/search/movie',{
          params:{
            api_key: this.key,
            query: this.store.searchBar
          }
        }).then((res) => {
          let data  = res.data;
          let results = data.results;
          console.log(results);

          this.store.filmList = results;
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
