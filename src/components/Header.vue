<template>
  <header class="flex-container">
    <img
      src="../assets/img/logo_principal_traiteur.png"
      alt="logo_mon_traiteur"
      height="177"
      width="206"
    />

    <div>
    <a :href="traiteur.link">{{ traiteur.name }}</a>

    <a :href="connect.link">{{ connect.name }}</a>
    </div>
  </header>
</template>

<style>
.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;   
}
a{
  color: var(--grisFonce);
}

</style>

<script>
export default {
  name: "Header",
  data: function() {
    return {
      traiteur: {
        name: "Vous êtes traiteur, rejoignez-nous",
        link: "href"
      },

      connect: {
        name: "connection",
        link: "href"
      }
    };
  }
};
</script>