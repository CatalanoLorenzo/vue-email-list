/* Descrizione:
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati. */
const { createApp } = Vue

const app = createApp({
    data() {
        return {
            url: "https://flynn.boolean.careers/exercises/api/random/mail",
            list_email: [],
        }
    },
    methods: {

    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios
                .get(this.url)
                .then(response => {
                    //console.log(response);
                    this.list_email.push(response.data.response)
                    //console.log(response.data.response);
                })
        }
        console.log(this.list_email);

    },

})

app.mount('#app')