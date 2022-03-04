
<template>
  <section id="appointment" :style="bgSection">
    <div class="content text-white text-center py-5">
        <TitleSection
          :img="false"
          title="Make an appointment"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem asccusantium dolermque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae"
          :line="true"
        />
        <FormSection />
    </div>
  </section>
</template>

<script>
  import TitleSection from './TitleSection.vue'
  import FormSection from './FormSection.vue'

  export default {
    name: 'SectionAppointment',
    data(){
      return{
        bgSection:{
          backgroundImage: `url(${require('../../assets/images/make-an-appointment.jpg')})`
        }
      }
    },
    props: {
    },
    components:{
      TitleSection,
      FormSection
    }
  }
</script>

<style scoped lang="scss">
  #appointment{ 
    background-position: center;
    background-size: cover;
    .content{
      font-weight: 300;
      width: 40%;
      margin: auto;
      .content-section{
        width: 100%;
      }
    }
  }
</style>
