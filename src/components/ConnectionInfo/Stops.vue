<template>
  <div>
    <table class="responsive-table striped">
      <thead>
      <tr>
        <th>Arrival</th>
        <th>Departure</th>
        <th>Station</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="stop in passList">
        <td>
          <span v-if="stop.arrival">{{ getTime(stop.arrival) }}</span>
        </td>
        <td>
          <span v-if="stop.departure">{{ getTime(stop.departure) }}</span>
        </td>
        <td>
          <StationName :id="stop.station.id"></StationName>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import StationName from './StationName.vue';
  import TimeMixin from '@/mixins/TimeMixin';

  export default {
    components: {
      StationName
    },
    mixins: [TimeMixin],
    props: {
      stops: {
        type: Array
      }
    },
    computed: {
      passList() {
        let stops = this.stops;
        stops.splice(0, 1);
        return stops;
      }
    }
    ,
    mounted() {
    }
  }
</script>
