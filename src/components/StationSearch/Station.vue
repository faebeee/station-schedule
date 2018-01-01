<template>
  <div>
    <div class="col s10">
      {{ name }}
    </div>
    <div class="col s2">
      <button class='btn' @click="$emit('selected', id)">
        <i class="material-icons">add</i>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      name: String,
      id: [Number, String]
    }
  }
</script>
