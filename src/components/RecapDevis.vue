<template>
  <div>
    <Header />
    <div class="form">
      <h2>Récapitulatif de votre devis</h2>
      <form>
        <div class="backgroundForm">
          <Input type="text" label="Nom de l'entreprise" id="name" paddingTop="30px" required="true" value="Aux délices d’Ignacio" />

          <div class="category">
            <span>Traiteur</span>
            <InputCheckbox name="category" id="italien" label="Italien" checked="true" disabled="true" />
          </div>

          <div class="event">
            <span>Vous avez sélectionné l'événement</span>
            <InputCheckbox name="event" id="barmitzvah" label="Bar Mitzvah" width="120px" checked="true" disabled="true" />
            <Input type="number" label="Prix par personne" id="barmitzvahPrice" display="inline-block" marginLeft="60px" value="36" disabled="true"/>
            <br>
          </div>

          <Input type="number" label="Nombre de couverts" id="couverts" value="45" />

          <div class="date">
            <label>Date de votre événement</label>
            <input type="date" id="date" value="2019-11-28" />
          </div>
        </div>
        <ul>
          <li>
            <Button txt="Annuler" />
          </li>
          <li style="margin-left: 30px;">
            <Button txt="Envoyer" />
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
import InputCheckbox from './InputCheckbox'
import Button from './Button'
import Footer from './Footer'

export default {
  name: 'TraiteurForm',
  components: {
    Header,
    Input,
    InputCheckbox,
    Button,
    Footer
  }
}
</script>

<style scoped>
  h2 {
    margin-left: 14px;
    font-size: 24px;
  }
  h2, legend, span {
    color: var(--grisFonce);
  }
  span {
    font-size: 14px;
    line-height: 24px;
    margin-left: 30px;
  }
  label {
    display: block;
    font-size: 14px;
    line-height: 24px;
    color: var(--grisFonce);
  }
  .backgroundForm {
    background: var(--vertClair);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    margin-bottom: 30px;
    border: 0;
  }
  .form, ul {
    margin: 0 auto;
    width: 70%;
    min-width: 300px;
  }
  form:first-child {
    margin-top: 30px;
  }
  div.event {
    margin-top: 14px;
  }
  div.date {
    margin-left: 30px;
  }
  #date {
    width: 90%;
    height: 30px;
    background: var(--grisClair);
    border-radius: 5px;
    border: none;
    margin-bottom: 30px;
  }
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin-bottom: 30px;
  }
</style>