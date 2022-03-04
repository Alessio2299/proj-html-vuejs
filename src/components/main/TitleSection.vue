<template>
  <div class="content-section">
    <img v-if="img" :src="require (`../../assets/images/${urlImg}`)" alt="Icon">
    <h2 class="text-uppercase">{{title}}</h2>
    <div v-if="line" class="line"></div>
    <p>{{description}}</p>
  </div>
</template>

<script>
  export default {
    name: 'TitleSection',
    props: {
      img: Boolean,
      urlImg: String,
      title: String,
      description: String,
      line: Boolean
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/style/line.scss";
  .content-section{
    width: 55%;
    margin: auto;
    padding-top: 50px;
    h2{
    font-size: 40px;
    font-weight: 200;
    }
    p{
      line-height: 30px;
      margin-bottom: 50px;
    }
  }

</style>