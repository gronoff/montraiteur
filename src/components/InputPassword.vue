<template>
  <div class="inputForm">
    <label :for="id">{{ label }}</label>
    <input type="password" :name="id" :id="id" minlength="8" :placeholder="placeholder" required>
  </div>
</template>

<script>
export default {
  name: 'InputPassword',
  props: {
    label: String,
    id: String,
    placeholder: String
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
  ::placeholder {
    color: #D2E0BF;
  }
</style>