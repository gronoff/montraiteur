<template>
  <div>
    <div id="filter">
      <p id="search_title">Affiner votre recherche:</p>
      <div id="price_range">
        <img src="../assets/img/price_range.png" alt="bouton de filtrage du prix">
      </div>
      <div id="date_event">
        <div>
          <img class="icon_in_filter" src="../assets/img/icon_calendar.png" alt="icone de calendrier">
        </div>
        <Input type="date" id="input1" label="date de l'événement" value="2019-11-22"/>
      </div>
      <div id="number">
        <div>
          <img class="icon_in_filter" src="../assets/img/icon_peoples.png" alt="icone du nombre de convives">
        </div>
        <Input type="number" id="input2" label="nombre de personnes"/>
      </div>
      <div id="select_boxes">
        <p>Catégorie</p>
        <select>
          <option>traditionnel</option>
          <option>asiatique</option>
          <option>italien</option>
          <option>bio</option>
          <option>vegan</option>
        </select>
        <p>Type d'événement</p>
        <select>
          <option>mariage</option>
          <option>cocktail</option>
          <option>bar mitzvah</option>
          <option>anniversaire</option>
        </select>
      </div>
    </div>
    <div>
      <p id="search_result">Résultats de votre recherche</p>
    </div>
  </div>
</template>

<script>
import Input from "./Input"
export default {
  name: 'Filtre',
  components:{
  Input
  },
}
</script>

<style scoped>

#search_title{
  font-size: 18px;
  position: absolute;
  top: 1px;
  left: 1px;
  margin-left: 1%;
  color: #7A7D7D;
}

#search_result{
  font-family: "Meie";
  margin-left: 1%;
  font-size: 36px;
  line-height: 46px;
  color: #D2E0BF;
}

#filter{
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background-color: #E5E5E5;
  height: 200px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  margin-bottom: 1%;
}

#filter>div{
  width: 25%;
}

img{
  max-width: 100%;
  max-height: 100%;
}

#price_range{
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 150px;
}

#date_event{
  display: flex;
  flex-direction: column;
  align-items: center;
}

#number{
  display: flex;
  flex-direction: column;
  align-items: center;
}

#select_boxes{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 5%;
  margin-right: -5%;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 24px;
  color: var(--grisFonce);
}

@media(max-width:720px){
  .icon_in_filter{
    display: none;
  }

  #filter{
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }

  #filter>div{
    width: 100%;
  }

  #select_boxes{
    align-items: center;
    margin-left: 0;
  }

  .inputForm{
    margin-left: 0;
  }
}

</style>