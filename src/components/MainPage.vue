<template>
  <main>
    <SectionWelcome />
    <SectionMeet />
    <SectionHealth />
    <SectionTour />
  </main>
</template>

<script>
  import SectionWelcome from "./main/SectionWelcome.vue"
  import SectionMeet from "./main/SectionMeet.vue"
  import SectionHealth from "./main/SectionHealth.vue"
  import SectionTour from "./main/SectionTour.vue"


  
  export default {
    name: 'MainPage',
    props: {
    },
    components:{
      SectionWelcome,
      SectionMeet,
      SectionHealth,
      SectionTour
    }
  }
</script>

<style scoped lang="scss">

</style>
