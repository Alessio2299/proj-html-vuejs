<template>
  <div class="card-welcome">
    <img :src="require (`../../assets/images/${img}`)" alt="icon">
    <h5 class="text-uppercase my-3">{{title}}</h5>
    <p>{{description}}</p>
  </div>
</template>

<script>
export default {
  name: 'CardWelcome',
  props: {
    img: String,
    title: String,
    description: String
  }
}
</script>

<style scoped lang="scss">
  .card-welcome{
    h5{
      font-weight: 300;
      font-size: 17px;
    }
    p{
      line-height: 30px;
      font-size: 13px;
    }
  }
</style>