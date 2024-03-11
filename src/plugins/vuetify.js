import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            light: {
                primary: '#2196F3',
                secondary: '#212121',
                accent: '#F57C00',
                error: '#D32F2F',
            }
        },
    },
    icons: {
        iconfont: 'mdi',
    },
});
