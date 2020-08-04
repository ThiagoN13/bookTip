<template>
  <div>
    <ion-vue-router />

    <navbar></navbar>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  name: 'HomePage',
  components: {
    Navbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
