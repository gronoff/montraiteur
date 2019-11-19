<template>
  <div class="inputForm" :style="`display:${display}; margin-left:${marginLeft}`" >
    <label :for="id" :style="`padding-top:${paddingTop};`">{{ label }}</label>
    <input :type="type" :name="id" :id="id" :placeholder="placeholder" :value="value" :minlength="minlength" :required="required">
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    type: String,
    marginLeft: String,
    label: String,
    id: String,
    placeholder: String,
    paddingTop: String,
    display: String,
    value: Number,
    minlength: Number,
    required: Boolean
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