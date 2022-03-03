<template>
  <main class="m-auto">
    <SectionWelcome />
  </main>
</template>

<script>
  import SectionWelcome from "./main/SectionWelcome.vue"
  export default {
    name: 'MainPage',
    props: {
    },
    components:{
      SectionWelcome
    }
  }
</script>

<style scoped lang="scss">
  main{
    width: 70%;
  }
</style>
