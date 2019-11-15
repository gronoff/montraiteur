<template>
  <div class="inputForm">
    <label :for="id">{{ label }}</label>
    <textarea :name="id" :id="id" rows="5" required />
  </div>
</template>

<script>
export default {
  name: 'InputTextArea',
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
    color: var(--grisFonce);
  }
  textarea {
    width: 90%;
    background: var(--grisClair);
    border-radius: 5px;
    border: none;
    margin-bottom: 30px;
  }
  ::placeholder {
    color: #D2E0BF;
  }
</style>