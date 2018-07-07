import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        nombre: 'Oficina de Calculo de Beneficios',
        myRecords: [],
        stocks:[
            {name: "a1", price: 1},
            {name: "a2", price: 2},
            {name: "a3", price: 3},
            {name: "a4", price: 4},
        ]
    }
})