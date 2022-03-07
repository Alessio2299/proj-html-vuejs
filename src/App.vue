<template>
  <div id="app">
    <HeaderPage />
    <MainPage />
    <FooterPage />
    <div class="target">
      <a href="#header-thumb"><i class="fas fa-chevron-up"></i></a>
    </div>
  </div>
</template>

<script>
  import HeaderPage from './components/HeaderPage.vue'
  import MainPage from './components/MainPage.vue'
  import FooterPage from './components/FooterPage.vue'

  export default {
    name: 'App',
    components: {
      HeaderPage,
      MainPage,
      FooterPage
    }
  }
</script>

<style lang="scss">
  .target{
    position: fixed;
    background-color: rgba(0, 0, 0, 0.623);
    color: #fff;
    font-size: 15px;
    padding: 8px 15px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    right: 30px;
    bottom: 0;
    &:hover{
      background-color: rgba(121, 121, 121, 0.705);
      cursor: pointer;
    }
    a{
      color: #fff;
      &:hover{
        color: #fff;
      }
    }
  }
  .my_button{
      transition: all 1s;
    &:hover{
      cursor: pointer;
    }
  }
</style>
