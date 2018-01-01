<template>
  <div>
    <div class="row">
      <div class="input-field col s10">
        <input placeholder="Zuerich" type="text" v-model="query" @keyup.enter="search">
      </div>

      <div class="col s2">
        <button class="btn" @click="search">Search</button>
      </div>
    </div>

    <div class="row">
      <div v-for="station in stations" class="col s12">
        <div class="row">
          <Station :name="station.name" :id="station.id" @selected="onSelected">
          </Station>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import Station from './Station.vue';

  export default {
    components: {
      Station
    },
    data() {
      return {
        query: null,
        stations: [],
      }
    },
    methods: {
      onSelected(id) {
        this.$store.commit('stations/add', id);
        this.$emit('add');
        this.query = null;
        this.stations = [];
      },
      search() {
        this.$transportation.search(this.query)
          .then(response => {
            this.stations = response.data.stations;
          })
      }
    }
  }
</script>
