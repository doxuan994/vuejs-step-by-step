let app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World',
        names: ['Joe', 'Mary', 'Jane', 'Jack'],
        newName: '',
        title: 'Title from Vuejs',
        isLoading: false
    },
    methods: {
        addName: function() {
            this.names.push(this.newName);
        },
        toggleClass: function() {
            this.isLoading = true;
        }
    }
});
