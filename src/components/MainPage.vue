<template>
  <main>
    <SectionWelcome />
    <SectionMeet />
    <SectionHealth />
    <SectionTour />
    <SectionMore />
    <SectionAppointment />
    <SectionSponsor />
  </main>
</template>

<script>
  import SectionWelcome from "./main/SectionWelcome.vue"
  import SectionMeet from "./main/SectionMeet.vue"
  import SectionHealth from "./main/SectionHealth.vue"
  import SectionTour from "./main/SectionTour.vue"
  import SectionMore from "./main/SectionMore.vue"
  import SectionAppointment from "./main/SectionAppointment.vue"
  import SectionSponsor from "./main/SectionSponsor.vue"



  export default {
    name: 'MainPage',
    props: {
    },
    components:{
      SectionWelcome,
      SectionMeet,
      SectionHealth,
      SectionTour,
      SectionMore,
      SectionAppointment,
      SectionSponsor
    }
  }
</script>

<style scoped lang="scss">

</style>
