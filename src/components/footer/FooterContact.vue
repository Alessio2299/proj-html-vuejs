<template>
  <div class="contact">
    <span class="title">contact information</span>
    <div class="small-line my-3"></div>
    <ul class="p-0">
       <ListFooter v-for="(contact,index) in contacts" :key="index"
        :icon="contact.icon"
        :text="contact.text"
      />
    </ul>
  </div>
</template>

<script>
  import ListFooter from "./ListFooter.vue"
  export default {
    name: 'FooterContact',
    data(){
      return{
        contacts:[
          {
            icon: "fa-map-marker-alt",
            text: "121 King Street, London United Kingdom"
          },
          {
            icon: "fa-phone-alt",
            text: "1.800.458.556"
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

  .contact{
    width: calc(100% / 3);
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
  }
</style>
