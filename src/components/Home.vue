<template>
  <div>
    <Header />
    <section class="principale">
      <form>
        <input type="text" name="" id="">
      </form>
    </section>
    <Footer />
  </div>
</template>

<script>

import Header from './Header.vue';
import Footer from './Footer.vue'

export default {
  name: 'home',
  components : {Header,Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.principale{
  display: flex;
  justify-content: center;
  margin: 50px;

  padding:5px 15px;
    background: #D2E0BF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    border:0 none;
    cursor:pointer;
    font-size: 14px;
    color: #7A7D7D;
}
</style>
