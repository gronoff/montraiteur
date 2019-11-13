<template>
  <div class="inputForm">
    <label :for="id">{{ label }}</label>
    <input type="email" :name="id" :id="id" required>
  </div>
</template>

<script>
export default {
  name: 'InputEmail',
  props: {
    label: String,
    id: String
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
    color: #7A7D7D;
  }
  input {
    width: 90%;
    height: 30px;
    background: #FFFBFE;
    border-radius: 5px;
    border: none;
    margin-bottom: 30px;
  }
</style>