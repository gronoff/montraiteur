<template>
  <div>
    
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
    <section> Carroussel </section>
    <article>
        <p> Mon Profil </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quos ad corrupti ut possimus autem facere quisquam numquam sunt itaque nulla, amet quia, minima quod, assumenda cumque id veniam odit?</p>
    </article>
    </div>
    
  </div>
</template>

<script>
import Button from './Button'
export default {
  name: "EspaceClient",
  components: {Button},
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
}

.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

p {
    margin-left: 10px
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

</style>