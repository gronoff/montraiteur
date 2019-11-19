<template>
  <div>
    <Header />
    <div class="form">
      <h2>Me créer un compte utilisateur</h2>
      <form action="" method="">
        <div class="backgroundForm">
          <Input type="text" label="Prénom" id="firstName" paddingTop="30px" />
          <Input type="text" label="Nom" id="lastName" />
          <Input type="text" label="Adresse postale" id="adress" placeholder="rue, code postal, ville" />
          <Input type="tel" label="Téléphone" id="phone" minlength="10" />
          <Input type="email" label="Courriel *" id="email" required="true" />
          <Input type="password" label="Mot de passe *" id="password" placeholder="8 caractères minimum" minlength="8" required="true" />
        </div>
        <ul>
          <li>
            <Button txt="Annuler" type="reset" />
          </li>
          <li style="margin-left: 30px;">
            <router-link to="/espaceclient">
            <Button txt="Envoyer"
            
            />
            </router-link>
          </li>
        </ul>
      </form>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './Header'
import Input from './Input'
import Button from './Button'
import Footer from './Footer'

export default {
  name: 'InscriptionForm',
  components: {
    Header,
    Input,
    Button,
    Footer
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
  .form, ul {
    margin: 0 auto;
    width: 70%;
    min-width: 300px;
  }
  form:first-child {
    margin-top: 30px;
  }
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin-bottom: 30px;
  }
</style>