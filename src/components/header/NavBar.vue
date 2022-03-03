<template>
 <nav class="position-absolute d-flex align-items-center justify-content-between">
   <img :src="require ('../../assets/images/medical_logo_1x_light.png')" alt="Medical Logo">
   <ul class="d-flex list-unstyled text-uppercase">
    <li v-for="(info,index) in dataNav" :key="index">
      <a 
        :class="`p-3 text-decoration-none ${info.active ? 'text-primary' : 'text-white'}`" 
        :href="info.url">{{info.name}}
      </a>
    </li>
    <li><a class="my_button bg-info rounded text-decoration-none text-white" href="#">Make Appointment</a></li>
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
    top: 0;
    left: 2.5%;
    height: 80px;
    width: 95%;
    .my_button{
      padding: 12px 30px;
    }
  }
</style>
