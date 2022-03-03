<template>
  <main>
    <SectionWelcome />
    <SectionMeet />
  </main>
</template>

<script>
  import SectionWelcome from "./main/SectionWelcome.vue"
  import SectionMeet from "./main/SectionMeet.vue"
  
  export default {
    name: 'MainPage',
    props: {
    },
    components:{
      SectionWelcome,
      SectionMeet
    }
  }
</script>

<style scoped lang="scss">

</style>
