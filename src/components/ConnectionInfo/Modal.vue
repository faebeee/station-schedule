<template>
  <div ref="modal" class="modal">
    <div class="modal-content" v-if="connection">
      <h4>{{connection.category}} {{connection.number}} </h4>

      <div>
        <div>{{ connection.stop.station.name}} - {{ connection.to }}</div>
        <Stops
          :stops="connection.passList"
          v-if="connection">
        </Stops>
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-action modal-close waves-effect waves-green btn-flat" @click="close">Close</button>
    </div>
  </div>
</template>

<script>

  import {mapState} from 'vuex';
  import Stops from './Stops.vue';

  export default {
    components: {
      Stops
    },
    computed: mapState('connection', {
      // passing the string value 'count' is same as `state => state.count`
      showModal: 'showModal',
      connection: 'connection',
    }),
    watch: {
      showModal(val) {
        $(this.$refs.modal).modal(val === true ? 'open' : 'close');
      }
    },
    data() {
      return {}
    },
    mounted() {
      $(this.$refs.modal).modal({
      dismissible: false, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
    });
    },
    methods: {
      close() {
        this.$store.dispatch('connection/closeModal');
      }
    }
  }
</script>
