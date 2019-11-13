<template>
  <form action="" method="post">
    <inputText label="Prénom : " id="firstName" />
    
    <!-- <div class="form-example">
      <input type="submit" value="Subscribe!">
    </div> -->
  </form>
</template>

<script>
import InputText from './InputText'

export default {
  name: 'InscriptionForm',
  components: {
    InputText
  }
}
</script>

<style scoped>
  form {
    background: #D2E0BF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
  }
</style>