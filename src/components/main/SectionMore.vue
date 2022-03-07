
<template>
  <section class="more">
    <div class="content d-flex text-white text-center">
      <div class="emergency pb-5">
        <Intersect @enter="inters(true)">
          <div :class="{'activeInters' : active}" class="content-card">
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
        </Intersect>
      </div>
      <div class="diagnostic">
        <Intersect @enter="inters(true)">
          <div :class="{'activeInters' : active}" class="content-card">
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
        </Intersect>
      </div>
      <div class="rehabilitation">
        <Intersect @enter="inters(true)">
          <div :class="{'activeInters' : active}" class="content-card">
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
        </Intersect>
      </div>
    </div>
  </section>
</template>

<script>
  import TitleSection from './TitleSection.vue'
  import Intersect from 'vue-intersect'

  export default {
    name: 'SectionMore',
    data(){
      return{
        active: false
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
  .content{
    font-size: 11px;
    font-weight: 300;
    overflow: hidden;
    .my_button{
      padding: 8px 30px;
      border: 2px solid #fff;
      text-transform: uppercase;
      &:hover{
        background-color: #fff;
        color: #000;
      }
    }
    .content-section{
      width: 95%;
    }
    .emergency{
      background-color: #39afbb;
      .content-card{
        transition: 1s;
        transform: scale(0);
        opacity: 0;
      }
      .activeInters{
        transform: scale(1);
        opacity: 1;
      }
    }
    .diagnostic{
      background-color: #3ba5bd;
      .content-card{
        transition: 2s;
        transform: scale(0);
        opacity: 0;
      }
      .activeInters{
        transform: scale(1);
        opacity: 1;
      }
    }
    .rehabilitation{
      background-color: #449ebf;
      .content-card{
        transition: 3s;
        transform: scale(0);
        opacity: 0;
      }
      .activeInters{
        transform: scale(1);
        opacity: 1;
      }
    }
  }
</style>
