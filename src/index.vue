<template>
  <navBar/>
  <Body/>
</template>

<script lang="ts">
import navBar from './nav.vue'
import Body from './body.vue'
export default {
  components: { navBar, Body }
}
</script>