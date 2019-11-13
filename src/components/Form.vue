<template>
  <form action="" method="post" class="submitForm">
  <inputText />
  
  <div class="form-example">
    <input type="submit" value="Subscribe!">
  </div>
</form>
</template>

<script>
import InputText from './InputText'

export default {
  name: 'Form',
  components: {
    InputText
  }
}
</script>