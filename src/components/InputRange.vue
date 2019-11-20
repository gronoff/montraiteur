<template>
  <div class="wrapper">
    <input type="range" min="0" max="100" step="1" v-model="value" />
    <br/>
    <input type="number" v-model="value" />

    
  </div>
</template>
<script>
export default {
  name: "InputRange",

  data: function() {
      return {

      value: 50
      }
  }

};
</script>

<style scoped>
.wrapper{
    margin-top: 10px;
    height: 100px;
}
</style>