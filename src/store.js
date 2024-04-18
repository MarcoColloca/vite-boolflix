import { reactive } from 'vue'

export const store = reactive({
    filmList: [],
    filmActors: [],
    filmGenres: [],

    tvList: [],
    tvActors:[],
    tvGenres:[],

    searchBar: '',

    currentPage: {
        film: true,
        tv: false,
    },
})