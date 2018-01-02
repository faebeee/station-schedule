<template>
  <nav>
    <div class="nav-wrapper blue lighten-1">
      <router-link :to="{name:'main'}" class="brand-logo center">
        <img src="static/img/android-icon-192x192.png" height="64">
      </router-link>
      <a href="#" data-activates="mobile-demo" class="button-collapse">
        <i class="material-icons">menu</i>
      </a>
      <ul class="right hide-on-med-and-down">
        <li>
          <router-link :to="{name : 'setting'}">
            <i class="material-icons">settings</i>
          </router-link>
        </li>
      </ul>
      <ul class="side-nav" id="mobile-demo">
        <li>
          <router-link :to="{name : 'setting'}">
            <i class="material-icons">settings</i> Settings
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    mounted() {
      $(".button-collapse").sideNav();
    }
  }
</script>
