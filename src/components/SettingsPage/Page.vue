<template>
  <div class="container">
    <div class="row">
      <div class="col s12">
        <h1>Settings</h1>
      </div>
    </div>

    <div class="row">
      <div class="col s12">
        <NotifyUser></NotifyUser>
      </div>
    </div>

    <div class="row">
      <div class="col s12">
        <MaxTableRows></MaxTableRows>
      </div>
    </div>
  </div>
</template>

<script>

  import NotifyUser from './NotifyUser.vue';
  import MaxTableRows from './MaxTableRows.vue';

  export default {
    components: {
      NotifyUser,
      MaxTableRows,
    }

  }
</script>
