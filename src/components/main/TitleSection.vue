<template>
  <div class="content-section">
    <img v-if="img" :src="require (`../../assets/images/${urlImg}`)" alt="Icon">
    <h2 :style="(sizeTitle) ? `fontSize: ${sizeTitle}px` : ''" class="text-uppercase">{{title}}</h2>
    <div v-if="line && !lineImg" class="line"></div>
    <img v-if="line && lineImg" :src="require ('../../assets/images/wave-divider.png')" alt="wave divider">
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
      line: Boolean,
      lineImg: Boolean,
      sizeTitle: Number
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
    font-weight: 200;
    }
    p{
      line-height: 30px;
      margin-bottom: 30px;
    }
  }
</style>