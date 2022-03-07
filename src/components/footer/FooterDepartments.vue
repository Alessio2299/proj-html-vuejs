
<template>
  <div class="department">
    <span class="title">Medical Deparment</span>
    <div class="small-line my-3"></div>
    <ul class="p-0">
       <ListFooter v-for="(department,index) in departments" :key="index"
        :icon="department.icon"
        :text="department.text"
      />
    </ul>
    <div class="my_button">
      View Our departments
    </div>
  </div>
</template>

<script>
  import ListFooter from "./ListFooter.vue"

  export default {
    name: 'FooterDepartments',
    data(){
      return{
        departments:[
          {
            icon: "fa-chevron-circle-right",
            text: "Cardiology"
          },
          {
            icon: "fa-chevron-circle-right  ",
            text: "Pediactrics"
          },
          {
            icon: "fa-chevron-circle-right",
            text: "Diabetes Care"
          },
          {
            icon: "fa-chevron-circle-right  ",
            text: "Pre-natel Care"
          },
          {
            icon: "fa-chevron-circle-right",
            text: "Ultrasound Echocardiogram"
          }
        ]

      }
    },
    components:{
      ListFooter
    }
}
</script>

<style scoped lang="scss">
  @import "../../assets/style/smallLine.scss";

  .department{
    width: calc(100% / 3);
    span{
      display: block;
      font-weight: 300;
      font-size: 13px;
    }
    .my_button{
      border: 2px solid #000;
      width: 80%;
      line-height: 40px;
      text-transform: uppercase;
      text-align: center;
      &:hover{
        cursor: pointer;
        background-color: #000;
        color: #fff;
      }
    }
  }
</style>
