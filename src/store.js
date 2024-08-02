// store.js
import { createStore } from 'vuex';

const store = createStore({
    state(){
        return {
            colorSheme: 'dark',
        };
    },
    mutations:{
        SET_THEME(state,theme){
            state.colorSheme = theme;
        }
    },
    actions: {
        changeTheme({commit}, theme){
            commit('SET_THEME', theme);
        }
    },
    getters:{
        currentTheme(state){
            return state.colorSheme;
        }
    }
});

export default store;