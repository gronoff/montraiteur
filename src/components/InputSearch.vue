<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input
      :type="search"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      v-bind:style="styleObject"
    />
  </div>
</template>

<script>

export default {
  name: "InputSearch",

  props: {
    label: String,
    type: String,
    id: String,
    placeholder: String,
    customColor:{
      type: String,
      default: "black"
    },
    customBackgroundColor:{
      type: String,
      default: "white"
    },
    customBoxShadow:{
      type: Number,
      default: 0
    },
    customHeight:{
      type: Number,
      default: 40
    }

  },

  computed: {
    styleObject() {
      return{
        "background-color":this.customBackgroundColor,
        "color":this.customColor,
        "box-shadow":`${this.customBoxShadow}px`,
        "height": `${this.customHeight}px`,
        
      }
    }
  }
};
</script>

<style scoped>
</style>