<template>
  <div class="card">
    <img src="https://img.freepik.com/free-photo/crop-couple-cooking-salad-together_23-2148114200.jpg?size=626&ext=jpg" alt={}>
    <div>
     <h4>Titre</h4>
     <p>description du traiteur provenant du fichier json </p> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'card'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card{
  height: 200px;
  background-color: #F1F1F1;
  border-radius: 10px;
  padding: 2%;
  vertical-align: center;
}

.card div{
  width: 75%;
  height: 100%;
  background-color: #FFFBFE;
  float: right;
  border-radius: 10px;
}

.card p, h4{
  margin-left: 2%;
}

.card img{
  float: left;
  width: 15%;
  border-radius: 10px;
}

</style>
