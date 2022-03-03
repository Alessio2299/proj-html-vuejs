<template>
 <div class="thumb">
   <NavBar />
   <img :src="require ('../../assets/images/header-image-homepage.jpg')" alt="">
 </div>
</template>

<script>
  import NavBar from "./NavBar.vue"

  export default {
    name: 'ThumbHeader',
    props: {
    },
    components: {
      NavBar
    }
  }
</script>

<style scoped lang="scss">
  .thumb{
    position: relative;
    height: 700px;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
  }
</style>
