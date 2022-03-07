<template>
  <div class="card-doctor">
    <img :src="require (`../../assets/images/${img}`)" alt="icon">
    <div class="info text-start p-4">
      <span class="d-block text-uppercase mt-3">{{name}}</span>
      <span class="d-block my-2">{{job}}</span>
      <p class="mt-4">{{description}}</p>
      <a :href="firstSocial.idSocial">
        <i :class="`${firstSocial.nameSocial} fab fa-${firstSocial.nameSocial}-square`"></i>
      </a>
      <a :href="secondSocial.idSocial"><i :class="`${secondSocial.nameSocial} fab fa-${secondSocial.nameSocial}-square`"></i></a>
      <a :href="thirdSocial.idSocial"><i :class="`${thirdSocial.nameSocial} fab fa-${thirdSocial.nameSocial}-square`"></i></a>
    </div>
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
      firstSocial: Object,
      secondSocial: Object,
      thirdSocial: Object
    }
  }
</script>

<style scoped lang="scss">

  .card-doctor{
    width: 300px;
    background-color: #fff;
    span{
      font-weight: 300;
    }
    img{
      width: 100%;
      &:hover{
        transition: transform 1s;
        transform: scale(1.05);
        box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.37);
      }
    }
    p{
      line-height: 30px;
      font-size: 13px;
    }
    a{
      font-size: 40px;
      margin-right: 10px;
    }
    .facebook{
      color: rgb(66, 88, 146)
    }
    .twitter{
      color: rgb(108, 170, 232);
    }
    .instagram{
      color: rgb(76, 113, 151);
    }
    .whatsapp{
      color: #88acab;
    }
    .google-plus{
      color: rgb(114, 14, 14);
    }
  }
</style>