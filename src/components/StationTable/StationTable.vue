<template>
  <div class="row" v-if="station">
    <div class="col s12">
      <div class="card">
        <div class="card-content">
          <span class="card-title">{{ station.name }}</span>
          <table class="striped">
            <thead>
            <tr>
              <th>Line</th>
              <th>Destination</th>
              <th>Departure</th>
              <th>Platform</th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="board in stationsLeaves">
              <td>{{ board.category }}
                {{ board.number }}
              </td>
              <td>{{ board.to }}</td>
              <td>{{ getTime(board.stop.departure) }}</td>
              <td>{{ board.stop.platform }}</td>
            </tr>
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

  import moment from 'moment';
  import MdCardContent from 'vue-material/src/components/mdCard/mdCardContent';
  import mdCard from 'vue-material/src/components/mdCard/mdCard';
  import mdCardHeader from 'vue-material/src/components/mdCard/mdCardHeader';

  export default {
    components: {MdCardContent, mdCard, mdCardHeader},
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
      remove() {
        this.$store.commit('stations/remove', this.stationId);
      },
      load() {
        this.$transportation.getStationboard(this.stationId)
          .then(data => {
            this.station = data.body.station;
            this.stationboard = data.body.stationboard;
          });

        this.interval = setTimeout(() => {
          this.load();
        }, 60000);
      },
      getTime(t) {
        //return moment().diff(t, 'minutes');
        return moment.duration(moment().diff(t, 'minutes'), 'minutes').humanize(false);
      }
    }
  };
</script>
