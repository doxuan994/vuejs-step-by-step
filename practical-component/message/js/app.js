Vue.component('message', {
    props: ['title', 'body'],
    template: `
        <article class="message" v-show="isVisible">
            <div class="message-header">
                {{title}}
                <button type="button" class="close" @click="isVisible = false">x</button>
            </div>

            <div class="message-body">
                {{body}}
            </div>
        </article>
    `,
    data() {
        return {
            isVisible: true
        }
    },
    methods: {
        hideModal() {
            this.isVisible = false;
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
