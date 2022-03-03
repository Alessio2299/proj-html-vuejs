<template>
  <section class="welcome text-center mb-5">
    <div class="container">
      <div class="title-welcome mx-auto">
        <h3>Welcome to Avada Health</h3>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem asccusantium dolermque laudantium, totam rem aperiam, eaque ipsa quae ab illo</p>
      </div>
      <div class="container-cards d-flex gap-3">
        <CardWelcome v-for="(card,index) in dataWelcome" :key="index"
          :img="card.img"
          :title="card.title"
          :description="card.paragraph"
        />
      </div>
    </div>
  </section>
</template>

<script>
  import CardWelcome from "./CardWelcome.vue"
  export default {
    name: 'WelcomeMain',
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
      CardWelcome
    }
  }
</script>

<style scoped lang="scss">
  .container{
    width: 70%;
    margin: auto;
    .title-welcome{
    width: 70%;
    padding-top: 80px;
    h3{
      font-weight: 200;
      font-size: 35px;
    }
    p{
      margin: 20px 0 50px 0;
      line-height: 30px;
      font-weight: 300;
    }
  }
  }
</style>
