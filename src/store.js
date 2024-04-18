import { reactive } from 'vue'

export const store = reactive({
    filmList: [],
    tvList: [],
    
    actors: [],
    genres: [],

    searchBar: '',

    currentPage: {
        film: true,
        tv: false,
    },
})