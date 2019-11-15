<template>
  <div>
    <h1>Aude</h1>
    <TraiteurForm />
    <hr>
    <InscriptionForm />
  </div>
</template>

<script>
import InscriptionForm from './InscriptionForm'
import TraiteurForm from './TraiteurForm'

export default {
  name: 'TestAude',
  components: {
    InscriptionForm,
    TraiteurForm
  }
}
</script>