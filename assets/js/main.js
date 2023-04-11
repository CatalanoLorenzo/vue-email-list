/* Descrizione:
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati. */
const { createApp } = Vue

const app = createApp({
    data() {
        return {
            url: "https://flynn.boolean.careers/exercises/api/random/mail",
            list_emails: [],
        }
    },
    methods: {

    },
    mounted() {
        //cicla per dieci volte 
        for (let i = 0; i < 10; i++) {
            //chiama API
            axios
            //richiesta all'API tramite URL
                .get(this.url)
                //risposta dell'API
                .then(response => {
                    //console.log(response);
                    //prende il valore della risposta e lo inserisce nell'array vuoto
                    this.list_emails.push(response.data.response)
                    //console.log(response.data.response);
                })
        }
        //console.log(this.list_emails);

    },

})

app.mount('#app')