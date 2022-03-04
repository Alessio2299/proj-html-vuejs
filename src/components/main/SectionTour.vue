
<template>
  <section class="tour" :style="bgSection">
    <div class="container text-center text-white pt-5">
      <TitleSection
        :img="true"
        urlImg="icon-7.png"
        title="Tour our facilities"
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem asccusantium dolermque laudantium, totam rem aperiam, eaque ipsa quae ab illo, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae"
        :line="true"
      />
      <img src="../../assets/images/play-icon.png" alt="Icon play">
    </div>
  </section>
</template>

<script>
  import TitleSection from './TitleSection.vue'

  export default {
    name: 'SectionTour',
    data(){
      return{
        bgSection:{
          backgroundImage: `url(${require('../../assets/images/paralax-bg-tour-facilities.jpg')})`
        }
      }
    },
    props: {
    },
    components:{
      TitleSection,
    }
  }
</script>

<style scoped lang="scss">
  .tour{
    height: 550px;
    background-position: center;
    background-size: cover;
    img{
      &:hover{
        transition: all 0.5s;
        transform: scale(1.3);
        cursor: pointer;
      }
    }
  }
</style>
