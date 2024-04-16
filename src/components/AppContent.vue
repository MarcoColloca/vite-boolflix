<script>
    import {store} from '../store'

    export default{
        data(){
            return{
                store,
                test: 'Hello!',
            }
        },

        mounted(){
            //console.log(this.store)
        },

        methods: {
            getFilmTitle(index){
                const filmList = this.store.filmList

                for(let i = 1; i < filmList.length; i++){
                    filmList[index].title
                }
            }
        }
    }
</script>

<template>
    <div class="content-section">
        <div class="container">,
            <div class="row">
                <div class="col-4" v-for="(film, i) in this.store.filmList">
                    <div class="card">                       
                        <ul class="card__description">
                            <li>
                                <span>Titolo: </span> {{ film.title }}
                            </li>
                            <li>
                                <span>Titolo Originale: </span> {{ film.original_title }}
                            </li>
                            <li>
                                <span>Lingua: </span> {{ film.original_language }}
                            </li>
                            <li>
                                <span>Voto: </span> {{ film.vote_average }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
  .card__description{
    color: white;
    margin: 50px 0;
    li{
        margin: 5px;
        span{
            font-size: 19px;
            font-weight: bold;
            color: wheat;
        }
    }
  }
</style>