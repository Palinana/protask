import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify);

export default new Vuetify({
    iconfont: 'fa',
    theme: {
        themes: {
            light: {
                primary: '#5fb4ef',
                secondary: '#202125',
                success: '#96b19c',
                info: '#ffaa2c',
                error: '#f83e70'
            },
        }
    }
});
