<template>
  <section class="welcome text-center mb-5">
    <div class="container">
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
  </section>
</template>

<script>
  import CardMain from "./CardMain.vue"
  import TitleSection from "./TitleSection.vue"
  export default {
    name: 'SectionWelcome',
    data(){
      return{
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
      TitleSection
    }
  }
</script>

<style scoped lang="scss">
  .container{
    width: 70%;
    margin: auto;
  }
</style>
