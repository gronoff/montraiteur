<template>
  <header class="flex-container">
    <img
      src="../assets/logo_principal_traiteur.png"
      alt="logo_mon_traiteur"
      height="177"
      width="206"
    />

    <p>
      <a :href= traiteur.link >{{ traiteur.name }}</a>
    </p>
    <p><a :href= connect.link >{{ connect.name }}</a></p>
  </header>
</template>

<style>
.flex-container {
  display: flex;
  flex-direction: row;
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