
<template>
  <section class="health-services">
    <div class="container text-center">
      <TitleSection
        :img="true"
        urlImg="icon-6.png"
        title="Our health services"
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem asccusantium dolermque laudantium, totam rem aperiam, eaque ipsa quae ab illo, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae"
        :line="true"
      />
      <div class="container-cards m-auto justify-content-between d-flex gap-3 flex-wrap">
        <CardMain v-for="(service,index) in services" :key="index"
          :img="service.img"
          :title="service.title"
          :description="service.description"
        />
      </div>
    </div>
  </section>
</template>

<script>
  import TitleSection from './TitleSection.vue'
  import CardMain from "./CardMain.vue"

  export default {
    name: 'SectionHealth',
    data(){
      return{
        services:[
          {
            img: "icon-14.png",
            title: "Rehabilitation Center",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditis praesentium voluptatum deleniti atque corrupti quos dolores et quas",
          },
          {
            img: "icon-15.png",
            title: "Dental Implants",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditis praesentium voluptatum deleniti atque corrupti quos dolores et quas",
          },
          {
            img: "icon-16.png",
            title: "Medicin Reserach",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditis praesentium voluptatum deleniti atque corrupti quos dolores et quas",
          },
          {
            img: "icon-11.png",
            title: "Blood Bank",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditis praesentium voluptatum deleniti atque corrupti quos dolores et quas",
          },
          {
            img: "icon-12.png",
            title: "Pharmaceutical Advice",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditis praesentium voluptatum deleniti atque corrupti quos dolores et quas",
          },
          {
            img: "icon-13.png",
            title: "Medical Counseling",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditis praesentium voluptatum deleniti atque corrupti quos dolores et quas",
          }
        ]
      }
    },
    props: {
    },
    components:{
      TitleSection,
      CardMain
    }
  }
</script>

<style scoped lang="scss">
  .container-cards{
    width: 78%;
  }
</style>
