<template>
  <span>{{name}}</span>
</template>

<script>
  export default {
    props :  {
      id: String
    },

    data(){
      return {
        name : null
      }
    },
    mounted(){
      this.$transportation.getStationboard(this.id)
        .then( response => {
          this.name = response.body.station.name;
        })
    }
  }
</script>
