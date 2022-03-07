<template>
  <div id="header-thumb" class="thumb position-relative" :style="bgThumb">
    <NavBar />
    <div class="content-thumb text-white">
      <h1 class="mb-3">Caring <span class="text-info">For Life</span></h1>
      <p>Kind words can be short and easy to speak, but their echoes ar truly endless. Avada Health focuses on you as if it was our own family.</p>
      <div class="mt-3 text-uppercase my_button bg-info rounded d-inline-block">Learn More</div>
    </div>
  </div>
</template>

<script>
  import NavBar from "./NavBar.vue"
  export default {
    name: 'ThumbHeader',
    data(){
      return{
        bgThumb: {
          backgroundImage: `url(${require('../../assets/images/header-image-homepage.jpg')})`
        }
      }
    },
    props: {
    },
    components: {
      NavBar
    }
  }
</script>

<style scoped lang="scss">
  .thumb{
    height: 650px;
    background-position: top;
    background-size: cover;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .content-thumb{
      width: 35%;
      margin: 150px 0 0 200px;
      h1{
        font-size: 55px;
        font-weight: 200;
      }
      .my_button{
      padding: 12px 35px;
        &:hover{
          background-color: rgb(77, 138, 150) !important;
        }
      }
    }
  }
</style>
