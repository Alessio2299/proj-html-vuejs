
<template>
  <section class="sponsor pt-5">
    <div class="content m-auto d-flex justify-content-between">
      <div class="container-img" v-for="(image,index) in images.slice(start,last)" :key="index">
        <img :src="require (`../../assets/images/${image.url}`)"  alt="Client Logos">
      </div>
    </div>
  </section>
</template>

<script>

  export default {
    name: 'SectionSponsor',
    data(){
      return{
        start: 0,
        last: 3,
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
      this.sliders()
    },
    methods: {
      sliders: function(){          
            this.intervalid = setInterval(() => {
              this.start++
              this.last++
              if(this.last == this.images.length){
                this.last = 3
              }
              if(this.start == 5){
                this.start = 0
              }
            }, 2000);
        }
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
        img{
          width: 100%;
        }
      }
    }
  }
</style>
