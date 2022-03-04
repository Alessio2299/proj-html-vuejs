<template>
  <footer>
    <div class="container-footer d-flex">
      <FooterInfo />
      <FooterContact />
      <FooterDepartments />
    </div>
    <div class="footer_bottom">
      <div class="other-info">
        <span>© Copyrigth 2012 - 2020 |</span>
        <span>Avada Theme by Theme Fusion |</span>
        <span>All Rights Reserved |</span>
        <span>Powered by <a class="text-decoration-none text-black" href="#">WordPress</a></span>
      </div>
    </div>
  </footer>
</template>

<script>
  import FooterInfo from "./footer/FooterInfo.vue"
  import FooterContact from "./footer/FooterContact.vue"
  import FooterDepartments from "./footer/FooterDepartments.vue"


  export default {
    name: 'FooterPage',
    props: {
    },
    components: {
      FooterInfo,
      FooterContact,
      FooterDepartments
    }
  }
</script>

<style scoped lang="scss">
  .container-footer{
    width: 90%;
    margin: 50px auto;
  }
  .footer_bottom{
    background-color: rgb(240, 240, 240);		
    .other-info{
      font-size: 12px;
      line-height: 50px;
      width: 90%;
      margin: auto;	
    }
  }
</style>
