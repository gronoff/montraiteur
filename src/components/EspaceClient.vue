<template>
  <div>
    <Header/>
    <Jumbotron />
    <nav>Mon compte</nav>

    <div class="flex-container">
    <aside class="barre_laterale">
      <p>Mon historique de commandes</p> <br/>
      <ul>
        <li v-for="(command,id) in commands" :key="id">
          Référence: commande n°{{command.id}}
          <br />
          en date du {{command.date}}
          <br />
          Montant: {{command.prix}} €
          <br />
          <Button txt="En savoir plus" type="submit" />
        </li>
      </ul>
    </aside>

    <div class="grille">
    <section> 
        <CarouselForNinon />

    </section>
    <article>
        <div class="monProfil">
        <p> Mon Profil </p>
        <p> Bonjour. </p>
        <p> Jean Dupont </p>
        <p> Rue de Brest 29200 Brest</p>
        </div>
    </article>
    </div>
    </div>
    
    <Footer/>
  </div>
</template>

<script>
import Button from './Button'
import Header from './Header'
import Footer from './Footer'
import CarouselForNinon from './CarouselForNinon'
import Jumbotron from './Jumbotron'

export default {
  name: "EspaceClient",
  components: {Header, Button, Footer, CarouselForNinon,Jumbotron},
  data: function() {
    return {
      commands: [
        {
          id: 1,
          date: "20-11-2019",
          prix: "25"
        },
        {
          id: 2,
          date: "30-11-2019",
          prix: "50"
        },
        {
          id: 3,
          date: "02-12-2019",
          prix: "100"
        },
        {
          id: 4,
          date: "04-05-2015",
          prix: "250"
        }
      ]
    };
  }
};
</script>

<style scoped>
.barre_laterale {
  background-color: rgba(210, 224, 191, 0.5);
  color: rgba(114, 158, 161, 0.7);
  
  margin-right: 20px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 20px;
}

.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}



ul {
  list-style: none;
  margin-left: 0;
  padding-left: 10;
}
li {
  margin-bottom: 25px; /* à adapter */
}

nav {
    color: #729EA1;
    height: 41px;
}

.monProfil{
  background-color: #F1F1F1;
  color: #729EA1;
  margin-left : 0px;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}

</style>