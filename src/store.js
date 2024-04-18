import { reactive } from 'vue'

export const store = reactive({
    filmList: [],
    tvList: [],
    searchBar: '',
    currentPage: {
        film: true,
        tv: false,
    },
    filmActors: [],
    tvActors:[]
})