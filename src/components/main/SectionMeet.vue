
<template>
  <section class="meet-doctors text-center mb-5">
    <CardDoctor />
  </section>
</template>

<script>
  import CardDoctor from "./CardDoctor.vue"
  export default {
    name: 'SectionMeet',
    data(){
      return{
        doctors:[
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
  .title-welcome{
    width: 70%;
    margin-top: 80px;
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
</style>
