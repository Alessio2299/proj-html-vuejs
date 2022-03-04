<template>
  <li class="list-unstyled">
    <a href="#">
      <i :class="`icon me-2 ms-1 fas ${icon}`"></i>
      {{text}}
    </a>
  </li>
</template>

<script>
export default {
  name: 'FooterContact',
  props:{
    icon: String,
    text: String
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/style/smallLine.scss";
  li{
    line-height: 35px;
    font-weight: 300;
    .title{
    display: block;
    font-weight: 300;
    font-size: 16px;
    text-transform: uppercase;
    }
    .icon{
      color: #39afbb;
      width: 20px;
    }
    a{
      text-decoration: none;
      color: #000;
    }
  }
  

</style>
