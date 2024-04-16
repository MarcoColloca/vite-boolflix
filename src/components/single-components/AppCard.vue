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
                <span>Voto: </span> {{ vote }}
            </li>
        </ul>
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