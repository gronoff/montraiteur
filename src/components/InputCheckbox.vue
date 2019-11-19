<template>
  <div class="inputForm" :style="`display:${display}; padding-top:${paddingTop}; width:${width};`" >
    <input type="checkbox" :name="name" :id="id" />
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'InputCheckbox',
  props: {
    label: String,
    id: String,
    name: String,
    display: String,
    width: String,
    paddingTop: String
  }
}
</script>

<style scoped>
  .inputForm {
    display: inline-block;
    margin-left: 60px;
  }
  label {
    font-size: 14px;
    line-height: 24px;
    color: var(--grisFonce);
  }
  input {
    background: var(--grisClair);
    border-radius: 5px;
    border: none;
    margin-bottom: 8px;
  }
  ::placeholder {
    color: #D2E0BF;
  }
</style>