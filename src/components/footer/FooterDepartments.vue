
<template>
  <div class="departments">
    <span>departments</span>
  </div>
</template>

<script>
export default {
  name: 'FooterDepartments',
  props: {
  }
}
</script>

<style scoped lang="scss">
  .departments{
    width: calc(100% / 3);
    background-color: rgb(255, 0, 0);
    height: 200px;
    span{
      display: block;
      font-weight: 300;
      font-size: 13px;
    }
  }
</style>
