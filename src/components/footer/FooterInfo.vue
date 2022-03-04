<template>
  <div class="avada-info me-4">
    <img class="mb-3" :src="require ('../../assets/images/medical_logo_1x_dark.png')"  alt="">
    <p class="pb-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolemue launti totam aperiam, eaque ipsa quae abillo. Invente veriatis et quasi architecto beatae luptatem accusantium, remaperiamsiat. Voluptatem accusest etsium doloremque laudaien. Lorem ipsum sits dolores ets unser.</p>
    <span>Learn More About Us</span>
    <div class="social pt-3">
      <i class="facebook fab fa-facebook-square"></i>
      <i class="twitter fab fa-twitter-square"></i>
      <i class="youtube fab fa-youtube-square"></i>
      <i class="instagram fab fa-instagram-square"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterInfo',
}
</script>

<style scoped lang="scss">
  .avada-info{
    width: calc(100% / 3);
    img{
      width: 200px;
    }
    p{
      font-size: 13px;
      line-height: 25px;
      border-bottom: 1px solid #000;
      font-weight: 300;
    }
    span{
      display: block;
      font-weight: 300;
      text-transform: uppercase;
      font-size: 13px;
    }
    .social{
      font-size: 25px;
      .facebook,
      .twitter,
      .youtube,
      .instagram{
        margin-right: 10px;
      }
      .facebook{
        color: rgb(66, 88, 147); 
      }
      .twitter{
        color: rgb(108, 170, 232);			
      }
      .youtube{
        color: rgb(189, 52, 43); 			
      }
      .instagram{
        color: rgb(76, 113, 151);
      }
    }
  }
</style>
