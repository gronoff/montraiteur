<template>
  <div>
    <h2>Me créer un compte utilisateur</h2>
    <form action="" method="post">
      <div class="backgroundForm">
        <InputText label="Prénom" id="firstName" paddingTop="30px" />
        <InputText label="Nom" id="lastName" />
        <InputText label="Adresse postale" id="adress" placeholder="rue, code postal, ville" />
        <InputText label="Téléphone" id="phone" />
        <InputEmail label="Courriel" id="email" />
        <InputPassword label="Mot de passe" id="password" placeholder="8 caractères minimum" />
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
import InputPassword from './InputPassword'
import Button from './Button'

export default {
  name: 'InscriptionForm',
  components: {
    InputText,
    InputEmail,
    InputPassword,
    Button
  }
}
</script>

<style scoped>
  h2 {
    margin-left: 14px;
    font-size: 24px;
    line-height: 35px;
    color: #7A7D7D;
  }
  .backgroundForm {
    background: #D2E0BF;
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