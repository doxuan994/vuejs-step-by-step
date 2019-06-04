Vue.component('task-list', {
    template: `
    <div>
        <task v-for="task in tasks">{{task.description}}</task>
    </div>
    `,
    data() {
        return {
            tasks: [
                { description: 'Go to the store', completed: true},
                { description: 'Finish screencast', completed: false},
                { description: 'Make donation', completed: false},
                { description: 'Clear inbox', completed: true},
                { description: 'Make dinner', completed: true},
                { description: 'Clear room', completed: true},
            ]
        }
    }
});



Vue.component('task', {
    template: '<li><slot></slot></li>',
    data() {
        return {

        }
    }
});




new Vue({
    el: '#app',
    data: {

    },
    methods: {

    }
});
