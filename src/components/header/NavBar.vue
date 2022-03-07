<template>
 <nav class="d-flex align-items-center justify-content-between">
   <img :src="require ('../../assets/images/medical_logo_1x_light.png')" alt="Medical Logo">
   <ul class="d-flex list-unstyled text-uppercase m-0">
    <li v-for="(info,index) in dataNav" :key="index">
      <a 
        :class="`p-3 text-decoration-none ${info.active ? 'text-info' : 'text-white'}`" 
        :href="info.url">{{info.name}}
      </a>
    </li>
    <li><a class="my_button bg-info rounded text-decoration-none text-white" href="#appointment">Make Appointment</a></li>
   </ul>
 </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data(){
      return{
        dataNav:[
          {
            name: "Home",
            active: true,
            url: "#",
          },
          {
            name: "About",
            active: false,
            url: "#",
          },
          {
            name: "Departments",
            active: false,
            url: "#",
          },
          {
            name: "Articles",
            active: false,
            url: "#",
          }
        ]
      }
    }
}
</script>

<style scoped lang="scss">
  nav{
    margin: auto;
    height: 80px;
    width: 95%;
    .my_button{
      padding: 12px 30px;
      &:hover{
        background-color: rgb(77, 138, 150) !important;
      }
    }
  }
</style>
