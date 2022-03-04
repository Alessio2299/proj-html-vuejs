<template>
  <main>
    <SectionWelcome />
    <SectionMeet />
    <SectionHealth />
  </main>
</template>

<script>
  import SectionWelcome from "./main/SectionWelcome.vue"
  import SectionMeet from "./main/SectionMeet.vue"
  import SectionHealth from "./main/SectionHealth.vue"

  
  export default {
    name: 'MainPage',
    props: {
    },
    components:{
      SectionWelcome,
      SectionMeet,
      SectionHealth
    }
  }
</script>

<style scoped lang="scss">

</style>
