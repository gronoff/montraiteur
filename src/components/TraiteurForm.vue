<template>
  <div>
    <div class="form">
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
          <Input type="url" label="Photo" id="photo" required="true" placeholder="http://" />
        </fieldset>
        <fieldset class="backgroundForm">
          <legend>Produits</legend>
          <div class="category">
            <span>Sélectionnez une ou plusieurs catégories</span><br>

            <InputCheckbox name="category" id="traditionnel" label="Traditionnel" display="block" paddingTop="14px" />
            <InputCheckbox name="category" id="asiatique" label="Asiatique" display="block" />
            <InputCheckbox name="category" id="italien" label="Italien" display="block" />
            <InputCheckbox name="category" id="espagnol" label="Espagnol" display="block" />
            <InputCheckbox name="category" id="bio" label="Bio" display="block" />
            <InputCheckbox name="category" id="vegan" label="Vegan" display="block" />
            
          </div>
          <div class="event">
            <span>Sélectionnez un ou plusieurs événements</span><br>

            <InputCheckbox name="event" id="mariage" label="Mariage" width="120px" />
            <Input type="number" label="Prix par personne" id="mariagePrice" display="inline-block" marginLeft="60px" />
            <br>

            <InputCheckbox name="event" id="cocktail" label="Cocktail" width="120px" />
            <Input type="number" label="Prix par personne" id="cocktailPrice" display="inline-block" marginLeft="60px" />
            <br>

            <InputCheckbox name="event" id="barmitzvah" label="Bar Mitzvah" width="120px" />
            <Input type="number" label="Prix par personne" id="barmitzvahPrice" display="inline-block" marginLeft="60px" />
            <br>

            <InputCheckbox name="event" id="anniversaire" label="Anniversaire" width="120px" />
            <Input type="number" label="Prix par personne" id="anniversairePrice" display="inline-block" marginLeft="60px" />
            <br>

          </div>
          <Input type="number" label="Nombre de couverts minimum" id="minCouverts" value="1" display="inline-block" />
          <Input type="number" label="Nombre de couverts maximum" id="minCouverts" value="1" display="inline-block" />

          <div class="calendar">
            <label>Disponibilités</label>
            <img src="../assets/img/calendar1.png">
            <img src="../assets/img/calendar2.png">
          </div>
        </fieldset>
        <ul>
          <li>
            <Button txt="Annuler" type="reset" />
          </li>
          <li style="margin-left: 30px;">
            <Button txt="Envoyer" type="submit" />
          </li>
        </ul>
      </form>
    </div>
  </div>
</template>

<script>
import Input from './Input'
import InputTextArea from './InputTextArea'
import InputCheckbox from './InputCheckbox'
import Button from './Button'

export default {
  name: 'TraiteurForm',
  components: {
    Input,
    InputTextArea,
    InputCheckbox,
    Button
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
  div.category, div.event {
    margin-top: 14px;
  }
  div.calendar {
    margin-left: 30px;
    margin-bottom: 14px;
  }
  div.calendar label {
    display: block;
    font-size: 14px;
    line-height: 24px;
    color: var(--grisFonce);
  }
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin-bottom: 30px;
  }
</style>