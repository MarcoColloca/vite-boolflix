<script>
    import { store } from '../../store';

    export default{
        props:{
            title: String,
            originalTitle: String,
            language: String,
            languagesSrc: Array,
            vote: Number,
            cardIndex: Number,
        },

        data(){
            return{
                test: 'Hello!',
                store,
                show: false,
            }
        },

        methods:{
            getFullStars(propsVote){
                
                const fullStars = Math.floor(propsVote/2)
                
                return fullStars
            },

            getEmptyStars(propsVote){

                const emptyStars = 5 - Math.round(propsVote/2)

                return emptyStars
            },

            hasHalfStar(propsVote){
                const halfVote = propsVote/2
                const roundVote = parseInt(propsVote/2)
                const result = halfVote - roundVote
                
                if(result >= 0.5){
                    return true
                }else{
                    return false
                }
                                
            },


            toggleDescription(index){

                for(let i = 0; i < this.store.filmList.length; i++){
                    if(i === index && this.show === true){
                        return 'show'
                    }
                }
            },


            toggleClassShow(){
                this.show = !this.show    
            },

        }

    }
</script>

<template>
    <div class="card" :class="toggleDescription(cardIndex)" @mouseenter="toggleClassShow()" @mouseleave="toggleClassShow()">                       
        <ul class="card__description">
            <li>
                <span>Titolo: </span> {{ title }}
            </li>
            <li>
                <span>Titolo Originale: </span> {{ originalTitle }}
            </li>
            <li v-if="languagesSrc.includes(language) === true">                
                <span>Lingua: </span> <img :src="`/languages/${language}.png`" alt="">
            </li>
            <li v-else>                                
                <span>Lingua: </span> {{ language }}
            </li>
            <li>
                <span>
                    Voto:
                    <!-- Stelle piene -->                    
                    <font-awesome-icon :icon="['fas', 'star']" style="color: #FFD43B;" v-for="star in getFullStars(vote)"/>

                    <!-- Mezza Stella -->
                    <font-awesome-icon :icon="['far', 'star-half-stroke']" style="color: #FFD43B;" v-show="hasHalfStar(vote) === true"/>
                    
                    <!-- Stelle vuote -->
                    <font-awesome-icon :icon="['far', 'star']" style="color: #FFD43B;" v-for="star in getEmptyStars(vote)"/>
                </span>                
            </li>
        </ul>
    </div>

</template>

<style lang="scss">
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

    .card__description{
        color: white;
        padding: 50px;
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

</style>