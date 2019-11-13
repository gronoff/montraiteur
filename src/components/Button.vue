<template>
  <button :type="type">{{ txt }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    txt: String,
    type: String
  }
}
</script>

<style scoped>
  button {
    padding:5px 15px;
    background: #D2E0BF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    border:0 none;
    cursor:pointer;
    font-size: 14px;
    color: #7A7D7D;
    transition: background 500ms;
  }
  button:hover {
    background: grey;
  }
  button:active {
    box-shadow: none;
  }
</style>