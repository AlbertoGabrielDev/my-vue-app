// store/modules/color.js
export default {
    state() {
        return {
            colorScheme: 'dark',
        };
    },
    mutations: {
        SET_THEME(state, theme) {
            state.colorScheme = theme;
        }
    },
    actions: {
        changeTheme({ commit }, theme) {
            commit('SET_THEME', theme);
        }
    },
    getters: {
        currentTheme(state) {
            return state.colorScheme;
        }
    }
};
