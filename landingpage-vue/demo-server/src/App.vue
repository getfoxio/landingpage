<script lang="ts">
export default {
  data: () => ({
    username: import.meta.env.VITE_USERNAME,
    apikey: import.meta.env.VITE_APIKEY,
  }),
}
</script>

<template>
  <LandingPage :username="username" :apikey="apikey" />
</template>
<style>
@import 'https://api.getfox.io/static/css/lp.css';
</style>
