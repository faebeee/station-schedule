<template>
  <tr :class="{'red white-text' : trackingConnection === board.name}">
    <td>
      {{ board.category }}
      {{ board.number }}
    </td>
    <td>
      {{ board.to }}
    </td>
    <td>
      <span v-if="index < showTimeDiffTextRowCount || trackingConnection === board.name">
        {{ getDiffTime(board.stop.departure) }}
      </span>

      <span v-if="index >= showTimeDiffTextRowCount">
        {{ getTime(board.stop.departure) }}
      </span>
    </td>
    <td>
      {{ board.stop.platform }}
    </td>
    <td>
      <a ref="dropdown" class='dropdown-button btn-flat' href='#' :data-activates='stationId+index'>
        <i class="material-icons">more_vert</i>
      </a>

      <ul :id='stationId+index' class='dropdown-content'>
        <li v-if="trackingConnection !== board.name">
          <span @click="track">Track</span>
        </li>

        <li v-if="trackingConnection === board.name">
          <span @click="untrack">Untrack</span>
        </li>
      </ul>
    </td>
  </tr>
</template>

<script>
  import Vue from 'vue';
  import moment from 'moment';


  export default {
    props: {
      board: Object,
      trackingConnection: String,
      index: Number,
      stationId: [Number, String],
    },
    watch: {
      board() {
        console.log('update');
        this.checkIfUserHasToBeNotified();
      }
    },

    data() {
      return {
        showTimeDiffTextRowCount: 5,
      }
    },
    mounted() {
      this.showTimeDiffTextRowCount = Vue.config.showTimeDiffTextRowCount;
      $(this.$refs.dropdown).dropdown({
          inDuration: 300,
          outDuration: 225,
        }
      );
      this.checkIfUserHasToBeNotified();
    },
    methods: {

      checkIfUserHasToBeNotified() {
        if (this.trackingConnection !== this.board.name) {
          return;
        }

        if (moment().diff(this.board.stop.departure, 'minutes') > Vue.config.notifyUserDiff) {
          this.$notification.notify(`${this.board.stop.station.name}`, `${this.board.category} ${this.board.number} direction ${this.board.to}`);
        }
      },

      track() {
        this.$emit('track', this.board.name);
      },

      untrack() {
        this.$emit('track', null);
      },

      getDiffTime(t) {
        return moment.duration(moment().diff(t, 'minutes'), 'minutes').humanize(false);
      },

      getTime(t) {
        return moment(t).format('H:mm');
      }
    }
  }
</script>
