<template>
  <button :type="type"><span>{{ txt }}</span></button>
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
    padding: 8px 15px 6px 15px;
    background: var(--vertClair);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    border:0 none;
    cursor:pointer;
    font-family: karma;
    font-size: 14px;
    color: var(--grisFonce);
    transition: background 500ms;
  }
  button:hover {
    background: var(--grisClair);
  }
  button:active {
    box-shadow: none;
  }
</style>