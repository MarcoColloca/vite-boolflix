<script>
    import { store } from '../../store';
    import axios from 'axios';

    /* Componenti Importati */
    import CardDetails from './CardDetails.vue'

    export default{

        components: {
            CardDetails,
        },
        
        props:{
            title: String,
            originalTitle: String,
            language: String,
            languagesSrc: Array,
            vote: Number,
            cardIndex: Number,
            cardId: Number,
            cardType: String,
        },
    
        data(){
            return{
                test: 'Hello!',
                store,
                key: '4f9eb075064279ac9303fb02f9122eca',
                show: false,
                isOpen: false,
                isLoading: false,
            }
        },

        methods:{
            /* Funzione di Debug*/
            testFunction(){
                console.log('test')
                console.log(this.vote)
            },

            /* Funzione che sfruttando un parametro (verrà poi assegnata nel template la Props 'vote'), ritorna un numero intero 
            arrotondato per difetto che viene utilizzato  per stampare in pagina le stelle piene corrispondenti al voto misurato
            in quinti */ 
            getFullStars(propsVote){
                
                const fullStars = Math.floor(propsVote/2)
                
                return fullStars
            },

            /* Funzione che sfruttando un parametro (verrà poi assegnata nel template la Props 'vote'), ritorna un numero  
            intero arrotondato intelligentemente che viene utilizzato per stampare in pagina le stelle vuote corrispondenti
            al voto misurato in quinti */
            getEmptyStars(propsVote){

                const emptyStars = 5 - Math.round(propsVote/2)

                return emptyStars
            },

            /* Funzione che sfruttando un parametro (verrà poi assegnata nel template la Props 'vote'), esegue una sottrazione
            tra metà del valore del parametro e la trasformazione netta in intero della metà del valore del parametro, poi ritorna
            il valore booleano True nel caso il risultato sia maggiore di 0.5, o il valore booleano False nel caso sia inferiore.
            Questa funzione viene sfruttata per stampare la mezza stella nel caso venga ritornato True. */
            hasHalfStar(propsVote){
                const halfVote = propsVote/2
                const roundVote = parseInt(halfVote)
                const result = halfVote - roundVote

                // return result >= 0.5;
                
                if(result >= 0.5){
                    return true
                }else{
                    return false
                }
                                
            },

            /* Questa funzione riceve un parametro (in template verrà poi assegnato cardIndex, ovvero l'index del ciclo v-for utilizzato
            per stampare le AppCard nel componente padre), viene quindi reiterato un ciclo for per 20 volte ( il numero massimo di film o 
            serie tv che possono essere contenute nei rispettivi array) ed esegue due confronto tra più variabili, nel caso entrambi i 
            confronti diano  il riscontro richiesto, ritornerà una stringa 'show'. La tringa show viene sfruttata per assegnare una classe
            tramite la direttiva v-binding, per mostrare la card corrispondente all'index contenente la descrizione.*/
            toggleDescription(index){

                for(let i = 0; i < 20; i++){
                    if(i === index && this.show === true){
                        return 'show'
                    }
                }
            },

            /* Questa funzione cambia un valore Booleano nel suo opposto. Viene sfruttata per cambiare un valore registrato nei data. Valore che
            viene poi sfruttato come una delle condizioni per assegnare la classe 'show' dalla funzione toggleDescription(index) */
            toggleClassShow(){
                this.show = !this.show    
            },

            /* Questa funzione riceve duve parametri, il primo corrisponde all'id del film/serie tv corrente, il secondo corrisponde al suo tipo (se è un film o una serie tv)
            tramite questi parametri effettua una chiamata API condizionale, andando a recuperare il nome degli attori ed i generi associati ad un determinato film o serie tv.
            Va quindi a sostituire due array presenti nello store con i valori ricevuti dalla chiamata. */
            fetchDetails(idNumber, type){
                this.store.filmActors = [];
                this.store.filmGenres = [];
                this.store.actors = [];
                this.store.genres = [];

                // cambia il valore del data is Loading in true
                this.isLoading = true;

                // Chiamata che restituisce gli Attori del film o della serie tv con un id specifico, va poi a popolare array vuoti presenti nello store.
                axios.get(`https://api.themoviedb.org/3/${type}/${idNumber}?api_key=${this.key}&append_to_response=credits`)
                .then((res)=>{

                                        
                    
                    const actorsArray = [];
                    const genresArray = [];
                                        
                    const actors = res.data.credits.cast;
                    const genres = res.data.genres;
                    

                    for(let i = 0; i < actors.length; i++){                                                 

                        actorsArray.push(actors[i].name);
                    }

                    for(let j = 0; j < genres.length; j++){
                         genresArray.push(genres[j].name);
                   }
                                        

                    if(type === 'movie'){                        

                        this.store.actors = actorsArray;
                        this.store.genres = genresArray;
                        
                    }else{

                        this.store.actors = actorsArray;
                        this.store.genres = genresArray;                        
                    }

                    // ora che il codice è stato eseguito fa tornare il valore di isLoading a false
                    this.isLoading = false;
                })

            },
        }

    }
