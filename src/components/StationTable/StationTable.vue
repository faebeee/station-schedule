<template>
  <div class="row">
    <div class="col s12">
      <loading-indicator v-if="!station"></loading-indicator>

      <div class="card" v-if="station">
        <div class="card-content">
          <span class="card-title">{{ station.name }}</span>

          <table class="striped">
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
        <div class="card-action">
          <button class="btn red" @click="remove">
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
        return this.stationboard.slice(0, 10);
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
