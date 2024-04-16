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
        apiParam: {
          key: '4f9eb075064279ac9303fb02f9122eca',
          query: store.searchBar,
        },

        test: 'Hello!',
      }
    },

    mounted(){
      this.fetchData()
    },


    methods:{
      fetchData(){
        axios.get('https://api.themoviedb.org/3/search/movie',{
          params:{
            api_key: this.apiParam.key,
            query: this.apiParam.query
          }
        }).then((res) => {
          const data  = res.data
          const results = data.results

          this.store.filmList = results
        })
      },

      testFunction(){
        console.log(store.filmList)
      }
    }
  }
</script>



<template>

  <AppHeader
   @search="fetchData(), testFunction()"
  ></AppHeader>
  
  <AppContent></AppContent>

</template>



<style lang="scss">
  h1{
    color: white;
  }
</style>