</script>

<template>
    <!-- Sezione della Card -->
    <div class="card" :class="toggleDescription(cardIndex)" @mouseenter="toggleClassShow()" @mouseleave="toggleClassShow()">
        <!-- Sezione della Card - Descrizione -->                       
        <ul class="card__description">
            <!-- Sezione della Card - Descrizione - Titolo --> 
            <li>
                <span>Titolo: </span> {{ title }}
            </li>
            <!-- Sezione della Card - Descrizione - Titolo Originale --> 
            <li>
                <span>Titolo Originale: </span> {{ originalTitle }}
            </li>
            <!-- Sezione della Card - Descrizione - Lingua (Bandierina)--> 
            <li v-if="languagesSrc.includes(language) === true">                
                <span>Lingua: </span> <img :src="`/languages/${language}.png`" alt="">
            </li>
            <!-- Sezione della Card - Descrizione - Lingua (Sigla)--> 
            <li v-else>                                
                <span>Lingua: </span> {{ language }}
            </li>
            <!-- Sezione della Card - Descrizione - Voto --> 
            <li>
                <span>
                    Voto:
                    <!-- Sezione della Card - Descrizione - Voto -  Stelle piene -->                    
                    <font-awesome-icon :icon="['fas', 'star']" style="color: #FFD43B;" v-for="star in getFullStars(vote)"/>

                    <!-- Sezione della Card - Descrizione - Voto -  Mezza Stella -->
                    <font-awesome-icon :icon="['far', 'star-half-stroke']" style="color: #FFD43B;" v-show="hasHalfStar(vote) === true"/>
                    
                    <!-- Sezione della Card - Descrizione - Voto -  Stelle vuote -->
                    <font-awesome-icon :icon="['far', 'star']" style="color: #FFD43B;" v-for="star in getEmptyStars(vote)"/>
                </span>                
            </li>
            <!-- Sezione della Card - Descrizione - Dettagli -->
            <li 
             class="details"
             @click="this.isOpen = true, fetchDetails(cardId, cardType)"
            > 
                Dettagli
            </li>


            <!-- Componente Card Details -->
            <CardDetails
             :open="isOpen"
             :loading="isLoading"
             @closeModal="isOpen = false"
            ></CardDetails>
        </ul>
    </div>

</template>

<style lang="scss">
    // Card
    .card{
        background-color: black;
        width: 342px;
        height: 513px;
        position: absolute;
        opacity: 0;
    }

    .card.show{
        opacity: 1;
    }

    // Descrizione Card
    .card__description{
        color: white;
        border: 1px solid white;
        padding: 50px;
        height: 100%;
        li{
            margin: 20px 5px;
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

    // Dettagli Card
    .details{
        color: coral;
        display: inline-block;
        padding: 5px;
        cursor: pointer;
        &:hover{
            text-decoration: underline;
        }
    }
    
</style>