<template>
  <div class="cards">
    <div class="card" v-for="(card, id) of cards" :key="id" :class="moduloClass(id)">
      <div class="imageTraiteur">
        <img :src="card.lien_image">
      </div>
      <div class="descriptionTraiteur">
        <div class="logo_titre">
          <img class="logo_mon_traiteur" src="../assets/img/logo_mon_traiteur.png" alt="logo_mon_traiteur">
          <h4>{{ card.titre }}</h4>
        </div>
        <p>{{ card.description }}</p>
        <div class="buttons">
          <HeartButton class="heartButton"/>
          <img class="price_rate" src="../assets/img/price_rate.svg"/>
          <img class="taste_rate" src="../assets/img/taste_rate.svg"/>
          <Button class="buttonDevis" txt="Demander un devis"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button"
import HeartButton from "./HeartButton"
export default {
  name: 'card',
  components:{
    Button,
    HeartButton
  },
  props: {
    id: Number,
    titre: String,
    lien_image: String,
    description: String,
  },
  data: function(){
    return{
    cards: 
        [
            {
                id: 1,
                titre: "Aux délices d’Ignacio",
                description: "La Catalogne dans vos assiettes. Un délice pour vos papilles. Un festival de saveurs. Vous serez transportés au delà de vos espérances dans une farandole de gouts. Plaisir ibérique assuré !",
                lien_image: "http://4.bp.blogspot.com/-nJP4ELRi6lo/U3uee1cTjQI/AAAAAAAACLo/CMYmGaUnzCM/s1600/PAELLA.jpg",
                note_prix: 2,
                note_qualite: 4
            },
            {
                id: 2,
                titre: "Parigo Bobo Traiteur",
                description: "C'est cher, c'est pas bon, il n'y a rien à manger, c'est bobo, c'est Parisien, donc ça ne peut que marcher... Venez lâcher votre flooz les pigeons !",
                lien_image: "http://www.ldc-halal.com/ressources/images-restaurants/restaurant-214-2.jpg?version=636245852231970000",
                note_prix: 0,
                note_qualite: 0
            },        {
                id: 3,
                titre: "Nagasaki maki",
                description: "Un cocktail détonnant, une explosion de saveurs, vos convives seront irradiés !",
                lien_image: "https://i.f1g.fr/media/figarofr/orig/2011/04/21/e515107c-6c25-11e0-abde-d3e0c2a59365.jpg",
                note_prix: 3,
                note_qualite: 3
            }
        ]
    }
  },
  methods:{
    moduloClass: function(id){
      if(id%2 == 0){
        return "cardA"
      }
      else{
        return "cardB"
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.logo_titre{
  display: flex;
  flex-direction: row;
}

.logo_mon_traiteur{
  display: block;
  height: 2em;
  width: auto;
}

.card{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 10px;
  align-items: center;
}

.cardA{
  background-color: #FFFBFE;
}

.cardB{
  background-color: #F1F1F1;
}

.cardA>div{
  border: 2px solid #F1F1F1;
}

.descriptionTraiteur{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 95%;
  min-height: 250px;
  background-color: #FFFBFE;
  border-radius: 10px;
  margin-right: 1%;
  flex-basis: auto;
  width: 75%;
  min-width: 250px;
}

.imageTraiteur{
  display: flex;
  min-height: 250px;
  background-color: #FFFBFE;
  border-radius: 10px;
  flex-basis: 250px;
  margin: 1%;
  align-items: center;
}

.imageTraiteur>img{
  max-width:100%;
  max-height:100%;
}

.cards div p, .logo_titre{
  margin-left: 2%;
}

.buttonDevis{
  display: flex;
}

.buttons{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.heartButton{
  position: flex;
}

.price_rate, .taste_rate{
  display: flex;
  height: 2em;
  width: auto;
}

</style>
