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
        <li v-for="(command,name) in commands" :key="name">
          {{command.name}}
          <br />
          <Button txt="voir" type="submit" />
          <Button txt="modifier" type="submit" />
        </li>
      </ul>
    </aside>
    <section> 
        <CarouselForNinon />
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
  components: {Header, Button, Footer, CarouselForNinon, Jumbotron},
  data: function() {
    return {
      commands: [
        {
          name: "voir mes demande d'ajouts - traiteurs",
        },
        {
          name: "formulaire d'ajout - traiteurs",
        },
        {
          name: "fiches traiteurs",
        },
        {
          name: "fiches clients",
        }
      ]
    };
  }
};
</script>

<style scoped>
.barre_laterale {
  background-color: rgba(247, 245, 247, 100%);
  color: rgba(114, 158, 161, 0.7);
  margin-right: 150px;
  margin-bottom: 30px;
}

.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 100px;
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
  margin-bottom: 25px; /* à adapter */
  padding: 10px;
  margin: 10px;
}

nav {
  color: #729EA1;
  height: 41px;
  padding: 5px;
  margin: 5px;
}

button {
  padding: 7px;
  margin: 7px;
}

.listingClients {
  margin-left: 250px;
  margin-bottom: 50px;
}

.jumbotron {
  display: flex;
  justify-content: center;
}

</style>