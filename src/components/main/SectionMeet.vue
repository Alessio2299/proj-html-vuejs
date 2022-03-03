
<template>
  <section class="meet-doctors">
    <div class="container text-center pb-5">
      <div class="content-section">
        <img :src="require ('../../assets/images/icon-5.png')" alt="Icon">
        <h2 class="text-uppercase">Meet our doctors</h2>
        <div class="line"></div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem asccusantium dolermque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis er quasi architecto beatae</p>
      </div>
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
      CardDoctor
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/style/line.scss";
  .meet-doctors{
    background-color: #f1efef;
    .container{
      width: 70%;
      margin: auto;
      .content-section{
      width: 55%;
      margin: auto;
        h2{
        font-size: 40px;
        font-weight: 200;
          &:after{
            content: "";
            width: 100px;
            height: 5px;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: black;
          }
        }
        p{
          line-height: 30px;
          margin-bottom: 50px;
        }
      }
    }
  }
</style>
