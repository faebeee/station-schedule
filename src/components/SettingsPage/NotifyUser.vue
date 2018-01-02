<template>
  <div>
    <p class="range-field">
      <label>Notify User</label>
      <input class="blue-text" type="range" id="interval" min="1" max="15" v-model="notifyUserDiff" @change="save"/>
    </p>
  </div>
</template>

<script>

  import Vue from 'vue';

  export default {
    data() {
      return {
        notifyUserDiff: 6
      }
    },
    mounted() {
      this.notifyUserDiff = Vue.config.notifyUserDiff;
    },
    methods: {
      save() {
        this.$ls.set('notifyUserDiff', this.notifyUserDiff);
        Vue.config.notifyUserDiff = this.notifyUserDiff;
      }
    }
  }
</script>
