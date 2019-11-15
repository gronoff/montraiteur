<template>
  <div>
    <h2>Créer une fiche traiteur</h2>
    <form action="" method="post">
      <div class="backgroundForm">
        <InputText label="Nom de l'entreprise" id="name" paddingTop="30px" />
        <InputText label="SIRET" id="siret" />
        <InputText label="Adresse postale" id="adress" placeholder="rue, code postal, ville" />
        <InputText label="Téléphone" id="phone" />
        <InputEmail label="Courriel" id="email" />
        <InputTextArea label="Description" id="description" />

      </div>
      <ul>
        <li>
          <Button txt="Envoyer" type="submit" />
        </li>
        <li style="margin-left: 30px;">
          <Button txt="Annuler" type="reset" />
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
import InputText from './InputText'
import InputEmail from './InputEmail'
import InputTextArea from './InputTextArea'
import Button from './Button'

export default {
  name: 'TraiteurForm',
  components: {
    InputText,
    InputEmail,
    InputTextArea,
    Button
  }
}
</script>

<style scoped>
  h2 {
    margin-left: 14px;
    font-size: 24px;
    color: var(--grisFonce);
  }
  .backgroundForm {
    background: var(--vertClair);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    margin-bottom: 30px;
  }
  form:first-child {
    margin-top: 30px;
  }
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
  }
  .backgroundForm, ul {
    width: 70%;
    min-width: 300px;
  }
</style>