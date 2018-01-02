<template>
  <tr :class="{'blue lighten-1 white-text' : trackingConnection === board.name}">
    <td>
      {{ board.category }}
      {{ board.number }}
    </td>
    <td>
      {{ board.to }}
    </td>
    <td>
      <span v-if="index < showTimeDiffTextRowCount || trackingConnection === board.name"
            class="tooltipped"
            data-position="bottom"
            data-delay="50"
            :data-tooltip="getTime(board.stop.departure)">
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
      <a ref="dropdown"
         class='dropdown-button btn-default'
         :class="{'white-text' : trackingConnection === board.name}"
         href='#'
         :data-activates='stationId+index'>
        <i class="material-icons">more_vert</i>
      </a>

      <ul :id='stationId+index' class='dropdown-content'>
        <li>
          <span v-if="trackingConnection !== board.name" @click="track">Track</span>
          <span v-if="trackingConnection === board.name" @click="untrack">Untrack</span>
        </li>

        <li>
          <span @click="openDetails">Details</span>
        </li>

      </ul>
    </td>
  </tr>
</template>

<script>
  import Vue from 'vue';
  import moment from 'moment';

  import TimeMixin from '@/mixins/TimeMixin';

  export default {
    props: {
      board: Object,
      trackingConnection: String,
      index: Number,
      stationId: [Number, String],
    },
    mixins: [TimeMixin],
    watch: {
      board() {
        this.checkIfUserHasToBeNotified();
      }
    },

    data() {
      return {
        notificationFired : false,
        showTimeDiffTextRowCount: 5,
      }
    },
    mounted() {
      $('.tooltipped').tooltip();
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
        if (this.trackingConnection !== this.board.name || this.notificationFired) {
          return;
        }

        const minutesDiff =  moment(this.board.stop.departure).diff(moment(), 'minutes');
        if (minutesDiff < Vue.config.notifyUserDiff) {
          this.$notification.notify(`in ${minutesDiff} minutes - ${this.board.category} ${this.board.number}`, `Direction ${this.board.to}`);
          this.notificationFired = true;
        }
      },

      track() {
        this.$emit('track', this.board.name);
      },

      untrack() {
        this.$emit('track', null);
      },

      openDetails() {
        this.$store.commit('connection/set', this.board);
        this.$store.dispatch('connection/openModal');
      },

    }
  }
</script>
