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
    <div class="film-section" v-if="store.currentPage.film === true">
        <div class="container">,
            <div class="row">
                <div class="col-4" v-for="(film, i) in this.store.filmList">
                    <AppCard
                     :title="film.title"
                     :originalTitle="film.original_title" 
                     :language="film.original_language"
                     :languagesSrc="this.languagesSrc"
                     :vote="film.vote_average"
                    ></AppCard>


                    <CardCover
                     :poster="film.poster_path"
                    ></CardCover>
                </div>
            </div>
        </div>
    </div>

    
    <div v-else class="tv-section">        
        <div class="container">,
            <div class="row">
                <div class="col-4" v-for="(tv, i) in this.store.tvList">
                    <AppCard
                     :title="tv.name"
                     :originalTitle="tv.original_name" 
                     :language="tv.original_language"
                     :languagesSrc="this.languagesSrc"
                     :vote="tv.vote_average"
                    ></AppCard>


                    <CardCover
                     :poster="tv.poster_path"
                    ></CardCover>
                </div>
            </div>
        </div>
        
    </div>
</template>

<style lang="scss">
</style>