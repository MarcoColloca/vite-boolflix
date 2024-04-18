<script>
    import {store} from '../store'

    /* Componenti Importati */
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
            /* Funzione di Debug */
            testFunction(){                
                console.log('test')
            },
        }
    }
</script>

<template>
    <!-- Sezione dei Film. 
    Viene mostrata nel caso l'apposita Tab dell'Header venga selezionata -->
    <div class="film-section" v-if="store.currentPage.film === true">
        <!-- Sezione dei Film - Titolo -->
        <h1 class="title"> Sezione Film </h1>
        <!-- Sezione dei Film - Contenuto -->
        <div class="container">,
            <div class="row">
                <!-- Tramite la direttiva v-for vengono recuperate le variabili presenti in un array di oggetti nello store.  
                Queste variabili vengono poi utilizzate per stampare un numero di componenti AppCard e CardCover pari al numero 
                di oggetti presenti nell'array.-->
                <div class="col-4" v-for="(film, i) in this.store.filmList" :key="film.id">
                    <!-- Sezione dei Film - Contenitore di Card.
                    Ha il position relative così da permettere di posizionare la card in corrispondenza della cover. -->
                    <div class="film-section__card-conteiner">
                        <!-- Componente AppCard, passa i dati richiesti relative alle props, facendo riferimento ai dati
                        dell'oggetto ciclato con la direttiva v-for,uguale nella struttura all'AppCard dele Serie Tv cambia 
                        in alcuni dei dati che vengono passati. -->
                        <AppCard
                         :title="film.title"
                         :originalTitle="film.original_title" 
                         :language="film.original_language"
                         :languagesSrc="this.languagesSrc"
                         :vote="film.vote_average"
                         :cardIndex="i"
                        ></AppCard>
    
                        <!-- Componente CardCover, passa i dati richiesti relative alle props, facendo riferimento ai dati
                        dell'oggetto ciclato con la direttiva v-for -->
                        <CardCover
                         :poster="film.poster_path"
                        ></CardCover>
                    </div>                
                </div>
            </div>
        </div>
    </div>

    <!-- Sezione delle Serie Tv
    Viene mostrata nel caso l'apposita Tab dell'Header venga selezionata -->
    <div v-else class="tv-section">
        <!-- Sezione delle Serie Tv - Titolo -->
        <h1 class="title"> Sezione Serie Tv </h1>
        <!-- Sezione dei Serie Tv - Contenuto -->
        <div class="container">,
            <div class="row">
                <!-- Tramite la direttiva v-for vengono recuperate le variabili presenti in un array di oggetti nello store.  
                Queste variabili vengono poi utilizzate per stampare un numero di componenti AppCard e CardCover pari al numero 
                di oggetti presenti nell'array.-->
                <div class="col-4" v-for="(tv, i) in this.store.tvList" :key="tv.id">
                    <!-- Sezione dei Film - Contenitore di Card.
                    Ha il position relative così da permettere di posizionare la card in corrispondenza della cover. -->
                    <div class="tv-section__card-conteiner">
                        <!-- Componente AppCard, passa i dati richiesti relative alle props, facendo riferimento ai dati
                        dell'oggetto ciclato con la direttiva v-for, uguale nella struttura all'AppCard dei film cambia 
                        in alcuni dei dati che vengono passati. -->
                        <AppCard
                         :title="tv.name"
                         :originalTitle="tv.original_name" 
                         :language="tv.original_language"
                         :languagesSrc="this.languagesSrc"
                         :vote="tv.vote_average"
                         :cardIndex="i"
                        ></AppCard>
    
                        <!-- Componente CardCover, passa i dati richiesti relative alle props, facendo riferimento ai dati
                        dell'oggetto ciclato con la direttiva v-for -->    
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
    // Righe delle sezioni film e serie tv
    .film-section,
    .tv-section{
        .row{
            row-gap: 100px;
        }

    }

    // Container delle Card delle sezioni film e serie tv
    .film-section__card-conteiner, 
    .tv-section__card-conteiner{
        width: 342px;
        height: 513px;
        position: relative;
    }

    // Titolo delle sezioni film e serie tv
    .title{
        color: white;
        margin: 50px 0;
        font-size: 32px;
        text-align: center;
    }
</style>