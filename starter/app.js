const viewModel = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe'
        }
    },
    methods: {
        // not recommented arrow functions couse this keyword not work 
        fullName() {
            return `${this.firstName} ${this.lastName.toUpperCase()}`
        }
    }
}).mount('#app')


// setTimeout(() => {
//     viewModel.firstName = 'Bob'
// }, 2000);



// Vue.createApp({
//     data() {
//         return {
//             firstName: 'Jane',
//             lastName: 'Doe'
//         }
//     }
// }).mount('#app2')