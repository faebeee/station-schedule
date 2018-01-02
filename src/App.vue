<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <router-view/>
  </div>
</template>

<script>
  import HeaderComponent from '@/components/base/header.vue';
  export default {
    components : {
      HeaderComponent
    },
  };
</script>
