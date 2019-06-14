Vue.component('name-item', {
    template: `
    <div class="container">


      <div class="row">
        <div class="column left roof">
          <div>
            <div class="item">Firstname</div>
          </div>
        </div>
        <div class="column right roof">
          <div>
            <div class="item">Lastname</div>
          </div>
        </div>
      </div>

      <div v-for="name in names" class="row">
          <div class="column left">
            <div>
              <div class="item">{{ name.firstname }}</div>
            </div>
          </div>

          <div class="column right">
            <div>
              <div class="item">{{ name.lastname }}</div>
            </div>
          </div>
      </div>
    </div>
    `,
    data() {
        return {

        }
    },
    props: ['names'],
});

Vue.component('name-list', {
    template: `
    <div>
      <name-item :names="names"></name-item>
    </div>
    `,
    data() {
        return {
          names: [
            { firstname: 'Yoshi', lastname: 'Doe' },
            { firstname: 'Banana', lastname: 'Yellow' },
            { firstname: 'David', lastname: 'Smith' },
            { firstname: 'Mellisa', lastname: 'Sabacha' }
          ]
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
