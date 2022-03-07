
<template>
  <section class="tour" :style="bgSection">
    <Intersect @enter="inters(true)">
     <div :class="{'activeInters' : active}" class="container text-center text-white pt-5">
        <TitleSection
        :img="true"
        urlImg="icon-7.png"
        title="Tour our facilities"
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem asccusantium dolermque laudantium, totam rem aperiam, eaque ipsa quae ab illo, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae"
        :line="true"
        />
        <img src="../../assets/images/play-icon.png" alt="Icon play">
      </div>
    </Intersect>
  </section>
</template>

<script>
  import TitleSection from './TitleSection.vue'
  import Intersect from 'vue-intersect'

  export default {
    name: 'SectionTour',
    data(){
      return{
        active: false,
        bgSection:{
          backgroundImage: `url(${require('../../assets/images/paralax-bg-tour-facilities.jpg')})`
        }
      }
    },
    props: {
    },
    components:{
      TitleSection,
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
  .tour{
    height: 550px;
    background-position: center;
    background-size: cover;
    overflow: hidden;
    .container{
      width: 70%;
      margin: auto;
      padding-bottom: 100px;
      transition: 2s;
      transform: translateX(-1200px);
      opacity: 0;
    }
    .activeInters{
      transform: translateX(0px);
      opacity: 1;
    }
    img{
      &:hover{
        transition: all 0.5s;
        transform: scale(1.3);
        cursor: pointer;
      }
    }
  }
</style>
