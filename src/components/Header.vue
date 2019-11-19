<template>
  <header class="flex-container">
    
    <a target="_blank" href="/">
    <img
      src="../assets/img/logo_principal_traiteur.png"
      alt="logo_mon_traiteur"
    />
    </a>

    <div class="liens">
    <a :href="traiteur.link">{{ traiteur.name }}</a>
    <span>|</span>
    <a :href="connect.link">{{ connect.name }}</a>
    </div>
  </header>
</template>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;   
}
a{
  color: var(--grisFonce);
}

a:hover{
  color: burlywood;
}

img{ 
  height: 177px;

}


.liens{
  margin-top: 77px;
  margin-right: 20px;
 
}

header{
   background-color: var(--grisClair);
}

span{
  padding-left: 2em;
  padding-right: 2em;
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
        name: "Connection",
        link: "/#/inscription"
      }
    };
  }
};
</script>