<script>
  import {store} from './store'
  import axios from 'axios'

  export default{
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
      console.log(store),

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
      }
    }
  }
</script>



<template>
  <h1>
    {{ test }}
  </h1>
</template>



<style lang="scss">
  h1{
    color: white;
  }
</style>
