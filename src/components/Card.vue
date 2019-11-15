<template>
  <div class="cards">
    <div v-for="(card, id) of cards" :key="id">
      <img :src="card.lien_image">
      <div>
        <h4>{{ card.titre }}</h4>
        <p>{{ card.description }}</p> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
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
                titre: "Parigo Bobo Burgers Traiteur",
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.cards div{
  height: 180px;
  background-color: #F1F1F1;
  border-radius: 10px;
  padding: 2%;
  vertical-align: center;
}

.cards div div{
  width: 75%;
  height: 100%;
  background-color: #FFFBFE;
  float: right;
  border-radius: 10px;
}

.cards div p, h4{
  margin-left: 2%;
}

.cards div img{
  float: left;
  width: 20%;
  border-radius: 10px;
}

</style>
