<template>
  <div>
    <div class="row">
      <div class="col s12 "
           v-for="id in $store.state.stations.stations"
           :class="{
            'l6 xl4': $store.state.stations.stations.length > 2,
            'l6': $store.state.stations.stations.length === 2,
           }">
        <StationTable :stationId=id></StationTable>
      </div>
    </div>

    <div ref="modal" class="modal">
      <div class="modal-content">
        <h4>Add Station</h4>
        <StationSearch @add="onAdd"></StationSearch>

      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
      </div>
    </div>

    <div class="fixed-action-btn">
      <a class="btn-floating btn-large modal-trigger blue lighten-1" @click="openModal">
        <i class="material-icons">add</i>
      </a>
    </div>
    <ConnectionInfoModal></ConnectionInfoModal>
  </div>
</template>

<script>

  // eslint-disable-next-line
  import StationTable from '@/components/StationTable/StationTable.vue';
  import StationSearch from '@/components/StationSearch/StationSearch.vue';
  import ConnectionInfoModal from '@/components/ConnectionInfo/Modal.vue';

  export default {
    components: {
      StationTable,
      StationSearch,
      ConnectionInfoModal,
    },
    data() {
      return {}
    },
    mounted() {
      $(this.$refs.modal).modal();
      this.$store.commit('stations/load');
    },
    methods: {
      openModal() {
        $(this.$refs.modal).modal('open');
      },
      onAdd() {
        $(this.$refs.modal).modal('close');
      }
    }
  };
</script>
