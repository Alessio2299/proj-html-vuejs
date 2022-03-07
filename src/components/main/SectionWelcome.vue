<template>
  <Intersect @enter="inters(true)">
    <div :class="{'activeInters' : active}" class="section-welcome container text-center mb-5">
      <TitleSection
        :img="false"
        title="Welcome to Avada Health"
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem asccusantium dolermque laudantium, totam rem aperiam, eaque ipsa quae ab illo"
        :line="false"
      />
      <div class="container-cards d-flex gap-3">
        <CardMain v-for="(card,index) in dataWelcome" :key="index"
          :img="card.img"
          :title="card.title"
          :description="card.paragraph"
        />
      </div>
    </div>
  </Intersect>
</template>

<script>
  import CardMain from "./CardMain.vue"
  import TitleSection from "./TitleSection.vue"
  import Intersect from 'vue-intersect'

  export default {
    name: 'SectionWelcome',
    data(){
      return{
        active: false,
        dataWelcome:[
          {
            img: "icon-1.png",
            title: "Same day appointments",
            paragraph: "Sed ut perspiciatis unde omnis iste natus error sit voluptam accusantim"
          },
          {
            img: "icon-2.png",
            title: "World class facilities",
            paragraph: "Sed ut perspiciatis unde omnis iste natus error sit voluptam accusantim"
          },
          {
            img: "icon-3.png",
            title: "Expert doctors",
            paragraph: "Sed ut perspiciatis unde omnis iste natus error sit voluptam accusantim"
          },
          {
            img: "icon-4.png",
            title: "Complementary Therapies",
            paragraph: "Sed ut perspiciatis unde omnis iste natus error sit voluptam accusantim"
          }
        ]
      }
    },
    props: {
    },
    components:{
      CardMain,
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
  .container{
    width: 70%;
    margin: auto;
    transition: all 2s;
    transform: scale(0);
    opacity: 0;
    overflow: hidden;
  }
  .activeInters{
    transform: scale(1);
    opacity: 1;
  }
</style>
