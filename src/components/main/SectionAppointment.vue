
<template>
  <section id="appointment" :style="bgSection">
    <Intersect @enter="inters(true)">
      <div :class="{'activeInters' : active}" class="content text-white text-center py-5">
        <TitleSection
          :img="false"
          title="Make an appointment"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem asccusantium dolermque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae"
          :line="true"
        />
        <FormSection />
      </div>
    </Intersect>
  </section>
</template>

<script>
  import TitleSection from './TitleSection.vue'
  import FormSection from './FormSection.vue'
  import Intersect from 'vue-intersect'


  export default {
    name: 'SectionAppointment',
    data(){
      return{
        active: false,
        bgSection:{
          backgroundImage: `url(${require('../../assets/images/make-an-appointment.jpg')})`
        }
      }
    },
    props: {
    },
    components:{
      TitleSection,
      FormSection,
      Intersect
    },
    methods:{
      inters(enter){
        this.active = enter
      }
    }
  }
</script>

<style scoped lang="scss">
  #appointment{ 
    background-position: center;
    background-size: cover;
    overflow: hidden;
    .content{
      font-weight: 300;
      width: 40%;
      margin: auto;
      transition: all 3s;
      opacity: 0;
      transform: translateY(-660px);
      .content-section{
        width: 100%;
      }
    }
    .activeInters{
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
