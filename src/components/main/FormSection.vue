<template>
  <div>
    <div class="row">
      <div class="col">
        <input type="text" class="form-control bg-transparent" placeholder="Name*" aria-label="First name">
      </div>
      <div class="col">
        <input type="text" class="form-control bg-transparent" placeholder="Email*" aria-label="Last name">
      </div>
    </div>
    <div class="row mt-4">
      <div class="col">
        <input type="number" class="form-control bg-transparent" placeholder="Phone Number" aria-label="First name">
      </div>
      <div class="col">
        <input type="date" class="date form-control bg-transparent" aria-label="Last name">
      </div>
    </div>
    <div class="row mt-4">
      <div class="mb-3">
        <textarea class="form-control bg-transparent" id="exampleFormControlTextarea1" placeholder="How can we help?*" rows="4"></textarea>
      </div>
    </div>
    <div class="row my-4">
      <div class="my_button">Make an appointment</div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'FormSection',
    data(){
      return{
      }
    }
  }
</script>

<style scoped lang="scss">
  input,
  textarea{
      color: rgb(178,	176, 176);
    &::placeholder{
    color: rgb(178,	176, 176);
    }
  }
  .my_button{
    width: 96%;
    margin: auto;
    line-height: 40px;
    text-transform: uppercase;
    background-color: rgb(94, 173, 188);
    &:hover{
      cursor: pointer ;
    }
  }
</style>
