<template>
  <div>
    <label :for="id"> {{ label }} </label>
    <input
      :type="search"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      v-bind:customStyle="styleObject.color"
    />
  </div>
</template>

<script>
export default {
  name: "InputSearch",

  /* data: {
      customStyle: {
          color: "red"
      }
  }, */

  props: {
    label: String,
    type: String,
    id: String,
    placeholder: String,
    customStyle: Object
  },

  /* computed: {
      styleObject :{
          color: this.color
      }
  } */
};
</script>

<style scoped>
</style>