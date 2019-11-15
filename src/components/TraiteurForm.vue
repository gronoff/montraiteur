<template>
  <div>
    <Header />
    <h2>Créer une fiche traiteur</h2>
    <form action="" method="post">
      <fieldset class="backgroundForm">
        <legend>Coordonnées</legend>
        <Input type="text" label="Nom de l'entreprise" id="name" paddingTop="30px" required="true" />
        <Input type="text" label="SIRET" id="siret" required="true" />
        <Input type="text" label="Adresse postale" id="adress" placeholder="rue, code postal, ville" required="true" />
        <Input type="tel" label="Téléphone" id="phone" minlength="10" required="true" />
        <Input type="email" label="Courriel" id="email" required="true" />
        <InputTextArea label="Description" id="description" />
        <Input type="url" label="Photo" id="photo" required="true" />
      </fieldset>
      <fieldset class="backgroundForm">
        <legend>Produits</legend>
        <div class="category">
          <span>Sélectionnez une ou plusieurs catégories :</span><br>

          <InputCheckbox name="category" id="traditionnel" label="Traditionnel" display="block" paddingTop="14px" />
          <InputCheckbox name="category" id="asiatique" label="Asiatique" display="block" />
          <InputCheckbox name="category" id="italien" label="Italien" display="block" />
          <InputCheckbox name="category" id="espagnol" label="Espagnol" display="block" />
          <InputCheckbox name="category" id="bio" label="Bio" display="block" />
          <InputCheckbox name="category" id="vegan" label="Vegan" display="block" />
          
        </div>
        <div class="event">
          <span>Sélectionnez un ou plusieurs événements :</span><br>

          <InputCheckbox name="event" id="mariage" label="Mariage" />
          <Input type="number" label="Prix par personne" id="mariagePrice" display="inline-block" />
          <br>

          <InputCheckbox name="event" id="cocktail" label="Cocktail" />
          <Input type="number" label="Prix par personne" id="cocktailPrice" display="inline-block" />
          <br>

          <InputCheckbox name="event" id="barmitzvah" label="Bar Mitzvah" />
          <Input type="number" label="Prix par personne" id="barmitzvahPrice" display="inline-block" />
          <br>

          <InputCheckbox name="event" id="anniversaire" label="Anniversaire" />
          <Input type="number" label="Prix par personne" id="anniversairePrice" display="inline-block" />
          <br>

        </div>
        <Input type="number" label="Nombre de couverts minimum" id="minCouverts" value="1" display="inline-block" />
        <Input type="number" label="Nombre de couverts maximum" id="minCouverts" value="1" display="inline-block" />
      </fieldset>
      <ul>
        <li>
          <Button txt="Envoyer" type="submit" />
        </li>
        <li style="margin-left: 30px;">
          <Button txt="Annuler" type="reset" />
        </li>
      </ul>
    </form>
    <Footer />
  </div>
</template>

<script>
import Header from './Header'
import Input from './Input'
import InputTextArea from './InputTextArea'
import InputCheckbox from './InputCheckbox'
import Button from './Button'
import Footer from './Footer'

export default {
  name: 'TraiteurForm',
  components: {
    Header,
    Input,
    InputTextArea,
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
  }
  .backgroundForm {
    background: var(--vertClair);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    margin-bottom: 30px;
    border: 0;
  }
  form:first-child {
    margin-top: 30px;
  }
  div.category, div.event {
    margin-top: 14px;
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