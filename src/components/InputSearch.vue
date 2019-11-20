<template>
  <div
    :style="{'color': superStyle.color, 
  'backgroundColor':superStyle.backgroundColor,
  'fontSize': superStyle.fontSize
  }"
  >
    <form>
      <label :for="id">{{ label }}</label><br/>

      <input :type="type" :name="name" :placeholder="placeholder" :results=$results />
      
    </form>
  </div>
</template>

<script>
export default {
  name: "InputSearch",

  data: function() {
    return {
      superStyle: {
        color: "#729EA1",
        backgroundColor: "#FFFBFE",
        fontSize: "18px"
      }
    };
  },

  props: {
    label: String,
    type: String,
    id: String,
    placeholder: String,
    name: String,
    results: Number
  }
};
</script>

<style scoped >
</style>