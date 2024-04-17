<script>
    import { store } from '../../store';

    export default{
        props:{
            title: String,
            originalTitle: String,
            language: String,
            languagesSrc: Array,
            vote: Number,
        },

        data(){
            return{
                test: 'Hello!',
                store,
            }
        },

        methods:{
            getFullStars(propsVote){
                
                const fullStars = Math.round(propsVote/2)
                
                return fullStars
            },

            getEmptyStars(propsVote){

                const emptyStars = 5 - Math.round(propsVote/2)

                return emptyStars
            }
        }

    }
</script>

<template>
    <div class="card">                       
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

                    <!-- Stelle vuote -->
                    <font-awesome-icon :icon="['far', 'star']" style="color: #FFD43B;" v-for="star in getEmptyStars(vote)"/>
                </span>
            </li>
        </ul>
    </div>

</template>

<style lang="scss">
    .card{
        border: 1px solid red;
        width: 342px;
        height: 513px;
    }

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