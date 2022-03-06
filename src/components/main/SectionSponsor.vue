
<template>
  <section class="sponsor pt-5">
    <div class="content m-auto">
      <div class="container-img">
        <img v-for="(image,index) in images" :key="index" :src="require (`../../assets/images/${image.url}`)"  alt="Client Logos">
      </div>
    </div>
  </section>
</template>

<script>

  export default {
    name: 'SectionSponsor',
    data(){
      return{
        intervalid: "",
        images:[
          {
            url:"client-logos-1.png"
          },
          {
            url:"client-logos-2.png"
          },
          {
            url:"client-logos-3.png"
          },
          {
            url:"client-logos-4.png"
          },
          {
            url:"client-logos-1.png"
          },
          {
            url:"client-logos-2.png"
          },
          {
            url:"client-logos-3.png"
          },
          {
            url:"client-logos-4.png"
          }
        ]
      }
    },
    mounted(){

    },
    methods: {
    }
  }
</script>

<style scoped lang="scss">
  .sponsor{
    height: 300px ;
    background: linear-gradient(93deg, rgb(74, 183, 196) 20%, rgb(49, 154, 192) 50%, rgba(59,118,175,1) 70%);
    .content{
      width: 50%;
      height: 200px;
      .container-img{
        display: flex;
        overflow: hidden;
        img{
          width: calc(100% / 3);
          animation: scroll 15s linear infinite;
          @keyframes scroll {
          0%{
            transform: translateX(0);
          }
          100%{
            transform: translateX(-240px * 5);
          }
        }
        }
      }
    }
  }
</style>
