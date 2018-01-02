<template>
  <nav>
    <div class="nav-wrapper blue lighten-1">
      <a href="/" class="brand-logo center"><img src="static/img/android-icon-48x48.png"></a>
      <a href="#" data-activates="mobile-demo" class="button-collapse">
        <i class="material-icons">menu</i>
      </a>
      <ul class="right hide-on-med-and-down">
        <li>
          <a href="/">
            <i class="material-icons">settings</i>
          </a>
        </li>
      </ul>
      <ul class="side-nav" id="mobile-demo">
        <li>
          <a href="/">
            <i class="material-icons">settings</i> Settings
          </a>
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
