
<template>
  <div class="contact">
    <span class="title">contact information</span>
    <div class="line my-3"></div>
    <div class="position">
      <i class="icon me-3 ms-1 fas fa-map-marker-alt"></i>
      <span>121 King Street, London United Kingdom</span>
    </div>
    <div class="telephone">
      <i class="icon me-3 ms-1 fas fa-phone-alt"></i>
      <span>1.800.458.556</span>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'FooterContact',
  props: {
  }
}
</script>

<style scoped lang="scss">
  .contact{
    width: calc(100% / 3);
     .title{
      display: block;
      font-weight: 300;
      font-size: 16px;
      text-transform: uppercase;
    }
    .line{
      width: 40px;
      height: 2px;
      background-color: #39afbb;
    }
    .icon{
      color: #39afbb;
      width: 20px;
    }
  }
</style>
