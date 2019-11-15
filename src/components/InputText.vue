<template>
  <div class="inputForm">
    <label :for="id" :style="`padding-top:${paddingTop};`">{{ label }}</label>
    <input type="text" :name="id" :style="`box-shadow:${boxShadow};`" :id="id" :placeholder="placeholder" required>
  </div>
</template>

<script>
export default {
  name: 'InputText',
  props: {
    label: String,
    id: String,
    placeholder: String,
    paddingTop: String,
    boxShadow: String
  }
}
</script>

<style scoped>
  .inputForm {
    margin-left: 30px;
  }
  label {
    display: block;
    font-size: 14px;
    line-height: 24px;
    color: var(--grisFonce);
  }
  input {
    width: 90%;
    height: 30px;
    background: var(--grisClair);
    border-radius: 5px;
    border: none;
    margin-bottom: 30px;
  }
  ::placeholder {
    color: #D2E0BF;
  }
</style>