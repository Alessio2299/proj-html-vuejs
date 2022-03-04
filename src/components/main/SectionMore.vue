
<template>
  <section class="more">
    <div class="content d-flex text-white text-center">
     <div class="emergency pb-5">
        <TitleSection
          :img="false"
          title="emergency care"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem asccusantium dolermque laudantium, totam rem aperiam, eaque"
          :line="true"
          :lineImg="true"
          :sizeTitle="15"
        />
        <div class="my_button d-inline-block">
          Learn More
        </div>
     </div>
     <div class="diagnostic">
        <TitleSection
          :img="false"
          title="expert diagnostic"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem asccusantium dolermque laudantium, totam rem aperiam, eaque"
          :line="true"
          :lineImg="true"
          :sizeTitle="15"
        />
        <div class="my_button d-inline-block">
          Learn More
        </div>
     </div>
     <div class="rehabilitation">
        <TitleSection
          :img="false"
          title="superb rehabilitation"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem asccusantium dolermque laudantium, totam rem aperiam, eaque"
          :line="true"
          :lineImg="true"
          :sizeTitle="15"
        />
        <div class="my_button d-inline-block">
          Learn More
        </div>
     </div>
    </div>
  </section>
</template>

<script>
  import TitleSection from './TitleSection.vue'

  export default {
    name: 'SectionMore',
    data(){
      return{
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
  .content{
    font-size: 11px;
    font-weight: 300;
    .my_button{
      padding: 8px 30px;
      border: 2px solid #fff;
      text-transform: uppercase;
    }
    .content-section{
      width: 95%;
    }
    .emergency{
    background-color: #39afbb;
    }
    .diagnostic{
      background-color: #3ba5bd;
    }
    .rehabilitation{
      background-color: #449ebf;
    }
  }
</style>
