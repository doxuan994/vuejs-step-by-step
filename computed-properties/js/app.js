let app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World',
        tasks: [
            { description: 'Go to the store', completed: true},
            { description: 'Finish screencast', completed: false},
            { description: 'Make donation', completed: false},
            { description: 'Clear inbox', completed: true},
            { description: 'Make dinner', completed: true},
            { description: 'Clear room', completed: true},
        ]
    },
    methods: {

    },
    computed: {
        reverseMessage() {
            return this.message.split('').reverse().join('');
        },
        incompleteTasks() {
            return this.tasks.filter(task => !task.completed);
        }
    }
});
