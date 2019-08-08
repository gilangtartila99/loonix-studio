<template>
  <div class="main_container">
    <nuxt />
  </div>
</template>

<script>
import helpers from '../helpers/helpers'

export default {
  name: 'MainLayout',
  mixin: [helpers]
}
</script>

<style>
</style>
