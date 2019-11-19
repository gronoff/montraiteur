<template>
  <div>
    <h1>Aude</h1>
    <RecapDevis />
    <TraiteurForm />
  </div>
</template>

<script>
import RecapDevis from './RecapDevis'
import TraiteurForm from './TraiteurForm'

export default {
  name: 'TestAude',
  components: {
    RecapDevis,
    TraiteurForm
  }
}
</script>