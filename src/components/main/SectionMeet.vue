
<template>
  <section class="meet-doctors">
    <div class="container text-center">
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
  </section>
</template>

<script>
  import CardDoctor from "./CardDoctor.vue"
  import TitleSection from './TitleSection.vue'
  export default {
    name: 'SectionMeet',
    data(){
      return{
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
      TitleSection
    }
  }
</script>

<style scoped lang="scss">
  .meet-doctors{
    background-color: #f1efef;
    .container{
      width: 70%;
      margin: auto;
      padding-bottom: 100px;
    }
  }
</style>
