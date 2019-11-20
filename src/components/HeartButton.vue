<template>
  <button v-on:click="addToFavorite()"><img :src="lien_src" alt="bouton favoris"></button>
</template>

<script>
export default {
  name: 'ButtonHeart',
  data: function(){
    return {
      image_active: require("@/assets/img/icon_heart_active.png"),
      image_unactive: require("@/assets/img/icon_heart_unactive.png"),
      lien_src: require("@/assets/img/icon_heart_unactive.png")
    }
  },
  methods:{
    addToFavorite: function(){
      //lorsque l'utilisateur clique, l'image change
      if (this.lien_src == this.image_unactive){
        this.lien_src = this.image_active;
      }
      else if(this.lien_src ==  this.image_active){
        this.lien_src = this.image_unactive;
      }
      //TODO: implémenter pour permettre un ajout aux favoris de l'utilisateur en fonction des conditions
    }
  }
}
</script>


<style scoped>

button{
  background-color: transparent;
  border: 0 none;
  cursor: pointer;
}

img{
  width: 2em;
  height: 2em;
}

</style>