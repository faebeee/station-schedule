<template>
  <div>
    <p class="range-field">
      <label>Max rows per table</label>
      <input class="blue-text" type="range" id="interval" min="1" max="15" v-model="maxTableRows" @change="save"/>
    </p>
  </div>
</template>

<script>

  import Vue from 'vue';

  export default {
    data() {
      return {
        maxTableRows: 10
      }
    },
    mounted() {
      this.maxTableRows = Vue.config.maxTableRows;
    },
    methods: {
      save() {
        this.$ls.set('maxTableRows', this.maxTableRows);
        Vue.config.maxTableRows = this.maxTableRows;
      }
    }
  }
</script>
