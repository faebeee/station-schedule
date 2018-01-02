<template>
  <div class="row">
    <div class="col s12">
      <div class="card">
        <div class="card-content">
          <span class="card-title" v-if="station">{{ station.name }}</span>
          <loading-indicator v-if="!station"></loading-indicator>

          <table class="responsive-table striped" v-if="station">
            <thead>
              <tr>
                <th>Line</th>
                <th>Destination</th>
                <th>Departure</th>
                <th>Platform</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <TableRow v-for="(board, index) in stationsLeaves"
                        :board="board"
                        :trackingConnection="trackingConnection"
                        :index="index"
                        :stationId="stationId"
                        @track="trackConnection"></TableRow>
            </tbody>
          </table>
        </div>
        <div class="card-action" v-if="station">
          <button class="btn-flat red-text" @click="remove">
            <i class="material-icons">delete</i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import Vue from 'vue';

  import TableRow from './TableRow.vue';

  export default {
    components: {
      TableRow
    },

    props: {
      stationId: {
        type: [Number, String],
        required: true,
      },
    },

    computed: {
      stationsLeaves() {
        return this.stationboard.slice(0, Vue.config.maxTableRows);
      }
    },

    data() {
      return {
        trackingConnection: null,
        station: null,
        stationboard: null,
        interval: null,
      }
    },

    mounted() {
      this.load();
    },

    beforeDestroy() {
      clearTimeout(this.interval);
    },

    methods: {
      trackConnection(name) {
        if (name === this.trackingConnection) {
          this.trackingConnection = null;
        } else {
          this.trackingConnection = name;
        }

        this.$ls.set('track_' + this.stationId, this.trackingConnection);
      },

      remove() {
        this.$store.commit('stations/remove', this.stationId);
      },

      load() {
        this.trackingConnection = this.$ls.get('track_' + this.stationId);

        this.$transportation.getStationboard(this.stationId)
          .then(data => {
            this.station = data.body.station;
            this.stationboard = data.body.stationboard;
          });

        this.interval = setTimeout(() => {
          this.load();
        }, Vue.config.updateInterval);
      },
    }
  };
</script>
