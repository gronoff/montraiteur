<template>
  <div>
    <Header/>
    <div class="jumbotron">
      <Jumbotron/>
    </div>
    <nav>Administrateur</nav>

    <div class="flex-container">
    <aside class="barre_laterale">
      <p>Menu</p> <br/>
      <ul>
        <li> <p> Demande d'ajouts - traiteurs </p>
          <Button txt="voir"/>
        </li>
        <li> <p> formulaire d'ajout - traiteurs </p>
          <button v-on:click="$router.push({ name: 'NewTraiteur' })">ajouter</button>
        </li>
        <li> <p> fiches traiteurs </p>
          <Button txt="voir"/>
        </li>
        <li> <p> fiches consommateurs </p>
          <Button txt="voir"/>
        </li>
      </ul>
    </aside>
    <section v-if="$route.name=='EspaceAdmin'"> 
        <CarouselForNinon />
    </section>
    <section v-else-if="$route.name=='NewTraiteur'">
        <router-view />
    </section>
    </div>
    <div class="listingClients">
      <img src=../assets/img/listingclients.png>
    </div>
    
    <Footer/>
  </div>
</template>

<script>
import Button from './Button'
import Header from './Header'
import Footer from './Footer'
import CarouselForNinon from './CarouselForNinon'
import Jumbotron from './Jumbotron.vue'

export default {
  name: "EspaceAdmin",
  components: {Header, Button, Footer, CarouselForNinon, Jumbotron}
};
</script>

<style scoped>
.barre_laterale {
  background-color: rgba(247, 245, 247, 100%);
  color: rgba(114, 158, 161, 0.7);
  margin-bottom: 15px;
  padding-right: 25px;
}

.flex-container {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
}

ul {
  list-style: none;
  margin-left: 0;
  padding-left: 5;
  margin-right: 5px;
}
li {
  margin-bottom: 25px; /* à adapter */
}

nav {
  color: #729EA1;
  height: 41px;
  padding: 5px;
  margin: 5px;
}
button {
    padding: 8px 15px 6px 15px;
    background: var(--vertClair);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    border:0 none;
    cursor:pointer;
    font-family: karma;
    font-size: 14px;
    color: var(--grisFonce);
    transition: background 500ms;
    margin-bottom: 7px;
  }
  button:hover {
    background: var(--grisClair);
  }
  button:active {
    box-shadow: none;
  }

.listingClients {
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
}

.jumbotron {
  display: flex;
  justify-content: center;
}

</style>