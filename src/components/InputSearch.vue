<template>
  <div
    :style="{'color': superStyle.color, 
  'backgroundColor':superStyle.backgroundColor,
  'fontSize': superStyle.fontSize,
  'borderRadius':superStyle.borderRadius

  }"
  >
    <form>
      <label :for="id">{{ label }}</label>
      <br />
      <div class="recherche">
        <input :type="type" :name="name" :placeholder="placeholder" />
        <router-link to="home">
          <img src="../assets/img/loupe.png" alt="loupe" />
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "InputSearch",

  data: function() {
    return {
      superStyle: {
        color: "#729EA1",
        backgroundColor: "#FFFFFF",
        fontSize: "24px",
        borderRadius: "15px"
      }
    };
  },

  props: {
    label: String,
    type: String,
    id: String,
    placeholder: String,
    name: String
  }
};
</script>

<style scoped >
.recherche{
  display: flex
  
}


img {
  height: 84px;
}

input {
  background: var(--grisClair);
  border-radius: 5px;
  border-color: rgb(214, 214, 214);
  border: 0 none;
  width: 100%;
  padding: 30px 30px;
  margin: 8px;
  box-sizing: border-box;
  box-shadow: 4px 4px 4px rgba(226, 221, 221, 0.25);
}

::placeholder {
  color: #d2e0bf;

  height: 80px;
  font-size: 40px;
}
</style>