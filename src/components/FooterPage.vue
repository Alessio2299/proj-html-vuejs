<template>
  <footer>
    <div class="container-footer d-flex">
      <FooterInfo />
      <FooterContact />
      <FooterDepartments />
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
</style>
