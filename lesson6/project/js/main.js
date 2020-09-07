const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

Vue.component('error', {
    props: ['error'],
    template: `
        <p> {{ error }} </p>
    `,
});

const app = new Vue({
    el: '#app',
    data: {
        error: '',
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    this.error = error;
                    console.log(error);
                })
        },
    },
    mounted() {
        console.log(this);
    }
});
