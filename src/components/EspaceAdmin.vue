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
          <br />
          <Button txt="voir"/>
        </li>
        <li> <p> formulaire d'ajout - traiteurs </p>
          <br />
          <Button txt="ajouter" v-on:click="$router.push({ name: 'NewTraiteur' })"/>
        </li>
        <li> <p> fiches traiteurs </p>
          <br />
          <Button txt="voir"/>
        </li>
        <li> <p> fiches consommateurs </p>
          <br />
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
    <div class="listingClients">
      <img src=../assets/img/listingclients.png>
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
  margin-bottom: 5px;
}

.flex-container {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
}

p {
    margin-left: 10px;
    margin-right: 10px;
}

ul {
  list-style: none;
  margin-left: 0;
  padding-left: 10;
  margin-right: 10px;
}
li {
  margin-bottom: 5px; /* à adapter */
}

nav {
  color: #729EA1;
  height: 41px;
  padding: 5px;
  margin: 5px;
}

button {
  margin-bottom: 7px;
}

.listingClients {
  margin-bottom: 50px;
}

.jumbotron {
  display: flex;
  justify-content: center;
}

</style>