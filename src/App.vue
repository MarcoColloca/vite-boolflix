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


    methods: {
      /* funzione che recupera i dati relativi a film e serie tv, in base alla value della barra di ricerca, 
      la chiamata parte quando viene premuto invio o il pulsante "Cerca", andando a popolare due array presenti nello store.*/
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
          
          
          this.store.filmList = results[0].data.results;
          this.store.tvList = results[1].data.results;
          
          //console.log(this.store.filmList);
          //console.log(this.store.tvList);
        })
      },
      
      /* Funzione di debug */
      testFunction(){
        console.log('test')
      }
    },
  }
</script>



<template>
  <!-- Componente dell'Header in cui viene utilizzata la funzione fetchData() -->
  <AppHeader
   @search="fetchData()"
  ></AppHeader>
  
  <!-- Componente che corrispodne al contenuto della pagina, ovvero il componente in cui vengono stampate le card di film e serie tv. -->
  <AppContent></AppContent>

</template>



<style lang="scss">
</style>
