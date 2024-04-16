<script>
    import {store} from '../store'

    export default{
        data(){
            return{
                store,
                test: 'Hello!',
                languagesSrc: ['it','en','ja','de'],
                languageSrc: '',
                languageFlag: true,
            }
        },

        mounted(){
            //console.log(this.store)
        },

        methods: {
            testFunction(){                
                console.log('test')
            },
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
                            <li v-if="this.languagesSrc.includes(film.original_language) === true">
                                
                                <span>Lingua: </span> <img :src="`/languages/${film.original_language}.png`" alt="">
                            </li>
                            <li v-else>                                
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
        };

        img{
            max-height: 20px;
            margin-left: 10px
        };
    }
  }
</style>