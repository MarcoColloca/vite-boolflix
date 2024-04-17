<script>
    import {store} from '../store'
    import AppCard from './single-components/AppCard.vue'
    import CardCover from './single-components/CardCover.vue'

    export default{
        components:{
            AppCard,
            CardCover,
        },

        data(){
            return{
                store,
                test: 'Hello!',
                languagesSrc: ['it','en','ja','de'],
            }
        },

        methods: {
            testFunction(){                
                console.log('test')
            },
        }
    }
</script>

<template>
    <div class="film-section" v-if="store.currentPage.film === true">
        <h1 class="title"> Sezione Film </h1>
        <div class="container">,
            <div class="row">
                <div class="col-4" v-for="(film, i) in this.store.filmList" :key="film.id">
                    <div class="film-section__card-conteiner">
                        <AppCard
                         :title="film.title"
                         :originalTitle="film.original_title" 
                         :language="film.original_language"
                         :languagesSrc="this.languagesSrc"
                         :vote="film.vote_average"
                         :cardIndex="i"
                        ></AppCard>
    
    
                        <CardCover
                         :poster="film.poster_path"
                        ></CardCover>
                    </div>                
                </div>
            </div>
        </div>
    </div>

    
    <div v-else class="tv-section">
        <h1 class="title"> Sezione Serie Tv </h1>
        <div class="container">,
            <div class="row">
                <div class="col-4" v-for="(tv, i) in this.store.tvList" :key="tv.id">
                    <div class="tv-section__card-conteiner">
                        <AppCard
                         :title="tv.name"
                         :originalTitle="tv.original_name" 
                         :language="tv.original_language"
                         :languagesSrc="this.languagesSrc"
                         :vote="tv.vote_average"
                         :cardIndex="i"
                        ></AppCard>
    
    
                        <CardCover
                         :poster="tv.poster_path"
                        ></CardCover>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<style lang="scss">
    .film-section,
    .tv-section{
        .row{
            row-gap: 100px;
        }

    }


    .film-section__card-conteiner, 
    .tv-section__card-conteiner{
        width: 342px;
        height: 513px;
        position: relative;
    }


    .title{
        color: white;
        margin: 50px 0;
        font-size: 32px;
        text-align: center;
    }
</style>