<template>
  <header class="flex-container">
    
    <a id="lienImg" href="/">
      <img
        src="../assets/img/logonoir.png"
        alt="logo_mon_traiteur"
      />
    </a>

    <div class="liens">
      <a href="mailto:" class="lienTxt">{{traiteur.name}}</a>
      <span>|</span>
      <router-link to='inscription' class="lienTxt"
       v-if="$route.name=='home'">
        <p>Connexion</p>
      </router-link>
      <router-link to='inscription' class="lienTxt"
       v-else-if="$route.name=='inscription'">
        <p>Connexion</p>
      </router-link>
      <router-link to='EspaceClient' class="lienTxt"
       v-else>
        <p>Mon compte</p>
      </router-link>
    </div>

  </header>
</template>

<style scoped>
header.flex-container {
  position: relative;
  height: 90px;
  background-color: var(--grisClair);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;   
}

#lienImg {
  height: 90px;
}

a {
  color: var(--grisFonce);
}

a:hover {
  color: burlywood;
}

p {
  margin: 0;
}

img {
  height: 90px;
}

.liens {
  display: flex;
  flex-wrap: wrap;
  margin-top: 13px;
  margin-right: 20px;
}

span {
  padding-left: 2em;
  padding-right: 2em;
  color: var(--grisFonce);
}

@media (max-width: 420px) {
  header.flex-container {
    height: 200px;
    justify-content: center;
  }
  .liens {
    flex-direction: column;
    justify-content: center;
  }
  .lienTxt {
    text-align: center;
    font-size: 14px;
    padding-top: 13px;
  }
  span {
    display: none;
  }
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
      }
    };
  },
  props: {
    txt: String
  }
};
</script>