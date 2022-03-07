
<template>
  <section class="meet-doctors">
    <Intersect @enter="inters(true)">
      <div :class="{'activeInters' : active}" class="container text-center">
        <TitleSection 
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem asccusantium dolermque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis er quasi architecto beatae"
        title="Meet our doctors"
        urlImg="icon-5.png"
        :line="true"
        :img="true"
        />
        <div class="doctors d-flex justify-content-around">
          <CardDoctor 
            v-for="(doctor,index) in doctors" :key="index"
            :img="doctor.img"
            :name="doctor.name"
            :job="doctor.job"
            :description="doctor.description"
            :firstSocial="doctor.firstSocial"
            :secondSocial="doctor.secondSocial"
            :thirdSocial="doctor.thirdSocial"
          />
        </div>
      </div>
    </Intersect>
  </section>
</template>

<script>
  import CardDoctor from "./CardDoctor.vue"
  import TitleSection from './TitleSection.vue'
  import Intersect from 'vue-intersect'

  export default {
    name: 'SectionMeet',
    data(){
      return{
        active: false,
        doctors:[
          {
            img: "doctor-1.jpg",
            name: "Jon Snow",
            job: "Anesthesiologist",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditis praesentium voluptatum deleniti atque",
            firstSocial: {
              nameSocial: "facebook",
              urlSocial: "#"
            },
            secondSocial: {
              nameSocial: "twitter",
              urlSocial: "#"
            },
            thirdSocial: {
              nameSocial: "instagram",
              urlSocial: "#"
            }
          },
          {
            img: "doctor-2.jpg",
            name: "Tony Stark",
            job: "Cardiologist",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditis praesentium voluptatum deleniti atque",
            firstSocial: {
              nameSocial: "facebook",
              urlSocial: "#"
            },
            secondSocial: {
              nameSocial: "twitter",
              urlSocial: "#"
            },
            thirdSocial: {
              nameSocial: "instagram",
              urlSocial: "#"
            }
          },
          {
            img: "doctor-3.jpg",
            name: "Anna Smith",
            job: "Nuser Practitioner",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditis praesentium voluptatum deleniti atque",
            firstSocial: {
              nameSocial: "facebook",
              urlSocial: "#"
            },
            secondSocial: {
              nameSocial: "twitter",
              urlSocial: "#"
            },
            thirdSocial: {
              nameSocial: "instagram",
              urlSocial: "#"
            }
          }
        ]
      }
    },
    props: {
    },
    components:{
      CardDoctor,
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
  .meet-doctors{
    background-color: #f1efef;
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
  }
</style>
