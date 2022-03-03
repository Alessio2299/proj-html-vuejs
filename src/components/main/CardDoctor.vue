<template>
  <div class="card-doctor">
    <img :src="require (`../../assets/images/${img}`)" alt="icon">
    <span class="text-uppercase my-3">{{name}}</span>
    <span class="text-uppercase my-3">{{job}}</span>
    <p>{{description}}</p>
  </div>
</template>

<script>
  export default {
    name: 'CardDoctor',
    props: {
      img: String,
      name: String,
      job: String,
      description: String,
      facebook: String,
      twitter: String,
      instagram: String
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